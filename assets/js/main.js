$(document).ready(function(){

   var paraCount = 0;
   
   $('.galeryBody header ul li:nth-child(2) a, .uxBody header ul li:nth-child(1) a').css('color','rgba(255,255,255,1)');



   function showCamera(){
      $('.introSettings, .intro').fadeOut(500, function(){
         $(this).css({
            'opacity':'0',
            'display':'none'
         });
         $('#camera').hide().css({
               'opacity':'1',
               'display':'block'
         }).fadeIn();
      });
   }

  
   function showIntro(){
      paraCount++;
      function fadeOut(){
         $('.shoot .intro p:nth-child('+paraCount+')').delay(1000).queue(function(){
            $(this).css({
               'webkit-transition': 'opacity .2s ease-out',
               '-moz-transition': 'opacity .2s ease-out',
               '-ms-transition': 'opacity .2s ease-out',
               '-o-transition': 'opacity .2s ease-out',
               'transition': 'opacity .2s ease-out',
               'opacity':'0'
            }).dequeue().queue(function(){
               $(this).removeClass('fadeIn');
               var paraNumber = $('.shoot .intro p').size();
               if(paraCount < paraNumber){
                  setTimeout(function(){ 
                     if(goOn == true){ showIntro(); } else { showCamera(); }
                  },500);
               } else {
                  showCamera();
               }
            });
         }).dequeue();
      }

      function light(){
         if(spanNumber==1){
            $(".shoot .intro p:nth-child("+paraCount+") span").delay(200).queue(function(){
               $(this).css({
                  '-webkit-transition': 'color .4s ease-in-out',
                  '-moz-transition': 'color .4s ease-in-out',
                  '-ms-transition': 'color .4s ease-in-out',
                  '-o-transition': 'color .4s ease-in-out',
                  'transition': 'color .4s ease-in-out',
                  'color':'rgba(255,255,255,.8)'
               });
            });
   
            if(goOn == true){ fadeOut(); } else { showCamera(); }

         } else {
            if($(".shoot .intro p:nth-child("+paraCount+") span:nth-child("+z+")").hasClass('stop')){
               $(".shoot .intro p:nth-child("+paraCount+") span:nth-child("+z+")").delay(1000).queue(function(){
                  $(".shoot .intro p:nth-child("+paraCount+") span:nth-child("+z+")").css({
                     '-webkit-transition': 'color .4s ease-in-out',
                     '-moz-transition': 'color .4s ease-in-out',
                     '-ms-transition': 'color .4s ease-in-out',
                     '-o-transition': 'color .4s ease-in-out',
                     'transition': 'color .4s ease-in-out',
                     'color':'rgba(255,255,255,.8)'
                  });
                  z++;
                  if(z<=spanNumber){
                     if(goOn == true){ light(); } else { showCamera(); }
                     return; 
                  } else {
                     if(goOn == true){ fadeOut(); } else { showCamera(); }
                  }
               });
            } else if($(".shoot .intro p:nth-child("+paraCount+") span:nth-child("+z+")").hasClass('chain')){
               $(".shoot .intro p:nth-child("+paraCount+") span:nth-child("+z+")").delay(200).queue(function(){
                  $(".shoot .intro p:nth-child("+paraCount+") span:nth-child("+z+")").css({
                     '-webkit-transition': 'color .4s ease-in-out',
                     '-moz-transition': 'color .4s ease-in-out',
                     '-ms-transition': 'color .4s ease-in-out',
                     '-o-transition': 'color .4s ease-in-out',
                     'transition': 'color .4s ease-in-out',
                     'color':'rgba(255,255,255,.8)'
                  });
                  
                  z++;
                  if(z<=spanNumber){
                     if(goOn == true){ light(); } else { showCamera(); }
                     return; 
                  } else {
                     if(goOn == true){ fadeOut(); } else { showCamera(); }
                  }
               });
            }
            
         }
      } 
               


      // <span> sur tous les mots & exceptions
      var $el = $(".shoot .intro p:nth-child("+paraCount+")"), text = $el.html(),
         words = text.split(" "), html = "";

      for (var i = 0; i < words.length; i++) {
         if(words[i] == '<span></span>'){
            html += ' <span class="stop"></span> ';
         } else if(words[i] == '<br/>') {
            html += ' <br /> ';
         } else {
            html += " <span class='chain'>"+ words[i] +"</span> ";   
         }
      }
      $el.html(html);

      var spanNumber = $el.children().size();
      var z = 1;
      $('.shoot .intro p:nth-child('+paraCount+')').css({
         'display':'block',
         'opacity':'1'
      }).addClass("fadeIn").delay(200).queue(function(){
          if(goOn == true){ light(); } else { showCamera(); }
      });

   }




   // Intro -> Son on/off & skip
   if($('body').hasClass('uxBody')){
      var goOn = true;
      showIntro();
      
      var audioIntro = $("#audioIntro")[0];
      audioIntro.play();

      $('.soundIcon').addClass('soundIconOn');
      var soundIcon = true;

      $('.soundIcon').click(function(){
         if(soundIcon == true){
            audioIntro.volume = 0;
            $(this).removeClass('soundIconOn').addClass('soundIconOff');
            soundIcon = false;
         } else {
            audioIntro.volume = 1;
            $(this).removeClass('soundIconOff').addClass('soundIconOn');
            soundIcon = true;
         }   
      });
      $('.skipIntro').click(function(){
         audioIntro.volume = 0;
         goOn = false;
      });





      // Compiler les photos et convertir en gif.
      $('.gifThisButton').click(function(){
         $.ajax({
            url: 'photoGif.inc.php',
            cache: false,
            success: function(html){
               $('.gifContainer').html(html);
               $('.photoSummary').css({
                     'display':'none',
                     'opacity':'0'
               });
               $('.finalGif').hide().queue(function(){
                     $('.finalGif').css({
                        'display':'block',
                        'opacity':'1'
                     });
               }).delay(200).fadeIn(200);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
               alert(textStatus);
            }
         });
      });
   }
      





  





});