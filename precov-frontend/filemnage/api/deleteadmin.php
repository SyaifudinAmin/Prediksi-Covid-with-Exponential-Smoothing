<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000/");
header("Access-Control-Allow-Headers: Access");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");



// $json = file_get_contents('php://input');
// $data = json_decode($json);
// echo $data;
// var_dump($data);
// $data = json_decode(file_get_contents("php://input"), true);
        // var_dump($data);
// print_r($_POST);
// echo"AAAA";
// $data = json_decode(file_get_contents("php://input"),true);
$data = json_decode(file_get_contents("php://input"));
// print_r($data);
// echo json_encode($data);
include('db_koneksi.php');


$sql = "delete from admin where id = '".$data -> id."'";
$result = mysqli_query($con,$sql);
?>