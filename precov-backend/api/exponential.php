<?php
require_once "ExponentialSmoothing.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:3000/");
header("Access-Control-Allow-Headers: Access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");
header('Content-Type: application/json');

$_POST = json_decode(file_get_contents('php://input'), true);
$start = @$_POST['start'] ? $_POST['start'] : "";
$end = @$_POST['end'] ? $_POST['end'] : "";
$type = @$_POST['type'] ? $_POST['type'] : "";
$konstanta = @$_POST['konst'] ? $_POST['konst'] : 0.9;
$exponentialSmoothing = new ExponentialSmoothing();

if($type === "weekly") {
    echo json_encode($exponentialSmoothing->predictWeekly($start, $end, $konstanta));
}else if($type === "monthly") {
    echo json_encode($exponentialSmoothing->predictMonthly($start, $end, $konstanta));
}else {
    echo json_encode($exponentialSmoothing->predictDaily($start, $end, $konstanta));
}
?>