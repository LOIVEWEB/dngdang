
jQuery(document).ready(function($) {
		var floor=$('.floor').offset().top;
		var floor1=$('.floor1').offset().top;
		var floor2=$('.floor2').offset().top;
		var floor3=$('.floor3').offset().top;
		var floor4=$('.floor4').offset().top;
		$(".f").click(function(){
			$('html,body').animate({scrollTop:$('.floor').offset().top},600);
		});
		$(".f1").click(function(){
			$('html,body').animate({scrollTop:$('.floor1').offset().top},600);
		});
		$(".f2").click(function(){
			$('html,body').animate({scrollTop:$('.floor2').offset().top},600);
		});
		$(".f3").click(function(){
			$('html,body').animate({scrollTop:$('.floor3').offset().top},600);
		});
		$(".f4").click(function(){
			$('html,body').animate({scrollTop:$('.floor4').offset().top},600);
		});
});




