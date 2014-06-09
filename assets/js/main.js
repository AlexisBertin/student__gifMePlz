$(document).ready(function(){

   var paraCount = 0;
   
   $('.galeryBody header ul li:nth-child(2) a, .uxBody header ul li:nth-child(1) a').css('color','rgba(255,255,255,1)');



  
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
               if(paraCount <= paraNumber){
                  setTimeout(function(){ showIntro(); },500);
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
   
            fadeOut(); 

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
                     light();
                     return; 
                  } else {
                     fadeOut();
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
                     light();
                     return; 
                  } else {
                     
                     fadeOut();
                  }
               });
            }
            
         }
      } 
               

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
         light();   
      });

   }

   showIntro();
   var audioIntro = $("#audioIntro")[0];
   audioIntro.play();











});