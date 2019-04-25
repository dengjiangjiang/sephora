<template>
    <header class="top">
		<ul class="top_box">
			<li class="top_ico" ><img src="../assets/img/logoImg.png" alt=""></li>
			<li class="top_sephora"><img src="../assets/img/sepLogo.png" alt=""></li>
			<li  class="top_login" ><router-link to='register'>登录</router-link></li>
		</ul>
		<div class="top_seach">
			<img src="../assets/img/inputSearch.png" alt="">
			<span class="trumpcard" >王牌精华臻选</span>
		</div>
	</header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .top{
	height: 0.44rem;
	width: 100%;
	position: relative;

}
.top_box{
	height: 0.44rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.top_box img,a{
	display: block;
}
.top_ico img{
	height: 0.3rem;
	width: 0.3rem;
	margin-left: 0.1rem;
}
.top_sephora img{
	height: 0.3rem;
	width: 1.5rem;
}
.top_login a{
	font-family: PingFangSC-Regular;
	font-size: 0.15rem;
	margin-right: 0.1rem;
}
.top_seach{
	height: 0.3rem;
	width: 2.66rem;
	position: absolute;
	top: 8px;
	left:0.55rem;
	background: #eee;
	display: flex;
	align-items: center;
	display:none ;
}
.top_seach img{
	display: block;
	height: 0.15rem;
	width: 0.15rem;
	margin:0 0.05rem;
}
.trumpcard{
	font-family: PingFangSC-Regular;
	font-size:0.14rem;
	display: block;
	line-height: 0.3rem;
	text-align: center;
	color: #666;
}
/*slideshow*/
.banner{
	height: 3.4rem;
	width: 100%;
}
.banner_seach{
	position: absolute;
	height: 0.3rem;
	width: 3.5rem;
	background: #eee;
	z-index: 10;
	top: 0.1rem;
	left: 0.1rem;
	opacity: 0.6;
}
.banner_seach img{
	position: absolute;
	height: 0.15rem;
	width: 0.15rem;
	top: 0.075rem;left: 0.075rem;

}
.banner_seach span{
	position: absolute;
	top: 0.05rem;left: 0.3rem;
	font-family: PingFangSC-Regular;
	font-size: 0.15rem;

}
</style>
