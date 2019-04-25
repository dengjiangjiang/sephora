<template>
    <footer class="bottom">
		
			<ul class="shinks">
				<li class="bottomboxs">
					<div class="shink"><a href=""><img class="dipian" src="../assets/img/tabBar_home_a.png"></a></div>
					<h2 class="indexs">首页</h2>
					
				</li>
				<li class="bottomboxs">
					<div class="shink"><a href=""><img class="dipian" src="../assets/img/tabBar_category_n.png"></a></div>
					<h2 class="index">分类</h2>
					
				</li>
				<li class="bottomboxs">
					<div class="shink"><a href=""><img class="dipian" src="../assets/img/tabBar_mei_n2.png"></a></div>
					<h2 class="index">优惠专属</h2>
					
				</li>
				<li class="bottomboxs">
					<div class="shink"><a href=""><img class="dipian" src="../assets/img/tabBar_cart_n.png"></a></div>
					<h2 class="index">购物袋</h2>
					
				</li>
				<li class="bottomboxs">
					<div class="shink"><a href=""><img class="dipian" src="../assets/img/tabBar_me_n.png"></a></div>
					<h2 class="index">我的</h2>
					
				</li>

			</ul>
		
	</footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.bottom{
	height: 0.65rem;
	width: 100%;
	border-top:2px solid #dedede;
}
.bottombox{
	height: 0.65rem;
	width: 100%;
}
.shink a img{
	display: block;
}
.dipian{
	width: 0.3rem;
	height: 0.3rem;
}
.indexs{
	font-size: 12px;
	font-weight: 100;
}
.index{
	font-size: 12px;
	font-weight: 100;
	color: #b8b8b8;

}
.shink{
	display: flex;
	 
	justify-content: center;
}
.bottomboxs{
	display: flex;
	flex-direction: column; 
	justify-content: center;
	align-items:center;

}
.shinks{
	height: 0.65rem;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items:center;
}
</style>
