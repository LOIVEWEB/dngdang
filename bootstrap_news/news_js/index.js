//datePost中导入时间函数
dateTime();
function dateTime(){
	var datepost=document.getElementsByClassName('datepost');
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
	var like=document.querySelectorAll('.icon-like i');
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
var img=document.querySelector('.father img');
var mainBody=document.querySelector('.onmouse');
var mask=document.querySelectorAll('.mask');
var dopa=document.getElementsByClassName('dopa');
var father=document.getElementsByClassName('father');
var mainH=mainBody.clientHeight;
// var mainW=mainBody.clientWidth;
setInterval(function(){
	var mainW=mainBody.clientWidth;
	var screen=document.getElementsByTagName('body')[0].offsetWidth;
	var imgH=img.clientHeight;
	var imgW=img.clientWidth;
	// if(imgW==360){
	// 	for(i in dopa){
	// 		dopa[i].style='height:'+imgH+'px;width:'+imgW+'px;';
	// 		}
	// 	}else{
	// 		for(i in dopa){
	// 			dopa[i].style='height:'+imgH+'px;width:'+imgW+'px;font-size:'+imgW/30+'px';
	// 		}
	// 	}
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
	// for(i in mask){
	// 	mask[i].style='height:'+imgH+'px;width:'+imgW+'px;';
	// }
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
	while(obj.offsetParent != null){ 
		obj = obj.offsetParent; 
		l += obj.offsetTop; 
	} 
	return l; 
}

//鼠标进入文字显示效果函数
mouse();
function mouse(){
	var imgH=img.clientHeight;
	var imgW=img.clientWidth;
	var mouseW=mainBody.clientWidth;
	var mouseH=mainBody.clientHeight;
	// var screen=document.getElementsByTagName('body')[0].offsetWidth;
	// console.log(imgH)
	for(i in dopa){
		dopa[i].style='left:'+imgW+'px;top:'+imgH+'px';
	}
	for(i=0;i<father.length;i++){
		father[i].index=i;
			//鼠标进入事件
		father[i].onmouseenter=function(){
			var w=this.clientWidth;
			var h=this.clientHeight;
			var x=(event.x-getleft(this)-(w/2))*(w>h?(h/w):1);
			var y=(event.y-gettop(this)-(h/2))*(h/w?(w/h):1);
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
			if(direction==1){
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
			if(direction==2){
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
			if(direction==3){
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
			var x=(event.x-getleft(this)-(w/2))*(w>h?(h/w):1);
			var y=(event.y-gettop(this)-(h/2))*(h/w?(w/h):1);
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
			if(direction==1){
				var num=0;
				var hd=setInterval(function(){
					num+=10;
					child.style.left=num+'px';
					if(num>=imgW){
						clearInterval(hd)
					}
				},10)
			}
			if(direction==2){
				var num=0;
				var hd=setInterval(function(){
					num+=10;
					child.style.top=num+'px';
					if(num>=imgH){
						clearInterval(hd)
					}
				},10)
			}
			if(direction==3){
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








//修改前
// var onmouse=document.getElementsByClassName('onmouse');
// mouse();
// function mouse(){
// 	var h=onmouse[0].clientHeight;
// 	var w=onmouse[0].clientWidth;
// 	var ko=h/w;
// 	var k1=0;
// 	for(var i=0;i<onmouse.length;i++){
// 		onmouse[i].onmouseenter=function(){
// 			var h=this.clientHeight;
// 			var w=this.clientWidth;
// 			var l=this.offsetLeft;
// 			var t=this.offsetTop;
// 			var zx=l+w/2;
// 			var zy=t+h/2;
// 			var sx=event.x;
// 			var sy=event.y;
// 			var p=this.getElementsByTagName('p')[0];
// 			k1=(zy-sy)/(zx-sx);
// 			if(k1<ko&&k1>-ko){
// 				p.style.top='0px';
// 				if(sx<=zx){
// 					p.style.left='-1000px';
// 					var num=-1000;
// 					var hd=setInterval(function(){
// 						num+=10;
// 						p.style.left=num+'px';
// 						if(num>=0){
// 							clearInterval(hd);
// 						}
// 					},4)
// 				}else{
// 					p.style.left='1000px';
// 					var num=1000;
// 					var hd=setInterval(function(){
// 						num-=10;
// 						p.style.left=num+'px';
// 						if(num<=0){
// 							clearInterval(hd);
// 						}
// 					},4)
// 				}
// 			}else{
// 				p.style.left='0px';
// 				if(sy<=zy){
// 					p.style.top='-100px';
// 					var num=-100;
// 					var hd=setInterval(function(){
// 						num+=10;
// 						p.style.top=num+'px';
// 						if(num>=0){
// 							clearInterval(hd);
// 						}
// 					},40)
// 				}else{
// 					p.style.top='100px';
// 					var num=100;
// 					var hd=setInterval(function(){
// 						num-=10;
// 						p.style.top=num+'px';
// 						if(num<=0){
// 							clearInterval(hd);
// 						}
// 					},40)
// 				}
// 			}
// 		}
// 		onmouse[i].onmouseleave=function(){
// 			var h=this.clientHeight;
// 			var w=this.clientWidth;
// 			var l=this.offsetLeft;
// 			var t=this.offsetTop;
// 			var zx=l+w/2;
// 			var zy=t+h/2;
// 			var sx=event.x;
// 			var sy=event.y;
// 			var p=this.getElementsByTagName('p')[0];
// 			p.style.left='0px';
// 			p.style.top='0px';
// 			k1=(zy-sy)/(zx-sx);
// 			if(k1<ko&&k1>-ko){
// 				if(sx<=l){
// 					var num=0;
// 					var hd=setInterval(function(){
// 						num-=10;
// 						p.style.left=num+'px';
// 						if(num<=-1000){
// 							clearInterval(hd);
// 						}
// 					},10)
// 				}else{
// 					var num=0;
// 					var hd=setInterval(function(){
// 						num+=10;
// 						p.style.left=num+'px';
// 						if(num>=1000){
// 							clearInterval(hd);
// 						}
// 					},10)
// 				}
// 			}else{
// 				if(sy<=t){
// 					var num=0;
// 					var hd=setInterval(function(){
// 						num-=10;
// 						p.style.top=num+'px';
// 						if(num<=-100){
// 							clearInterval(hd);
// 						}
// 					},40)
// 				}else{
// 					var num=0;
// 					var hd=setInterval(function(){
// 						num+=10;
// 						p.style.top=num+'px';
// 						if(num>=100){
// 							clearInterval(hd);
// 						}
// 					},40)
// 				}
// 			}
// 		}
// 	}
// }
