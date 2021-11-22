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
        <div class="yzputongdi" v-if="houseList.length > 0">
            <div class="onedi" :class="fangda ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="houseList[0].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="houseList[0].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="houseList[0].status == 1">
                <div class="xiaoji" v-show="houseList[0].num > 0" @click="houseadd_chick(houseList[0].id,houseList[0].type,houseList[0].num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="houseList[0].status == 0" @click="housebuild(houseList[0].id)">
                <div class="weilandengji" v-show="houseList[0].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="houseList[0].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="houseList[0].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="houseList[0].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="houseList[0].prop_fence_level == 4">
                </div>
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="houseList[0].prop_dog != 0">
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="houseList[0].eggs > 0" @click="shouhuo(houseList[0].id)">
                
            </div>
            <div class="twodi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="putongdi.twodi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="putongdi.twodi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="putongdi.twodi.yikaidi">
                <div class="xiaoji" v-show="putongdi.twodi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="putongdi.twodi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="putongdi.twodi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="putongdi.twodi.gou">
                
            </div>
            <div class="threedi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="putongdi.threedi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="putongdi.threedi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="putongdi.threedi.yikaidi">
                <div class="xiaoji" v-show="putongdi.threedi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="putongdi.threedi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="putongdi.threedi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="putongdi.threedi.gou">
                
                
            </div>
            <div class="fourdi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="putongdi.fourdi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="putongdi.fourdi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="putongdi.fourdi.yikaidi">
                <div class="xiaoji" v-show="putongdi.fourdi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="putongdi.fourdi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="putongdi.fourdi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="putongdi.fourdi.gou">
                
                
            </div>
            <div class="fivedi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="putongdi.fivedi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="putongdi.fivedi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="putongdi.fivedi.yikaidi">
                <div class="xiaoji" v-show="putongdi.fivedi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="putongdi.fivedi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="putongdi.fivedi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="putongdi.fivedi.gou">
                
                
            </div>
            <div class="sixdi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="putongdi.sixdi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="putongdi.sixdi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="putongdi.sixdi.yikaidi">
                <div class="xiaoji" v-show="putongdi.sixdi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="putongdi.sixdi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="putongdi.sixdi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="putongdi.sixdi.gou">
                
                
            </div>
            <div class="sevendi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="putongdi.sevendi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="putongdi.sevendi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="putongdi.sevendi.yikaidi">
                <div class="xiaoji" v-show="putongdi.sevendi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="putongdi.sevendi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="putongdi.sevendi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="putongdi.sevendi.gou">
                
                
            </div>
            <div class="eightdi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="putongdi.eightdi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="putongdi.eightdi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="putongdi.eightdi.yikaidi">
                <div class="xiaoji" v-show="putongdi.eightdi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="putongdi.eightdi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="putongdi.eightdi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="putongdi.eightdi.gou">
                
                
            </div>
            <div class="ninedi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="putongdi.ninedi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="putongdi.ninedi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="putongdi.ninedi.yikaidi">
                <div class="xiaoji" v-show="putongdi.ninedi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="putongdi.ninedi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="putongdi.ninedi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="putongdi.ninedi.gou">
                
                
            </div>
            <div class="tendi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="putongdi.tendi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="putongdi.tendi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="putongdi.tendi.yikaidi">
                <div class="xiaoji" v-show="putongdi.tendi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="putongdi.tendi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="putongdi.tendi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="putongdi.tendi.gou">
                
                
            </div>
        </div>

        <!-- 高级地 -->
        <div class="yzgaojidi">
            <div class="onedi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="gaojidi.onedi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/gaojitudi.png" alt="" srcset="" v-show="gaojidi.onedi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="gaojidi.onedi.yikaidi">
                <div class="xiaoji" v-show="gaojidi.onedi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="gaojidi.onedi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="gaojidi.onedi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="gaojidi.onedi.gou">
                
            </div>
            <div class="twodi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="gaojidi.onedi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/gaojitudi.png" alt="" srcset="" v-show="gaojidi.onedi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="gaojidi.onedi.yikaidi">
                <div class="xiaoji" v-show="gaojidi.onedi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="gaojidi.onedi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="gaojidi.onedi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="gaojidi.onedi.gou">
                
            </div>
            <div class="threedi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="gaojidi.onedi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/gaojitudi.png" alt="" srcset="" v-show="gaojidi.onedi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="gaojidi.onedi.yikaidi">
                <div class="xiaoji" v-show="gaojidi.onedi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="gaojidi.onedi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="gaojidi.onedi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="gaojidi.onedi.gou">
                
            </div>
            <div class="fourdi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="gaojidi.onedi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/gaojitudi.png" alt="" srcset="" v-show="gaojidi.onedi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="gaojidi.onedi.yikaidi">
                <div class="xiaoji" v-show="gaojidi.onedi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="gaojidi.onedi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="gaojidi.onedi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="gaojidi.onedi.gou">
                
            </div>
            <div class="fivedi">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="gaojidi.onedi.weikaidi">
                <img src="../../assets/images/nongchang/yangzhi/gaojitudi.png" alt="" srcset="" v-show="gaojidi.onedi.yikaidi">
                <img src="../../assets/images/nongchang/yangzhi/fangzi.png" alt="" srcset="" v-show="gaojidi.onedi.yikaidi">
                <div class="xiaoji" v-show="gaojidi.onedi.xiaoji">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="gaojidi.onedi.suotou">
                <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="gaojidi.onedi.weilan1">
                <img src="../../assets/images/nongchang/yangzhi/gou.png" alt="" srcset="" v-show="gaojidi.onedi.gou">
                
            </div>
            
        </div>

        <!-- 左下角按钮 -->
        <div class="PathInner" id="PathMenu" >

            <div class="PathMain">
                <div class="Tmain" @click="PathRun">
                    <div class="rotate" data-transform="rotate(0deg)">
                        <span class="cover"></span>
                    </div>
                </div>
            </div>
             

            <div class="PathItem">
                <a class="link" href="javascript:;" title="增养" :style="zengyang" @click="zengyanghandle">
                    <span class="item" style="background-image:url(@/assets/images/nongchang/yangzhi/zengyang.png); -moz-transform: rotate(0deg);" data-transform="rotate(0deg)"></span>
                </a>
                <!-- <div class="metaicondetail shadow"><div class="inner"><p>官方指导价</p>暂无价格<s></s></div></div> -->
            </div>
            
            <div class="PathItem">
                <a class="link" href="javascript:;" title="鸡饲料" :style="jisiliao" @click="jisiliaohandle">
                    <span class="item" style="background-image:url(../../assets/images/nongchang/yangzhi/jisiliao.png); -moz-transform: rotate(0deg);" data-transform="rotate(0deg)"></span>
                </a>
                <!-- <div class="metaicondetail shadow"><div class="inner"><p>官方指导价</p>暂无价格<s></s></div></div> -->
            </div>
            
            <div class="PathItem">
                <a class="link" href="javascript:;" title="守护犬" :style="shouhuquan" @click="shouhuquanhandle">
                    <span class="item" style="background-image: url(@/assets/images/nongchang/yangzhi/shouhuquan.png); -moz-transform: rotate(0deg);" data-transform="rotate(0deg)"></span>
                </a>
                <!-- <div class="metaicondetail shadow"><div class="inner"><p>官方指导价</p>暂无价格<s></s></div></div> -->
            </div>
            
            <div class="PathItem">
                <a class="link" href="javascript:;" title="围栏" :style="weilan" @click="weilanhandle">
                    <span class="item" style="background-image: url(@/assets/images/nongchang/yangzhi/weilan.png); -moz-transform: rotate(0deg);" data-transform="rotate(0deg)"></span>
                </a>
                <!-- <div class="metaicondetail shadow"><div class="inner"><p>官方指导价</p>暂无价格<s></s></div></div> -->
            </div>

            <div class="PathItem">
                <a class="link" href="javascript:;" title="订单" :style="dingdan">
                    <span class="item" style="background-image:url(@/assets/images/nongchang/yangzhi/suotou.png); -moz-transform: rotate(0deg);" data-transform="rotate(0deg)"></span>
                </a>
                <!-- <div class="metaicondetail shadow"><div class="inner"><p>官方指导价</p>暂无价格<s></s></div></div> -->
            </div>

           <div class="pathlist">
               <!-- 鸡饲料 -->
               <div class="jisiliaolist flex " v-if="jisiliaolist">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="jiliaoProp(1)">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="jiliaoProp(2)">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="jiliaoProp(3)">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="jiliaoProp(4)">
               </div>
               <!-- 守护犬 -->
               <div class="shouhuquanlist flex " v-if="shouhuquanlist">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="shouhuquanProp(1)">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="shouhuquanProp(2)">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="shouhuquanProp(3)">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="shouhuquanProp(4)">
               </div>
               <!-- 围栏 -->
               <div class="weilanlist flex " v-if="weilanlist">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="weilanProp(1)">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="weilanProp(2)">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="weilanProp(3)">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="weilanProp(4)">
               </div>
           </div>
                
        </div>  


        <!-- 个人信息 -->
        <div class="gerenxinxi animat" v-if="gerenxinxikuang">
            <div class="kuang">
                <div class="content  ">
                    <img :src="avatar" alt="">
                    <div>昵称：{{nick_name}}</div>
                    <div>ID：{{user_id}}</div>
                    <div>邀请码：{{invite_code}}</div>
                    <div>绑定手机：<a href="javascript:;">去绑定</a></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt="">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

        <!-- 增养 -->
        <div class="zengyang animat" v-if="zengyangkuang">
            <div class="kuang">
                <div class="content">
                    <div>当前鸡舍：<span>1号鸡舍</span></div>
                    <div>小鸡数量：<span>3000</span></div>
                    <div>增养数量：<input type="text" v-model="zengyangshuliang"></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="zengyangqueding">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

        <!-- 围栏 -->
        <div class="weilan animat" v-if="weilankuang">
            <div class="kuang">
                <div class="content">
                    <div>当前鸡舍：<span>{{tudiID}}号鸡舍</span></div>
                    <div>围栏等级：<span>围栏LV{{dengji}}</span></div>
                    <div>围栏天数：<span>{{day}}天</span></div>
                    <div>小鸡数量：<span>{{num}}</span></div>
                    <div>围栏消耗：<span>{{xiaohaoxiaoji}}小鸡</span></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="weilanqueding">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

         <!-- 守护犬 -->
        <div class="shouhuquan animat" v-if="shouhuquankuang">
            <div class="kuang">
                <div class="content">
                    <div>当前鸡舍：<span>{{tudiID}}号鸡舍</span></div>
                    <div>守护等级：<span>哈士奇LV{{dengji}}</span></div>
                    <div>守护天数：<span>{{day}}天</span></div>
                    <div>守护消耗：<span>{{money}}小鸡</span></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="shouhuquanqueding">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

        <!-- 鸡饲料 -->
        <div class="jisiliao animat" v-if="jisiliaokuang">
            <div class="kuang">
                <div class="content">
                    <div>当前鸡舍：<span>{{tudiID}}号鸡舍</span></div>
                    <div>饲料等级：<span>鸡饲料LV{{dengji}}</span></div>
                    <div>小鸡数量：<span>{{num}}</span></div>
                    <div>喂养消耗：<span>{{xiaohaoxiaoji}}小鸡</span></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="jisiliaoqueding">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

        <!-- 购买成功，守护犬已应用 ,到对应鸡舍 -->
        <div class="tishikuang animat" v-if="tishikuang">
            <div class="kuang">
                <div class="content  ">
                    <div v-html="tishixingxi"></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                  
                </div>
            </div>
        </div>
        

    </div>
