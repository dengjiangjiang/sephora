<template>
    <footer class="bottom">
		<div class="box1">
			<div class="boxs" >
				<!-- <button class="box4"></button> -->
			</div>
			<a class="back" href=""></a>
		</div>
		<div class="box2">
			<button class="shopcart">加入购物车</button>
			<button class="goumai">立即购买</button>
		</div>
	</footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .bottom{
	height: 0.55rem;
	width: 100%;
	display: flex;
}
.shopcart{
	font-size: 0.16rem;
	color: white;
	border: none;
	outline: none;
	width: 50%;
	background: #000;
}
.box1{
	width: 30%;
	display: flex;
}
.box2{
	width: 70%;
	display: flex;
}
.goumai{
	font-size: 0.16rem;
	color: white;
	outline: none;
	border: none;
	background: #ee0000;
	width:50%;
}
.back{
	display: block;
	width: 50%;
	background: url(../assets/img/mobile_pdp.png) no-repeat;
	background-position: -398px -96px;
	background-size: 800%; 
	
}
.boxs{
	width: 50%;
	background: url(../assets/img/mobile_pdp.png) no-repeat;
	background-position: -348px -96px;
	background-size: 800%; 
	
}
</style>


