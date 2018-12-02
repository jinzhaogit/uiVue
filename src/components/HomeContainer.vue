<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in cardList" :key="item.id">
                <img :src="item.imgUrl">
            </mt-swipe-item>
        </mt-swipe>
        
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
                background-color: greenyellow;
            }
            &:nth-child(2){
                background-color: green;
            }
            &:nth-child(3){
                background-color: yellow;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>