</template>
<script>
import $ from 'jquery'
var PathStatus 	= 0;
var angle 		= Math.PI/((4-1)*2);	
var mainButton 	= [
	{'bg':'../../assets/images/nongchang/shezhi/bg-2x.png','css':'','cover':'../../assets/images/nongchang/shezhi/icon-2x.png','html':'<span class="cover"></span>'},
	{'bg':'','css':'','cover':'','html':'','angle':-405,'speed':200}
];
var Radius 		= 85;		//小图出来的半径
var Offset 		= 50;		//小图出来后的偏移量
var Path 		= 1;		//出现方式，1：左上，2:左下，3：右上，4：右下
var OutSpeed 	= 80;		//小图出现的速度
var OutIncr 	= 50;		//小图出来的旋转
var OffsetSpeed = 200;		//小图出来的旋转速度
var InSpeed 	= 480;		//小图进去的速度
var InIncr 		= -80;		//小图进去的旋转


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
            zengyang:{backgroundImage: 'url(' + require('../../assets/images/nongchang/yangzhi/zengyang.png') + ')'},
            jisiliao:{backgroundImage: 'url(' + require('../../assets/images/nongchang/yangzhi/jisiliao.png') + ')'},
            shouhuquan:{backgroundImage: 'url(' + require('../../assets/images/nongchang/yangzhi/shouhuquan.png') + ')'},
            weilan:{backgroundImage: 'url(' + require('../../assets/images/nongchang/yangzhi/weilan.png') + ')'},
            dingdan:{backgroundImage: 'url(' + require('../../assets/images/nongchang/yangzhi/dingdan.png') + ')'},
            jisiliaolist:false,
            weilanlist:false,
            shouhuquanlist: false,
            putongdi:{
                onedi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                    sort:1, //序号
                    status:0, //状态：0未开启：1已开启
                },
                twodi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                    sort:2, //序号
                    status:0, //状态：0未开启：1已开启
                },
                threedi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                    sort:3, //序号
                    status:0, //状态：0未开启：1已开启
                },
                fourdi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                    sort:4, //序号
                    status:0, //状态：0未开启：1已开启
                },
                fivedi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                    sort:5, //序号
                    status:0, //状态：0未开启：1已开启
                },
                sixdi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                    sort:6, //序号
                    status:0, //状态：0未开启：1已开启
                },
                sevendi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                    sort:7, //序号
                    status:0, //状态：0未开启：1已开启
                },
                eightdi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                    sort:8, //序号
                    status:0, //状态：0未开启：1已开启
                },
                ninedi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                    sort:9, //序号
                    status:0, //状态：0未开启：1已开启
                },
                tendi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                    sort:10, //序号
                    status:0, //状态：0未开启：1已开启
                }
                
            },
            gaojidi:{
                onedi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                },
                twodi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                },
                threedi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                },
                fourdi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                },
                fivedi:{
                    weikaidi:true,
                    yikaidi:false,
                    xiaoji:false,
                    suotou:true,
                    weilan1:false,
                    gou:false,
                }
            },
            weilankuang:false,
            zengyangshuliang:"", //增养数量
            zengyangkuang:false,
            shouhuquankuang: false,
            jisiliaokuang:false,
            tishikuang:false,
            houseList:[], // 普通
            super_house:[], //高级
            tishixingxi: '购买成功，守护犬已应用 <br>到对应鸡舍',
            fangda:false, //放大效果
            tudiID:"",  //土地id
            type:"", //1：普通鸡舍；2：高级鸡舍
            num:"", //鸡舍里的小鸡数量
            dengji:"", // 鸡饲料等级; 守护等级
            list:[], //鸡饲料 拿money
            siliaoID:"", //鸡饲料等级id;
            money:"", // 消耗小鸡数量的百分比;守护消耗
            xiaohaoxiaoji:"", //喂养消耗; 围栏消耗：
            day:"", //守护天数
            shouhuquanID: "", //守护等级id;
            weilanID:"", // 围栏等级ID
        }
    },
    created() {
        this.houseIndex();
    },
    mounted(){
        this.getData();
        this.propfeed();
        this.propdog();
        this.propfence();
        
    },
    methods:{
        //围栏 购买
        async weilanqueding(){
            let res = await $ajax('houseuse_fence', {
                house_id: this.tudiID, // 土地id
                prop_fence: this.weilanID // 围栏id
            })
            if (!res) return false
            this.tishixingxi = res.msg
            this.tishikuang = true
            this.houseIndex();
            this.fangda = false;
            this.tudiID = ""; //土地id 清空
            this.type = ""; //1：普通鸡舍；2：高级鸡舍 清空
            this.num = ""; //鸡舍里的小鸡数量 清空
        },
        // 选择围栏等级
        async weilanProp(id){
            if(!this.tudiID || this.tudiID == '') return Toast('请先选择土地')
            this.dengji = id
            this.list.forEach((item, index)=>{
                // let sort = index + 1;
                if(item.level == id){
                    this.money = item.money
                    this.weilanID = item.id
                    this.day = item.day
                }
            })
            this.xiaohaoxiaoji = this.num * (this.money/100)
            this.weilankuang = true

            
        },
        async propfence(){ //围栏
             let res = await $ajax('propfence', {
                 page: 1
             })
            if (!res) return false
            // console.log(res)
            this.list = res.fence
            console.log(this.list)
           
        },
        //围栏 列表
        async weilanhandle(){
            console.log(this.tudiID)
            if(!this.tudiID || this.tudiID == '') return Toast('请先选择土地')
            this.weilanlist = !this.weilanlist
        },
        //守护犬 购买
        async shouhuquanqueding(){
            let res = await $ajax('houseuse_dog', {
                house_id: this.tudiID, // 土地id
                prop_dog: this.shouhuquanID // 饲料id
            })
            if (!res) return false
            this.tishixingxi = res.msg
            this.tishikuang = true
            this.houseIndex();
            this.fangda = false;
            this.tudiID = ""; //土地id 清空
            this.type = ""; //1：普通鸡舍；2：高级鸡舍 清空
            this.num = ""; //鸡舍里的小鸡数量 清空
        },
        // 选择守护犬等级
        async shouhuquanProp(id){
            if(!this.tudiID || this.tudiID == '') return Toast('请先选择土地')
            this.dengji = id
            this.list.forEach((item, index)=>{
                if(item.level == id){
                    console.log(item);
                    this.money = item.money
                    this.day = item.day
                    this.shouhuquanID = item.id
                }
            })
            this.xiaohaoxiaoji = this.num * (this.money/100)
            this.shouhuquankuang = true

            
        },
        async propdog(){ //守护犬
             let res = await $ajax('propdog', {
                 page: 1
             })
            if (!res) return false
            // console.log(res)
            this.list = res.dog
            console.log(this.list)
        },
        // 守护犬 列表
        shouhuquanhandle(){
            console.log(this.tudiID)
            if(!this.tudiID || this.tudiID == '') return Toast('请先选择土地')
            this.shouhuquanlist = !this.shouhuquanlist

        },
        //鸡饲料 购买
        async jisiliaoqueding(){
            let res = await $ajax('houseuse_feed', {
                house_id: this.tudiID, // 土地id
                prop_feed: this.siliaoID // 饲料id
            })
            if (!res) return false
            this.tishixingxi = res.msg
            this.tishikuang = true
            this.houseIndex();
            this.fangda = false;
            this.tudiID = ""; //土地id 清空
            this.type = ""; //1：普通鸡舍；2：高级鸡舍 清空
            this.num = ""; //鸡舍里的小鸡数量 清空
        },
        // 选择饲料等级
        async jiliaoProp(id){
            if(!this.tudiID || this.tudiID == '') return Toast('请先选择土地')
            this.dengji = id
            this.list.forEach((item, index)=>{
                // let sort = index + 1;
                if(item.level == id){
                    this.money = item.money
                    this.siliaoID = item.id
                }
            })
            this.xiaohaoxiaoji = this.num * (this.money/100)
            this.jisiliaokuang = true

            
        },
        async propfeed(){ //鸡饲料
             let res = await $ajax('propfeed', {
                 page: 1
             })
            if (!res) return false
            // console.log(res)
            this.list = res.list
            console.log(this.list)
           
        },
        // 鸡饲料 列表
        async jisiliaohandle(){
            console.log(this.tudiID)
            if(!this.tudiID || this.tudiID == '') return Toast('请先选择土地')
            this.jisiliaolist = !this.jisiliaolist
        },
        //收货鸡蛋 
        async shouhuo(id){
            let res = await $ajax('housereap', {
                house_id: this.tudiID,
            })
            if (!res) return false
            this.tishixingxi = res.msg
            this.tishikuang = true
            this.houseIndex();
        },
        //增养小鸡 确定
        async zengyangqueding(){
            if(!this.tudiID || this.tudiID == '') return Toast('请先选择土地')
            if(!this.zengyangshuliang || this.zengyangshuliang == '') return Toast('请输入增养数量')
            let res = await $ajax('houseadd_chick', {
                house_id: this.tudiID,
                num: this.zengyangshuliang
            })
            if (!res) return false
            console.log(res)
            this.tishixingxi = res.msg;
            this.tishikuang = true;
            this.houseIndex();
            this.fangda = false;
            this.tudiID = ""; //土地id 清空
            this.type = ""; //1：普通鸡舍；2：高级鸡舍 清空
            this.num = ""; //鸡舍里的小鸡数量 清空
        },
        //增养小鸡 框
        async zengyanghandle(){
            if(!this.tudiID || this.tudiID == '') return Toast('请先选择土地')
            this.zengyangkuang = true;
            
        },
        //选择土地 
        async houseadd_chick(id, type, num){
            if(this.fangda){
                this.fangda = false
                this.tudiID = ""; //土地id 清空
                this.type = ""; //1：普通鸡舍；2：高级鸡舍 清空
                this.num = ""; //鸡舍里的小鸡数量 清空
            }else{
                this.fangda = true
                this.tudiID = id; //土地id
                this.type = type; //1：普通鸡舍；2：高级鸡舍
                this.num = num; //鸡舍里的小鸡数量
            }
            // this.PathRun()
        },
        //开鸡舍
        async housebuild(id){
            // console.log(id)
            let res = await $ajax('housebuild', {
                house_id: id
            })
            if (!res) return false
            console.log(res)
            this.tishixingxi = res.msg
            this.tishikuang = true
            this.houseIndex();
        },
        async houseIndex(){
            let res = await $ajax('houseindex', {})
            if (!res) return false
            // console.log(res)
            this.houseList = res.house
            this.super_house = res.super_house
            
        },
        async getData(){
            let res = await $ajax('userinfo', {})
            if (!res) return false
            // console.log(res)
            Object.keys(res).forEach((key) =>{
                this[key] = res[key]
            })
        },
        PathRun(){
            var PathMenu = $('#PathMenu');
            var PathItems = PathMenu.children('.PathItem').slice(0,5);
            // console.log(PathItems);
            if(PathStatus == 0){
                var Count = PathItems.length;
                // console.log(Count);
                PathItems.each(function(SP){
                    // console.log(SP);
                    var ID = $(this).index();
                    // console.log(ID);
                    if (ID == 1) {
                        var X 	= Radius;
                        var Y 	= 0; 
                        var X1 	= X + Offset;
                        var Y1 	= Y;
                    }else{
                        var X 	= Math.cos(angle * (ID - 1)) * Radius;
                        var Y 	= Math.sin(angle * (ID - 1)) * Radius;
                        var X1	= X + Offset;
                        var Y1 	= Y + Offset;
                    }
                    
                    if(Path==2){
                        Y	= -Y;
                        Y1	= -Y1;
                        console.log(222222222222)
                    }else if(Path==3){
                        X	= -X;
                        Y	= -Y;
                        X1	= -X1;
                        Y1	= -Y1;
                        console.log(3333333333333)

                    }else if(Path==4){
                        X	= -X;
                        X1	= -X1;
                        console.log(44444444444444)
                    }
                    // console.log($(this).children().children())

                    $(this).children().children().animate({rotate:720},600);
                    
                    $(this).animate({left:X1,bottom:Y1},OutSpeed+SP*OutIncr,function(){
                        $(this).animate({left:X,bottom:Y},OffsetSpeed);
                    });	
                });
                
                if(mainButton[1]['angle']){
                    $(PathMenu.children('.PathMain').find('.rotate')).animate({rotate:mainButton[1]['angle']},mainButton[1]['speed']);
                } 
                if(mainButton[1]['bg']!='') $(this).children().css('background-image','url('+mainButton[1]['bg']+')')
                if(mainButton[1]['css']!='') $(this).children().css(mainButton[1]['css']);
                if(mainButton[1]['cover']!='') $(this).children().children().css('background-image','url('+mainButton[1]['cover']+')');
                if(mainButton[1]['html']!='') $(this).children().html(mainButton[1]['html']);
                
                PathStatus = 1;
            }else if(PathStatus == 1){
                PathItems.each(function(SP){
                    if(parseInt($(this).css('left'))==0){
                        var X1 = 0;
                    }else{
                        if(Path <=2){
                           var  X1 = parseInt($(this).css('left')) + Offset;
                        }else if(Path >=3){
                            var X1 = parseInt($(this).css('left')) - Offset;
                        }
                    }
                    
                    if(parseInt($(this).css('bottom'))==0){
                        var Y1 = 0;
                    }else{
                        if(Path==3 || Path==2){
                           var Y1 = parseInt($(this).css('bottom')) - Offset;
                        }else if(Path ==1 || Path == 4){
                           var Y1 = parseInt($(this).css('bottom')) + Offset;					
                        }
                    }
                    $(this).children().children().animate({rotate:0},600);
                    $(this).animate({left:X1,bottom:Y1},OffsetSpeed,function(){
                        $(this).animate({left:0,bottom:0},InSpeed+SP*InIncr);
                        
                    });
                });
                
                if(mainButton[1]['angle']){
                    $(PathMenu.children('.PathMain').find('.rotate')).animate({rotate:0},mainButton[1]['speed']);
                } 		
                
                if(mainButton[0]['bg']!='') $(this).children().css('background-image','url('+mainButton[0]['bg']+')')
                if(mainButton[0]['css']!='') $(this).children().css(mainButton[0]['css']);
                if(mainButton[0]['cover']!='') $(this).children().children().css('background-image','url('+mainButton[0]['cover']+')');
                if(mainButton[0]['html']!='') $(this).children().html(mainButton[0]['html']);			
                        
                PathStatus = 0;
            }
        },
        gerenxinxi(){
            this.gerenxinxikuang = true;
        },
        fanhui(){
           this.gerenxinxikuang = false;
           this.weilankuang = false;
            this.zengyangkuang = false;
            this.shouhuquankuang = false;
            this.jisiliaokuang = false;
            this.tishikuang = false;
            this.jisiliaolist = false;
            this.shouhuquanlist = false;
            this.weilanlist = false;
           
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
            >.onedi{
                position: absolute;
                left: 10%;
                top: 45%;
                >img:first-child{
                    width: 50vw;
                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
                }
                >img:nth-child(3){
                    width: 10vw;
                    position: absolute;
                    top: -5vw;
                    left: 20vw;
                    z-index: 12;
                }
                >.xiaoji{
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
                    // display: none;
                }
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
                }
            }
            >.twodi{
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
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
            >.threedi{
                position: absolute;
                left: 30%;
                top: 50%;
                >img:first-child{
                    width: 50vw;
                    // position: absolute;
                    // top: 9vw;
                    // left: 16vw;

                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
            >.fourdi{
                position: absolute;
                left: 24%;
                top: 66%;
                >img:first-child{
                    width: 50vw;
                    // position: absolute;
                    // top: 9vw;
                    // left: 16vw;

                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
            >.fivedi{
                position: absolute;
                left: 8%;
                top: 80%;
                >img:first-child{
                    width: 50vw;
                    // position: absolute;
                    // top: 9vw;
                    // left: 16vw;

                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
            >.sixdi{
                position: absolute;
                left: 50%;
                top: 58%;
                >img:first-child{
                    width: 50vw;
                    // position: absolute;
                    // top: 9vw;
                    // left: 16vw;

                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
            >.sevendi{
                position: absolute;
                left: 44%;
                top: 73%;
                >img:first-child{
                    width: 50vw;
                    // position: absolute;
                    // top: 9vw;
                    // left: 16vw;

                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
            >.eightdi{
                position: absolute;
                left: 28%;
                top: 86%;
                >img:first-child{
                    width: 50vw;
                    // position: absolute;
                    // top: 9vw;
                    // left: 16vw;

                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
            >.ninedi{
                position: absolute;
                left: 70%;
                top: 65%;
                >img:first-child{
                    width: 50vw;
                    // position: absolute;
                    // top: 9vw;
                    // left: 16vw;

                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
            >.tendi{
                position: absolute;
                left: 64%;
                top: 81%;
                >img:first-child{
                    width: 50vw;
                    // position: absolute;
                    // top: 9vw;
                    // left: 16vw;

                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
        }

        .yzgaojidi{
            >.onedi{
                position: absolute;
                left: 56%;
                top: 11%;
                >img:first-child{
                    width: 50vw;
                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
                }
                >img:nth-child(3){
                    width: 10vw;
                    position: absolute;
                    top: -5vw;
                    left: 20vw;
                    z-index: 12;
                }
                >.xiaoji{
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }

            }
            >.twodi{
                position: absolute;
                left: 45%;
                top: 24%;
                >img:first-child{
                    width: 50vw;
                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
                }
                >img:nth-child(3){
                    width: 10vw;
                    position: absolute;
                    top: -5vw;
                    left: 20vw;
                    z-index: 12;
                }
                >.xiaoji{
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
            >.threedi{
                position: absolute;
                left: 65%;
                top: 30%;
                >img:first-child{
                    width: 50vw;
                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
                }
                >img:nth-child(3){
                    width: 10vw;
                    position: absolute;
                    top: -5vw;
                    left: 20vw;
                    z-index: 12;
                }
                >.xiaoji{
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
            >.fourdi{
                position: absolute;
                left: 75%;
                top: 17%;
                >img:first-child{
                    width: 50vw;
                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
                }
                >img:nth-child(3){
                    width: 10vw;
                    position: absolute;
                    top: -5vw;
                    left: 20vw;
                    z-index: 12;
                }
                >.xiaoji{
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
            >.fivedi{
                position: absolute;
                left: 83%;
                top: 36%;
                >img:first-child{
                    width: 50vw;
                }
                >img:nth-child(2){
                    width: 50vw;
                    // position: absolute;
                    // top: 0vw;
                    // left: 5vw;
                    // z-index: 9;
                }
                >img:nth-child(3){
                    width: 10vw;
                    position: absolute;
                    top: -5vw;
                    left: 20vw;
                    z-index: 12;
                }
                >.xiaoji{
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
                    // display: none;
                }
                >img:nth-child(6){
                    width: 52vw;
                    position: absolute;
                    top: -5vw;
                    left: -1vw;
                    z-index: 11;
                }
                >img:nth-child(7){
                    width: 14vw;
                    position: absolute;
                    top: -5vw;
                    left: 2vw;
                    z-index: 10;
                }
            }
        }
        .PathInner{
            .pathlist{
                position: absolute;
                left: 30vw;
                bottom: 11vw;
                .jisiliaolist{
                    background: rgba(255, 255, 255, 0.5);
                    padding: 1vw 1vw;
                    border-radius: 10vw;
                    >img{
                        width: 11vw;
                        // height: 15vw;
                    }
                }
                .shouhuquanlist{
                    background: rgba(255, 255, 255, 0.5);
                    padding: 1vw 1vw;
                    border-radius: 10vw;
                    >img{
                        width: 11vw;
                        // height: 15vw;
                    }
                }
                .weilanlist{
                    background: rgba(255, 255, 255, 0.5);
                    padding: 1vw 1vw;
                    border-radius: 10vw;
                    >img{
                        width: 11vw;
                        // height: 15vw;
                    }
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

        .weilan{
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
                background-image: url(../../assets/images/nongchang/yangzhi/weilanquang.png);
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
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        margin-bottom: 1vw;
                        >span{
                            // padding: 1vw 2vw;
                            // box-sizing: border-box;
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        
                        // a{
                        //     color:#FE523B;
                            
                        // }
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
        
        .zengyang{
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
                background-image: url(../../assets/images/nongchang/yangzhi/zengyangkuang.png);
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
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        margin-bottom: 4vw;
                        >span{
                            // padding: 1vw 2vw;
                            // box-sizing: border-box;
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        >input{
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        
                        // a{
                        //     color:#FE523B;
                            
                        // }
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

        .shouhuquan{
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
                background-image: url(../../assets/images/nongchang/yangzhi/shouhuquankuang.png);
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
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        margin-bottom: 1vw;
                        >span{
                            // padding: 1vw 2vw;
                            // box-sizing: border-box;
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        
                        // a{
                        //     color:#FE523B;
                            
                        // }
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

        .jisiliao{
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
                background-image: url(../../assets/images/nongchang/yangzhi/jisiliaokuang.png);
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
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        margin-bottom: 1vw;
                        >span{
                            // padding: 1vw 2vw;
                            // box-sizing: border-box;
                            background: #EDC782;
                            border-radius: 1vw;
                            width: 30vw;
                            display: inline-block;
                            text-align: left;
                            padding-left: 2vw;
                        }
                        
                        // a{
                        //     color:#FE523B;
                            
                        // }
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

        .tishikuang{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(32, 29, 29, 0.7);
            z-index: 99;
            .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 58vw;
                background-image: url(../../assets/images/nongchang/tishikuang.png);
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
                    margin-top: 20%;
                    text-align: center;
                    color:#955942;
                    font-size: 5vw;
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
                    margin-top: 15%;
                    img{
                        width: 23vw;
                    }
                }

           } 
            
        }
    }
.PathMenu{position:absolute;right: 0px; bottom: 0px; width: 60px; height: 60px;}
.PathInner{position:fixed;width: 60px; height: 60px; bottom: 1vw;left: 12%;z-index: 15;}
.PathInner .PathItem{position:absolute;left: 0px; bottom: 0px;}
.PathInner a {/* position:absolute; */display:block;/* overflow:hidden; */background-position:center;background-repeat:no-repeat;z-index:999;}
.PathInner a .item, .rotate{width:100%;height:100%;background-position:center;background-repeat:no-repeat;display:block;overflow:hidden;text-align:center;vertical-align:middle;position:absolute;}
.PathInner .PathMain{z-index:1000;position:absolute;display:block;/* overflow:hidden; */background-position:center;background-repeat:no-repeat;bottom:0;left:0;}
.PathInner .PathMain .Tmain{background-image: url(../../assets/images/nongchang/yangzhi/daoju.png); width: 10vw; height: 10vw;background-size: 100% 100%;}
.PathInner .PathMain .Tmain .rotate{ -moz-transform: rotate(0deg);position:absolute;bottom:0;left:0;}
.PathInner .cover {width:100%;height:100%;display:block;background:url(../../assets/images/nongchang/yangzhi/bg-hl-2x.png) center no-repeat;cursor: pointer;*filter:alpha(opacity=0);filter:alpha(opacity=0)\0;opacity:0;-webkit-transition:opacity .2s ease-out;-moz-transition:opacity .2s ease-out;-ms-transition:opacity .2s ease-out;-o-transition:opacity .2s ease-out;}
.PathInner .cover:hover {opacity:0.2;*filter:alpha(opacity=20);filter:alpha(opacity=20)\0;}
.PathItem .link{position:absolute;bottom:0;left:0;width: 10vw; height: 10vw;background-size: 100% 100%; background-image: url(../../assets/images/nongchang/yangzhi/zengyang.png);}
.PathItem .link .item{bottom:0;left:0;}
.metaicondetail{background:#fff;color:#fff;border-radius:6px;border:1px #333 solid;min-width:100px;max-width:300px;overflow:hidden;text-align: center;position:absolute;display:none;top:-115px; left:-22px;}
.metaicondetail .inner{border:2px #fff solid;border-radius:6px;background:#272727;font-size:14px;padding:5px;}
.metaicondetail span{font-family:candara,arail;font-size:18px;}
.metaicondetail s{border-color:#333 transparent transparent;border-style: solid dashed dashed;border-width:5px;clear: both;display: inline-block;font-size: 0;height: 0;margin-left:3px;overflow: hidden;position: absolute;right:50%;top:44px;width:0;}



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


// 放大
.animatfangda{
    transition: all 1s ease-in-out;
    transform: scale(1.1); /*放大1.1倍*/
}
// 缩小
.animatsuoxiao{
    transition: all 1s ease-in-out;
    transform: scale(1); /*放大1.1倍*/
}
@keyframes mymoveda{
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
@-webkit-keyframes mymoveda{
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