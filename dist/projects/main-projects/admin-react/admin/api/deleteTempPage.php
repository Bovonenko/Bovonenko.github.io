<?php
session_start();
if ($_SESSION['auth'] != true) {
    header('HTTP/1.0 403 Forbidden');
    die;
}

$file = '../../asdfhiuyhxcv12432_asdf.html';

if (file_exists($file)) {
    unlink($file);              // delete file
} else {
    header("HTTP/1.0 400 Bad Reaquest");
}