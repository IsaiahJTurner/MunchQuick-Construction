jQuery(document).ready(function($) {
    'use strict';
    $(window).load(function() {
        $("#preload-content").delay(300).fadeOut("400");
        $("#preload").delay(800).fadeOut("400");
    });
    $('input, textarea').placeholder();
    $('#clock').countdown('2014/10/20', function(event) {
        $(this).html(event.strftime('' +
            '<div class="clock-section"><span>%D</span> <p>days</p></div> ' +
            '<div class="clock-section"><span>%H</span> <p>hours</p></div> ' +
            '<div class="clock-section"><span>%M</span> <p>minutes</p></div> ' +
            '<div class="clock-section"><span>%S</span> <p>seconds</p></div>'
        ));
    });
    $.backstretch(['img/background-01.jpg']);
    $('#newsletter').submit(function(e) {
        Parse.initialize(
            "twBPt9IZ1Epyk2t1B305TfBOTmFEFfxXHOJqoF4w",
            "GKNz5uowPjQvWOa9IglZiTDg5FxTGE3z2uSFOfKH");
        e.preventDefault();
        var action = $(this).attr('action');
        $("#message").fadeIn("100", function() {
            $('#message').hide();
            var Email = Parse.Object.extend("Email");
            var email = new Email();
            email.save({
                address: $('#email').val()
            }).then(function(object) {
                $('#message').html(
                    "Subscribed!");
                $('#email').val("");
                $('#message').fadeIn("100");
            });
        });
        return false;
    });
    $('#modal-open').on('click', function(e) {
        var mainInner = $('#modal-window .container'),
            modal = $('#modal');
        mainInner.animate({
            opacity: 0
        }, 300, function() {
            $('html,body').scrollTop(0);
            modal.addClass('modal-active').fadeIn(600);
        });
        e.preventDefault();
        $('#modal-close').on('click', function(e) {
            modal.removeClass('modal-active').fadeOut(
                300, function() {
                    mainInner.animate({
                        opacity: 1
                    }, 200);
                });
            e.preventDefault();
        });
    });
});
