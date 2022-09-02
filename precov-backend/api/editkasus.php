<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000/");
header("Access-Control-Allow-Headers: Access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

include('db_koneksi.php');

$sql = "select * from data_kasus where id = '".$_GET['id']."'";
$result = mysqli_query($con,$sql);

$outp = "";
while ($rs = mysqli_fetch_array($result)) {
    if($outp != "") {$outp .= ",";}
    $outp .= '{"id":"' .$rs["id"] . '",';
    $outp .= '"tgl":"' .$rs["tgl"] . '",';
    $outp .= '"jml_kasus":"' .$rs["jml_kasus"] . '"}';
   
}
echo $outp;





?>