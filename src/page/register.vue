
<template>
    <div id="box" class="register">
		<div class="registerbox">
			<div class="top">
				<div class="goback"><a href=""><img src="../assets/img/goback (1).png" alt=""></a>
				</div>
				<p  class="phone">手机验证码登录</p>
			</div>
			<div class="register_pass"><p class="pass">密码登录</p></div>
			<div name="slide-fade" class="account">
			<p class="account_Number" :style='change'>手机号/邮箱</p>
			<div class="verification">
				<input  @focus='change=css.focus' class="btn" type="text">
			</div>
			</div>
			<div class="account">
			<p class="account_Number" :style='change'>密码</p>
			<div class="verification">
				<input @focus='change=css.focus1' class="btn" type="text">
			</div>
			</div>
			<div class="forgetbox"><a class="forget" 
            href="">忘记密码?</a></div>
			<div class="registers"><a href="">登录</a></div>
			<div class="heng"><div class="dian"></div></div>
			<p class="nozhanghu">还没有账号？<router-link to='login'>免费注册</router-link></p>
			<div class="xieyis">
				<div class="font">
					<i class="iconfont icon-zhifangkuang"></i>
					<img class="photo" src="../assets/img/defaultLogin2x.png" alt="">
				</div>
				<p class="ready">阅读<a class="xieyi" href="">《丝芙兰用户协议》</a></p>
							
			</div>
		</div>
		<div class="dgfdg">
			<div class="fangshi">
				<div class="box"><i class="iconfont  icon-weibo"></i></div>
				<p><a class="xinlang" href="">新浪微博</a></p>
			</div>
			<div class="fangshi">
				<div class="box"><i class="iconfont icon-qq"></i></div>
				<p><a class="friend" href="">QQ好友</a></p>
			</div>
		</div>

		
	</div>
</template>
<script>
export default {
    
		name:"",
		data(){
            return {
            change:'',
			css:{
				
				focus:{
					fontSize:'10px',
					transform:'translateY(-20px)',
					transitionProperty:'all',
					transitionDuration:'1s'
                },
                focus1:{
					fontSize:'10px',
					transform:'translateY(-20px)',
					transitionProperty:'all',
					transitionDuration:'1s'
                }
    		}
		}
   } 
}		
			

</script>
<style scoped>
/* .slide-fade-enter-active {
  transition: all .3s linear;
}
.slide-fade-leave-active {
  transition: all .2s linear;
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(10px);
  font-size: 12px;
} */
    .register{
	width: 100%;

}
.registerbox{
	width: 96%;
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
.phone{
	font-size: 0.15rem;
	color: #666;
		z-index: 1;
}
.register_pass{
	margin:0.28rem 0 0.14rem 0;
}
.pass{
	font-size: 0.3rem;
	font-weight: 100;
}
.account{
	width: 100%;
	height: 0.6rem;
	
	position: relative;
	border-bottom:  1px solid #ccc;


}
.account_Number{
	font-size: 0.15rem;
	color: #ccc;
	position: absolute;
	top: 0.2rem;
}
.btn{
	display: block;
	outline: none;
	border: none;
	position: absolute;
	width: 100%;
	height: 0.6rem;
	font-size: 0.18rem;
	/*z-index: 2;*/
	z-index: 1;
	background: transparent;
	
}
.verification{
	width: 100%;
	height: 0.6rem;
	position: relative;
	top:0;
}
.forgetbox{
	margin-top: 0.285rem;
	text-align: right;
}
.forget {
	font-size: 0.15rem;
	color: #858585;
	display: block;

	
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
	height: 1px;
	background: #000;
	margin-top: 0.2rem;

}
.heng{
	display: flex;
	justify-content: center;
	margin-bottom: 0.28rem;

}
.nozhanghu{
	font-size: 0.15rem;
	color: #858585;
	text-align: center;
}
.photo{
	width: 0.18rem;
	height: 0.18rem;
	position: absolute;
	top:0;
	display: none;
	
}
.xieyis{
	display: flex;
	justify-content: center;
	margin-top: 0.28rem
}
.font i,img{
display: block;
}
.font{
	position: relative;
	margin-right: 0.1rem;
}
.ready{
	font-size: 0.15rem;
	color: #666666;
}
.xieyi{
	font-size: 0.15rem;
	color: #000;
}
.xinlang{
	font-size: 0.11rem;
	color: #666;
	display: block;
}
.friend{
	font-size: 0.11rem;
	color: #666;
	display: block;
}
.fangshi i {
	display: block;
}
.box{
	height: 0.45rem;
	width: 0.45rem;
	border: 1px solid #e6e6e6;
	line-height:0.45rem;
	text-align: center;
	border-radius: 50%; 
	margin-bottom: 0.1rem;
}
.dgfdg{
	margin-top: 0.28rem;
	display: flex;
	justify-content: space-around;
}
</style>

