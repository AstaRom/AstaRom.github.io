$(function(){
    $('.minimized').click(function(event) {
        var i_path = $(this).attr('src');

        $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
        $('body').css('opacity', 1.0);
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth()) / 2,
            top: ($(window).height() - $('#magnify').outerHeight()) / 2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
        });
        $('body').css('opacity', 0.85);
    });
});