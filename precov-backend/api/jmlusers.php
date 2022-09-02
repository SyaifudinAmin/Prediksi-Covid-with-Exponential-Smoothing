<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000/");
header("Access-Control-Allow-Headers: Access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

include('db_koneksi.php');

$result = mysqli_query($con,"SELECT COUNT(id) as jumlah_users FROM data_kasus");

$outp = 0;
while($rs = mysqli_fetch_array($result)) {
    if($outp != "") {$outp .= ",";}
    $outp = $rs["jumlah_users"];

}
echo json_encode(array("jumlah_users" => $outp));

?>