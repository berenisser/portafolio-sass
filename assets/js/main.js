$(document).ready(function() {

   	var nav = $('.navi').offset().top;
   	$(document).scroll(function() { 
      if($(this).scrollTop() > nav) {
          $('.navi').css({'background-color': '#fff'});
          $('.navi').css({'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'});
          $('.gris').css({'color': '#555555'});
       } else {
          $('.navi').css({'background-color': 'transparent'});
          $('.gris').css({'color': '#fff'});
          $('.navi').css({'box-shadow': 'none'});
       }
   	});

	$(".dropdown-button").dropdown(
		{hover: true}
	);
	$(".button-collapse").sideNav();
	$('.slider').slider();
});