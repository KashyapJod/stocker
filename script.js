$(document).ready(function(){
    // Enable carousel sliding animation on scroll for each section
    $('.carousel').on('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta > 0) {
            $(this).carousel('prev');
        } else {
            $(this).carousel('next');
        }
    });
});
