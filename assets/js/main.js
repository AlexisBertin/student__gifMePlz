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
            html += ' <span class="chain">' + words[i] + '</span> ';   
         }
      }


      $el.html(html);

      $('.shoot .intro p:nth-child('+paraCount+')').css({
         'display':'block',
         'opacity':'1'
      }).addClass("fadeIn");

      /*$el.children().each(function(i){*/

      var spanNumber = $el.children().size();
      var z = 1;

      function light(){
         if($(".shoot .intro p span:nth-child("+z+")").hasClass('stop')){
            $(".shoot .intro p span:nth-child("+z+")").delay(1000).queue(function(next){
               $(".shoot .intro p span:nth-child("+z+")").css({
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
               }
               
            });
         } else if($(".shoot .intro p span:nth-child("+z+")").hasClass('chain')){
            $(".shoot .intro p span:nth-child("+z+")").delay(200).queue(function(next){
               $(".shoot .intro p span:nth-child("+z+")").css({
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
               }
            });
         }
      }
      light();


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