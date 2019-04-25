<template>
<div>
     <div class="xiazia">
			<a class="xiazaiApp" href="">下载SEPHORA APP</a>
		</div>
		<div class="over">
			<div class="end"></div><p class="bye">浏览已完毕</p><div class="end"></div>
		</div>
</div>
   
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .xiazia{
	height: 0.4rem;
	width: 100%;
	background:#000;
	text-align: center;
	line-height: 0.4rem;
	margin-top: 2rem;
}
.xiazaiApp{
	font-size: 0.15rem;
    color: white;
    display: block;
}
.over{
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.3rem 0 .2rem 0;
	background: #f5f5f5;
}
.bye{
	font-size: 14px;
	color: #dedede;
	margin:0 0.2rem;
}
.end{
	width:1.14rem;
	height: 1px;
	background: #dedede;
	
}
</style>


