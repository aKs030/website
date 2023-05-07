/*************************************************************************
 * For loading the menu.
 * The menu will not work if you open the file directly rather than on a web server.
 *************************************************************************/
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
<script>
$(document).ready(function(){

	// Der Button wird mit JavaScript erzeugt und vor dem Ende des body eingebunden.
	var back_to_top_button = ['<a href="#top" class="back-to-top">Nach oben</a>'].join("");
	$("body").append(back_to_top_button)

	// Der Button wird ausgeblendet
	$(".back-to-top").hide();

	// Funktion für das Scroll-Verhalten
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) { // Wenn 100 Pixel gescrolled wurde
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});

		$('.back-to-top').click(function () { // Klick auf den Button
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});
</script>

/* menu button click */
var menu = $('#menu'), but = $('#menu_button');
$(document).on('click', '*', function(evt) {
    evt.stopPropagation();
    if ($(this).is(but))
        menu.toggle();
    else if (!$(this).closest(menu).length)
        menu.hide();
});


(function () {
  "use strict";
  
  $(function () {
    $(".menu-container").load("menu.html");
  });
})();