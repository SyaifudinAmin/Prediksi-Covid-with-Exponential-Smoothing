<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000/");
header("Access-Control-Allow-Headers: Access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");


include('db_koneksi.php');
// var_dump($con);
// require 'db_koneksi.php';

$sq = "SELECT MAX(id) as maxid FROM admin";
$max = mysqli_query($con,$sq);
$masnomor= mysqli_fetch_array($max);
$max_id = $masnomor['maxid'];
$konvertid = (int)$max_id;
$new_id = $konvertid +1;
$_POST = json_decode(file_get_contents("php://input"),true);

//$id=@$_POST['id'] ? $_POST['id'] : "";
$nama=@$_POST['nama'] ? $_POST['nama'] : "";
$username=@$_POST['username'] ? $_POST['username'] : "";
$password=@$_POST['password'] ? $_POST['password'] : "";;
$email=@$_POST['email'] ? $_POST['email'] : "";;
$region=@$_POST['region'] ? $_POST['region'] : "";;
$no_hp=@$_POST['no_hp'] ? $_POST['no_hp'] : "";;


// echo json_encode($id);
if($username) {
    $sql = "INSERT INTO `admin`(
        `id`,
         `nama`,
          `username`,
           `password`,
            `email`,
             `region`,
              `no_hp`
              )
     VALUES ('{$new_id}',
        '{$nama}',
        '{$username}',
        '{$password}',
        '{$email}',
        '{$region}',
        '{$no_hp}'
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