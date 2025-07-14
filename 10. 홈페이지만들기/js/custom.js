$(document).ready(function(){   

$("h1").on("click",function(){  
      $(this).stop().animate({"top":"-110px","left":"0px"},1800,"easeInOutBack"); 
         //   $(this).addClass("on"); 
      $("address").stop().animate({"right":"0px","bottom":"-90px"},1800,"easeInOutBack");  
      
      $(".top").stop().delay(2200).animate({"width":"100%"},900,function(){ 
         $(".right").stop().animate({"height":"100%"},900,function(){ 
            $(".bottom").stop().animate({"width":"100%"},900,function(){ 
               $(".left").stop().animate({"height":"100%"},900,function(){ 
                  $(".box1").addClass("on"); // 첫 번째 화면
                  $(".top, .left, .right, .bottom").stop().delay(2000).animate({"opacity":"0"}); // 2초 후에 테두리선 없어짐.
                  $("#gnb").stop().delay(1500).animate({"top":"-25px","opacity":"1"},1800,"easeOutBack"); /* #gnb { top:0px; opacity:0;} */
                  $(".util").stop().delay(2000).animate({"top":"-122px","opacity":"1"},1800,"easeOutBack"); /* .util { top:-60px; opacity:0;} */
                  $(".search").stop().delay(2500).animate({"bottom":"-60px","opacity":"1"},1800,"easeOutBack"); /* .search { bottom:0px; opacity:0;} */
                  $(".footer").stop().delay(3000).animate({"bottom":"-60px","opacity":"1"},1800,"easeOutBack");  /* .footer { bottom:0px; opacity:0;} */
               });  //left end
            });  // bottom end
         });  //right end 
      });  //top end 
   });  // h1 end

   $(".btnMenu").on("click",function(){ 
      $("section>article").removeClass("on"); 
      $(".box2").addClass("on"); 
      $(".btnMenu2").fadeIn(); 
   }); 
   
   $(".btnMenu2").on("click",function(){ 
      $("section>article").removeClass("on"); 
      $(".box1").addClass("on"); 
      $(".btnMenu").fadeIn(); 
   });  
   
}); // document end