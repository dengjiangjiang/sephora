<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import homepage from "./page/homepage"
import particulars from "./page/particulars"
import user from "./page/user"
import register from "./page/register"
import login from "./page/login"
export default {
  name: 'App',
  components: {
		homepage,
		particulars,
		user,
		register,
		login

		
  }
}
</script>
<style>
#app{
	height: 100%;
}
body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
	margin:0;
	padding:0;
}
html{font-size: 100px;
	font-size: 26.67vw;
	height: 100%;
	
}

body{
	
	font-family: "微软雅黑",Arial;
	height: 100%;
	display: flex;
	flex-direction: column;

}


ul,ol{
	list-style:none;
}

img{
	border: 0;
}
a{
	text-decoration: none;
	color: black;
}
section{
	flex: 1;
	overflow-y:auto;
	overflow-x: hidden; 
}
</style>
