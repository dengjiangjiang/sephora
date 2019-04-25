//运动封装:

//参数：
//dom对象
//样式属性名
//起始值
//结束值
//方向(1：表示正向，-1：表示反向)
//时间间隔
//步长

function mover01(domObj,attr,startValue,endValue,direction,timeSpace,step,func) {
	
	let value = startValue;
	let myTimer = setInterval(function(){
		value = value+direction*step;

		// if(direction>0){
		// 	if(value>endValue){
		// 		value = endValue;
		// 		window.clearInterval(myTimer);
		// 	}
		// }else{
		// 	if(value<endValue){
		// 		value = endValue;
		// 		window.clearInterval(myTimer);
		// 	}
		// }

		// if(direction>0?value>endValue:value<endValue){
		if(Math.abs(value-endValue)<step){
			value = endValue;
			window.clearInterval(myTimer);
			//func&&func();
			if(func){
				func();
			}
		}

		if(attr=="opacity"){
			domObj.style[attr] = value;
		}else{
			domObj.style[attr] = value+"px";
		}		
	},timeSpace);	
}


//参数：
//dom对象
//样式属性名
//结束值
//时间间隔
//步长

function mover02(domObj,attr,endValue,timeSpace,step,func) {
	let startValue = parseInt(getStyle(domObj,attr));
	let direction = startValue-endValue>0?-1:1;

	mover01(domObj,attr,startValue,endValue,direction,timeSpace,step,func);
}

//运动三：
// 让某个物体花多长时间从当前位置移动到某个位置
//参数：
//dom对象
//样式属性名
//结束值
//总时长

function mover03(domObj,attr,endValue,timeLong,func) {

	let startValue = parseInt(getStyle(domObj,attr));
	let direction = startValue-endValue>0?-1:1;

	let timeSpace = 10 ;//时间间隔 = 总时间/步子数
	let stepCount = timeLong/timeSpace; //步子数 = 总时间/时间间隔
	let step = Math.abs(startValue-endValue)/stepCount ;//步长 = 路程/步子数

	mover01(domObj,attr,startValue,endValue,direction,timeSpace,step,func);
}

//缓冲运动的封装

//参数：
//dom对象
//样式属性名
//起始值
//结束值
//方向(1：表示正向，-1：表示反向)
//时间间隔
//固定值

function mover04(domObj,attr,startValue,endValue,direction,timeSpace,num,func) {
	let value =  startValue;
	let step ;
	let myTimer = setInterval(function(){
		step = (endValue-value)/num;

		value= direction>0?Math.ceil(value+direction*step):Math.floor(value+direction*step);
		
		if(Math.abs(endValue-value)<=step){
			console.log("到头了");
			value = endValue;
			window.clearInterval(myTimer);
			func&&func();
		}

		domObj.style[attr] = value+"px";

	},timeSpace);
	
}

//淡入：
//参数：
//dom对象
//总时长

function fadeIn(domObj,timeLong,func) {
	let attr = "opacity";
	let endValue = 1;
	mover03(domObj,attr,endValue,timeLong,fun);
}

//淡出：
//参数：
//dom对象
//总时长

function fadeOut(domObj,timeLong,func) {
	let attr = "opacity";
	let endValue = 0;
	mover03(domObj,attr,endValue,timeLong,fun);
}


//封装抛物线运动(右开口，下半部分为例)
//参数：
// dom对象
// 起点
// 终点
// 总时长

//返回值：无

