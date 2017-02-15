//header地址选择下拉菜单：
$('.add').hover(
	function(){
		$(this).children('p').css({'border':'1px solid #E6E6E6','border-bottom':'none','height':'33px','background':'#ffffff'})
		$(this).children('ul').css({'display':'inline-block','background':'#ffffff'});
		$('.add p').children('span').removeClass('span');
		$('.add p').children('span').addClass('span1');
	},
	function(){
		$(this).children('p').css({'border':'none','height':'32px','background':'#F9F9F9'});
		$(this).children('ul').css({'display':'none'})
		$('.add p').children('span').removeClass('span1');
		$('.add p').children('span').addClass('span');
	}
)
//header地址切换：
$('.add ul').children('li').click(
	function(){
		var tex=$(this).text();
		$('.add p').children('span').text(tex);
	}
)
//右侧下拉菜单:
$('.my').hover(
	function(){
		$(this).children('a').css({'border':'1px solid #E6E6E6','border-bottom':'none','background':'#ffffff'})
		$(this).children('div').css({'display':'inline-block','background':'#ffffff'});
	},
	function(){
		$(this).children('a').css({'border':'none','height':'32px','background':'#F9F9F9'});
		$(this).children('div').css({'display':'none'})
	}
)
//搜索框全部分类函数：
$('#xiala').hover(
	function(){
		$(this).children('div').css({'display':'inline-block'})
	},
	function(){
		$(this).children('div').css('display','none')
	}
)
//全部商品分类习分类
$('.ul li').hover(
	function(){
		$(this).children('.first').css({'border':'1px solid #FF2832','border-right':'none','background':'#ffffff','width':'185px','color':'#FF2832','font-size':'14px'});
		$(this).children('.two').css('display','inline-block');
	},
	function(){
		$(this).children('.first').css({'border':'none','background':'','width':'200px','color':'','font-size':'13px'});
		$(this).children('.two').css('display','none');
	}
)

//商品细分类中上部分的导航：
$('.book1 a').hover(
	function(){
		$(this).css('background-color',' #FF2832')
		$(this).siblings('span').css('background-color',' #FFBCBF')
	},
	function(){
		$(this).css('background-color','')
		$(this).siblings('span').css('background-color',' #C8C8C8')
	}
)
//商品分类带图函数：
$('.ul li').hover(
	function(){
		$(this).children('.first').css({'border':'1px solid #FF2832','border-right':'none','background':'#ffffff','width':'180px','color':'#FF2832','font-size':'14px'});
		$(this).children('.three').css('display','inline-block');
	},
	function(){
		$(this).children('.first').css({'border':'none','background':'','width':'200px','color':'','font-size':'13px'});
		$(this).children('.three').css('display','none');
	}
)
//*************************轮播图***********************//
//轮播图函数
	var num=0;
	var num2=0
	diaoyong();
	function diaoyong(){
	 timer=setInterval(lunbo,2000);
	function lunbo(){
		num+=1;
		num2+=1;
		//上部分轮播：
		$('.lunbo-top img').eq(num).fadeIn(600).siblings('img').fadeOut(600);
		if(num>=7){
			num=-1;
		}
		$('.num span').eq(num).css('background-color','red').siblings().css('background-color',' #646464');
		//下部分轮播：
		$('.lunbo-bottom div').eq(num2).fadeIn(600).siblings().fadeOut(600);
		if(num2>=1){
			num2=-1;
		}
	}
	}
//鼠标放入上部分轮播图中轮播停止函数；
	$('.lunbo-top').hover(
		function(){
			clearInterval(timer);
			$('.top6').show();
			$('.top6 li').animate({width:'33px'},300);
		},
		function(){
			diaoyong();
			$('.top6 li').animate({width:'0px'},300);
		}
	)		
