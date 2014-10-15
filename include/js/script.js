// $(document).ready(function(){
// 	// var ww1 = $(window).width();
// 		$('#map ymaps').css({'width':'100%'});
// 	$(window).resize(function(){
// 	 	var ww = $(window).width();
// 		$('#map ymaps').css({'width':ww});
// 	});
// });

$(document).ready(function(){
	var win_h = $(window).height()/2;
	var win_w = $(window).width()/2;
	$('#success_submit').css({'margin-left':win_w-225, 'margin-top':win_h-110});
	$(window).resize(function(){
		var win_h = $(window).height()/2;
		var win_w = $(window).width()/2;
		$('#success_submit').css({'margin-left':win_w-225, 'margin-top':win_h-110});
	});
	// console.log(suc_h, win_w, win_h);



// VALIDATION



	$("#first_form #reg_button").on('click', function(e){
		e.preventDefault();
		var input =$("#first_form input");
		input.each(function(){
			if($(this).val() == ''){
				$(this).parent('.control-group').addClass('error');
				$(this).attr('placeholder','Пустое значение');
			}			
		})
		if(!$('.control-group').hasClass('error')){
			var email = $("#first_email input").val();
			if((email.indexOf('@') == -1) || (email.indexOf('.') == -1)) {
				$("#first_email").addClass('error');
			}
			else{
				var phone = $("#first_phone input").val();
				if(phone.match(/[^0-9]/g)){
					alert('только цифры');
					$("#first_phone").addClass("error");
				}
				else {
					$("#first_form").submit();
				}
			}
		}
	});
	$("#first_form input").on('change', function(e){
		e.preventDefault();
		var input =$("#first_form input");
		if($(this).val() == ''){
			$(this).parent('.control-group').addClass('error');
			$(this).attr('placeholder','Пустое значение');
		}			
	});
	$("#first_form input").on('change', function(){
		$(this).parent('.control-group').removeClass('error');
	});


});

