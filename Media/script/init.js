$(document).ready(function() {

    /* ======================================
    Button hover
    ====================================== */

    // .btn-hover need to be in relative position.
    $('.btn-hover').hover( function (){
        $(this).stop(true, true).animate({ left: '+=10' }, 200);
    },
    function (){
        $(this).stop(true, true).animate({ left: '-=10' }, 200);
    });

    /* ======================================
    Tooltip
    ====================================== */

    // Plus Click Handler
    $(".plus").on( "click", function(event) {
        event.preventDefault();
        $(".tips:visible, .closer:visible").hide();
        $(this).next().children(".tips").fadeIn(800);
        $(this).next().children(".closer").fadeIn(800);
    });

    // Closer Click Handler
    $(".closer").on( "click", function(event) {
        event.preventDefault();
        $(this).hide();
        $(this).siblings(".tips").hide();
    });

    /* ======================================
    Tracking
    ====================================== */

    $(document).centerTracking({
        convergID: '02_CLX_34996_HVRHoliday'
    });
    $(document).icnNav();

});