$(document).ready(function(){


var ball = document.querySelectorAll(".ball-1");
var score = document.getElementById("score");
var remaining = document.getElementById("remaning");
var clicks = document.getElementById("cllicksRemaning");
var balls = ball.length;
var scoreBalls =0
var clickRemaining=16;
remaining.innerHTML = "Circles Remaining : " + balls ;
score.innerHTML = "Score : " + scoreBalls;
clicks.innerHTML = "clicks Remaining : " + clickRemaining;



 $(ball).click(function(){

    scoreBalls +=1 ;
	balls -- ;
	$(this).hide();
	score.innerHTML = "Score : " + scoreBalls;
	remaining.innerHTML = "Remaining : " + balls ;
	
	if ( balls < 1 && clickRemaining > 0 )
	{
		$(".balls h1").fadeIn();
		clickRemaining
	}
	
}) 




  $("body").click(function(){
	
	clickRemaining --;
	clicks.innerHTML = "Clicks Remaining : " + clickRemaining;

	if ( balls > 0 && clickRemaining < 1 )
	{
		$(".balls h2").fadeIn();
		console.log("f")
	}
	 if  ( clickRemaining < 1 )
	{
		clicks.innerHTML = "Clicks Remaining : " + 0;
		$(ball).remove();
	}
	 else  if ( balls < 1 )
	{
		clicks.innerHTML = "clicks Remaining : " + 0;
	}
	

	
}) 


// set setInterval function

	var min= -10; 
	var max= 30;
	var random1;
	var random2;
	var random3;

setInterval(function() {

	random1 = Math.floor(Math.random()*(max-min+1) *5) ;
	random2= Math.floor(Math.random()*(max-min+1) *5) ;

	
		$(ball[0]).animate({

			"left":random1 +"%",
			 "top":random2 +"%",
		
		},8300);
	
	random1 = Math.floor(Math.random()*(max-min+1) *5) ;
	random2= Math.floor(Math.random()*(max-min+1) *5) ;


		$(ball[1]).animate({

			"left":random1 +"%" ,
			 "bottom":random2 +"%",
		
		},7800);
		random1 = Math.floor(Math.random()*(max-min+1) *5) ;
	   random2= Math.floor(Math.random()*(max-min+1) *5) ;


		$(ball[2]).animate({

			"left":random1 +"%",
			 "bottom":random2 +"%",
		
		},8500);


			random1 = Math.floor(Math.random()*(max-min+1) *5) ;
			random2= Math.floor(Math.random()*(max-min+1) *5) ;

		
				$(ball[3]).animate({
		
					"left":random1 +"%",
					 "top":random2 +"%",
				
				},4800);

			random1 = Math.floor(Math.random()*(max-min+1) *5) ;
			random2= Math.floor(Math.random()*(max-min+1) *5) ;

		
				$(ball[4]).animate({
		
					"left":random1 +"%",
					 "top":random2 +"%",
				
				},7900);

			random1 = Math.floor(Math.random()*(max-min+1) *5) ;
			random2= Math.floor(Math.random()*(max-min+1) *5) ;

		
				$(ball[5]).animate({
		
					"left":random1 +"%",
					 "top":random2 +"%",
				
				},1900);

			random1 = Math.floor(Math.random()*(max-min+1) *5) ;
			random2= Math.floor(Math.random()*(max-min+1) *5) ;

		
				$(ball[6]).animate({
		
					"left":random1 +"%",
					 "top":random2 +"%",
				
				},6900);

			random1 = Math.floor(Math.random()*(max-min+1) *5) ;
			random2= Math.floor(Math.random()*(max-min+1) *5) ;

		
				$(ball[7]).animate({
		
					"left":random1 +"%",
					 "top":random2 +"%",
				
				},5900);
	


},0)
$(".link").click(function(){
    location.reload();
})


})