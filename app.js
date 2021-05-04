$(function() { // this we need to load all our file and after we can make some changes to our DOM (this is good practice)
	
// FIXED MENU BAR
	
	let header = $("#header"); //to get id from html; !!! use different classes and id for JS and CSS
	let intro = $("#intro");
	let introH = intro.innerHeight(); // innerHeight - with paddings;  height - pure height without padding
	let scrollPos = $(window).scrollTop(); // shows how much we scrolled from top.
	let nav = $("#nav");
	let navToggle = $("#navToggle");

//	//window when scrolling, loading and resize  uses function
//	$(window).on("scroll load resize", function() {
//		//taking intro total height and rewriting it 
//		introH = intro.innerHeight();
//		//scrolling position is taking and rewriting height from top
//		scrollPos = $(this).scrollTop();
//		// if height of scroll is more than intro total height
//		if(scrollPos > introH) {
//			//adding class (fixed) to header
//			header.addClass("fixed");
//		} else {
//			// if less than remove class (fixed)
//			header.removeClass("fixed");
//		}
//			
//		//console.log(scrollPos); // WE can see height online 
//	});
//	
//	header.addClass("fixed");
	
//	//THIS METHOD HAS SMALL ISSUE WITH LOADING MENU BAR
	
	
	
// THIS way is better than previous 
	
	
	//we call function
	checkScroll(scrollPos, introH)
	
	//window is getting information on scrolling and resizing and calling function
	$(window).on("scroll resize", function() {
		//intro rewriting total height of intro
		introH = intro.innerHeight();
		//scroll rewriting position of scroll from top
		scrollPos = $(this).scrollTop();
		
		//calling function 
		checkScroll(scrollPos, introH);
	})
	
	//function with two arguments - scrollPos and introH
	function checkScroll(scrollPos, introH) {
		if(scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}
	
	
// SMOOTH SCROLL (nav.removeClass("show") - made to remove class from menu (to hide it )) 
	
	
	$("[data-scroll]").on("click", function(event) {
		//prevent default parameters to work
		event.preventDefault();
		//id of element
		let elementID = $(this).data('scroll');
		//offset for element
		let elementOffset = $(elementID).offset().top;
		//remove class to toggle menu on click
		nav.removeClass("show");
		
//		//to see name of element and offset from top
//		console.log(elementID);
//		console.log(elementOffset);
		
		//scroll animation 
		$("html, body").animate({
			//offset from top (-70) on scroll
			scrollTop: elementOffset - 70
			//scroll time in milliseconds 
		}, 700);
	});
	
	
// NAV Toggle
	//on click call function  - parameter is - event
	navToggle.on("click", function(event) {
		// prevent default actions
		event.preventDefault();
		// add class to toggleClass "show"
		nav.toggleClass("show")
	});
	
// REVIEWS 
	/*https://kenwheeler.github.io/slick/*/
	
	// !!!!! we need to make one more empty (we do not need to add any formating because slick will add own) div around our sliding div to "kill" formating styles of SLICK - we will add <div class="slick-item">
	
	
	let slider = $("#reviewsSlider");
	
	
//	$('.multiple-items').slick({
//	  infinite: true,
//	  slidesToShow: 3,
//	  slidesToScroll: 3
//	});
	
	slider.slick({
		//slides will change all the time
		infinite: true,
		//shoving only one slide
		slidesToShow: 1,
		//scroll one slide at the time
		slidesToScroll: 1,
		//fading effect
		fade: true,
		//do not show - next and previous buttons
		arrows: false,
		//dots showing how many slides we have
		dots: true,
	})
	
	
	
});