//我们的顾客说了什么-轮播图
$(function(){
	aaaaa();
	$('ol.ol_circle li').eq(0).css('background-color',"#fff").siblings().css("background-color","#293364");
	$('.list').eq(0).fadeIn("slow").siblings().fadeOut();
	var aa=0;
	function aaaaa(){
		timer=setInterval(abc,3000);
		function abc(){
			aa+=1;
			$('.list').eq(aa).fadeIn("slow").siblings().fadeOut();
			$('ol.ol_circle li').eq(aa).css('background-color',"#fff").siblings().css("background-color","#293364");
			if(aa==2){
			aa=-1;
		    }
		}	
	}
//鼠标悬浮点击事件
	$('#guestshow div').hover(
		function(){
			clearInterval(timer);
			$('ol.ol_circle li').click(function(){
				$(this).css('background-color',"#fff").siblings().css("background-color","#293364");
				//console.log($(this).index()); 
				aa=$('ol.ol_circle li').index(this);
				//console.log(aa);
				$('.list').eq(aa).fadeIn("slow").siblings().fadeOut();
			});
		},
		function(){
			aaaaa();
		}
	);
})

var a=document.getElementById('contact_me');
var contact=document.querySelector('.contact');
var quxiao=document.querySelector('#close');
//console.log(quxiao);
var close=document.querySelector('.close');
a.onclick=function(){
	contact.style.display='block';
}
close.onclick=function(){
	contact.style.display='none';
}
quxiao.onclick=function(){
	contact.style.display='none';
}
