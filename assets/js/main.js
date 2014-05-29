
   $(window).load(function() {
      $('header').css({
         'top':'0px',
         'opacity':'1'
      });
      $('footer').animate({'bottom':'0px'});
      $(".load").delay(500).fadeOut(500);
      $('#content').fadeIn(500);
      
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
          
         
         var _gaq = _gaq || [];
         _gaq.push(['_setAccount', 'UA-34332539-1']);
         _gaq.push(['_trackPageview']);

         (function() {
           var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
           ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
           var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
         })();
         


   });
