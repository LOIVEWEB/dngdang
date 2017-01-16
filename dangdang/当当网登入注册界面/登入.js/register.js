//canvas 验证码
var ctx=document.getElementsByTagName('canvas')[0].getContext('2d');
//随机取色函数
	function color(min,max){
		var r=Math.floor(Math.random()*(max-min)+min);
		var g=Math.floor(Math.random()*(max-min)+min);
		var b=Math.floor(Math.random()*(max-min)+min);
		return 'rgba('+r+','+g+','+b+','+'0.6'+')';
	}
//随机值
	function color(min,max){
		var r=Math.floor(Math.random()*(max-min)+min);
		var g=Math.floor(Math.random()*(max-min)+min);
		var b=Math.floor(Math.random()*(max-min)+min);
		return 'rgba('+r+','+g+','+b+','+'0.6'+')';
	}
//随机值
	function num(min,max){
		var Num=Math.floor(Math.random()*(max-min)+min);
		return Num;
	}	
	yan();
	qq.onclick=yan;
	function yan(){
		ctx.clearRect(0,0,300,300);
	//随机画布颜色
			ctx.beginPath();
			ctx.fillStyle=color(100,200);
			ctx.fillRect(0,0,300,300);
	//绘制随机文本
	var TEXT='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for(i=0;i<=225;i+=75){
		var TEXT1=TEXT[num(0,TEXT.length)];
		ctx.fillText(TEXT1,i+num(0,50),num(50,100));
		ctx.fillStyle=color(0,150);
		ctx.font=num(60,100)+'px'+' 微软雅黑';
		ctx.fill();	
	}
	//绘制随机线条
	for(j=0;j<30;j++){
		ctx.beginPath();
		ctx.moveTo(num(0,300),num(0,300));
		ctx.lineTo(num(50,300),num(0,300));
		ctx.strokeStyle=color(150,255);
		ctx.lineWidth='5';
		ctx.stroke();
	}
}
//表单验证***********************************：
$(function(){
	$('#first input').css('border','1px solid #969696')//自动后去焦点第一个边框改变；
//邮箱/ 手机号码验证：
	//失去焦点时：
 	$('#first input').blur(
 			function(){
 				var tel = $(this).val();//获取输入的手机号/邮箱;
　　　　        var yidongreg = /^(134[012345678]\d{7}|1[34578][012356789]\d{8})$/;
　        　　　var dianxinreg = /^1[3578][01379]\d{8}$/;
　　　        　var liantongreg = /^1[34578][01256]\d{8}$/;
				var emailreg = /^\w+((-\w+)|(\.\w+))*\@("@")[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
　　　　	//当为空的时候：
			if(tel==''){
 					$(this).css('border','1px solid #e6e6e6');
 					$('.phone2').css('visibility','hidden');
 					return false;
 				}
 			//当输入满足条件时：
			if(yidongreg.test(tel) || dianxinreg.test(tel) || liantongreg.test(tel)||emailreg.test(tel))
　　　　	   {
				$(this).css('border','1px solid #71B300');//边框颜色改变
				$('.phone1').css('visibility','hidden');//(邮箱/手机号可用于登录、找回密码、接收订单通知等服务)影藏
				$('.phone2').css({'visibility':'visible','color':'#71B300'});
				$('.phone2').text('恭喜你！该用户名可以注册');//改变错误提示信息为输入正确信息
			//当输入不满足条件时：
　　　    　}else{
				$(this).css('border','1px solid red');//边框颜色改变
				$('.phone1').css('visibility','hidden');//(邮箱/手机号可用于登录、找回密码、接收订单通知等服务)影藏
				$('.phone2').css({'visibility':'visible','color':'red'});
				$('.phone2').text('邮箱/手机格式不正确，请重新输入');//错误提示信息显示
				return false;
			}		
	}
 		)
 	//获得焦点时：
 	$('#first input').focus(
 			//为空时：
 			function(){
 				if($(this).val()==''){
 				$(this).css('border','1px solid #969696');
 				$('.phone1').css('visibility','visible');
 				return false;
 				}
 			}
 		)
//密码注册验证*************************************************************************：
 	//获得焦点时：
 	$('#password input').focus(
 		//为空时：
 		function (){ 
 			var pasval=$('#password input').val();			
 			if(pasval==''){
 				$(this).css('border','1px solid #969696');
 				$('.password1').css('visibility','visible');
 				$('.password2').css('visibility','hidden');
 				$('.password3').css('visibility','hidden');
 				return false;
 			}
 				}
 	)
 	//输入时 按钮松开触发事件：
 	$('#password input').keyup(
 			function(){
 				var English_Num=/^[a-zA-Z0-9]+$/;//数字字母存在；
 				var English_fuhao=/^[a-zA-Z]+([^a-zA-Z0-9])+$/;//字母符号存在；
 				var Num_fuhao=/^[0-9]+([^a-zA-Z0-9])+$/;//数字符号存在；
 				var English_Num_fuhao=/^[a-zA-Z0-9]+([^a-zA-Z0-9])+$/;//符号，字母，数字同时存在；
 				var numing=$(this).val();
 				if(numing.length<6){
 					$('.password1').css('visibility','hidden');
 					$('.password2').css('visibility','hidden');
 					$('.password3').css('visibility','visible');
 					$('.password3').children('span').eq(0).css('background','#FF3600').siblings('span').css('background','#D6D6D6');
 				}
 				if(numing.length>=6&&English_Num.test(numing)||English_fuhao.test(numing)||Num_fuhao.test(numing)){
 					$('.password1').css('visibility','hidden');
 					$('.password2').css('visibility','hidden');
 					$('.password3').css('visibility','visible');
 					$('.password3').children('span').eq(0).css('background','#FF3600');
 					$('.password3').children('span').eq(1).css('background','#FFC000');
 					$('.password3').children('span').eq(2).css('background','#D6D6D6');
 					$('.password3').children('a').text('试试字母，数字，符号一起会更安全')
 				}
 				if(numing.length>=6&&English_Num_fuhao.test(numing)){
 					$('.password1').css('visibility','hidden');
 					$('.password2').css('visibility','hidden');
 					$('.password3').css({'visibility':'visible','color':'#e6e6e6'}); 			 	
	 			 	$('.password3').children('span').eq(0).css('background','#FF3600');
	 			 	$('.password3').children('span').eq(1).css('background','#FFC000');
	 			 	$('.password3').children('span').eq(2).css('background','#71B300');
	 			 	$('.password3').children('a').html('密码设置安全,放心使用');
	 			 	$(this).css('border','1px solid #71B300');
 				}
 			}
 		)
 	//失去焦点时：
 	$('#password input').blur(
 		//为空时：
 		function(){
 			var pword=$(this).val();
 			var mima=/^[a-zA-Z0-9_-]{6,20}$/
 			if($(this).val()==''){
 				$(this).css('border','1px solid #e6e6e6');
 				$('.password1').css('visibility','hidden');
 				$('.password2').css('visibility','hidden');
 				$('.password3').css('visibility','hidden');
 				return false;
 			}
 		//错误时：
 			if(!mima.test(pword)){
 				$(this).css('border','1px solid red');
 				$('.password1').css('visibility','hidden');
 				$('.password2').css({'visibility':'visible','color':'red'});
 				$('.password2').text('密码长度6-20个字符，请重新输入');
 				$('.password3').css('visibility','hidden');
 				return false;
 			}else{
 				$('.password1').css('visibility','hidden');
 			 	$('.password2').css('visibility','hidden');
 			 	$('.password3').css({'visibility':'visible','color':'#e6e6e6'}); 			 	
 			 	$('.password3').children('a').html('密码设置成功').css('color','#71B300');
 			 	$(this).css('border','1px solid #71B300')
 			}
 		}
 	)

//确认密码******************************************************：
	//获得焦点时：
	$('#PAS input').focus(
			function(){
				if($(this).val()==''){
				$(this).css('border','1px solid #969696');
				$('.password4').css('visibility','visible');
				return false;
			}
			
		}
				
		)
	//失去焦点：
	$('#PAS input').blur(
			function(){
				$(this).css('border','1px solid #e6e6e6');
				$('.password4').css('visibility','hidden');
			if($(this).val()==$('#password input').val()){
				$(this).css('border','1px solid #71B300')
				$('.password5').css('visibility','hidden');
				$('.password4').css('visibility','hidden');
			}else{
				$('.password4').css('visibility','hidden');
				$('.password5').css('visibility','visible');
				return false;
			}
			}
		)
//完成注册******************************************************************：
$('form').submit(
		function(){
			if($(this).children('input')==''){
				wrong=false;
			}else{
				wrong=true;
				return wrong;
			}
			
		}
	)
 })


