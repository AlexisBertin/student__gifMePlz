<?php
session_destroy();
unset($_SESSION);
// Clear de session en cas de back ou de refresh au milieu de l'expérience.

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


$sql = "SELECT idUser, ".$photoFace[$q]." FROM photos ORDER BY idUser DESC";
try {
	$req = $connexion->prepare($sql);
	$req->execute();
	$resultsReq = $req->fetchAll(PDO::FETCH_ASSOC);


	foreach($resultsReq as $v1){
		if($v1[$photoFace[$q]] != ''){
			if($q == 0){
				echo '<img class="pic" src="uploads/gifs/'.$v1[$photoFace[$q]].'" /><span></span>';	
			} else {
				echo '<img class="pic" src="uploads/original/'.$v1[$photoFace[$q]].'" /><span></span>';		
			}	
		}
		
	}


} catch(PDOException $e) {
	echo 'erreur: '.$e->getMessage();
}



?>

