<?php
session_start();
require('connexion.inc.php');


// Reçoit le shoot JPEG du webcam.swf en tant que POST.
if(strtolower($_SERVER['REQUEST_METHOD']) != 'post'){
	exit;
}
$folder = 'uploads/';
/*$filename = md5($_SERVER['REMOTE_ADDR'].rand()).'.jpg';*/
$filename = date('Y-m-d--H-i-s').'__'.md5($_SERVER['REMOTE_ADDR'].rand()).'.jpg';


$original = $folder.$filename;

// The JPEG snapshot is sent as raw input:
$input = file_get_contents('php://input');


$result = file_put_contents($original, $input);
if (!$result) {
	echo '{
		"error"		: 1,
		"message"	: "Failed save the image. Make sure you chmod the uploads folder and its subfolders to 777."
	}';
	exit;
}

$info = getimagesize($original);
if($info['mime'] != 'image/jpeg'){
	unlink($original);
	exit;
}

// Moving the temporary file to the originals folder:
rename($original,'uploads/original/'.$filename);
$original = 'uploads/original/'.$filename;

// Using the GD library to resize 
// the image into a thumbnail:

$origImage	= imagecreatefromjpeg($original);
$newImage	= imagecreatetruecolor(169,120);
imagecopyresampled($newImage,$origImage,0,0,0,0,169,120,520,370); 

imagejpeg($newImage,'uploads/thumbs/'.$filename);








if(!isset($_SESSION['token'])){
	$_SESSION['token'] = md5($_SERVER['REMOTE_ADDR'].rand());
	$_SESSION['photoCount'] = 0;
	$_SESSION['shootingSession'][0] = $filename;
	$sql = "INSERT INTO users (ip, ipProxy, randNumber, created) VALUES ('".$_SERVER['REMOTE_ADDR']."', '".$_SERVER['HTTP_X_FORWARDED_FOR']."', '".$_SESSION['token']."','".date("Y-m-d")."')";
	try {
    	$connexion->exec($sql);
    } catch(PDOException $e) {
		echo 'erreur: '.$e->getMessage();
    }
	
} else {
	$_SESSION['photoCount']++;
	$_SESSION['shootingSession'][$_SESSION['photoCount']] = $filename;
	if($_SESSION['photoCount'] > 6){
		$sql = "SELECT id FROM users WHERE randNumber = '".$_SESSION['token']."'";
		try {
			$req = $connexion->prepare($sql);
		  	$req->execute();
		    $idCurrentUser = $req->fetch(PDO::FETCH_ASSOC);

		       
		   $sql2 = "INSERT INTO photos (idUser, neutral, hate, joy, disgust, sadness, fear, surprise, pain) VALUES ('".$idCurrentUser['id']."','".$_SESSION['shootingSession'][0]."','".$_SESSION['shootingSession'][1]."','".$_SESSION['shootingSession'][2]."','".$_SESSION['shootingSession'][3]."','".$_SESSION['shootingSession'][4]."','".$_SESSION['shootingSession'][5]."','".$_SESSION['shootingSession'][6]."','".$_SESSION['shootingSession'][7]."')";
		   	try {
		       	$connexion->exec($sql2);
		       	
		    } catch(PDOException $e) {
		   		echo 'erreur: '.$e->getMessage();
		    }
		    session_destroy();
		       unset($_SESSION);
		       
		} catch(PDOException $e) {
		   echo 'erreur: '.$e->getMessage();
		}

		
		
	} else if($_SESSION['photoCount'] > 8){
		session_destroy();
		       unset($_SESSION);
	}
}


echo '{"status":1,"message":"Success!","filename":"'.$filename.'"}';






?>















