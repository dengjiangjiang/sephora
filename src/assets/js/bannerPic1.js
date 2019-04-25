
//轮播图
export default class BannerPic1{
	constructor(obj){
		let defaultObj = {
			"boxDom":null,//轮播图的容器
			"imgDoms":[],//存放所有图片dom的数组(img标签)
			"width":"500",
			"height":"300",
			"imgs":[],
			"douSize":12,//豆豆的大小
			"douSpace" : 10,//豆豆的间距
			"douColor" : "#fff",//豆豆的颜色
			"douHighColor":"white",//高亮颜色
			"douIsCircle":true,//是否是圆的
			"doudouDirection":"上",//"上"，"右"，"下"，"左"，

			"currIndex":0,//当前显示的图片序号
			"myTimer":null,
			"timeSpace":2000
		};

		//属性
		for(let key in defaultObj){
			if(obj[key]==undefined){
				this[key] = defaultObj[key];
			}else{
				this[key] = obj[key];
			}
		}

		this.width = this.boxDom.offsetWidth;
		this.height = this.boxDom.offsetHeight;

		this.initUI();
		this.createUI();
		this.addEvent();
		this.autoPlay();
	}

	initUI(){
		this.boxDom.style.position = "relative";
		this.boxDom.style.overflow = "hidden";
	}

	createUI(){

		//1、创建所有的img标签
		for(let i=0;i<this.imgs.length;i++){
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = `position: absolute;
					left:${this.width}px;
					top:0px;
					width: 100%;
					height: 100%;`;
			if(i==0){
				imgDom.style.left = "0px";
			}
			this.boxDom.appendChild(imgDom);
			this.imgDoms.push(imgDom);
		}

		//2、创建UL（豆豆的容器）
		let ulDom = document.createElement("ul");
		ulDom.style.cssText=`position: absolute;
					list-style: none;				
					z-index: 3;`;

		switch(this.doudouDirection){
			case "上":
						ulDom.style.top="20px";
						ulDom.style.left= (this.width-this.douSize*2*this.imgs.length)/2 +"px";
						break;
			case "下":
						ulDom.style.bottom="0.05rem";
						ulDom.style.left="1.25rem";
						break;
		}
		this.boxDom.appendChild(ulDom);
		//3、创建li（豆豆）
		for(let i=0;i<this.imgs.length;i++){
			let liDom = document.createElement("li");
			liDom.setAttribute("index",i);
			liDom.style.cssText =`
					opacity:0.4;
					float:left;
					width:0.325rem;
					height: 0.02rem;
					margin-right: ${this.douSpace}px;
					background-color: ${this.douColor};
				`;
			if(this.douIsCircle){
				liDom.style.borderRadius = "50%";
			}
			if(i==0){
				liDom.style.backgroundColor = this.douHighColor;
				liDom.style.opacity = "1";
			}
			ulDom.appendChild(liDom);
		}
	}


	addEvent(){
		//2、停止播放（给box绑定事件）
		this.boxDom.onmouseenter = ()=>{
			this.stopPlay();
		}

		//3、继续播放（给box绑定事件）
		this.boxDom.onmouseleave = ()=> {
			this.autoPlay();
		}

		//4、跳转(给li)
		let liDoms = this.boxDom.lastElementChild.children;
		for(let i=0;i<liDoms.length;i++){
			let obj = this;

			liDoms[i].onclick = function(){
				obj.goImg(this.getAttribute("index"));
			}
			
		}
	}

	autoPlay(){
			this.myTimer = setInterval(()=>{
				//一、数据处理
				//1、改变数据
				let outIndex = this.currIndex;
				 this.currIndex++;

				//2、边界处理
				if( this.currIndex>this.imgs.length-1){
					 this.currIndex=0;
				}

				//二、改变外观
				 this.showImg( this.currIndex,outIndex);

			},this.timeSpace);

	}

	stopPlay(){
		window.clearInterval(this.myTimer);
	}

	goImg(index){
		//一、数据处理
		//1、改变数据
		let outIndex = this.currIndex;
		this.currIndex = index;
		
		//2、边界处理
		if(this.currIndex<0 || this.currIndex>this.imgs.length-1){
			this.currIndex = 0;
		}

		//二、改变外观
		this.showImg(this.currIndex,outIndex);

	}

	//显示指定的图片
	//参数：
	//进入的图片的下标
	//出去的图片的下标
	showImg(inIndex,outIndex){
		if(inIndex==outIndex){
			return;
		}

		if(inIndex<0 || inIndex>2){
			return;
		}

		if(outIndex<0 || outIndex>2){
			return;
		}

		this.imgDoms[inIndex].style.left = this.width+"px";
		//1、改图片
		slideInOut(this.imgDoms[inIndex],this.imgDoms[outIndex],200);

		//2、改豆豆		
		//1）、让所有的li的background-color是pink
		let liDoms = this.boxDom.lastElementChild.children;
		for(let i=0;i<liDoms.length;i++){
			liDoms[i].style.backgroundColor = this.douColor;
			liDoms[i].style.opacity = "0.4";

		}
		//2）、让当前li的background-color是red
		// liDoms[inIndex].style.backgroundColor = this.douHighColor;
		liDoms[inIndex].style.opacity = "1";
	}

}
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