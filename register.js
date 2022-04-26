$(function(){
    var $registerForm = $("#registration");
    $.validator.addMethod("noSpace", function(value, element){
        return value == '' || value.trim().length != 0
    }, "Spaces are not allowed");
    if($registerForm.length){
        $registerForm.validate({
            rules:{
                username:{
                    required: true,
                    noSpace:true
                },
                dateofbirth:{
                    required:true
                },
                password:{
                    required:true
                },
                confirmPassword:{
                    required:true,
                    equalTo:'#password'
                },
                email:{
                    required:true,
                    email:true
                },
                gender:{
                    required:true
                },
            },
            messages:{
                username:{
                    required:" <br>  <br>    Username is mandatory",
                    noSpace:" <br>  <br>    Please don't enter spaces in your username"
                },
                dateofbirth:{
                    required:"<br> <br>Please enter your date of birth"
                },
                password:{
                    required:"<br> <br> Please enter your password"
                },
                confirmPassword:{
                    required:"<br> <br> Please enter your password once more",
                    equalTo:" <br> <br> Please enter the same password"
                },
                gender:{
                    required:"Please select one of the above options"
                },
                email:{
                    required:" <br> <br> Please enter an email",
                    email:"<br> <br> Please enter a valid email"

                },
            }
            ,
            errorPlacement: function(error,element){
                if (element.is(":radio")){
                    error.appendTo(element.parents(".gender"));
                }else if(element.is(":checkbox")){
                    error.appendTo(element.parent)
                }else{
                    error.insertAfter(element);
                }

            }
        })
    }
} )