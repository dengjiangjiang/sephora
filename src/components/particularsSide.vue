<template>
<div class="contentbox">
			<div class="content_box">
				<ul class="photo_list">
					<li class=""><a href=""><img class="content_imgs" src="../assets/img/1_n_06341_640x640.jpg" alt=""></a></li>
					<li><a href=""><img class="content_imgs" src="../assets/img/1_n_06341_640x640.jpg" alt=""></a></li>
					<li><a href=""><img class="content_imgs" src="../assets/img/1_n_06341_640x640.jpg" alt=""></a></li>
					<li><a href=""><img class="content_imgs" src="../assets/img/1_n_06341_640x640.jpg" alt=""></a></li>
				</ul>
				<ul class="doudou">
					<li class="doudoubox"></li>
					<li class="doudoubox"></li>
					<li class="doudoubox"></li>
					<li class="doudoubox"></li>
					
				</ul>
				
			</div>
		</div>
<!-- <div class="swiper-container content_box">
	    <ul class="swiper-wrapper photo_list">
            <li class="swiper-slide"><a href=""><img class="content_imgs" src="../assets/img/1_n_06341_640x640.jpg" alt=""></a></li>
            <li class="swiper-slide"><a href=""><img class="content_imgs" src="../assets/img/1_n_06341_640x640.jpg" alt=""></a></li>
            <li class="swiper-slide"><a href=""><img class="content_imgs" src="../assets/img/1_n_06341_640x640.jpg" alt=""></a></li>
            <li class="swiper-slide"><a href=""><img class="content_imgs" src="../assets/img/1_n_06341_640x640.jpg" alt=""></a></li>
         </ul>
        <div class="swiper-pagination"></div>
	</div> -->
</template>
<script>
// import Swiper from "swiper"
// import 'swiper/dist/css/swiper.min.css'

export default {
   
//     mounted: function () {
  
//      var mySwiper = new Swiper ('.swiper-container', {
//       direction: 'silde', // 垂直切换选项
    
//       loop: true
   
//   })
// }
}
</script>
<style scoped>
    .contentbox{
	width: 100%;

}
.content_box{
	width: 90%;
	height: 3.5rem;
	margin:0 auto;
	position: relative;
	
}

.photo_list::-webkit-scrollbar{
	display: none;
}
.photo_list{
	width: 100%;
	height: 3.5rem;
	box-sizing: border-box;
	border: 0;
	overflow-y: hidden;
	overflow-x: auto;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.photo_list li{
	width:100%;
	height: 3.5rem;
	flex-grow:1;
	flex-shrink: 0; 

}

.content_imgs{
	width: 100%;
	height: 3.5rem;
	
}

.doudoubox{
	width: 0.15rem;
	height: 5px;
	
	margin-left: 0.1rem;

}
.doudou{
	position: absolute;
	bottom: 0.1rem;
	left: 1.2rem;
	display: flex;
	justify-content: center;
	z-index: 2
}
</style>


