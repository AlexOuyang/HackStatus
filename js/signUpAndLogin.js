$(document).ready(function () {

    // Switch the login and signup tabs on click
    $('.tab a').on('click', function (e) {

        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
        target = $(this).attr('href');
        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);

    });
});