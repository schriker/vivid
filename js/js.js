$(document).ready(function(){

    $(".menu a, .scrl, .logo a, .top-site, .navbar-collapse a").click(function(event) {
        var hash = this.hash;
        event.preventDefault();
        if(this.hash !== "")  {
            window.hash_temp = this.hash;
            $('html, body').stop(true).animate({
            scrollTop: $(hash).offset().top
        }, 400);   
        } 
    });

    $("#menu-toggle, #menu-toggle-xs").click(function(){
        $(this).toggleClass("menu-open");
        $(".menu").toggleClass("menu-hidden");
    });

    $(".layer").imagesLoaded( { background: true }, function() {
        $("#scene").fadeIn(500).removeClass("hidden");
    });

    $(".top-row").affix({
    offset: 1,
    });

    $(".top-row").on('affix.bs.affix', function(){
        $("#menu-toggle").addClass("menu-open");
        $(".menu").addClass("menu-hidden");
    });

    $(".top-row").on('affix-top.bs.affix', function(){
        $("#menu-toggle").removeClass("menu-open");
        $(".menu").removeClass("menu-hidden");
    });
});

$(window).on("load", function() {
    $('.loader-wrap').fadeOut(500);
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isEdge = !isIE && !!window.StyleMedia;
        if (isEdge=="true")
        {
            var scene = $('#scene').get(0);
            var parallax = new Parallax(scene);
        }
});