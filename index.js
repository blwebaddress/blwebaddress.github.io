$(document).ready(


    function() {

             var custdate = new Date();

             $(".copyrightyear").text(custdate.getFullYear());

             $(".contactform").on("submit", function(e) {

                e.preventDefault();

                var email = $.trim( $(".conactemailinput").val() );

                var message = $.trim( $(".conactemailmsginput").val() );

                console.log(email);

                console.log(message);
                if($.trim( $(".conactformtest").val() ) == "5") {

                    $.ajax({
                        url: "//formspree.io/blwebaddress@gmail.com",
                        method: "POST",
                        data: {email: email, message: message},
                        dataType: "json",
                        success: function (data, b, c) {
                            if (data) {
                                if (data.success) {
                                    $(".successmessage").text(data.success);
                                    $(".successmessage").removeClass("unsuccesful");
                                    $(".successmessage").addClass("succesful");
                                    setTimeout(function(){
                                        $(".conactemailinput").val("");
                                        $(".conactemailmsginput").val("");
                                        $(".successmessage").removeClass("succesful");
                                    }, 3000);
                                }
                            }
                        },
                        error: function() {
                            $(".successmessage").text("Error");
                            $(".successmessage").removeClass("succesful");
                            $(".successmessage").addClass("unsuccesful");
                            setTimeout(function(){
                                $(".successmessage").removeClass("unsuccesful");
                            }, 1000);
                        }
                    });
                } else {
                    $(".successmessage").text("Error");
                    $(".successmessage").removeClass("succesful");
                    $(".successmessage").addClass("unsuccesful");
                    setTimeout(function(){
                        $(".successmessage").removeClass("unsuccesful");
                    }, 1000);

                }
            });
    }
);

