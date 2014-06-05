<?php
session_start();
include('connexion.php');

$sql = "SELECT id FROM users WHERE randNumber = '33fad4f243dcf8db99f7491a92f4c1a5'";
try {
   $req = $connexion->prepare($sql);
   $req->execute();
   
   $idCurrentUser = $req->fetch(PDO::FETCH_ASSOC);

	print_r($idCurrentUser['id']);

} catch(PDOException $e) {
   echo 'erreur: '.$e->getMessage();
}


?>