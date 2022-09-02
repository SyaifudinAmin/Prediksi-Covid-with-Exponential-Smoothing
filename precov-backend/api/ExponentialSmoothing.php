<?php


require_once "connection.php";


class ExponentialSmoothing {
    private function getDataset($start="", $end="", $type = "") {
        global $mysqli;
        $select = "tgl, jml_kasus";

        if($type === "weekly") {
            $select  = "
                STR_TO_DATE(CONCAT(YEAR(tgl), ' ', WEEKOFYEAR(tgl), ' Sunday'), '%X %V %W') as tgl,
                sum(jml_kasus) as jml_kasus
            ";
        } else if($type === "monthly") {
            $select = "
                CONCAT(YEAR(tgl), '-', MONTH(tgl)) AS tgl,
                sum(jml_kasus) as jml_kasus 
            ";
        }

        $query = "SELECT {$select} FROM data_kasus";
        
        if($start && $end) {
            $query = "{$query} WHERE tgl >= '{$start}' AND tgl <= '{$end}'";
        }
        
        if($type === "weekly") {
            $query = "
                {$query} GROUP BY YEAR(tgl), 
                WEEKOFYEAR(tgl), 
                STR_TO_DATE(CONCAT(YEAR(tgl), ' ', WEEKOFYEAR(tgl), ' Sunday'), '%X %V %W')
            ";
        }else if($type === "monthly") {
            $query = "
                {$query} GROUP BY YEAR(tgl), MONTH(tgl), CONCAT(YEAR(tgl), '-', MONTH(tgl))
            ";
        }

        $query = "{$query} ORDER BY tgl ASC";

        $data = array();
        $result = $mysqli->query($query);
        while($row = mysqli_fetch_object($result)) {
            $data[] =[
                "date" => $row->tgl,
                "case" => $row->jml_kasus
            ];
        }

        return $data;
    }

    public function predict($dataset, $type = "", $konst= "") {
        if(!sizeof($dataset)) {
            return [];
        }

        $cases = [];
        for($i = 0; $i < sizeof($dataset); $i++) {
            $cases[] = $dataset[$i]["case"];
        }

        $sumCases = array_sum($cases);
        $countCases = sizeof($cases);
        // $alpha = round(2 / ($countCases + 1), 1);
        // $f1 = round($sumCases / $countCases, 2);
        // $alpha = 2 / ($countCases + 1);
        $alpha = 0.9;
        if($konst != "") {
            $alpha = floatval($konst);
        }
        $f1 = $sumCases / $countCases;


        $result = [];
        $rsfe = $cases[0] - $f1;
        $cum_abs_error = abs($cases[0] - $f1);
        $result[] = [
            "date" => $dataset[0]["date"],
            "actual" => $cases[0],
            "f" => "{$sumCases} / {$countCases}",
            "forecast" => $f1,
            "error" => $cases[0] - $f1,
            "rsfe" => $rsfe,
            "abs_error" => abs($cases[0] - $f1),
            "cum_abs_error" => $cum_abs_error,
            "mad" => $cum_abs_error,
            "tracking_error" => $rsfe / $cum_abs_error,
            "mape" => abs(($cases[0] - $f1)/$cases[0]) * 100
        ];

        $new_f = $f1;
        for($i = 0; $i < sizeof($cases); $i++) {
            $old_f = $new_f ;
            // $new_f = round($old_f + ($alpha * ($cases[$i] - $old_f)), 2);
            $new_f = $old_f + ($alpha * ($cases[$i] - $old_f));
        
            $actual = "";
            $error = "";
            $abs_error = "";
            $mad = "";
            $date = "";
            if( isset($cases[$i + 1]) ) {
                $actual = $cases[$i + 1];
                $error = $actual - $new_f;
                $rsfe += $error;
                $date = $dataset[$i + 1]["date"];
            }else {
                $rsfe = 0;
                $cum_abs_error = "";
                $addDay = "1 days";
                if($type === "weekly") {
                    $addDay = "7 days";
                }else if($type === "monthly") {
                    $addDay = "1 months";
                }

                $date = date('Y-m-d', strtotime($dataset[sizeof($dataset) - 1]["date"]. " + {$addDay}"));

                if($type === "monthly") {
                    $date = substr($date, 0, 7);
                }
            }
            
            if($error) {
                $abs_error = abs($error);
                $cum_abs_error += $abs_error;
            }
            
            if($cum_abs_error != "") {
                // $mad = round($cum_abs_error / ($i + 2), 2);
                $mad = $cum_abs_error / ($i + 2);
            }
            
            $tracking_error = 0;
            if($mad !== "" && $mad !== 0 && $rsfe !== "" && $rsfe !== 0 ){
              $tracking_error =  $rsfe / $mad;   
            }

            $mape = 0;
            if($actual !== "" && $actual !== 0 ){
                $mape = abs((intval($actual) - $new_f)/intval($actual)) * 100;
            }

            $result[] = [
                "date" => $date,
                "actual" => $actual,
                "f" => "{$old_f} + {$alpha} ({$cases[$i]} - {$old_f})" ,
                "forecast" => $new_f,
                "error" => $error,
                "rsfe" => $rsfe,
                "abs_error" => $abs_error,
                "cum_abs_error" => $cum_abs_error,
                "mad" => $mad,
                "tracking_error" => $tracking_error,
                "mape" => $mape

  
            ];
        }


        return $result;

    }

    public function predictDaily($start="", $end="", $konst="") {
        $dataset = $this->getDataset($start, $end);
        $result = $this->predict($dataset, "daily", $konst);

        return $result;
    }

    public function predictWeekly($start="", $end="", $konst="") {
        $dataset = $this->getDataset($start, $end, "weekly");
        $result = $this->predict($dataset, "weekly", $konst);

        return $result;
    }

    public function predictMonthly($start="", $end="", $konst="") {
        $dataset = $this->getDataset($start, $end, "monthly");
        $result = $this->predict($dataset, "monthly", $konst);

        return $result;
    }

}
?>