//鼠标放入下部分轮播图中轮播停止函数；		
$('.lunbo-bottom').hover(
		function(){
			clearInterval(timer);
			$('.bottom6').show();
			$('.bottom6 li').animate({width:'30px'},300);
		},
		function(){
			diaoyong();
			$('.bottom6 li').animate({width:'0px'},300);
		}
	)
 //上轮播图圆点控制轮播：
 $('.num span').mouseover(
	function(){
		clearInterval(timer);
		num1=$(this).index();
		num3=$(this).index();
		$('.lunbo-top img').eq(num1).fadeIn(600).siblings('img').fadeOut(600)
		$('.num span').eq(num1).css('background-color','#DB192A').siblings().css('background-color','');
		if(num3%2==0){
			$('.lunbo-bottom div').eq(1).fadeIn(600).siblings().fadeOut(600);
		}
		else if(num3%2!==0){
			$('.lunbo-bottom div').eq(0).fadeIn(600).siblings().fadeOut(600);
		}
})
//上部分左侧控制按钮：
$('.top-left').hover(
	function(){
		$(this).removeClass('top-left');
		$(this).addClass('top-left1');
	},
	function(){
		$(this).removeClass('top-left1');
		$(this).addClass('top-left');
	}
)
$('.top-left').click(
	function(){
		clearInterval(timer);
		num-=1;
		num2-=1;
		$('.lunbo-top img').eq(num).fadeIn(600).siblings('img').fadeOut(600);
		$('.num span').eq(num).css('background-color','red').siblings().css('background-color',' #646464');
		if(num<=0){
			num=8;
		}
		if(num2%2==0){
			$('.lunbo-bottom div').eq(1).fadeIn(600).siblings().fadeOut(600);
		}
		else if(num2%2!==0){
			$('.lunbo-bottom div').eq(0).fadeIn(600).siblings().fadeOut(600);
		}
	}
)
// 上部分右侧控制键
$('.top-right').hover(
	function(){
		$(this).removeClass('top-right');
		$(this).addClass('top-right1');
	},
	function(){
		$(this).removeClass('top-right1');
		$(this).addClass('top-right');
	}
)
$('.top-right').click(
	function(){
		clearInterval(timer);
		num+=1;
		num2+=1;
		$('.lunbo-top img').eq(num).fadeIn(600).siblings('img').fadeOut(600);
		$('.num span').eq(num).css('background-color','red').siblings().css('background-color',' #646464');
		if(num>=7){
			num=-1;
		}
		if(num2%2==0){
			$('.lunbo-bottom div').eq(1).fadeIn(600).siblings().fadeOut(600);
		}
		else if(num2%2!==0){
			$('.lunbo-bottom div').eq(0).fadeIn(600).siblings().fadeOut(600);
		}
	}
)
//下图左侧按钮控制：
$('.bottom-left').hover(
	function(){
		$(this).removeClass('bottom-left');
		$(this).addClass('bottom-left1');
	},
	function(){
		$(this).removeClass('bottom-left1');
		$(this).addClass('bottom-left');
	}
)
$('.bottom-left').click(
	function(){
		clearInterval(timer);
		num-=1;
		num2-=1;
		$('.lunbo-top img').eq(num).fadeIn(600).siblings('img').fadeOut(600);
		$('.num span').eq(num).css('background-color','red').siblings().css('background-color',' #646464');
		if(num<=0){
			num=8;
		}
		if(num2%2==0){
			$('.lunbo-bottom div').eq(1).fadeIn(600).siblings('div').fadeOut(600);
		}
		else if(num2%2!==0){
			$('.lunbo-bottom div').eq(0).fadeIn(600).siblings('div').fadeOut(600);
		}
	}
)
//下图右侧按钮：
$('.bottom-right').hover(
	function(){
		$(this).removeClass('bottom-right');
		$(this).addClass('bottom-right1');
	},
	function(){
		$(this).removeClass('bottom-right1');
		$(this).addClass('bottom-right');
	}
)
$('.bottom-right').click(
	function(){
		clearInterval(timer);
		num+=1;
		num2+=1;
		$('.lunbo-top img').eq(num).fadeIn(600).siblings('img').fadeOut(600);
		$('.num span').eq(num).css('background-color','red').siblings().css('background-color',' #646464');
		if(num>=7){
			num=-1;
		}
		if(num2%2==0){
			$('.lunbo-bottom div').eq(1).fadeIn(600).siblings('div').fadeOut(600);
		}
		else if(num2%2!==0){
			$('.lunbo-bottom div').eq(0).fadeIn(600).siblings('div').fadeOut(600);
		}
	}
)
//轮播图右边中间自动切换部分:
$(function(){
	var q=0;
	one();
	function one(){
	 go=setInterval(qie,2500);
		function qie(){
			q+=1;
			if(q>=2){
				q=0;
			}
			$('.p-top span').eq(q).css({'display':'inline-block','background-color':'#ffffff'}).siblings().css({'display':'inline-block','background-color':'#F0F0F0'});
			$('.section-right ul').eq(q).css('display','inline-block').siblings('ul').css('display','none');
		}}
	//鼠标放入清除定时器，手动选择切换：
	$('.p-top span').hover(
			function(){
				clearInterval(go);
				$(this).css({'display':'inline-block','background-color':'#ffffff'}).siblings('span').css({'display':'inline-block','background-color':'#F0F0F0'});
				$('.section-right ul').eq($(this).index()).css('display','inline-block').siblings('ul').css('display','none');
			},
			function(){
				one();
			}
		)
})
//轮播图右边下部自动切换部分:
$(function(){
	var a=0;
	two()
	function two(){
	 go1=setInterval(doo,2500);
		function doo(){
			a+=1;
			if(a>=3){
				a=0;
			}
			$('.p-bottom span').eq(a).css({'display':'inline-block','background-color':'#ffffff'}).siblings().css({'display':'inline-block','background-color':'#F0F0F0'});
			$('.ul3 a').eq(a).css('display','inline-block').siblings().css('display','none');
		}}
	//鼠标放入清除定时器，手动选择切换：
	$('.p-bottom span').hover(
			function(){
				clearInterval(go1);
				$(this).css({'display':'inline-block','background-color':'#ffffff'}).siblings().css({'display':'inline-block','background-color':'#F0F0F0'});
				$('.ul3 a').eq($(this).index()).css('display','inline-block').siblings().css('display','none');
			},
			function(){
				two();
			}
		)
})
//图书电子轮播图函数：
$(function(){
		z=0;
	small1();	
	function small1(){
	small=setInterval(book,2000);
		function book(){
			z=z+1;  
			$('.new-lunbo a').eq(z).fadeIn(500).siblings('a').stop().fadeOut(500);
			$('.new-lunbo p').children('span').eq(z).css({'background-color':'#000000'}).siblings('span').css({'background-color':''})
			if(z>=3){
				z=-1;
			}
		}
	}
//图书电子轮播图鼠标选择功能函数：
$('.new-lunbo').hover(
		function(){
			clearInterval(small);
			$('.div span').animate({'width':'31px'},500);
			$('.div').show();
		},
		function(){
			small1();
			$('.div span').animate({'width':'0px'},500);
			$('.div').hide();
		}
	)
$('.new-lunbo p').children('span').click(
		function(){
			clearInterval(small);
			var tt=$(this).index();
			var width=$('.new-lunbo a').width();
			$(this).css({'background-color':'#000000'}).siblings('span').css({'background-color':''})
			$('.new-lunbo a').eq(tt).fadeIn(500).siblings('a').stop().fadeOut(500);
		}
	)
//图书电子轮播图左侧选择按钮函数：
$('.new-left').click(
	function(){
		clearInterval(small);		
		z--;
		console.log(z)
		$('.new-lunbo').find('a').eq(z).fadeIn(500).siblings('a').fadeOut(500);
		$('.new-lunbo').find('p').children('span').eq(z).css({'background-color':'#000000'}).siblings('span').css({'background-color':''});
		if(z<=0){
			z=4;
		}
	})
$('.new-right').click(
	function(){
		clearInterval(small);
		if(z>=3){
			z=-1;
		}
		z+=1;
		$('.new-lunbo').find('a').eq(z).fadeIn(500).siblings('a').fadeOut(500);
		$('.new-lunbo').find('p').children('span').eq(z).css({'background-color':'#000000'}).siblings('span').css({'background-color':''});

	})
})
//图书电子书切换功能函数：
$('.img-book-left ul ').children('li').mouseover(
		function(){
			var q=$(this).index();

			$('.floor').eq(q).css('display','inline-block').siblings('.floor').css('display','none');
			$(this).css({'border':'2px solid #000000','border-bottom':'none','box-sizing': 'border-box;','width':'112px','background-color':'#ffffff'}).siblings('li').css({'border':'none','border-right':' 1px solid #E6E6E6','background-color':'#F5F5F5','width':'116px'})
		}
	)
