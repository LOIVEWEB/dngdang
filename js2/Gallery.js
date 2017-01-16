$(function(){
	var imgw=$(".Gallery img").width();//获取图片的宽度
	var imgh=$(".Gallery img").height();//获取图片高度
	$(".Gallery .Gallery-shadowbox").css({width:"0",height:"0",left:(imgw/2)+"px",top:(imgh/2)+"px"})//给影藏的阴影层设置初始宽高及定位
	$(".Gallery .Gallery-shadowbox1").css({width:imgw+"px",height:imgh+"px"})//给设置触发的最外层盒子设置宽高
	
	//最外层盒子触发，影藏阴影层显示
	$(".Gallery .Gallery-shadowbox1").mouseenter(function(){
			var igw=$(".Gallery img").width();
			var igh=$(".Gallery img").height();
			$(".Gallery .Gallery-shadowbox1").css({width:imgw+"px",height:imgh+"px"})
			var index=$(".Gallery .Gallery-shadowbox1").index(this);
			$(".Gallery .Gallery-shadowbox h3").eq(index).stop().animate({fontSize:igw/10+"px"},500)
			$(".Gallery .Gallery-shadowbox p").eq(index).stop().animate({fontSize:igw/14+"px"},500)
			$(".Gallery .Gallery-shadowbox").eq(index).stop().animate({width: igw+"px",height: igh+"px",left:"0",top:"0"},500)
		});

	//离开最外层盒子，影藏阴影层影藏
	$(".Gallery .Gallery-shadowbox1").mouseleave(function(){
		var index=$(".Gallery .Gallery-shadowbox1").index(this);
		var igw=$(".Gallery img").width();
		var igh=$(".Gallery img").height();
		$(".Gallery .Gallery-shadowbox h3").eq(index).stop().animate({fontSize:"0"},500)
		$(".Gallery .Gallery-shadowbox p").eq(index).stop().animate({fontSize:"0"},500)
		$(".Gallery .Gallery-shadowbox").eq(index).stop().animate({width:"0",height:"0",left:(igw/2)+"px",top:(igh/2)+"px"},500)
	});

	//点击最外层盒子，模态显示窗弹出
	var a;
	$(".Gallery .Gallery-shadowbox1").click(function(){
		var index=$(".Gallery .Gallery-shadowbox1").index(this);
		a=index;
		$("#mymodal").modal("show");
		$(".Gallery-modal .model-smallbody").eq(index).siblings().css({display:"none"})
		$(".Gallery-modal .model-smallbody").eq(index).css({display:"block"})
	})
	//点击模态中的图片，底部出现按钮栏
	$(".Gallery-modal .img-model").click(function(){
		$(".Gallery-modal .modal-footer").css({display:"block"});
	})
	// 离开底部按钮栏，按钮栏消失
	$(".Gallery-modal .modal-footer").mouseleave(function(){
		$(".Gallery-modal .modal-footer").css({display:"none"});
	})
	//点击关闭按钮（X）,模态显示窗关闭
	$(".Gallery-modal .close-btn").click(function(){
		$("#mymodal").modal("hide");
	})

	//轮播图基础设置
	function loop(){
		$(".Gallery-modal .model-smallbody").eq(a).siblings().css({display:"none"})
		$(".Gallery-modal .model-smallbody").eq(a).css({display:"block"})
	}
	//左按钮轮播
	$(".Gallery-modal .left-btn").click(function(){
		//解除右边按钮的禁用设置
		$(".Gallery-modal .right-btn").prop({disabled:false})
		a++;
		loop();
		if(a==5){
			$(this).prop({disabled:true})
			a=5;
		}
	})

	//右按钮轮播
	$(".Gallery-modal .right-btn").click(function(){
		//解除左边按钮的禁用设置
		$(".Gallery-modal .left-btn").prop({disabled:false})
		a--;
		loop();
		if(a==0){
			$(this).prop({disabled:true})
			a=0;
		}
	})

	
})
