<template>
    <div class="brand">
			<div class="brand_photos">
				<img src="../assets/img/newBackup.png" alt="">
			</div>
			<div class="brand_box">
				<div class="brandTelit">
					<ul>
						<li class="brand_right">
							<a class="brand_font" href="">全部品牌</a>
						</li>
						<li class="brand_left">
							<a href=""><img src="../assets/img/viewMore.png" alt=""></a>
						</li>
					</ul>
				</div>
				<div class="brand_banner">
					<div class="brand_bannerBox" id="brand_bannerBoxs"></div>
				</div>
				<div class="photoboxs">
					<ul class="photolist">
						<li class="imgs"><a href=""><img class="sephora" src="../assets/img/sephoracollection_144X60.png" alt=""></a></li>
						

					</ul>
				</div>
			</div>
		</div>
</template>
<script>
import BannerPic1 from "../assets/js/bannerPic1"
export default {
		mounted () {
        new BannerPic1({
	"boxDom":document.getElementById("brand_bannerBoxs"),
	"imgs":["img/m_superbrand1_20190404.jpg",
	"img/m_superbrand2_20190404.jpg"],
	"doudouDirection":"下",
	"douIsCircle":false,
	"timeSpace":2000
	
		})
	
    } 
}
</script>
<style scoped>
    .brand{
	height: 6.43rem;
	width: 100%;
	position: relative;
	
}
.brand_photos{
	height: 6.43rem;
	width: 100%;
	position: absolute;
	top:0px;
	z-index: 10;
	animation:sildtop 0.5s linear 0s;
	animation-fill-mode:forwards; 
}
@keyframes sildtop{
	0%{transform: translateY(0);}
	100%{transform: translateY(-0.43rem);}


}
.brand_photos img{
	height: 6rem;
	width: 100%;
	bottom: 0;
	position: absolute;
	bottom: 0;
}
.brand_box{
	height: 6.43rem;
	width: 100%;
	position: absolute;
	z-index: 20;
	top: 0;
}

.brand_font{
	font-size: 0.18rem;
	color: #000;
	display: block;
}
.brand_right{
	float: left;
	margin-left: 0.2rem;
}
.brand_left{
	float: right;
	margin-right:  0.2rem;
}
.brand_left img{
	display: block;
	height: 0.24rem;
	width: 0.24rem;
}
.brand_banner{
	width: 100%;
	height: 2.5rem;
	margin-top:0.4rem;
}
.brand_bannerBox{
	width: 3.35rem;
	height: 2.5rem;
	margin:0 auto;
	background: #fff;
}
.brandTelit{
	height: 0.24rem;
	margin:.2rem 0 0.4rem 0;
}
.photoboxs{
	width: 100%;
	height: 1.81rem;

}
.photolist{
	background: white;
}
.photolist{
	width: 3.15rem;
	/*height: 1.61rem;*/
	margin:0 auto;
	padding: 0.1rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around; 
	align-items: center;
}
.imgs{
	margin:.05rem 0;
}
.sephora{
	width: 0.77rem;
	height: 0.32rem;
	display: block;

}
</style>


