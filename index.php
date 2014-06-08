<?php
session_start();
require('connexion.inc.php');
?>
<!doctype html>
<html class="no-js" lang="fr">
<head>
	<title>GifMePlz | Examen PHP</title>

    <meta charset="utf-8" />
    <meta name="title" content="GifMePlz | Examen PHP" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="GifMePlz / gifs with photo shots" />
    <meta name="author" content="Alexis Bertin" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="revised" content="Alexis Bertin, Mai 2014" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <!-- <link rel="shortcut icon" type="image/x-icon" href="../assets/img/favicon.ico" />
    <link rel="icon" type="image/png" href="../assets/img/favicon.png" /> -->

    <!-- <link rel="stylesheet" href="assets/css/foundation.css" /> -->
    <link rel="stylesheet" href="assets/css/styles.css" /" "
    <link rel="stylesheet" href="assets/css/reset.css" />
    <link rel="stylesheet" href="assets/css/animation.css" />


    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
    <script src="assets/js/main.js"></script>
     <script type="text/javascript" src="assets/js/vendor/modernizr.js"></script>
     <script type="text/javascript" src="//use.typekit.net/gib4jtx.js"></script>
     <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
     <script type="text/javascript">


        function showOneFace(str) {
           if (str=="") {
              $('#photos').html('');
              return;
           } 
           if (window.XMLHttpRequest) {
              // IE7+, Firefox, Chrome, Opera, Safari
              xmlhttp=new XMLHttpRequest();
           } else { // for IE6, IE5
              xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
           }
           xmlhttp.onreadystatechange=function() {
              if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                 $('#photos').html(xmlhttp.responseText);
              }
           }
           xmlhttp.open("GET","sortPhoto.inc.php?q="+str,true);
           xmlhttp.send();

        }


        $(window).load(function() {
        
            showOneFace('0');

            $('#photos a').click(function(e){
                return false;
            });

           /* --- Show Cam --- */

              var openCam = function(){
                 $('#happyFace').die("click",openCam);
                 $('.close').live("click",closeCam);

                 $('#happyFace img').fadeOut(200, function(){
                    $('#happyFace').css({
                       'height':'430px',
                       'width':'540px',
                       'cursor':'default'
                    });
                    $('#content').css({
                       'height':'540px'
                    })
                    $('#camera').delay(300).fadeIn(200);    
                 });
              };


              var closeCam = function(){
                 $('#happyFace').live("click",openCam);
                 $('.close').die("click",closeCam);

                 $('#camera').fadeOut(200).css({'display':'none'});
                    $('#happyFace').css({
                       'height':'47px',
                       'width':'47px',
                       'cursor':'pointer'
                    });
                    $('#content').css({
                       'height':'180px'
                    });
                    $('#happyFace img').fadeIn(200);
              };

              $('#happyFace').live("click",openCam);




        });




           

     </script>

</head>
<body class="home">
    <header>
        <h1><a href="index.html">GifMePlz</a></h1>
        <ul>
            <li><a href="ux.called.html" title="start the experience">Start</a></li>
            <li><a href="galery.called.html" title="all the photos">Galery</a></li>
        </ul>
    </header>

        <video autoplay loop muted poster="assets/ocean/ocean.png" id="bgvid">
            <source src="assets/ocean/ocean.webm" type="video/webm">
            <source src="assets/ocean/ocean.mp4" type="video/mp4">
        </video>



	<section class="home row">


			<h1>Gif me please</h1>
			<!-- <h2>Soon</h2>
			<ul class="homeMenu">
				<li><a href="" title="Page des travaux sur lesquels j'ai travaillé">Projets</a></li>
				<li><a href="" title="Page me présentant">À Propos</a></li>
				<li><a href="" title="Page pour me contacter">Contact</a></li>
			</ul> -->

            



	</section>


    

    
    <script src="assets/webcam/webcam.js"></script>
    <script src="assets/js/shoot.js"></script>
	
</body>
</html>