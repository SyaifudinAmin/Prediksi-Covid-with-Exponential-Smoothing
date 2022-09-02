<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
require(__DIR__ . "/core.php");
require(__DIR__ . "/rest.php");
if(!isset($_GET['action'])){
    apiError("No Method specified");
}

if(!in_array($_GET['action'], $allowed_methods)){
    apiError("That Method is not allow");
}

echo camelcase("List_products");

// call_user_func()


?>