<?php
session_start();
if ($_SESSION['auth'] != true) {
    header('HTTP/1.0 403 Forbidden');
    die;
}

$_POST = json_decode( file_get_contents("php://input"), true);
$newFile = '../../asdfhiuyhxcv12432_asdf.html';

if ($_POST["html"]) {
    file_put_contents($newFile, $_POST["html"]); // put dom structure in our file
} else {
    header("HTTP/1.0 400 Bad Reaquest");
}