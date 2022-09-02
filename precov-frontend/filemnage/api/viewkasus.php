<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000/");
header("Access-Control-Allow-Headers: Access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

include('db_koneksi.php');

$result = mysqli_query($con,"SELECT * FROM data_kasus ORDER BY tgl DESC");
$nomor = 1;

$outp = "";
while($rs = mysqli_fetch_array($result)) {
    if($outp != "") {$outp .= ",";}
    $outp .= '{"nomor":"' .$nomor. '",';
    $outp .= '"id":"' .$rs["id"] . '",';
    $outp .= '"tgl":"' .$rs["tgl"] . '",';
    $outp .= '"jml_kasus":"' .$rs["jml_kasus"] . '",';
    $outp .= '"create_at":"' .$rs["create_at"] . '",';
    $outp .= '"create_by":"' .$rs["create_by"] . '",';
    $outp .= '"update_at":"' .$rs["update_at"] . '",';
    $outp .= '"update_by":"' .$rs["update_by"] . '"}';
	$nomor++;
}
$outp = '{"records":['.$outp.']}';
//$con->close();

echo($outp);


?>