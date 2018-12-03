<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in cardList" :key="item.id">
                <img :src="item.imgUrl">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">Phone</div></a></li>
        </ul> 
    </div>
</template>

<script>
    export default{
        data(){
            return{
                cardList:[] //创建接收轮播图数据
            }
        },
        created() {
            this.getLunbotu(); //加载完成时调用请求数据方法
        },
        methods:{
            getLunbotu(){ //获取数据
                this.$http.get('http://localhost:3000/static/lunbotu.json')
                .then(result=>{
                    var body=result.body
                    if(body.ret==true){ //成功后赋值
                        this.cardList=body.data.cardList
                    }   
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe{ //类名取自swiper组件
        height:200px; //注意：默认轮播图无高
        .mint-swipe-item{
            &:nth-child(1){
                background-color: #ccc;
            }
            &:nth-child(2){
                background-color: #eee;
            }
            &:nth-child(3){
                background-color: #ddd;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
        border: none;
        background: #fff;
        .mui-table-view-cell{
            border: 0;
        }
    }
</style>

