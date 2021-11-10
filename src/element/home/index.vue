<template>
    <div class="homeIndex">
        <div class="xinxi flex flex_around">
            <div class="xxleft flex">
                <img src="../../assets/images/home/laba_bai.png" alt="" srcset="">
                <div class="xxName flex flex_col">
                    <span>我是昵称</span>
                    <span>邀请码：35214253</span>
                </div>
            </div>
            <!-- <div class="xxcenter">
                <div>
                    <img src="../../assets/images/jinbi.png" alt="" srcset="">
                    <span>1000</span>
                    <img src="../../assets/images/jiahao.png" alt="" srcset="">
                </div>
                <div>
                    <img src="../../assets/images/jidang.png" alt="" srcset="">
                    <span>8888</span>
                </div>
            </div> -->
            <!-- <div class="xxright">
                <div>
                    <img src="../../assets/images/xiaoji.png" alt="" srcset="">
                    <span>1000</span>
                    <img src="../../assets/images/jiahao.png" alt="" srcset="">
                </div>
               
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'index',
    data () {
        return {
            
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>
<style lang="less">
    .homeIndex{
        width: 100%;
        height: 100%;
        background-image: url(../../assets/images/nongchang/index_bg.png);
        background-size: 100% 100%;
        position: relative;
        .xinxi{
            width: 62.93rem;
            height: 11.13rem;
            background: #F6F9FE;
            opacity: 0.4;
            border-radius: 3rem;
            .xxleft{
                img{
                    width: 8.12rem;
                    height: 8.15rem;
                    border-radius: 50%;
                }
            }
        }
       
    }
</style>