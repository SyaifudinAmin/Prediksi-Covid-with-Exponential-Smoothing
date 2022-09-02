<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000/");
header("Access-Control-Allow-Headers: Access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

include('db_koneksi.php');

$sq = "SELECT MAX(id) as maxid FROM data_kasus";
$max = mysqli_query($con,$sq);
$masnomor= mysqli_fetch_array($max);
$max_id = $masnomor['maxid'];
$konvertid = (int)$max_id;
$new_id = $konvertid +1;
$_POST = json_decode(file_get_contents("php://input"),true);


$tgl=@$_POST['tgl'] ? $_POST['tgl'] : "";
$jml_kasus=@$_POST['jml_kasus'] ? $_POST['jml_kasus'] : "";

$querycektgl = "SELECT tgl FROM data_kasus WHERE tgl = '$tgl'";
$ccektgl = mysqli_query($con,$querycektgl);
$cektgl = mysqli_num_rows($ccektgl);


if($cektgl == 0) {
    $sql = "INSERT INTO `data_kasus`(
        `id`,
            `tgl`,
              `jml_kasus`
              )
    VALUES ('{$new_id}',
    '{$tgl}',
        '{$jml_kasus}'
     )";
     //  var_dump($sql);
     $result = mysqli_query($con,$sql);
        // var_dump($result);
    if($result){ 
        $response=array(
            'status'=>'valid'
        );
        echo json_encode($response);
    }
    else{
        $response=array(
            'status'=>'invalid'
        );
        echo json_encode($response);

    }
}
?>