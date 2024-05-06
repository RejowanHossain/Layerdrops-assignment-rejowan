(function ($) {
    "use strict";
    $(document).ready(function () {

        // Fade out the preloader after 500 milliseconds
        $("#loading").fadeOut(500);
        
        // Initialize the loading function if it's defined and meaningful
        // $(".progress-bar").loading();
    
        // Back to top button functionality
        $(".top-btn").on("click", function () {
            $('html,body').animate({
                "scrollTop": "0"
            }, 500);
        });
    
        // Fade in/out the back to top button based on scroll position
        $(window).on("scroll", function () {
            var scrollValue = $(this).scrollTop();
            if (scrollValue >= 500) {
                $(".top-btn").fadeIn();
            } else {
                $(".top-btn").fadeOut();
            }
        });
    
    });    

}(jQuery));