<?php
header('Content-type: application/json');

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
		echo '<div class="pic"><span><img src="uploads/thumbs/'.$v1[$photoFace[$q]].'.jpg" /></span></div>';
	}


} catch(PDOException $e) {
	echo 'erreur: '.$e->getMessage();
}




/*$perPage = 50;
*//*$g = glob('uploads/thumbs/*.jpg');

if(!$g){
	$g = array();
}
*/
/*
$names = array();
$modified = array();


for($i=0,$z=count($g);$i<$z;$i++){
	$path = explode('/',$g[$i]);
	$names[$i] = array_pop($path);
	
	$modified[$i] = filemtime($g[$i]);
}


array_multisort($modified,SORT_DESC,$names);

$start = 0;



if(isset($_GET['start']) && strlen($_GET['start'])>1){
	$start = array_search($_GET['start'],$names);
	
	if($start === false){
		// Such a picture was not found
		$start = 0;
	}
}



$nextStart = '';

if($names[$start+$perPage]){
	$nextStart = $names[$start+$perPage];
}

$names = array_slice($names,$start,$perPage);

echo json_encode(array(
	'files' => $names,
	'nextStart'	=> $nextStart
));*/

?>

