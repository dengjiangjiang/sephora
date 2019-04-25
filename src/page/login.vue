<template>
    <div class="register">
		<div class="registerbox">
			<div class="top">
				<div class="goback"><a href=""><img src="../assets/img/goback (1).png" alt=""></a>
				</div>

			</div>
			<div class="register_pass"><p class="pass">注册</p>
			</div>
			<div class="verificationCode ">
				
			</div>
			<div class="account">
				<p class="account_Number">图形验证码</p>
				<div class="verification">
				<div class="veri">
					<input class="btn" type="text">
				</div>
				<div class="yincang">
					<img class="gfhldofh" src="../assets/img/del@2x.png" alt="">
				</div>
				<div class="yangzhengm">
					<div class="photos">
						<img class="dsdsd" src="../assets/img/validateDefault.png" alt="">
					</div>
				</div>
			</div>
			
		</div>
		<div class="account">
				<p class="account_Number">手机</p>
				<div class="verification">
				<div class="veri">
					<input class="btn" type="text">
				</div>
				<div class="yincang">
					<img class="gfhldofh" src="../assets/img/del@2x.png" alt="">
				</div>
				<div >
					<button class="get">获取验证码</button>
				</div>
			</div>
			
		</div>
		<div class="account">
			<p class="account_Number">短信验证码</p>
			<div class="verification">
				<input class="btn" type="text">
				<div class="yincang">
					<img class="gfhldofh" src="../assets/img/del@2x.png" alt="">
				</div>
			</div>
			</div>
			<div class="account">
			<p class="account_Number">密码</p>
			<div class="verification">
				<input class="btn" type="text">
				<div class="yincang">
					<img class="gfhldofh" src="../assets/img/del@2x.png" alt="">
				</div>
			</div>
			</div>
			<div class="account">
			<p class="account_Number">确认密码</p>
			<div class="verification">
				<input class="btn" type="text">
				<div class="yincang">
					<img class="gfhldofh" src="../assets/img/del@2x.png" alt="">
				</div>
			</div>
			</div>
		<div class="registers"><a href="">同意条款并注册</a></div>
			<div class="heng"><div class="dian"></div></div>
			<div class="xieyis">
				
				<p class="ready">阅读<a class="xieyi" href="">《丝芙兰用户协议》</a></p>
							
			</div>

		
	</div>
</div>
  
</template>
<script>


export default {
   
}
</script>
<style scoped>
.register{
	width: 100%;
	height: 100%;
	background: url(../assets/img/registerBg.jpg) ;
	background-size: cover;

}
.registerbox{
	width: 94%;
	margin:0 auto;
}
.top{
	padding: .05rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.goback img{
	width: 0.3rem;
	height: 0.3rem;
		display: block;
}
.register_pass{
	margin:0.25rem 0 0.14rem 0;
}
.pass{
	font-size: 0.3rem;
	font-weight: 100;
}
.account{
	width: 100%;
	height: 0.6rem;
	
	position: relative;
	border-bottom:  1px solid #999;


}
.account_Number{
	font-size: 0.15rem;
	color: #999;
	position: absolute;
	top: 0.2rem;

}
.btn{
	display: block;
	outline: none;
	border: none;
	
	width: 100%;
	height: 0.6rem;
	font-size: 0.18rem;
	/*z-index: 2;*/
	background: transparent;
	color: black;
	
}
.veri{
	width: 60%;
	height: 0.6rem;
	/*position: absolute;*/
	z-index: 1;
	
}
.get{
	display: block;
	padding: 0.075rem;
	border: none;
	background: #CCC;
	font-size: 0.15rem;
	color: white;
}
.gfhldofh{
	height: 0.18rem;
	width: 0.18rem;

}
.yangzhengm{
	height: 0.35rem;
	width: 1rem;
	background: url(../assets/img/下载.jpg);
	background-size: cover;
}
.dsdsd{
	height: 0.35rem;
	width: 1rem;
}
.yincang{
	display: none;
}
.photos{
	height: 0.35rem;
	width: 1rem;
	display: none;
}
.verification{
	width: 100%;
	height: 0.6rem;
	/*position: relative;
	top:0;*/
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.verification img{
	display: block;
}
.xieyis{
	display: flex;
	justify-content: center;
	margin-top: 0.2rem
}
.registers a{
	font-size: 0.18rem;
	color: #fff;
	display: block;
}
.registers{
	margin-top: 0.285rem;
	text-align: center;
	background: #999;
	line-height: 0.44rem;
}
.dian{
	width:0.18rem;
	height: 0.02rem;
	background: #999;
	margin-top: 0.2rem;

}
.heng{
	display: flex;
	justify-content: center;
	margin-bottom: 0.2rem;

}
.ready{
	font-size: 0.15rem;
	color: #666666;
}
.xieyi{
	font-size: 0.15rem;
	color: #000;
}
</style>
