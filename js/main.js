// /* global , $ , console */

// $(function(){
      
    


//     $(".nav-items li a").click( function(){
//     $(this).addClass("activee").parent().siblings().find("a").removeClass("activee")
//                              });
  
	
   					  


// $("#porttfoilo ul li").click( function(){
// 	$(this).addClass("activeee").siblings().removeClass("activeee")});
	
// 		 $(".sccroll-top i").click (function() {
// 	$("html , body").animate({ scrollTop: 0	},1000)	  
// 		 });
// 	$(window).scroll( function () {	

// 		if ($(window). scrollTop () >= 1000){$(".sccroll-top i").fadeIn(400)}
// 		else ($(".sccroll-top i").fadeOut(400) )
	
// 	});



	
    
// });

/* owl carowsl  */
$('.owl-carousel').owlCarousel({
    items:4,
	loop:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
	margin:10,
    rtl:true,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
    /* owl carowsl  */
    // naaaaaaaaaaaav baaaaaaaaaaaaaar
	      $('.nav-item a ').click(function (e){
      $("html , body").animate({ scrollTop:$("#" + $(this).data("value")).offset().top},1000)          }); 
     // naaaaaaaaaaaav baaaaaaaaaaaaaar
// taaaaaaaaaaps section
      $(".my-toggle h5").click(function(){
     $(this).parent().toggleClass("cair")
    })
// taaaaaaaaaaps section


      

