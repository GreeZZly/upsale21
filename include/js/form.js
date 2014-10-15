$(document).ready(function (){
	
//, #regForm"
	$("#reg_form").validate({ 

       rules:{

            name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            surname: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            email:{
                required: true,
                email: true
            },
            phone:{
                required: true,
                minlength: 6,
                maxlength: 11,
                digits: true
            }

       },

       messages:{

            name:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 2 символа",
                maxlength: "Максимальное число символов - 16",
            },

            surname:{
                required: "Это поле обязательно для заполнения",
                minlength: "Фамилия должно быть минимум 2 символа",
                maxlength: "Максимальное число символов - 20",
            },

            email:{
                required: "Это поле обязательно для заполнения",
                email: "Неверно заполнено поле электронной почты"
            },
            phone:{
                required: "Это поле обязательно для заполнения",
                minlength: "Телефон должен быть минимум 6 символов",
                maxlength: "Телефон должен быть максимум 11 символов",
                digits: "Только цифры"
            }
       }

    });

    $('#download_form').validate({
        rules:{
            name_d:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            email_d:{
                required: true,
                email: true
            }
        },

        messages: {
            name_d:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 2 символа",
                maxlength: "Максимальное число символов - 16",
            },
            email_d:{
                required: "Это поле обязательно для заполнения",
                email: "Неверно заполнено поле электронной почты"
            }
        }
    });
     $('#phone_form').validate({
        rules:{
            name_p:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            surname_p:{
                required: true,
                minlength: 2,
                maxlength: 20
            },
            phone_p: {
                required:true,
                minlength: 6,
                maxlength: 11,
                digits: true   
            }
        },

        messages: {
            name_p:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 2 символа",
                maxlength: "Максимальное число символов - 16",
            },
            surname_p:{
                required: "Это поле обязательно для заполнения",
                minlength: "Фамилия должно быть минимум 2 символа",
                maxlength: "Максимальное число символов - 20",
            },
            phone_p:{
                required: "Это поле обязательно для заполнения",
                minlength: "Телефон должен быть минимум 6 символов",
                maxlength: "Телефон должен быть максимум 11 символов",
                digits: "Только цифры"
            }
        }
    });
 
	$('#reg_button_last').on('click', function(){
        
        if ($("#reg_form").valid()) {
            $("#reg_form").submit();
        }
    });

    $('#formula').on('click', function(){
        if ($('#download_form').valid()){
            $('#download_form').submit();
        }
    });
   

    $('#phone_order_sbm_btn').on('click', function(){
        // $('#phone_form').submit();
        if($('#phone_form').valid()){
            $('#phone_form').submit();
        }
    });
    $('#reg_form').resize(function(){
        var form_h = $('#reg_form').height()-275;
        $('.well').css({'height':form_h});
    });
    
});