//图书畅销榜，新书榜切换榜:
$('.newnew p').children('span').mouseover(
		function(){
			var eq=$(this).index();
			$(this).css({'background-color':'#ffffff'}).siblings('span').css({'background-color':'#F5F5F5'})
			$('.newnew ol').eq(eq).css({'display':'inline-block'}).siblings('ol').css({'display':'none'})
		}
)
//图书畅销榜，新书榜切换榜 内容查看:
$('.newnew ol').children('li').mouseover(
	function(){
		$(this).children('p').css('display','none').siblings('a').css('display','inline-block');
		$(this).siblings('li').children('a').css('display','none').siblings('p').css('display','inline-block');
		$(this).next('li').children('p').css('display','none');		
	}
)
//服装切换：
$('.clothing-top').children('li').mouseover(
		function(){
			console.log(1)
			var q=$(this).index();
			$('.go1').eq(q).css('display','inline-block').siblings('.floor').css('display','none');
			$(this).css({'border':'2px solid #000000','border-bottom':'none','box-sizing': 'border-box;','width':'112px','background-color':'#ffffff'}).siblings('li').css({'border':'none','border-right':' 1px solid #E6E6E6','background-color':'#F5F5F5','width':'116px'})
		}
	)
$('.img-book-left ul').children('li').mouseover(
		function(){
			var q=$(this).index();
			$('.go').eq(q).css('display','inline-block').siblings('.floor').css('display','none');
			$(this).css({'border':'2px solid #000000','border-bottom':'none','box-sizing': 'border-box;','width':'112px','background-color':'#ffffff'}).siblings('li').css({'border':'none','border-right':' 1px solid #E6E6E6','background-color':'#F5F5F5','width':'116px'})
		}
	)
