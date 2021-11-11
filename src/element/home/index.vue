<template>
    <div class="homeIndex">
        <div class="xinxi flex flex_around ali_center">
            <div class="xxleft flex ali_center">
                <img src="../../assets/images/icon/7.png" alt="" srcset="">
                <div class="xxName flex flex_col flex_around">
                    <span>我是昵称</span>
                    <span>邀请码：35214253</span>
                </div>
            </div>
            <div class="xxcenter flex flex_col flex_around ">
                <div class="flex ali_center flex_between">
                    <img src="../../assets/images/nongchang/jifen.png" alt="" srcset="">
                    <span>1000</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
                <div class="flex ali_center flex_between">
                    <img src="../../assets/images/nongchang/jidan.png" alt="" srcset="">
                    <span>8888</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
            </div>
            <div class="xxright flex flex_col flex-start">
                <div class="flex ali_center flex_between">
                    <img src="../../assets/images/nongchang/xiaoji.png" alt="" srcset="">
                    <span>1000</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
               
            </div>
        </div>
        <div class="leftbtn flex flex_col">
            <img src="../../assets/images/nongchang/shezhi.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/cangku.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/haoyou.png" alt="" srcset="">
        </div>
        <!-- 养殖 -->
        <div class="yangzhi ">
            <img src="../../assets/images/nongchang/yangzhione.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/yangzhi.png" alt="" srcset="">
        </div>
        <!-- 孵化 -->
        <div class="fuhua">
            <img src="../../assets/images/nongchang/fuhuaone.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/fuhua.png" alt="" srcset="">
        </div>
        <!-- 集市 -->
         <div class="jishi">
            <img src="../../assets/images/nongchang/jishione.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/jishi.png" alt="" srcset="">
        </div>
        <!-- 商店 -->
        <div class="shangdian">
            <img src="../../assets/images/nongchang/shangdianone.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/shangdian.png" alt="" srcset="">
        </div>
        <!-- 种植 -->
        <div class="zhongzhi">
            <img src="../../assets/images/nongchang/zhongzhione.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/zhongzhi.png" alt="" srcset="">
            <img src="../../assets/images/nongchang/laotou.png" alt="" srcset="">
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
        font-size: 0.65rem;
        .xinxi{
            width: 95vw;
            height: 15vw;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 1rem;
            position: absolute;
            top: 6vw;
            left: 2.5vw;
            .xxleft{
                // position: relative;
                img{
                    width: 12vw;
                    height: 12vw;
                    border-radius: 50%;
                    z-index: 99;
                    
                }
                .xxName{
                    width: 38vw;
                    height: 10vw;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 6vw;
                    margin-left: -11vw;
                    font-size: 10px;
                    span{
                        margin-left: 12vw;
                        white-space: nowrap;
                        // padding-top: 0.1rem;
                        font-family: Adobe Heiti Std;
                        text-stroke: 0.03rem #df7108;
                        -webkit-text-stroke: 0.03rem #df7108;
                        // background: linear-gradient(180deg, #FFFCCD 0%, #FFE08E 100%);
                        // -webkit-background-clip: text;
                    }
                }
            }
            .xxcenter{
                div{
                   width: 23vw;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 4vw;
                    margin-top: 1vw;
                    font-family: Adobe Heiti Std;
                    text-stroke: 0.03rem #df7108;
                    -webkit-text-stroke: 0.03rem #df7108;
                    img{
                        width: 6vw;
                        height: 6vw;
                        border-radius: 50%;
                    }
                    
                }
                div:first-child{
                    img:first-child{
                        width: 6vw;
                        height: 6vw;
                        border-radius: 50%;
                    }
                    img:last-child{
                        width: 4vw;
                        height: 4vw;
                        border-radius: 50%;
                    }
                    

                }
                div:last-child{
                    img:first-child{
                        width: 6vw;
                        height: 6vw;
                        border-radius: 50%;
                    }
                    img:last-child{
                        width: 4vw;
                        height: 4vw;
                        border-radius: 50%;
                    }
                }
            }
            .xxright{
                  width: 23vw;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 4vw;
                    margin-top: -6vw;
                    font-family: Adobe Heiti Std;
                        text-stroke: 0.03rem #df7108;
                        -webkit-text-stroke: 0.03rem #df7108;
                div{
                    img{
                        width: 6vw;
                        height: 6vw;
                        border-radius: 50%;
                    }
                }
                div:first-child{
                    img:first-child{
                        width: 6vw;
                        height: 6vw;
                        border-radius: 50%;
                    }
                    img:last-child{
                        width: 4vw;
                        height: 4vw;
                        border-radius: 50%;
                    }
                    

                }
            }
        }
        .leftbtn{
            position: absolute;
            left: 2vw;
            top: 14%;
            z-index: 99;
            img{
                margin-bottom: 4vw;
                width: 10vw;
                height: 10vw;
            }
        }
        .yangzhi{
            position: relative;
            left: -24%;
            top: 22%;
            img:first-child{
                width: 75vw;
            }
            img:nth-child(2){
                width: 14vw;
                position: absolute;
                top: 15vw;
                /* left: 1rem; */
                right: 31vw;
            }
        }
        .fuhua{
            position: relative;
            left: 83%;
            top: 5%;
            img:first-child{
                width: 21vw;
            }
            img:nth-child(2){
                width: 13vw;
                position: absolute;
                top: 4vw;
                /* left: 1rem; */
                left: -10vw;
            }
        }
        .jishi{
           position: relative;
            left: -12%;
            top: 15%;
            img:first-child{
                width: 52vw;
            }
            img:nth-child(2){
                width: 13vw;
                position: absolute;
                top: 16vw;
                /* left: 1rem; */
                right: 48vw;
            }
        }
        .shangdian{
            position: relative;
            left: 76%;
            top: -14%;
            img:first-child{
               width: 45vw;
            }
            img:nth-child(2){
                width: 13vw;
                position: absolute;
                top: 19vw;
                /* left: 1rem; */
                left: -9vw;
            }
        }
        .zhongzhi{
               position: relative;
            left: 47%;
            top: -12%;
            img:first-child{
                width: 45vw;
            }
            img:nth-child(2){
                width: 13vw;
                position: absolute;
                top: -5vw;
                left: 12vw;
            }
            img:nth-child(3){
                width: 13vw;
                position: absolute;
                top: -7vw;
                left: -1vw;

            }
        }
       
    }
</style>