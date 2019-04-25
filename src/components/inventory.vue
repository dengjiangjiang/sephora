<template>
    <div class="inventory">
			<ul class="goods">
				<li class="shop">
					<div class="inventory_box">
						<a href=""><img class="inventory_ps" src="../assets/img/1_n_07106_210x210.jpg" alt=""></a>
						<h2 ><a class="inventory_title" href="">GIVENCHY</a></h2>
						<p><a class="introduce" href="">娇兰亲亲唇膏 (彩色壳限量版)</a></p>
						<p class="price">￥320.00</p>
					</div>
				</li>
			
			</ul>
		</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.inventory{

width: 100%;
overflow-x:scroll;
overflow-y:auto;
}
.inventory_ps{
	height: 1.06rem;
	width: 1.06rem;
	display: block;
}
.goods{
	display: flex;
}
.shop{
	height: 1.88rem;	
	width:1.06rem;
	margin-left: 0.1rem;
}
.inventory_title{
	font-size: 0.1rem;
	font-weight: 100;
	display: block;
}
.introduce{
	font-size: 0.1rem;
	font-weight: 100;
	display: block;
}
.price{
	font-size: 0.1rem;
	font-weight: 100;
}
.inventory_box{
	text-align: center;
}
</style>


