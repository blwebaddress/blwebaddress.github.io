$(document).ready(

    function() {

             $(".contactform").on("submit", function(e) {

                 e.preventDefault()

                var email = $.trim( $(".conactemailinput").val() );

                var message = $.trim( $(".conactemailmsginput").val() );

                console.log(email);

                console.log(message);

                $.ajax({
                    url: "//formspree.io/blwebaddress@gmail.com",
                    method: "POST",
                    data: {email: email, message: message},
                    dataType: "json"
                });

            });
    }
)