function parabolaRightDown(domObj,startPoint,endPoint,timeLong,func){
	
	//一、初始化
	//把dom对象放在起始位置
	domObj.style.left = startPoint.x+"px";
	domObj.style.top = startPoint.y+"px";

	//1、平移到原点	
	let offsetX = endPoint.x-startPoint.x;
	let offsetY = endPoint.y-startPoint.y;
	//2、计算p的值
	let p = (offsetY*offsetY)/(2*offsetX);
	//3、给定时间间隔
	let timeSpace = 10;
	//4、计算步长
	let step = Math.abs(endPoint.x-startPoint.x)/(timeLong/timeSpace) // endValue-startValue/步子数;//
	//5、画的是以原点为起点的抛物线，所以，left1为0
	let left1 = 0;
	
	//二、启动定时器,做抛物线运动
	let myTimer = setInterval(function(){
		//1、改变数据
		left1=left1+step;
		let top1=Math.sqrt(2*p*left1);//右开口，

		//2、判断边界
		if(left1>=offsetX){
			left1 = offsetX;
			top1=Math.sqrt(2*p*left1);
			window.clearInterval(myTimer);
			if(func){
				func();
			}
		}

		//3、改变外观			
		domObj.style.left = left1+startPoint.x+"px";
		domObj.style.top = top1+startPoint.y+"px";
		
	},timeSpace);
}


//封装抛物线运动(右开口，上半部分为例)
//参数：
// dom对象
// 起点
// 终点
// 总时长

//返回值：无

function parabola02RightUp(domObj,startPoint,endPoint,timeLong,func){
	//一、初始化
	//把dom对象放在起始位置
	domObj.style.left = startPoint.x+"px";
	domObj.style.top = startPoint.y+"px";

	//1、平移到原点	
	let offsetX = endPoint.x-startPoint.x;
	let offsetY = endPoint.y-startPoint.y;
	//2、计算p的值
	let p = (offsetY*offsetY)/(2*offsetX);
	//3、给定时间间隔
	let timeSpace = 10;
	//4、计算步长
	let step = Math.abs(endPoint.x-startPoint.x)/(timeLong/timeSpace) // endValue-startValue/步子数;//
	//5、画的是以原点为起点的抛物线，所以，left1为0
	let left1 = 0;
	
	//二、启动定时器,做抛物线运动
	let myTimer = setInterval(function(){
		//1、改变数据
		left1=left1+step;
		let top1=-1*Math.sqrt(2*p*left1);//右开口，

		//2、判断边界
		if(left1>=offsetX){
			left1 = offsetX;
			top1=-1*Math.sqrt(2*p*left1);
			window.clearInterval(myTimer);
			if(func){
				func();
			}
		}
		
		//3、改变外观			
		domObj.style.left = left1+startPoint.x+"px";
		domObj.style.top = top1+startPoint.y+"px";
		
	},timeSpace);
}


//封装抛物线运动(右开口，下半部分为例)
//参数：
// dom对象
// 起点
// 终点
// 总时长
// lineDirection:上半部分或者下半部分，1：下半部分，-1：上半部分
//返回值：无

function parabolaRight(domObj,startPoint,endPoint,timeLong,lineDirection,func){
	
	//一、初始化
	//把dom对象放在起始位置
	domObj.style.left = startPoint.x+"px";
	domObj.style.top = startPoint.y+"px";

	//1、平移到原点	
	let offsetX = endPoint.x-startPoint.x;
	let offsetY = endPoint.y-startPoint.y;
	//2、计算p的值
	let p = (offsetY*offsetY)/(2*offsetX);
	//3、给定时间间隔
	let timeSpace = 10;
	//4、计算步长
	let step = Math.abs(endPoint.x-startPoint.x)/(timeLong/timeSpace) // endValue-startValue/步子数;//
	//5、画的是以原点为起点的抛物线，所以，left1为0
	let left1 = 0;
	
	//二、启动定时器,做抛物线运动
	let myTimer = setInterval(function(){
		//1、改变数据
		left1=left1+step;
		let top1= lineDirection*Math.sqrt(2*p*left1);//右开口，

		//2、判断边界
		if(left1>=offsetX){
			left1 = offsetX;
			top1=lineDirection*Math.sqrt(2*p*left1);
			window.clearInterval(myTimer);
			if(func){
				func();
			}
		}

		//3、改变外观			
		domObj.style.left = left1+startPoint.x+"px";
		domObj.style.top = top1+startPoint.y+"px";
		
	},timeSpace);
}


