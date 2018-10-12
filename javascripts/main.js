let navigation = $('#h-move');

$(window).scroll(function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
        if ($(window).scrollTop() > 360) {
            navigation.addClass('sticky');
        } else {
            navigation.removeClass('sticky');
        }
    }
    else {
        if ($(window).scrollTop() > 420) {
            navigation.addClass('sticky');
        } else {
            navigation.removeClass('sticky');
        }
    }
});

function checkForm() {
    let is_name, is_email, is_msg = false;
    let name = document.getElementById('userName').value;
    let email = document.getElementById('userEmail').value;
    let msg = document.getElementById('msg-content').value;
    const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name === null || name === "") {
        $('.name-required').css({
            opacity: 1
        });
        is_name = false;
    } else {
        $('.name-required').css({
            opacity: 0
        });
        is_name = true;
    }

    if (email === null || email === "") {
        $('.email-required').css({
            opacity: 1
        });
        is_email = false;
    } else if (regex.test(email) !== true) {
        $('.email-required').text("請輸入有效的電子郵件").css({
            opacity: 1
        });
        is_email = false;
    } else {
        $('.email-required').css({
            opacity: 0
        });
        is_email = true;
    }

    if (msg === null || msg === "") {
        $('.msg-required').css({
            opacity: 1
        });
        is_msg = false;
    } else {
        $('.msg-required').css({
            opacity: 0
        });
        is_msg = true;
    }

    if (is_name && is_email && is_msg) {
        $('#thank-msg').css({display: 'block'});
        $('#form').css({display: 'none'});
    }

    return false;
}





