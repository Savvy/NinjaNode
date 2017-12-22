var a = $("#welcome").offset().top;


$(document).scroll(function() {
    if ($(this).scrollTop() > a) {
        $(".navbar-nav>li>a").addClass("dark");
        $(".navbar").css("transition", ".8s");
        $(".navbar-menu").css("background-color", "#25252A").css("box-shadow", "0 0 10px 2px #222");
    } else {
        $(".navbar-nav>li>a").removeClass("dark");
        $(".navbar").css("transition", ".6s");
        $(".navbar-menu").css("background-color", "transparent").css("box-shadow", "none");
    }
});