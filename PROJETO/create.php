<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


$data = json_decode(file_get_contents('php://input'), true);


$usr = $data['nome'];
$pss = $data['senha'];

if ($usr == "admin" && $pss == "admin") {
    echo json_encode(true);
}





?>