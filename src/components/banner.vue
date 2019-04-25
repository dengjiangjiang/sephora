<template>
    <div class="banner" id="banner_ps">
		<div class="banner_seach">
			<img src="../assets/img/inputSearch.png" alt="">
			<span>口碑女士香氛</span>
		</div>
	</div>
</template>
<script>
import BannerPic from "../assets/js/bannerPic"
export default {
    mounted () {
        new BannerPic({
	"boxDom":document.getElementById("banner_ps"),
	"imgs":["static/img/m_coupon_20190321.jpg","static/img/m_fresh_20190404.jpg",
	"static/img/m_maskmoment_20190321.jpg","static/img/m_travel_20190328.jpg","static/img/m_tropicalcolors_20190404.jpg",
	"static/img/m_vancleefarpels_20190404.jpg"],
	"doudouDirection":"下",
	"douIsCircle":false,
	"timeSpace":2000
	
		})
	
    } 
 
}
</script>
<style scoped>
    .banner{
	height: 3.4rem;
    width: 100%;
    position: relative;
    background:black;
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


