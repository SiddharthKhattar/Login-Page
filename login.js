$(function(){
    var $loginForm = $("#login");
    if($loginForm.length){
        $loginForm.validate({
            rules:{
                Username:{
                    required:true
                },
                Password:{
                    required:true
                }
            },
            messages:{
                Username:{
                    required:"<br> <br> Please enter your username",
                    equalTo:" <br> <br> The Entered Username is invalid"
                },
                Password:{
                    required:" <br> <br> Please enter the password",
                    equalTo:" <br> <br> The Entered password is invalid"
                }
            }
        })
    }
})    