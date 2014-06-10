<?php
require('connexion.inc.php');

$sql = "UPDATE photos SET ".$_POST['typeImg']." = '' WHERE ".$_POST['typeImg']." = '".$_POST['linkImg']."'";
try {
	$req = $connexion->prepare($sql);
	$req->execute();
} catch(PDOException $e){
	echo 'erreur '.$e->getMessage();
}


?>

