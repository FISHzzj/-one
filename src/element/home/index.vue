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
        <!-- 设置 -->
        <div class="shezhi" v-if="shezhi">
            <div class="kuang">
                <div class="szxuan flex flex_col flex_center" v-if="shengyi">
                    <span class="flex flex_center ali_center">音乐：<van-switch v-model="yinyue" inactive-color="#BDBDBD" active-color="#EDC782" size=""/></span>
                    <span  class="flex flex_center ali_center">音效：<van-switch v-model="yinxiao" inactive-color="#BDBDBD" active-color="#EDC782" size="" /></span>
                    <span  class="flex flex_center ali_center">二级密码：<strong style="color:#FE523B;text-decoration: underline;">{{shezhitext ? '去设置' : '已设置'}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
                <div class="content" v-else>
                    <div class="phone flex ali_center">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;手机号：</span>
                        <input type="number" v-model="inputMsg.mobile" placeholder="请输入手机号">
                    </div>
                    <div class="code flex flex_between">
                        <div class="flex flex_nowrap ali_center">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;验证码：</span>
                            <input v-model="inputMsg.code" type="text" placeholder="请输入验证码">
                        </div>
                        <span @click="senVerifyCode()">{{timeAndTextOfSendcode}}</span>
                    </div>
                    <div class="pwd flex ali_center">
                        <span>二级密码：</span>
                        <input  type="text" v-model="inputMsg.pwd" placeholder="请输入密码8-20位字母或数字">
                        <!-- <input v-else type="password" v-model="inputMsg.pwd" placeholder="请输入密码"> -->
                        <!-- <i ../..click="iconeyeclose = !iconeyeclose" v-if="iconeyeclose" class="iconfont iconeyeopen"></i>
                        <i ../..click="iconeyeclose = !iconeyeclose" v-else class="iconfont iconeyeclose"></i> -->
                        <!-- <van-icon v-if="inputMsg.pwd" ../..click="inputMsg.pwd = ''" name="cross" color="#fff" size="10" /> -->
                    </div>
                    <div class="pwd flex ali_center">
                        <span>确认密码：</span>
                        <input  type="text" v-model="inputMsg.pwd" placeholder="请输入密码8-20位字母或数字">
                        <!-- <input v-else type="password" v-model="inputMsg.pwd" placeholder="请输入密码"> -->
                        <!-- <i ../..click="iconeyeclose = !iconeyeclose" v-if="iconeyeclose" class="iconfont iconeyeopen"></i>
                        <i ../..click="iconeyeclose = !iconeyeclose" v-else class="iconfont iconeyeclose"></i> -->
                        <!-- <van-icon v-if="inputMsg.pwd" ../..click="inputMsg.pwd = ''" name="cross" color="#fff" size="10" /> -->
                    </div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="">
                   <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt="">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
        <!-- 商店 -->
        <div class="shangdiankuang" v-if="shangdiankuang">
            <div class="kuang">
                <div class="sdlan flex flex_center">
                    <img :src="zuo ? zuo1 : zuo2" alt="" srcset="" @click="tab(0)">
                    <img :src="shouhuquan ? shouhuquan1 : shouhuquan2" alt="" srcset="" @click="tab(1)">
                    <img :src="jisiliao ? jisiliao1 : jisiliao2" alt="" srcset="" @click="tab(2)">
                    <img :src="zhong ? zhong1 : zhong2" alt="" srcset="" @click="tab(3)">
                    <img :src="you ? you1 : you2" alt="" srcset="" @click="tab(4)">
                    <!-- <img :src="shouhuquan ?'../../assets/images/nongchang/shangdian/shouhuquan.png':'../../assets/images/nongchang/shangdian/shouhuquan1.png'" alt="" srcset="">
                    <img :src="jisiliao ?'../../assets/images/nongchang/shangdian/jisiliao.png':'../../assets/images/nongchang/shangdian/jisiliao1.png'" alt="" srcset="">
                    <img :src="zhong ?'../../assets/images/nongchang/shangdian/zhong.png':'../../assets/images/nongchang/shangdian/zhong1.png'" alt="" srcset="">
                    <img :src="you ?'../../assets/images/nongchang/shangdian/you.png':'../../assets/images/nongchang/shangdian/you1.png'" alt="" srcset=""> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'index',
    data () {
        return {
            shezhi: false,
            shezhitext:true,
            yinyue: false,
            yinxiao:false,
            shengyi:false,
            code:"",
            timeAndTextOfSendcode:"获取验证码",
            inputMsg:{
                mobile:"",
                code:"",
                pwd:"",
                spread:"",
            },
            shangdiankuang:true,
            zuo:true,
            zuo1:require('@/assets/images/nongchang/shangdian/zuo.png'),
            zuo2:require('@/assets/images/nongchang/shangdian/zuo1.png'),
            shouhuquan:false,
            shouhuquan1:require('@/assets/images/nongchang/shangdian/zuo.png'),
            shouhuquan2:require('@/assets/images/nongchang/shangdian/zuo1.png'),
            jisiliao:false,
            jisiliao1:require('@/assets/images/nongchang/shangdian/jisiliao.png'),
            jisiliao2:require('@/assets/images/nongchang/shangdian/jisiliao1.png'),
            zhong:false,
            zhong1:require('@/assets/images/nongchang/shangdian/zhong.png'),
            zhong2:require('@/assets/images/nongchang/shangdian/zhong1.png'),
            you:false,
            you1:require('@/assets/images/nongchang/shangdian/you.png'),
            you2:require('@/assets/images/nongchang/shangdian/you1.png'),
        }
    },
    mounted(){

    },
    methods:{
        tab(index){
            if(index == 0){
                this.zuo = !this.zuo
                this.shouhuquan = false
                this.jisiliao = false
                this.zhong = false
                this.you =false
            }else if(index == 1){
                this.zuo = false
                this.shouhuquan = !this.shouhuquan
                this.jisiliao = false
                this.zhong = false
                this.you = false          
            }else if(index == 2){
                this.zuo = false
                this.shouhuquan = false
                this.jisiliao = !this.jisiliao
                this.zhong = false
                this.you = false
            }else if(index == 3){
                this.zuo = false
                this.shouhuquan = false
                this.jisiliao = false
                this.zhong = !this.zhong
                this.you = false
            }else if(index == 4){
                this.zuo = false
                this.shouhuquan = false
                this.jisiliao = false
                this.zhong = false
                this.you = !this.you 
            }
        },
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
        .shezhi{
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
                background-image: url(../../assets/images/nongchang/shezhi/kuang.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                .szxuan{
                    text-align: center;
                    margin-top: 30%;
                    span{
                        margin-bottom: 2vw;
                    }
                }
                .content{
                    // position: absolute;
                    // top: 50%;
                    // left: 50%;
                    // transform: translate(-50%, -50%);
                    // width: 85%;
                    // height: auto;
                    // background: #F0E3AE;
                    // display: none;
                    padding: 5vw 5vw;
                    margin-top: 15%;

                    // .title{
                    //     padding: 5vw 0;
                    //     box-sizing: border-box;
                    //     .first {
                    //         font-weight: 600;
                    //         font-size: 5vw;
                    //         line-height: 10vw;
                    //         text-align: center;
                    //     }
                    // }
                    .phone{
                        width: 100%;
                        background: #f7f6fc;
                        // border-radius: 6vw;
                        position: relative;
                        height: 9vw;
                        padding: 0 1vw;
                        // background: #D6C695;
                        // border: 1vw solid #FEF2C2;
                        // border-radius: 2vw;
                        span{
                            white-space:nowrap;
                        }
                        input {
                            width: 100%;
                            height: 7vw;
                            border: 0;
                            text-indent: 3vw;
                            background: #D6C695;
                            border: 1vw solid #FEF2C2;
                            border-radius: 2vw;
                            font-size: 3vw;
                        }
                    }
                    .code{
                        margin-top: 2.4vw;
                        width: 100%;
                        height: 9vw;
                        // border-radius: 6vw;
                        // background: #D6C695;
                        
                        
                        
                        div{
                            // background: #D6C695;
                            width: 70%;
                            padding: 0 1vw;
                            // border: 1vw solid #FEF2C2;
                            // border-radius: 2vw;
                        }
                        span{
                            white-space: nowrap;
                        }
                        span:last-child{
                            font-size: 3vw;
                            line-height: 3vw;
                            padding: 2vw 1vw;
                            box-sizing: border-box;
                            background: #FED579;
                            border-radius: 1vw;
                            color: #955942;
                            border: 1vw solid #FEF2C2;
                            border-radius: 2vw;

                            
                        }
                        input {
                            width: 28vw;
                            text-indent: 3vw;
                            height: 7vw;
                            font-size: 4vw;
                             background: #D6C695;
                            border: 1vw solid #FEF2C2;
                            border-radius: 2vw;
                            font-size: 3vw;

                        }
                    }
                    .pwd {
                        margin-top: 2.4vw;
                        position: relative;
                        width: 100%;
                        height: 9vw;
                        // border-radius: 6vw;
                        // background: #f7f6fc;
                        padding: 0 1vw;
                        // background: #D6C695;
                        // border: 1vw solid #FEF2C2;
                        // border-radius: 2vw;
                        .iconfont {
                            top: 0;
                            bottom: 0;
                            margin: auto 0;
                            right: 4vw;
                            height: 4vw;
                            position: absolute;
                            border-radius: 50%;
                        }
                        .van-icon {
                            top: 0;
                            bottom: 0;
                            margin: auto 0;
                            right: 9vw;
                            height: 2.5vw;
                            position: absolute;
                            border-radius: 50%;
                            padding: 1vw;
                            background: rgba(0,0,0,.3);
                        }
                         span{
                            white-space: nowrap;
                        }
                        input {
                            width: 100%;
                            height: 7vw;
                            border: 0;
                            text-indent: 3vw;
                            background: #D6C695;
                            border: 1vw solid #FEF2C2;
                            border-radius: 2vw;
                            font-size: 3vw;
                        }
                    }
                    .spread{
                        margin-top: 2.4vw;
                        position: relative;
                        width: 100%;
                        height: 9vw;
                        // border-radius: 6vw;
                        // background: #f7f6fc;
                        background: #D6C695;
                        padding: 0 1vw;
                        border: 1vw solid #FEF2C2;
                        border-radius: 2vw;
                        input {
                            text-indent: 3vw;
                            height: 9vw;
                            font-size: 4vw;
                        }
                    }
                    .footer {
                        // position: fixed;
                        // bottom: 0;
                        // left: 0;
                        width: 100%;
                        padding: 4vw 0; 
                        .top {
                            width: 100%;
                            color: #5F3F27;
                            height: 9vw;
                            font-size: 3.2vw;
                            // justify-content: center;
                            // p {
                            //     border-right: 1px solid #5F3F27;
                            //     height: 4vw;
                            //     margin: 0 4vw;
                            // }
                            span{
                                color: #AFCEB7;
                            }
                            
                        }
                        .tips {
                            // justify-content: center;
                            font-size: 3.2vw;
                            padding-bottom: 3vw;
                            span {
                                color: #5F3F27;
                            }
                        }
                    }
                    .btn{
                        margin-top: 5vw;
                        div{
                            width: 35%;
                            height: 10vw;
                            background: #1DC343;
                            color: #fff;
                            border-radius: 1vw;
                            text-align: center;
                            line-height: 10vw;
                        }
                    }
                    .gologin{
                        margin-top: 5vw;
                        font-size: 4.5vw;
                        color: #753E28;
                    }

                }
                .shezhibtn{
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .shangdiankuang{
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
                height: 135vw;
                background-image: url(../../assets/images/nongchang/shangdian/kuang.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                .sdlan{
                    margin-top: 38%;
                    img{
                        width: 12.5vw;
                    }
                }
            }
        }
       
    }
    // .van-switch{
    //     background-color: #BDBDBD;
    // }
    .van-switch__node {
        // background-color: #FEDD68;
        // background: rgba(22, 208, 255, 0.15);
        background-image: url(../../assets/images/nongchang/shezhi/kai.png);
        background-size: 100% 100%;

    }
    // .van-switch--on {
    //     background: #EDC782!important;

    // }
</style>