//多属性封装
//参数：
//dom对象
//属性名的json对象(属性名和终点)
//时长
//回调函数

//以下调用表示：
//让box元素，花1秒钟时间，最终变成什么状态（left为500，top为300，width为1000）
/*
animate($("#box"),{
	left:500,
	top:300,
	width:1000
},1000);
*/

function animate(domObj,attrObj,timeLong,func){

	// let startValue = parseInt(getStyle(domObj,attr));	
	let startValueObj={};
	for(let key in attrObj){
		startValueObj[key] = parseFloat(getStyle(domObj,key));
	}
	// startValueObj={
	// 	left:100,
	// 	top:50,
	// 	width:100
	// }

	// let direction = startValue-endValue>0?-1:1;
	let directionObj = {};
	for(let key in attrObj){
		directionObj[key] = startValueObj[key]-attrObj[key]>0?-1:1;
	}

	let timeSpace = 10 ;//时间间隔 = 总时间/步子数
	let stepCount = timeLong/timeSpace; //步子数 = 总时间/时间间隔
	// let step = Math.abs(startValue-endValue)/stepCount ;//步长 = 路程/步子数
	let stepObj = {};
	for(let key in attrObj){
		stepObj[key] = Math.abs(startValueObj[key]-attrObj[key])/stepCount;
	}
	
	// mover01(domObj,attr,startValue,endValue,direction,timeSpace,step,func);
	let valueObj = startValueObj;//赋值的是地址（引用）

	let myTimer = setInterval(function(){
		//一、数据处理
		//1、改变数据
		// value = value+direction*step;
		for(let key in attrObj){
			valueObj[key] = valueObj[key]+directionObj[key]*stepObj[key];
		}

		//2、边界处理
		let isOver = false;
		for(let key in attrObj){
			if(Math.abs(valueObj[key]-attrObj[key])<stepObj[key]){
				valueObj[key] = attrObj[key];
				isOver = true;				
			}
		}

		if(isOver){
			window.clearInterval(myTimer);
			func&&func();
		}
		
		//二、外观
		for(let key in attrObj){
			if(key=="opacity"){
				domObj.style[key] = valueObj[key];
			}else{
				domObj.style[key] = valueObj[key]+"px";
			}	
		}		
	},timeSpace);	
}


//两张图片的淡入淡出
//参数：
//淡入的dom对象
//淡出的dom对象
//时长；

function fadeInOut(domInObj,domOutObj,timeLong,func){
	
	let timeSpace = 10 ;//时间间隔 = 总时间/步子数
	let stepCount = timeLong/timeSpace; //步子数 = 总时间/时间间隔
	let step = 1/stepCount ;//步长 = 路程/步子数


	let currOpacity = 0;
	let myTimer = setInterval(()=>{

		currOpacity+=step;

		if(currOpacity>=1){
			currOpacity=1;
			clearInterval(myTimer);
			func&&func();
		}

		domInObj.style.opacity = currOpacity;
		domOutObj.style.opacity = 1-currOpacity;
	},timeSpace);
}

//参数：
//滑入入的dom对象
//滑出的dom对象
//时长；

function slideInOut(domInObj,domOutObj,timeLong,func){
	
	let timeSpace = 10 ;//时间间隔 = 总时间/步子数
	let stepCount = timeLong/timeSpace; //步子数 = 总时间/时间间隔
	let step = domInObj.offsetWidth/stepCount ;//步长 = 路程/步子数


	let currLeft = 0;
	let myTimer = setInterval(()=>{

		currLeft -= step;

		if(currLeft<=-1*domInObj.offsetWidth){
			currLeft=-1*domInObj.offsetWidth;
			clearInterval(myTimer);
			func&&func();
		}

		domInObj.style.left =(currLeft+domInObj.offsetWidth)+"px";
		domOutObj.style.left = currLeft+"px";
	},timeSpace);
}