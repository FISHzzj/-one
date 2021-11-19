<template>
    <div class="yangzhipage">
        <div class="xinxi flex flex_around ali_center">
            <div class="xxleft flex ali_center" @click="gerenxinxi">
                <img :src="avatar" alt="" srcset="">
                <div class="xxName flex flex_col ">
                    <span>{{nick_name}}</span>
                    <span>邀请码：{{invite_code}}</span>
                </div>
            </div>
            <div class="xxcenter flex flex_col flex_around ">
                <div class="flex ali_center flex_between">
                    <img src="../../assets/images/nongchang/jifen.png" alt="" srcset="">
                    <span>{{balance.integral}}</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
                <div class="flex ali_center flex_between">
                    <img src="../../assets/images/nongchang/jidan.png" alt="" srcset="">
                    <span>{{balance.credit2}}</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
            </div>
            <div class="xxright flex flex_col flex-start">
                <div class="flex ali_center flex_between">
                    <img src="../../assets/images/nongchang/xiaoji.png" alt="" srcset="">
                    <span>{{balance.credit2}}</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
               
            </div>
        </div>
        <!-- 普通地 -->
        <div class="yzputongdi">
            <div class="onedi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="">
                <div class="xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="">
                
            </div>
            <div class="twodi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="">
                <div class="xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="">
                
            </div>
        </div>




        <!-- 个人信息 -->
        <div class="gerenxinxi animat" v-if="gerenxinxikuang">
            <div class="kuang">
                <div class="content  ">
                    <img src="../../assets/images/icon/7.png" alt="">
                    <div>昵称：955942</div>
                    <div>ID：955942</div>
                    <div>邀请码：jertye2862</div>
                    <div>绑定手机：<a href="javascript:;">去绑定</a></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt="">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name:'yangzhi',
    data(){
        return{
            user_id:"",
            nick_name:"",
            avatar:"",
            mobile:"",
            invite_code:"",
            balance:"",
            gerenxinxikuang:false,
        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        async getData(){
            let res = await $ajax('userinfo', {})
            if (!res) return false
            console.log(res)
            Object.keys(res).forEach((key) =>{
                this[key] = res[key]
            })
        },
        gerenxinxi(){
            this.gerenxinxikuang = true;
        },
        fanhui(){
           this.gerenxinxikuang = false;
           
        },
        

    },
}
</script>
<style lang="less">
    .yangzhipage{
        width: 240vw!important;
        height: 220vw!important;
        background-image: url(../../assets/images/nongchang/yangzhi/yangzhi_bg.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: relative;
        font-size: 0.65rem;
        overflow: hidden;
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
                        height: 4vw;
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
        .yzputongdi{
            // position: absolute;
            // left: 8%;
            // top: 37%;
            .onedi{
                position: absolute;
                left: 10%;
                top: 45%;
                >img:first-child{
                    width: 50vw;
                    // position: absolute;
                    // top: 9vw;
                    // left: 16vw;

                }
                >img:nth-child(2){
                    width: 41vw;
                    position: absolute;
                    top: 0vw;
                    left: 5vw;
                    z-index: 9;
                }
                >img:nth-child(3){
                    width: 10vw;
                    position: absolute;
                    top: -5vw;
                    left: 20vw;
                    z-index: 12;
                }
                >.xiaoji{
                    // width: 41vw;
                    // position: absolute;
                    // top: 4vw;
                    // left: 20vw;
                    // z-index: 13;
                    >img:nth-child(1){
                        width: 10vw;
                        position: absolute;
                        top: 8vw;
                        left: 9vw;
                        z-index: 13;
                    }
                    >img:nth-child(2){
                        width: 10vw;
                        position: absolute;
                        top: 10vw;
                        left: 17vw;
                        z-index: 13;
                    }
                    >img:nth-child(3){
                        width: 10vw;
                        position: absolute;
                        top: 9vw;
                        left: 24vw;
                        z-index: 13;
                    }
                    >img:nth-child(4){
                        width: 10vw;
                        position: absolute;
                        top: 5vw;
                        left: 31vw;
                        z-index: 13;
                    }
                }
                >img:nth-child(5){
                    width: 10vw;
                    position: absolute;
                    top: 6vw;
                    left: 20vw;
                    z-index: 10;
                    display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                // img:nth-child(4){
                //     width: 52vw;
                //     position: absolute;
                //     top: -5vw;
                //     left: -1vw;
                // }
            }
            .twodi{
                position: absolute;
                left: 2%;
                top: 60%;
                >img:first-child{
                    width: 50vw;
                    // position: absolute;
                    // top: 9vw;
                    // left: 16vw;

                }
                >img:nth-child(2){
                    width: 41vw;
                    position: absolute;
                    top: 0vw;
                    left: 5vw;
                    z-index: 9;
                }
                >img:nth-child(3){
                    width: 10vw;
                    position: absolute;
                    top: -5vw;
                    left: 20vw;
                    z-index: 12;
                }
                >.xiaoji{
                    // width: 41vw;
                    // position: absolute;
                    // top: 4vw;
                    // left: 20vw;
                    // z-index: 13;
                    >img:nth-child(1){
                        width: 10vw;
                        position: absolute;
                        top: 8vw;
                        left: 9vw;
                        z-index: 13;
                    }
                    >img:nth-child(2){
                        width: 10vw;
                        position: absolute;
                        top: 10vw;
                        left: 17vw;
                        z-index: 13;
                    }
                    >img:nth-child(3){
                        width: 10vw;
                        position: absolute;
                        top: 9vw;
                        left: 24vw;
                        z-index: 13;
                    }
                    >img:nth-child(4){
                        width: 10vw;
                        position: absolute;
                        top: 5vw;
                        left: 31vw;
                        z-index: 13;
                    }
                }
                >img:nth-child(5){
                    width: 10vw;
                    position: absolute;
                    top: 6vw;
                    left: 20vw;
                    z-index: 10;
                    display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
            }
        }



        .gerenxinxi{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 99;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 80vw;
                background-image: url(../../assets/images/nongchang/gerenxinxi/kuang.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                // .szxuan{
                //     text-align: center;
                //     margin-top: 30%;
                //     span{
                //         margin-bottom: 2vw;
                //     }
                // }
                .content{
                    padding: 5vw 5vw;
                    margin-top: 15%;
                    text-align: center;
                    img{
                        width: 15vw;
                        height: 15vw;
                        border-radius: 50%;
                    }
                    div{
                        height: 6vw;
                        a{
                            color:#FE523B;
                            
                        }
                    }

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
    }
.animat{
    position:relative;
    animation:mymove 3s normal;
    animation-direction:normal;/*轮流反向播放动画。*/
    animation-timing-function: ease-in-out; /*动画的速度曲线*/
    -webkit-animation:mymove 3s normal; /*Safari and Chrome*/
    -webkit-animation-direction:normal;/*轮流反向播放动画。*/
    -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
}
@keyframes mymove{
    0%{
        transform: scale(1);  /*开始为原始大小*/
    }
    25%{
        transform: scale(1.1); /*放大1.1倍*/
    }
    50%{
        transform: scale(1);
    }
    /* 75%{
        transform: scale(1.2);
    } */
}
@-webkit-keyframes mymove{
    0%{
        transform: scale(1);
    }
    25%{
        transform: scale(1.1);
    }
    50%{
        transform: scale(1);
    }
    /* 75%{
        transform: scale(1.2);
    } */
}
</style>