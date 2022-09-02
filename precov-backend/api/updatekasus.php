<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000/");
header("Access-Control-Allow-Headers: Access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

include('db_koneksi.php');

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;
$tgl = $data->tgl;
$jml_kasus = $data->jml_kasus;

$sql = "update data_kasus set tgl='$tgl',jml_kasus='$jml_kasus' where id = $id";

$result = mysqli_query($con,$sql);
if($result) {
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
?>
