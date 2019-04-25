<template>

    <div class="top">
		<div class="topBox">
			<div class="nav">
				<div><a href=""><img class="navphoto" src="../assets/img/goback (1).png" alt=""></a>
				</div>
				<ul class="navList">
					<li>商品</li>
					<li>详情</li>
					<li>评价</li>
				</ul>
				<div>
					<i class="iconfont icon-more"> </i>
				</div>
			
			</div>
		</div>
		<ul class="naver">
		<li class="naverbox">
			<a class="load" href=""><i calss="iconfont icon-home"></i></a>
			<p class="index">首页</p>
		</li>
		<li class="naverbox">
			<a class="load1" href=""><i calss="iconfont icon-fenleisousuo"></i></a>
			<p class="index">分类</p>
		</li>
		<li class="naverbox">
			<a class="load2" href=""><i calss="iconfont icon-youhui"></i></a>
			<p class="index">优惠专属</p>
		</li>
		<li class="naverbox">
			<a class="load3" href=""><i calss="iconfont icon-weibiaoti-"></i></a>
			<p class="index">购物车</p>
		</li>
		<li class="naverbox">
			<a class="load4" href=""><i calss="iconfont icon-home1"></i></a>
			<p class="index">我的</p>
		</li>
	</ul>
		</div>
	
</template>
<script>
export default {
    
}
</script>
<style scoped>
.top{
	height: 0.45rem;
	width: 100%;
	border-bottom: 1px solid #ddd;
	background: white;
	position: relative;
}
.topBox{
	height: 0.45rem;
	width: 94%;
	margin:0 auto;
}
.nav{
	height: 0.45rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	

}
.navphoto{
	height: 0.3rem;
	width: 0.3rem;
	display: block;
}
.navList{
	display: flex;
}
.navList li{
	font-size: 0.16rem;
	color:#666;
	margin:0 0.15rem;
	padding: 0.1rem 0;
	/*box-sizing: border-box;*/
	border-bottom: 3px solid #000;
}
.icon-more{
	display: block;
	font-size: 0.25rem;
	color: #666;
}
.naver{
	display: flex;
	width: 100%;
	height: 0.56rem;
	z-index: 2;
	position: absolute;
	top: 45px;
	background: #FFF;
	margin:0 auto;
}
.naverbox{
	    width: 20%;
    height: 0.56rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.load{
	display:block;

}

.index{
	font-size: 0.1rem;
	color:#858585;
}

</style>


