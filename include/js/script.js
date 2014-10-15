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
});

