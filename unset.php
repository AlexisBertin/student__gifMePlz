<?php
session_start();
echo 'Token: '.$_SESSION['token'].'<br />';
var_dump($_SESSION['shootingSession']);

?>