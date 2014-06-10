<?php
require('connexion.inc.php');

$q = intval($_GET['q']);
$photoFace = array(
	0 => "gif",
	1 => "neutral",
	2 => "hate",
	3 => "joy",
	4 => "disgust",
	5 => "sadness",
	6 => "fear",
	7 => "surprise",
	8 => "pain"
);


$sql = "SELECT idUser, ".$photoFace[$q]." FROM photos";
try {
	$req = $connexion->prepare($sql);
	$req->execute();
	$resultsReq = $req->fetchAll(PDO::FETCH_ASSOC);


	foreach($resultsReq as $v1){
		echo '<div class="pic" style="background: url(uploads/thumbs/'.$v1[$photoFace[$q]].');"><span></span></div>';
	}


} catch(PDOException $e) {
	echo 'erreur: '.$e->getMessage();
}



?>

