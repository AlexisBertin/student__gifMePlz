<?php
session_start();
require('connexion.inc.php');


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


// Je ne sais plus faire de jointures. :-(
$sql1 = "SELECT id FROM users WHERE randNumber = '".$_SESSION['token']."'";
try {
	$req = $connexion->prepare($sql1);
	$req->execute();
	$idCurrentUser = $req->fetch(PDO::FETCH_ASSOC);

	$sql2 = "SELECT neutral, hate, joy, disgust, sadness, fear, surprise, pain FROM photos WHERE idUser = '".$idCurrentUser['id']."'";

	try {
		$req = $connexion->prepare($sql2);
		$req->execute();
		$resultsReq = $req->fetchAll(PDO::FETCH_ASSOC);

		$_SESSION['summary'] = array();

		echo '<ul>';
		foreach($resultsReq as $v1){
			/*echo '<div class="pic" style="background: url(uploads/thumbs/'.$v1[$photoFace[$q]].');"><span></span></div>';*/
			for($x=1;$x<9;$x++){
				echo '<li><div class="delPhoto" onclick="delPhoto('.$x.')"><span class="delete">Delete this shoot</span></div><img src="uploads/original/'.$v1[$photoFace[$x]].'"/><span class="photoType">'.ucfirst($photoFace[$x]).'</span></li>';
				$_SESSION['summary'][$x] = $v1[$photoFace[$x]];
			}

		}
		echo '</ul>';

		



	} catch(PDOException $e) {
		echo 'erreur 2: '.$e->getMessage();
	}
	

} catch(PDOException $e) {
	echo 'erreur: '.$e->getMessage();
}



?>

