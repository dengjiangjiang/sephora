<template>
<div>
    <div class="promotionbox">
				<div class="promotions">
					
						<p class="xiangxi">商品评论<span class="shuzi">(27)</span></p>
					<div class="drink">
						<span class="pinglun">此商品暂时还没有评价</span>
						<span class="fenshu">4.7分</span>
						<span class="xingzhi"></span>
						<span class="span"></span>
					</div>
					
				</div>
				<div class="pinjia">
					<div class="xinxi">
						<div class="touxiang">
							<img class="youxiang" src="../assets/img/system06.jpg" alt="">
						</div>
						<p class="xiafan">夏凡</p>
						<span class="call"></span>
					</div>
					<h2 class="goodsss">非常好，等8折的时候再入手一个，这个被我家狗子给啃碎了！</h2>
					<div class="dogs">
						<span class="time">2019-04-11</span>
					</div>
					
				</div>
					<div class="all">
						<p class="look">查看全部品论</p>
					</div>

				<div class="promotions">
					
						<p class="xiangxi">商品评论</p>
					<div class="drink">
						<p class="pinglun">有疑问来发表第一个问题</p>
						<span class="span"></span>
					</div>
					
				</div>
                
			</div>
            <div class="specification">
				<ul class="specificationbox">
					<li class="shop">商品详情</li>
					<li class="shop2">商品详情</li>
				</ul>
			</div>
</div>
    
            
</template>
<script>
export default {
    
}
</script>
<style scoped>
   .promotionbox{

	width: 90%;
	margin:0 auto;
}.naverbox{
	width: 20%;
	height: 0.56rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; 
}
.shuzi{
	font-size: 0.12rem;
	color: #666666;
}
.fenshu{
	color: #e00;
	font-size: 0.12rem;
}

	
.youxiang{
	height: 0.3rem;
	width: 0.3rem;
	
	display: block;
}
.touxiang{
	text-align: center;
	line-height: 0.3rem;
	height: 0.3rem;
	width: 0.3rem;
	border-radius: 50%; 
	overflow:hidden;
}
.xiafan{
	font-size: 0.14rem;
	color: #666;
	margin:0 0.2rem;
}
.call{
	width:0.17rem;
	height:0.12rem;
	
}
.xinxi{
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.goodsss{
	font-size: 0.14rem;
	font-weight: 100;
	padding:0.1rem 0;
	
}
.time{
	font-size: 12px;
    color: #999;
    display: block;
}
.pinjia{
	border-bottom: 1px solid #ddd;
}
.dogs{
	margin-bottom: 0.1rem;
}
.look{
	font-size: 0.14rem;
	text-align: center;
}
.all{
	padding:0.1rem 0;
	
	margin:0 auto;
}


.promotions{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin:0.1rem 0;
	background: white;
}
.xiangxi{
	font-size: 0.15rem;
}
.span{
	display: block;
	height: 0.2rem;
	width: 0.2rem;
	background: url(../assets/img/categorypage.png);
	background-position:-660px 8px;
}
.drink{
display: flex;
align-items: center;
}


.select{
	font-size:0.15rem;
	color: #000;
	margin-right:  0.1rem ;
}
.select1{
	font-size:0.15rem;
	color: #666666;
	
}
.baogelibox{
	width: 100%;
	background: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.22rem 0 ;
	
}
.baogeli{
	font-size:0.14rem;
	color: #000;
}
.imgs{
	height: 0.3rem;
	width: 0.57rem;
	border: 4px solid #fff;
	margin:0 0.2rem ;
	padding: 0 0.1rem;
}
.sound{
	margin-right: 0.2rem;
}
.pinglun{
	font-size: 0.12rem;
	color: #666;
}
.specificationbox{
	width: 100%;
	justify-content: space-around;
	align-items: center;
	background: #f5f5f5;
	display: flex;
	text-align: center;
	padding: 0.15rem 0;
}
.shop{
	width: 50%;
	font-size: 0.14rem;
	color: #ee0000;
	box-sizing: border-box;
	border-right: 1px solid #ccc;
}
.shop2{
	width: 50%;
	font-size: 0.14rem;
	color: #999999;
}
.xiangqing{
	width: 96%;
	float: right;
}
.imgsss{
	width: 100%;
}
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
button{
	display: block;
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
.naver{
	display: flex;
	width: 100%;
	height: 0.56rem;
	z-index: 2;
	position: absolute;
	top: 45px;
	background: #FFF;
}
.load{
	display:block;
	
}

.index{
	font-size: 0.1rem;
	color:#858585;
}
</style>