//无缝滚动：
$(function(){
	var n=0;
	do1();
	function do1(){
	 Do=setInterval(doo,10);
	function doo(){
		n+=2;
		q=n+'px';
		$('.seamless ul').animate({'margin-left':-n},10);
		if(n>=3600){
		$('.seamless ul').animate({'margin-left':0},1);
		n=0;	
		}
	}
}
//鼠标放入  轮播停止：
$('.seamless').hover(
	function(){
		clearInterval(Do);
		$('.wf').show();
		$('.wf').children('span').animate({width:'31px'},500);
	},
	function(){
		$('.wf').children('span').animate({width:'0px'},500);
		$('.wf').hide();
		do1();
	}
)
//左侧按钮控制流动：
$('.wf-left').click(
		function(){
			clearInterval(Do);
			n+=120;
			$('.seamless ul').animate({'margin-left':-n},300);
				if(n>=3600){
			$('.seamless ul').animate({'margin-left':0},1);
			n=0;	
			}
		}
	)
//右侧按钮控制流动：
$('.wf-right').click(
		function(){
			clearInterval(Do);
			n+=120;
			var seamless =document.getElementsByClassName('seamless')[0];
			var ul=seamless.getElementsByTagName('ul')[0];
			var left=ul.offsetLeft;
			var m=left+n;
			$('.seamless ul').animate({'margin-left':m+'px'},10);
				if(left>=0){
			$('.seamless ul').animate({'margin-left':-2400+'px'},1);
			n=0;	
			}
		}
	)	
})
//页面顶部滑动出现搜索框函数：
$(window).scroll(function(){
	if(document.body.scrollTop>=650){
		$('#top').slideDown()
	}else{$('#top').slideUp()}
})
//页面右部固定搜索框:
$('.right-top a').hover(
		function(){
			$(this).children('span').show();
			$(this).children('span').animate({right:"80px"},300);
			var q =('right-top'+$(this).index())
			var qq=('right-top1'+$(this).index())
			$(this).removeClass(q);
			$(this).addClass(qq);
		},
		function(){
			$(this).children('span').animate({right:"-68px"},200);
			var q =('right-top'+$(this).index())
			var qq=('right-top1'+$(this).index())
			$(this).removeClass(qq);
			$(this).addClass(q);
		}
	)
//页面左部滑动nav:
$(window).scroll(function(){
	if(document.body.scrollTop>=650&&document.body.scrollTop<7900){
		$('#hd').show();
	}
	else if(document.body.scrollTop>=7900){
		$('#hd').hide();
	}
	else if(document.body.scrollTop<=640){
		$('#hd').hide();
	}
})
//页面左部滑动nav点击跳转:
$(function(){
// $(window).on('scroll',show);
$('.hd').children('li').click(function(){
		$(window).scroll().off();
		var num9 = $(this).index();
		var q1=parseInt($('.f1').eq(num9).offset().top);
		$('html body').animate({'scrollTop':q1+'px'},500);
	})
})
//页面左部滑动nav hover:
$('#hd ul li').hover(
		function(){
			$(this).children('span').animate({'margin-left':'0px'},100)
		},
		function(){
			$(this).children('span').animate({'margin-left':'-140px'},100)
		}
)





