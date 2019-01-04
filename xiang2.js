/*商品缩略图划入上面大图随之变化*/
var bottom = document.getElementsByClassName('bottom1')[0].getElementsByTagName('img');
var img = document.getElementsByClassName('left1')[0].getElementsByTagName('img')[0];
var img1 = document.getElementsByClassName('left111')[0].getElementsByTagName('img')[0];
var ttt = document.getElementsByClassName('ttt')[0];
var left111 = document.getElementsByClassName('left111')[0];
var left1 = document.getElementsByClassName('left1')[0];
var box = document.getElementsByClassName('box')[0];
bottom[0].onclick = function(){
	bottom[1].setAttribute('class', 'img3 img3rrr');
	bottom[2].setAttribute('class', 'img3');
	img.src = "img/pp0.jpeg";
}
bottom[1].onmouseover = function(){
	bottom[1].setAttribute('class', 'img3 img3rrr');
	bottom[2].setAttribute('class', 'img3');
	img.src = "img/pp0.jpeg";
}
bottom[2].onmouseover = function(){
	bottom[1].setAttribute('class', 'img3');
	bottom[2].setAttribute('class', 'img3 img3rrr');
	img.src = "img/pp1.jpeg";
}
bottom[3].onclick = function(){
	bottom[1].setAttribute('class', 'img3');
	bottom[2].setAttribute('class', 'img3 img3rrr');
	img.src = "img/pp1.jpeg";
}

/*划入大图，右侧显示放大镜*/
left1.onmouseover = function(){
	left111.style.display = "block";
	ttt.style.display = "block";
	img1.src = img.src;
	
}
left1.onmouseout = function(){
	left111.style.display = "none";
	ttt.style.display = "none";
}
left1.onmousemove = function (ev) {
	var ev = ev || window.event;
	var Top=document.documentElement.scrollTop || document.body.scrollTop;
	var oL = ev.clientX - box.offsetLeft - ttt.offsetWidth/2 -25;
	var oT = ev.clientY - box.offsetTop - ttt.offsetHeight/2 -25 + Top;

	var oMaxw = left1.offsetWidth - ttt.offsetWidth;
	var oMaxh = left1.offsetHeight - ttt.offsetHeight;

	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

	ttt.style.left = oL + 'px';
	ttt.style.top = oT + 'px';
	
	img1.style.left = - 2*oL +80 +'px' ;
	img1.style.top = - 2*oT + 'px';
	ttt.style.cursor = "crosshair";
}
/*商品规格点击时边框及背景的显示*/
var biankuang = document.getElementsByClassName('wee')[0].getElementsByTagName('div');
var xuanze2 = document.getElementsByClassName('xuanze2')[0];
biankuang[0].onclick = function(){
	biankuang[0].setAttribute('class', 'teshu daa');
	biankuang[1].setAttribute('class', 'daa');
	xuanze2.innerHTML = '"' + biankuang[0].innerHTML + '"';
}
biankuang[1].onclick = function(){
	biankuang[1].setAttribute('class', 'teshu daa');
	biankuang[0].setAttribute('class', 'daa');
	xuanze2.innerHTML = '"' + biankuang[1].innerHTML + '"';
}
biankuang[0].onmouseover = function(){
	biankuang[0].style.cursor = "pointer";
}
biankuang[1].onmouseover = function(){
	biankuang[1].style.cursor = "pointer";
}
/*商品数量加减号的效果*/
var shuliang = document.getElementsByClassName('shuliang')[0].getElementsByTagName('button');
var btnn = document.getElementsByClassName('btn2')[0];
shuliang[0].onclick = function(){
	if(btnn.value == 1){
		shuliang[0].style.cursor = "no-drop";
		btnn.value = btnn.value;
	}else{
		shuliang[0].style.cursor = "pointer";
		btnn.value--;
	}
}
shuliang[1].onclick = function(){
	if(btnn.value == 5){
		btnn.value = btnn.value;
		shuliang[1].style.cursor = "no-drop";
	}else{
		shuliang[1].style.cursor = "pointer";
		btnn.value++;
	}
}

/*点击“加入购物车”按钮弹出蒙罩效果，点击“X”或者“继续购物”按钮，蒙罩消失*/
var gouwu = document.getElementsByClassName('gouwu');
var jiagou = document.getElementsByClassName('jiagou')[0];
var dadada = document.getElementsByClassName('dadada')[0];
gouwu[1].getElementsByClassName('bt2')[0].onclick = function(){
	jiagou.style.display = "block";
	dadada.style.display = "block";
}
gouwu[0].getElementsByClassName('bt1')[0].onclick = function(){
	jiagou.style.display = "none";
	dadada.style.display = "none";
}
document.getElementById('eee').onclick = function(){
	jiagou.style.display = "none";
	dadada.style.display = "none";
}