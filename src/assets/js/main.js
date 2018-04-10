(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-27820211-3', 'auto');
ga('send', 'pageview');
$(document).ready(function() {
    $(".signupform").fadeOut(500,function(){
        $(".signinform").fadeIn(500);
        $(".signupform .input-field > div+input").val('').removeClass("invalid").removeClass("valid");
        $(".signupform .input-field > label").removeClass("active");
    });
    $(".signupContainer").on("click",function(){
        $(".signupform").fadeOut(500,function(){
            $(".signinform").fadeIn(500);
            $(".signupform .input-field > div+input").val('').removeClass("invalid").removeClass("valid");
            $(".signupform .input-field > label").removeClass("active");
        });
    })
    $(".signinContainer").on("click",function(){
        $(".signinform").fadeOut(500,function(){
            $(".signupform").fadeIn(500);
            $(".signinform .input-field > div+input").val('').removeClass("invalid").removeClass("valid");
            $(".signinform .input-field > label").removeClass("active");
        });
    })
    $(".login-btn").on("click", function () {
        var name = $('.input-field #username').val();
        var sEmail = $('.input-field #email').val();
        var pass = $('.input-field #password').val();
        if ($.trim(name).length == 0) {
            $('.input-field > div').hide();
            $(".usernameName").show().html('Please enter valid name');
            e.preventDefault();
        }
        else if ($.trim(sEmail).length == 0) {
            $('.input-field > div').hide();
            $(".usernameError").show().html('Please enter valid email address');
            e.preventDefault();
        }
        else if (validateEmail(sEmail)) {
            if (pass !== null && pass !== '') {
                $('.input-field > div').hide();
                $(".usernamePass").show().html('Please enter valid password');
                e.preventDefault();
            } else {
                $('.input-field > div').hide();
                $(".usernamePass").show().html('Please enter valid password');
                e.preventDefault();
            }
        } else {
            $('.input-field > div').hide();
            $(".usernameError").show().html('Invalid Email Address');
            e.preventDefault();
        }
    });
    
    function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        } else {
            return false;
        }
    }
    jQuery('.tp-banner').revolution(
     {
         delay:6000,
         startwidth:800,
         startheight:450,
         hideThumbs:10
     });
});
