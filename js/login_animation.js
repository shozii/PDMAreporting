$('document').ready(function(){

    $('.anchor-small').click(function(){
        $('.form-main').toggleClass("hidden");
        $('.form-forget').toggleClass("hidden");
        $('.btn-main').toggleClass("hidden");
        $('.btn-forget').toggleClass("hidden");
    });

    //Dash Board jQuery
    setTimeout(function(){
        $('.b1').toggleClass("rollIn");
        $('.b1').toggleClass("animated");
        $('.b5').toggleClass("rollIn");
        $('.b5').toggleClass("animated");
    },200);

    setTimeout(function(){
        $('.b2').toggleClass("rollIn");
        $('.b2').toggleClass("animated");
        $('.b6').toggleClass("rollIn");
        $('.b6').toggleClass("animated");
    },400);

    setTimeout(function(){
        $('.b3').toggleClass("rollIn");
        $('.b3').toggleClass("animated");
    },600);

    setTimeout(function(){
        $('.b4').toggleClass("rollIn");
        $('.b4').toggleClass("animated");
    },800);

    setTimeout(function(){
        $('.b1').toggleClass("box-show");
        $('.b2').toggleClass("box-show");
        $('.b3').toggleClass("box-show");
        $('.b4').toggleClass("box-show");
        $('.b5').toggleClass("box-show");
        $('.b6').toggleClass("box-show");

        $('.b6').toggleClass("rollIn");
        $('.b6').toggleClass("animated");
        $('.b5').toggleClass("rollIn");
        $('.b5').toggleClass("animated");
        $('.b4').toggleClass("rollIn");
        $('.b4').toggleClass("animated");
        $('.b3').toggleClass("rollIn");
        $('.b3').toggleClass("animated");
        $('.b2').toggleClass("rollIn");
        $('.b2').toggleClass("animated");
        $('.b1').toggleClass("rollIn");
        $('.b1').toggleClass("animated");

    },2000);

    //data-entry
    $('.toggle-side').click(function(){
        $('.right-content').toggleClass("side-slide");
    });
})