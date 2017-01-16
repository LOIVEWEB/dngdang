//datePost中导入时间函数
dateTime();
function dateTime(){

	var datepost=document.getElementsByClassName('kitirro')[0].getElementsByClassName('datepost');
	var today=new Date;
	var year=today.getFullYear();
	var month=today.getMonth();
	var day=today.getDate();
	var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','OCt','Nov','Dec'];
	for(i in datepost){
		datepost[i].innerHTML=months[month]+' '+day+','+year;
	}
}

//点击赞数增加函数
likePost();
function likePost(){
	var num=[1,1,1]
	var like=document.getElementsByClassName('kitirro')[0].querySelectorAll('.icon-like i');
	for(var i=0;i<like.length;i++){
		like[i].index=i;
		like[i].onclick=function(){
			if(num[this.index]==1){
				this.nextElementSibling.innerHTML=Number(this.nextElementSibling.innerHTML)+1;
					num[this.index]=0;
			}
		}
	}
}

//设置这招和显示文字的宽高
var kitirro=document.getElementsByClassName('kitirro')[0];
var img=document.getElementsByClassName('kitirro')[0].querySelector('.father img');
var mainBody=document.getElementsByClassName('kitirro')[0].querySelector('.onmouse');
var mask=document.getElementsByClassName('kitirro')[0].querySelectorAll('.mask');
var dopa=document.getElementsByClassName('kitirro')[0].getElementsByClassName('dopa');
var father=document.getElementsByClassName('kitirro')[0].getElementsByClassName('father');
var mainH=mainBody.clientHeight;

setInterval(function(){
	var mainW=mainBody.clientWidth;
	var screen=document.getElementsByTagName('body')[0].offsetWidth;
	var imgH=img.clientHeight;
	var imgW=img.clientWidth;
	if(screen<=992&&screen>=400){
		for(i in father){
			father[i].style='height:370px;width:360px;';
		}
	}else if(screen>=1200){
		for(i in father){
			father[i].style='height:370px;width:360px;';
		}
	}else if(screen<400){
		for(i in father){
			father[i].style='height:'+mainW*(37/36)+'px;width:'+mainW+'px;';
		}
	}else if(screen>992&&screen<1200){
		for(i in father){
			father[i].style='height:'+mainW*(37/36)+'px;width:'+mainW+'px;';
		}
	}
},100)

//获取元素在页面中的位置
function getleft(obj){
	var l=obj.offsetLeft; 
	while(obj.offsetParent != null){ 
		obj = obj.offsetParent; 
		l += obj.offsetLeft; 
	}	
	return l; 
}
function gettop(obj){
	var l=obj.offsetTop; 
		obj = obj.offsetParent; 
		l += obj.offsetTop; 	
	return l; 
}

//鼠标进入文字显示效果函数
mouse();
function mouse(){
	var imgH=img.clientHeight;
	var imgW=img.clientWidth;
	var mouseW=mainBody.clientWidth;
	var mouseH=mainBody.clientHeight;
	for(i in dopa){
		dopa[i].style='left:'+imgW+'px;top:'+imgH+'px';
	}
	for(i=0;i<father.length;i++){
		father[i].index=i;

		//鼠标进入事件
		father[i].onmouseenter=function(){
			var w=this.clientWidth;
			var h=this.clientHeight;
			var kiTop=kitirro.offsetTop;
			var soTop=gettop(this)-kiTop;
			console.log(soTop)
			var x=(event.x-getleft(this)-(w/2))*(w>h?(h/w):1);
			var y=(event.y-soTop-(h/2))*(h/w?(w/h):1);
			var direction=Math.round((((Math.atan2(y, x)*(180/Math.PI))+180)/90)+3)%4;
			var child=this.lastElementChild;
			if(direction==0){
				child.style.left='0px';
				child.style.top=-imgH+'px';
				var num=-imgH;
				var hd=setInterval(function(){
					num+=10;
					child.style.top=num+'px';
					if(num>=0){
						clearInterval(hd)
					}
				},10)
			}
			else if(direction==1){
				child.style.top='0px';
				child.style.left=-imgW+'px';
				var num=imgW;
				var hd=setInterval(function(){
					num-=10;
					child.style.left=num+'px';
					if(num<=0){
						clearInterval(hd)
					}
				},10)
			}
			else if(direction==2){
				child.style.left='0px';
				child.style.top=imgH+'px';
				var num=imgH;
				var hd=setInterval(function(){
					num-=10;
					child.style.top=num+'px';
					if(num<=0){
						clearInterval(hd)
					}
				},10)
			}
			else if(direction==3){
				child.style.top='0px';
				child.style.left=-imgW+'px';
				var num=-imgW;
				var hd=setInterval(function(){
					num+=10;
					child.style.left=num+'px';
					if(num>=0){
						clearInterval(hd)
					}
				},10)
			}
		}
		father[i].onmouseleave=function(){
			var w=this.clientWidth;
			var h=this.clientHeight;
			var kiTop=kitirro.offsetTop;
			var soTop=gettop(this)-kiTop;
			var x=(event.x-getleft(this)-(w/2))*(w>h?(h/w):1);
			var y=(event.y-soTop-(h/2))*(h/w?(w/h):1);
			var direction=Math.round((((Math.atan2(y, x)*(180/Math.PI))+180)/90)+3)%4;
			var child=this.lastElementChild;
			child.style.left='0px';
			child.style.top='0px';
			if(direction==0){
				var num=0;
				var hd=setInterval(function(){
					num-=10;
					child.style.top=num+'px';
					if(num<=-imgH){
						clearInterval(hd)
					}
				},10)
			}
			else if(direction==1){
				var num=0;
				var hd=setInterval(function(){
					num+=10;
					child.style.left=num+'px';
					if(num>=imgW){
						clearInterval(hd)
					}
				},10)
			}
			else if(direction==2){
				var num=0;
				var hd=setInterval(function(){
					num+=10;
					child.style.top=num+'px';
					if(num>=imgH){
						clearInterval(hd)
					}
				},10)
			}
			else if(direction==3){
				var num=0;
				var hd=setInterval(function(){
					num-=10;
					child.style.left=num+'px';
					if(num<=-imgW){
						clearInterval(hd)
					}
				},10)
			}
		}
	}
}