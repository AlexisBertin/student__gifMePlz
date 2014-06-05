$(document).ready(function(){

   var paraCount = 3;
   var paraNumber = $('.shoot .intro p').size();




   function showIntro(){
      var $el = $(".shoot .intro p:nth-child("+paraCount+")"), text = $el.html(),
         words = text.split(" "), html = "";

      /*for (var i = 0; i < words.length; i++) {
         html += "<span>" + words[i] + " </span>";
      }*/


      // Try smthg like that bitch
      for (var i = 0; i < words.length; i++) {
         if(words[i] == '<span></span>'){
            html += '<span class="stop"></span>';
         } else {
            html += "<span>" + words[i] + " </span>";   
         }
      }


      $el.html(html);

      $('.shoot .intro p:nth-child('+paraCount+')').css({
         'display':'block',
         'opacity':'1'
      }).addClass("fadeIn");

      var numberSpan = $el.children().size();
      console.log(numberSpan);

      
      var x=1;      

         for(var x=1; x<numberSpan; x++){
            (function(){

               setTimeout(function(){
               if($(".shoot .intro p span:nth-child("+x+")").hasClass('stop')){
                  y = x + 1;
                  $(".shoot .intro p span:nth-child("+y+")").delay(x*500).queue(function(next){
                     $(".shoot .intro p span:nth-child("+y+")").css({
                        '-webkit-transition': 'color .4s ease-in-out',
                        '-moz-transition': 'color .4s ease-in-out',
                        '-ms-transition': 'color .4s ease-in-out',
                        '-o-transition': 'color .4s ease-in-out',
                        'transition': 'color .4s ease-in-out',
                        'color':'rgba(255,255,255,.8)'
                     });
                
                  });
               } else {
                  $(".shoot .intro p span:nth-child("+x+")").delay(x*200).queue(function(next){
                     $(".shoot .intro p span:nth-child("+x+")").css({
                        '-webkit-transition': 'color .4s ease-in-out',
                        '-moz-transition': 'color .4s ease-in-out',
                        '-ms-transition': 'color .4s ease-in-out',
                        '-o-transition': 'color .4s ease-in-out',
                        'transition': 'color .4s ease-in-out',
                        'color':'rgba(255,255,255,.8)'
                     });
                
                  });
               }
               },500);
            })(x);
            
         }


       /*  for (var i=0;i<=1000;i++)
         {
            (function(ind) {
                setTimeout(function(){setContentOpacity(ind);}, (ind*3));

            })(i);
         }
*/

         /*lightWords(paraCount);*/
         
         /*$('.shoot .intro p:nth-child('+paraCount+')').css({'opacity':'0'}).addClass('fadeOut').removeClass("fadeIn");*/
         
        /* if(paraCount <= paraNumber){
            paraCount++;
            
         } else {
            paraCount = 1;
           
         }*/
  /*    setTimeout(function(){
         lightWords(paraCount);
      },1000);
        */ 

   }

   showIntro();

});