<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000/");
header("Access-Control-Allow-Headers: Access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");

include('db_koneksi.php');

$result = mysqli_query($con,"SELECT * FROM admin");
$nomor = 1;

$outp = "";
while($rs = mysqli_fetch_array($result)) {
    if($outp != "") {$outp .= ",";}
    $outp .= '{"nomor":"' .$nomor. '",';
    $outp .= '"id":"' .$rs["id"] . '",';
    $outp .= '"nama":"' .$rs["nama"] . '",';
    $outp .= '"username":"' .$rs["username"] . '",';
    $outp .= '"password":"' .$rs["password"] . '",';
    $outp .= '"email":"' .$rs["email"] . '",';
    $outp .= '"region":"' .$rs["region"] . '",';
    $outp .= '"no_hp":"' .$rs["no_hp"] . '"}';
	$nomor++;
}
$outp = '{"records":['.$outp.']}';
//$con->close();

echo($outp);


?>