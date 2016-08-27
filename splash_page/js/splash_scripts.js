$(document).ready(function() {

	/* on click, turn into an X or back to a hamburger */
	var hamburger_menu = 0;
	$("#hamburger-menu").click(function() {
		if (hamburger_menu == 0) {
			$("#drawer-list").css({"display":"inline-block"});
			$("#bar-1").css({"transform":"rotate(45deg)" , "top":"0"});
			$("#bar-2").css({"opacity":"0"});
			$("#bar-3").css({"transform":"rotate(-45deg)" , "bottom":"0"});
			hamburger_menu = 1;
		} else if (hamburger_menu == 1) {
		$("#bar-1").css({"transform":"rotate(0deg)"});
		$("#bar-2").css({"opacity":"1"});
		$("#bar-3").css({"transform":"rotate(0deg)"});
		hamburger_menu = 0;
		} 
	});
	
	/* on click menu trigger displays drawer */

	$("#hamburger-menu").click(function() {
		$(".site-wrap").css({"margin-right":"300px"});
	});
	
	/* display toggle and FA arrow effect on click meet kris */
	var meet_kris_arrow = 0;
	var exp_kris_arrow = 0;
	$("#expand-meet-kris").click(function() {
		/* alert("Fuck da police!"); */
		$("#meet-kris").slideToggle();
		/* Determine wether arrow is up or down */
		if (meet_kris_arrow == 0) {
			$(".meet-kris-arrow").css({"transform":"rotate(180deg)"});
			meet_kris_arrow = 1;
		} else {
			$(".meet-kris-arrow").css({"transform":"rotate(0deg)"});
			meet_kris_arrow = 0;
		}
	});
	
	/* display toggle and FA effect to expand experience section */
	$("#expand-kris-exp").click(function() {
		$("#experience-text").slideToggle();
		if (exp_kris_arrow == 0) {
			$(".experience-kris-arrow").css({"transform":"rotate(180deg)"});
			exp_kris_arrow = 1;		
		} else {
			$(".experience-kris-arrow").css({"transform":"rotate(0deg)"});
			exp_kris_arrow = 0;
		}
	});
	
	
	/* $("#expand-meet-kris").click(function() {
		$(".meet-text").show();
		$(".meet-heading").css({"text-align":"center"});
		$("#expand-meet-kris").hide();
		$("#contract-meet-kris").show();
		$("#contract-meet-kris").css({"text-align":"left"});	
	
	});
	
	$("#contract-meet-kris").click(function() {
		$(".meet-text").hide();
		$(".meet-heading").css({"text-align":"left"});
		$("#expand-meet-kris").show();
		$("#contract-meet-kris").hide();
		$("#contract-meet-kris").css({"text-align":"left"});
	}); */


});  /* end of ready */

 