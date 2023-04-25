$(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 50) {
            $(".div-container").addClass("active");
        } else {
            $(".div-container").removeClass("active");
        }
    });
});