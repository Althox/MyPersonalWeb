$(document).ready(function(){

	//ScrollToTop fadein when >100px
    //ScrollToTop fadeout when <100px
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
	
	//function to scroll the page to the top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
	
	//set tooltip to titles of nav
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});

});

	//function to scroll to the specified id
	function scrollToId(inId){
		var id = "#";
		id += inId;
		$('html,body').animate({
				scrollTop: $(id).offset().top
		}, 1000);
	}