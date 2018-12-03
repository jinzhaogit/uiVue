<template>
    <div class="app-content">
        <!--头部导航栏-->
        <mt-header fixed title="我的世界"></mt-header>
		<!-- 主题内容 -->
		<transition mode="out-in">
			<router-view></router-view>
		</transition>
        <!--底部导航栏-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
    
</script>

<style lang="scss" scoped>
    .app-content{
        padding-top:40px;
		overflow-x: hidden; //解决切换路由产生滚动条问题
    }
	.v-enter{ //从右向左进入
		opacity: 0;
		transform: translateX(100%)
	}
	.v-enter-leave{ //从右向左出去
		opacity: 0;
		transform: translateX(-100%);
		position: absolute; //进入进出层叠位置
	} 
	.v-enter-active,.v-leave-active{ //过渡
		transition: all .5s ease;
	}
</style>