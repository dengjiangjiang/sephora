<template>
    <div class="nav">
			<ul class="nav_list">
				<li class="nav_lis">
					<div class="nav_ico">
						<a href=""><img class="photos" src="../assets/img/brand-1.png" alt=""></a>
					</div>
					<h2 class="nav_crunchies "><router-link to="/particulars">畅销榜单</router-link></h2>
				</li>
				<li class="nav_lis">
					<div class="nav_ico">
						<a href=""><img class="photos" src="../assets/img/brand-2.png" alt=""></a>
					</div>
					<h2 class="nav_crunchies "><a href="">本周特惠</a></h2>
				</li>
				<li class="nav_lis">
					<div class="nav_ico">
						<a href=""><img class="photos" src="../assets/img/brand-3.png" alt=""></a>
					</div>
					<h2 class="nav_crunchies "><a href="">新品速递</a></h2>
				</li>
				<li class="nav_lis">
					<div class="nav_ico">
						<a href=""><img class="photos" src="../assets/img/brand-4.png" alt=""></a>
					</div>
					<h2 class="nav_crunchies "><a href="">礼物套装</a></h2>
				</li>
				<li class="nav_lis">
					<div class="nav_ico">
						<a href=""><img class="photos" src="../assets/img/brand-5.png" alt=""></a>
					</div>
					<h2 class="nav_crunchies "><a href="">每日惊喜</a></h2>
				</li>
				<li class="nav_lis">
					<div class="nav_ico">
						<a href=""><img class="photos" src="../assets/img/brand-6.png" alt=""></a>
					</div>
					<h2 class="nav_crunchies "><a href="">全部品牌</a></h2>
				</li>
				<li class="nav_lis">
					<div class="nav_ico">
						<a href=""><img class="photos" src="../assets/img/brand-7.png" alt=""></a>
					</div>
					<h2 class="nav_crunchies "><a href="">小众尖货</a></h2>
				</li>
				<li class="nav_lis">
					<div class="nav_ico">
						<a href=""><img class="photos" src="../assets/img/brand-8.png" alt=""></a>
					</div>
					<h2 class="nav_crunchies "><a href="">本周特惠</a></h2>
				</li>
				<li class="nav_lis">
					<div class="nav_ico">
						<a href=""><img class="photos" src="../assets/img/brand-9.png" alt=""></a>
					</div>
					<h2 class="nav_crunchies "><a href="">美力课堂</a></h2>
				</li>
				<li class="nav_lis">
					<div class="nav_ico">
						<a href=""><img class="photos" src="../assets/img/brand-10.png" alt=""></a>
					</div>
					<h2 class="nav_crunchies "><a href="">更多</a></h2>
				</li>
				
			</ul>
		</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .nav{
	height: 1.5rem;
	width: 100%;
	margin-top:0.15rem;
}
.nav_list{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.nav_lis{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; 
}
.nav_ico{
	margin:0.1rem 0.15rem ;
}
.nav_ico a .photos{
	display: block;
}
.nav_crunchies{
	font-size: .09rem;
    font-family: PingFangSC-Regular;
    font-weight: 100;
}
.nav_ico .photos{
	height: 0.36rem;
	width: 0.36rem;
}
</style>

