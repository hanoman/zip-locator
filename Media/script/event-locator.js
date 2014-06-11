$(document).ready(function () {

    var zipInput = $("div.zipInput input");
    var zipValue = $("div.zipInput input").val('Enter ZIP');

    zipInput.focus(function () {
        $(this).val('');
    });

    zipInput.blur(function () {
        var zipValue = $(this).val();
        if (zipValue == '') {
            zipValue = $(this).val('Enter ZIP');
        }
    });

    //this portion loads website on click of button
    $('a.findClubBTN').click(function (e) {
        var zipValue = $(this).prev().children('input').val();
        if (zipValue == '' || zipValue.length != '5' || isNaN(zipValue)) {
            e.preventDefault();
            zipValue = $(this).prev().children('input').val('Enter ZIP*');
            $(this).prev().children('input').css("color", "red");
            return false;
        }
        else if ($(this).prev().is("#inputOriginal")) {
            $('a.findClubBTN').attr('href', '/Events/Stores.aspx?id=934&Zipcode=' + zipValue + '&Radius=30&Type=Product&Date=false');
        }
        else if ($(this).prev().is("#inputLight")) {
            $('a.findClubBTN').attr('href', '/Events/Stores.aspx?id=932&Zipcode=' + zipValue + '&Radius=30&Type=Product&Date=false');
        }
        else {
            $('a.findClubBTN').attr('href', '/Events/Stores.aspx?id=933&Zipcode=' + zipValue + '&Radius=30&Type=Product&Date=false');
        }
    });


    //this portion loads site on Enter
    zipInput.keypress(function (event) {

        var zipValue = $(this).val();
        if (zipValue == '' && event.keyCode == 13) {
            return false;
        }
        else if (zipValue.length != '5' && event.keyCode == 13) {
            zipValue = $(this).val('Enter ZIP*');
            $(this).css("color", "red");
            return false;
        }
        else if (isNaN(zipValue) && event.keyCode == 13) {
            zipValue = $(this).val('Enter ZIP*');
            $(this).css("color", "red");
            return false;
        }
        else if (event.keyCode == 13) {
            if ($(this).parent().is("#inputOriginal")) {
                window.location = ('href', '/Events/Stores.aspx?id=934&Zipcode=' + zipValue + '&Radius=30&Type=Product&Date=false');
                return true;
            } else if ($(this).parent().is("#inputLight")) {
                window.location = ('href', '/Events/Stores.aspx?id=932&Zipcode=' + zipValue + '&Radius=30&Type=Product&Date=false');
                return true;
            } else {
                window.location = ('href', '/Events/Stores.aspx?id=933&Zipcode=' + zipValue + '&Radius=30&Type=Product&Date=false');
                return true;
            }
        }
    });

});// end of document ready