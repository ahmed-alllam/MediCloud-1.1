<?php 

if ($_SERVER['HTTP_HOST'] != 'localhost' and $_SERVER['HTTP_X_FORWARDED_PROTO'] != "https") {
    $location = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('HTTP/1.1 301 Moved Permanently');
    header('Location: ' . $location);
    exit;
}


include_once("home.html"); ?>
