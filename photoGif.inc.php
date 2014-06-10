<?php
session_start();
require('connexion.inc.php');

include "assets/gifMaker/GIFEncoder.class.php";

	$noExtension = array();
	
	for($x=1;$x<9;$x++){
		$imgname = "uploads/original/".$_SESSION['summary'][$x];
		$im = @imagecreatefromjpeg($imgname);
		$noExtension[$x] = str_replace('.jpg', '', $_SESSION['summary'][$x]);
		imagegif($im, "uploads/gifs/".$noExtension[$x].".gif");
		$frames[] = "uploads/gifs/".$noExtension[$x].".gif";
		$time[] = 15; 
	}
	
		$gif = new GIFEncoder	(
			$frames,
			$time,
			0,
			2,
			0, 0, 0,
			"url"
		);

	
	Header ( 'Content-type:image/gif' );
	FWrite ( FOpen ( "uploads/gifs/gif_".$noExtension[1].".gif", "wb" ), $gif->GetAnimation() );

	for($x=1;$x<9;$x++){
		$noExtension[$x] = str_replace('.jpg', '', $_SESSION['summary'][$x]);
		@unlink("uploads/gifs/".$noExtension[$x].".gif");
	}


	$sql = "UPDATE photos SET gif = 'gif_".$noExtension[1].".gif' WHERE neutral = '".$_SESSION['summary'][1]."'";
	try {
		$req = $connexion->prepare($sql);
		$req->execute();
	} catch(PDOException $e){
		echo 'erreur '.$e->getMessage();
	}
		

	echo '<img src="uploads/gifs/gif_'.$noExtension[1].'.gif" />';


	session_destroy();
	unset($_SESSION);



?>