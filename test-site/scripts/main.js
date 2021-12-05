let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/rose1.jpg'){
		myImage.setAttribute('src','images/kobe.jpg');
	}
	else{
		myImage.setAttribute('src','images/rose1.jpg')
	}
}//以上是图片切换功能

//个性化欢迎功能
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('你叫什么');
	if(!myName||myName===null){
		setUserName();
	}
	else{
		localStorage.setItem('name',myName);
		myHeading.innerHTML = myName + "欢迎你了解罗斯的故事";
	}
}  //个性化信息设置函数

//初始化代码：页面初次读取时进行的构造工作
if(!localStorage.getItem('name')){
	setUserName();
}
else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = storedName + "欢迎你了解罗斯的故事";
}

//为按钮设置onclick事件处理器
myButton.onclick = function(){
	setUserName();
}

