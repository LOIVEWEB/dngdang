(function(){
		$('header .upDown').hover(function(){
			$(this).animate({paddingTop:'0px',paddingBottom:'30px'},250);
			$(this).animate({paddingTop:'15px',paddingBottom:'15px'},250);
			$(this).animate({paddingTop:'0px',paddingBottom:'30px'},250);
			$(this).animate({paddingTop:'15px',paddingBottom:'15px'},250);
		},function(){
			$(this).animate({paddingTop:'15px',paddingBottom:'15px'});
		})
		$('aside .img').hover(function(){
			$(this).children('.title').animate({left:'10%',opacity:'0.8'});
		},function(){
		$(this).children('.title').animate({left:'-6%',opacity:'0'});	
		})
		$('.close').click(function(){
			$(this).parents('.Fixed').siblings('.title1').css({display:'none'});
			$(this).parents('.Fixed').css({display:'none'});

		})
		$('.title').click(function(){
			$(this).siblings('.title1').css({display:'block'});
			$(this).siblings('.Fixed').css({display:'block'});
			$(this).siblings('.Fixed').animate({width:'300px'});
		})

})()