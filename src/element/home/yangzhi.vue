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
                <div class="flex ali_center flex_between" >
                    <img src="../../assets/images/nongchang/jifen.png" alt="" srcset="" @click="jifen">
                    <span style="font-size:10px;" @click="jifen">{{balance.integral}}</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="" @click="chongzhitixianhandle">
                </div>
                <div class="flex ali_center flex_between" @click="jidan">
                    <img src="../../assets/images/nongchang/jidan.png" alt="" srcset="">
                    <span  style="font-size:10px;">{{balance.credit2}}</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
            </div>
            <div class="xxright flex flex_col flex-start">
                <div class="flex ali_center flex_between" @click="xiaoji">
                    <img src="../../assets/images/nongchang/xiaoji.png" alt="" srcset="">
                    <span  style="font-size:10px;">{{balance.credit1}}</span>
                    <img src="../../assets/images/nongchang/jiahao.png" alt="" srcset="">
                </div>
               
            </div>
        </div>
        <!-- 普通地 -->
        <div class="yzputongdi" v-if="houseList.length > 0">
            <div class="onedi" :class="fangda == houseList[0].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="houseList[0].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="houseList[0].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi1.png" alt="" srcset="" v-show="houseList[0].status == 1" @click="houseadd_detail(houseList[0].id,houseList[0].type,houseList[0].num,houseList[0].sort,houseList[0].prop_dog_level,houseList[0].prop_fence_level)">
                <div class="xiaoji" v-show="houseList[0].num > 0" @click="houseadd_chick(houseList[0].id,houseList[0].type,houseList[0].num,houseList[0].sort,houseList[0].no_fence_chick_num)">
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
                <div class="goudengji"  v-show="houseList[0].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="houseList[0].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="houseList[0].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="houseList[0].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="houseList[0].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="houseList[0].eggs > 0" @click="shouhuo(houseList[0].id)">
                
            </div>
            <div class="twodi" :class="fangda == houseList[1].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="houseList[1].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="houseList[1].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi2.png" alt="" srcset="" v-show="houseList[1].status == 1" @click="houseadd_detail(houseList[1].id,houseList[1].type,houseList[1].num,houseList[1].sort,houseList[1].prop_dog_level,houseList[1].prop_fence_level)">
                <div class="xiaoji" v-show="houseList[1].num > 0" @click="houseadd_chick(houseList[1].id,houseList[1].type,houseList[1].num,houseList[1].sort,houseList[1].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="houseList[1].status == 0" @click="housebuild(houseList[1].id)">
                <div class="weilandengji" v-show="houseList[1].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="houseList[1].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="houseList[1].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="houseList[1].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="houseList[1].prop_fence_level == 4">
                </div>
                 <div class="goudengji"  v-show="houseList[1].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="houseList[1].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="houseList[1].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="houseList[1].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="houseList[1].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="houseList[1].eggs > 0" @click="shouhuo(houseList[1].id)">
                
            </div>
            <div class="threedi" :class="fangda == houseList[2].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="houseList[2].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="houseList[2].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi3.png" alt="" srcset="" v-show="houseList[2].status == 1" @click="houseadd_detail(houseList[2].id,houseList[2].type,houseList[2].num,houseList[2].sort,houseList[2].prop_dog_level,houseList[2].prop_fence_level)">
                <div class="xiaoji" v-show="houseList[2].num > 0" @click="houseadd_chick(houseList[2].id,houseList[2].type,houseList[2].num,houseList[2].sort,houseList[2].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="houseList[2].status == 0" @click="housebuild(houseList[2].id)">
                <div class="weilandengji" v-show="houseList[2].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="houseList[2].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="houseList[2].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="houseList[2].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="houseList[2].prop_fence_level == 4">
                </div>
                 <div class="goudengji"  v-show="houseList[2].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="houseList[2].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="houseList[2].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="houseList[2].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="houseList[2].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="houseList[2].eggs > 0" @click="shouhuo(houseList[2].id)">
                
            </div>
            <div class="fourdi" :class="fangda == houseList[3].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="houseList[3].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="houseList[3].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi4.png" alt="" srcset="" v-show="houseList[3].status == 1" @click="houseadd_detail(houseList[3].id,houseList[3].type,houseList[3].num,houseList[3].sort,houseList[3].prop_dog_level,houseList[3].prop_fence_level)">
                <div class="xiaoji" v-show="houseList[3].num > 0" @click="houseadd_chick(houseList[3].id,houseList[3].type,houseList[3].num,houseList[3].sort,houseList[3].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="houseList[3].status == 0" @click="housebuild(houseList[3].id)">
                <div class="weilandengji" v-show="houseList[3].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="houseList[3].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="houseList[3].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="houseList[3].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="houseList[3].prop_fence_level == 4">
                </div>
                 <div class="goudengji"  v-show="houseList[3].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="houseList[3].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="houseList[3].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="houseList[3].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="houseList[3].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="houseList[3].eggs > 0" @click="shouhuo(houseList[3].id)">
                
                
            </div>
            <div class="fivedi" :class="fangda == houseList[4].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="houseList[4].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="houseList[4].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi5.png" alt="" srcset="" v-show="houseList[4].status == 1" @click="houseadd_detail(houseList[4].id,houseList[4].type,houseList[4].num,houseList[4].sort,houseList[4].prop_dog_level,houseList[4].prop_fence_level)">
                <div class="xiaoji" v-show="houseList[4].num > 0" @click="houseadd_chick(houseList[4].id,houseList[4].type,houseList[4].num,houseList[4].sort,houseList[4].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="houseList[4].status == 0" @click="housebuild(houseList[4].id)">
                <div class="weilandengji" v-show="houseList[4].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="houseList[4].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="houseList[4].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="houseList[4].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="houseList[4].prop_fence_level == 4">
                </div>
                 <div class="goudengji"  v-show="houseList[4].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="houseList[4].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="houseList[4].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="houseList[4].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="houseList[4].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="houseList[4].eggs > 0" @click="shouhuo(houseList[4].id)">
                
                
            </div>
            <div class="sixdi" :class="fangda == houseList[5].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="houseList[5].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="houseList[5].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi6.png" alt="" srcset="" v-show="houseList[5].status == 1" @click="houseadd_detail(houseList[5].id,houseList[5].type,houseList[5].num,houseList[5].sort,houseList[5].prop_dog_level,houseList[5].prop_fence_level)">
                <div class="xiaoji" v-show="houseList[5].num > 0" @click="houseadd_chick(houseList[5].id,houseList[5].type,houseList[5].num,houseList[5].sort,houseList[5].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="houseList[5].status == 0" @click="housebuild(houseList[5].id)">
                <div class="weilandengji" v-show="houseList[5].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="houseList[5].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="houseList[5].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="houseList[5].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="houseList[5].prop_fence_level == 4">
                </div>
                 <div class="goudengji"  v-show="houseList[5].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="houseList[5].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="houseList[5].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="houseList[5].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="houseList[5].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="houseList[5].eggs > 0" @click="shouhuo(houseList[5].id)">  
                
            </div>
            <div class="sevendi" :class="fangda == houseList[6].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="houseList[6].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="houseList[6].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi7.png" alt="" srcset="" v-show="houseList[6].status == 1" @click="houseadd_detail(houseList[6].id,houseList[6].type,houseList[6].num,houseList[6].sort,houseList[6].prop_dog_level,houseList[6].prop_fence_level)">
                <div class="xiaoji" v-show="houseList[6].num > 0" @click="houseadd_chick(houseList[6].id,houseList[6].type,houseList[6].num,houseList[6].sort,houseList[6].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="houseList[6].status == 0" @click="housebuild(houseList[6].id)">
                <div class="weilandengji" v-show="houseList[6].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="houseList[6].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="houseList[6].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="houseList[6].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="houseList[6].prop_fence_level == 4">
                </div>
                 <div class="goudengji"  v-show="houseList[6].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="houseList[6].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="houseList[6].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="houseList[6].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="houseList[6].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="houseList[6].eggs > 0" @click="shouhuo(houseList[6].id)">  
                
                
            </div>
            <div class="eightdi" :class="fangda == houseList[7].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="houseList[7].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="houseList[7].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi8.png" alt="" srcset="" v-show="houseList[7].status == 1" @click="houseadd_detail(houseList[7].id,houseList[7].type,houseList[7].num,houseList[7].sort,houseList[7].prop_dog_level,houseList[7].prop_fence_level)">
                <div class="xiaoji" v-show="houseList[7].num > 0" @click="houseadd_chick(houseList[7].id,houseList[7].type,houseList[7].num,houseList[7].sort,houseList[7].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="houseList[7].status == 0" @click="housebuild(houseList[7].id)">
                <div class="weilandengji" v-show="houseList[7].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="houseList[7].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="houseList[7].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="houseList[7].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="houseList[7].prop_fence_level == 4">
                </div>
                 <div class="goudengji"  v-show="houseList[7].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="houseList[7].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="houseList[7].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="houseList[7].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="houseList[7].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="houseList[7].eggs > 0" @click="shouhuo(houseList[7].id)">  
                
                
                
            </div>
            <div class="ninedi" :class="fangda == houseList[8].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="houseList[8].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="houseList[8].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi9.png" alt="" srcset="" v-show="houseList[8].status == 1" @click="houseadd_detail(houseList[8].id,houseList[8].type,houseList[8].num,houseList[8].sort,houseList[8].prop_dog_level,houseList[8].prop_fence_level)">
                <div class="xiaoji" v-show="houseList[8].num > 0" @click="houseadd_chick(houseList[8].id,houseList[8].type,houseList[8].num,houseList[8].sort,houseList[8].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="houseList[8].status == 0" @click="housebuild(houseList[8].id)">
                <div class="weilandengji" v-show="houseList[8].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="houseList[8].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="houseList[8].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="houseList[8].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="houseList[8].prop_fence_level == 4">
                </div>
                 <div class="goudengji"  v-show="houseList[8].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="houseList[8].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="houseList[8].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="houseList[8].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="houseList[8].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="houseList[8].eggs > 0" @click="shouhuo(houseList[8].id)">  
                
                
            </div>
            <div class="tendi" :class="fangda == houseList[9].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="houseList[9].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/yikaidi.png" alt="" srcset="" v-show="houseList[9].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi10.png" alt="" srcset="" v-show="houseList[9].status == 1" @click="houseadd_detail(houseList[9].id,houseList[9].type,houseList[9].num,houseList[9].sort,houseList[9].prop_dog_level,houseList[9].prop_fence_level)">
                <div class="xiaoji" v-show="houseList[9].num > 0" @click="houseadd_chick(houseList[9].id,houseList[9].type,houseList[9].num,houseList[8].sort,houseList[9].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="houseList[9].status == 0" @click="housebuild(houseList[9].id)">
                <div class="weilandengji" v-show="houseList[9].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="houseList[9].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="houseList[9].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="houseList[9].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="houseList[9].prop_fence_level == 4">
                </div>
                 <div class="goudengji"  v-show="houseList[9].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="houseList[9].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="houseList[9].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="houseList[9].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="houseList[9].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="houseList[9].eggs > 0" @click="shouhuo(houseList[9].id)">  

            </div>
        </div>
        <div class="huacaoche">
            <img src="../../assets/images/nongchang/yangzhi/che.png" alt="" srcset="" >  
            <img src="../../assets/images/nongchang/yangzhi/caotop.png" alt="" srcset="" >  
            <img src="../../assets/images/nongchang/yangzhi/caobottom.png" alt="" srcset="" >  

        </div>

        <!-- 高级地 -->
        <div class="yzgaojidi" v-if="super_house.length > 0">
            <div class="onedi" :class="fangda == super_house[0].id ? 'animatfangda' : 'animatsuoxiao'">
                 <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="super_house[0].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/gaojitudi.png" alt="" srcset="" v-show="super_house[0].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi11.png" alt="" srcset="" v-show="super_house[0].status == 1" @click="houseadd_detail(super_house[0].id,super_house[0].type,super_house[0].num,super_house[0].sort,super_house[0].prop_dog_level,super_house[0].prop_fence_level)">
                <div class="xiaoji" v-show="super_house[0].num > 0" @click="houseadd_chick(super_house[0].id,super_house[0].type,super_house[0].num,super_house[0].sort,super_house[0].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="super_house[0].status == 0" @click="housebuild(super_house[0].id)">
                <div class="weilandengji" v-show="super_house[0].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="super_house[0].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="super_house[0].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="super_house[0].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="super_house[0].prop_fence_level == 4">
                </div>
                <div class="goudengji"  v-show="super_house[0].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="super_house[0].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="super_house[0].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="super_house[0].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="super_house[0].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="super_house[0].eggs > 0" @click="shouhuo(super_house[0].id)"> 

            </div>
            <div class="twodi" :class="fangda == super_house[1].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="super_house[1].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/gaojitudi.png" alt="" srcset="" v-show="super_house[1].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi12.png" alt="" srcset="" v-show="super_house[1].status == 1" @click="houseadd_detail(super_house[1].id,super_house[1].type,super_house[1].num,super_house[1].sort,super_house[1].prop_dog_level,super_house[1].prop_fence_level)">
                <div class="xiaoji" v-show="super_house[1].num > 0" @click="houseadd_chick(super_house[1].id,super_house[1].type,super_house[1].num,super_house[1].sort,super_house[1].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="super_house[1].status == 0" @click="housebuild(super_house[1].id)">
                <div class="weilandengji" v-show="super_house[1].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="super_house[1].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="super_house[1].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="super_house[1].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="super_house[1].prop_fence_level == 4">
                </div>
                <div class="goudengji"  v-show="super_house[1].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="super_house[1].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="super_house[1].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="super_house[1].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="super_house[1].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="super_house[1].eggs > 0" @click="shouhuo(super_house[1].id)"> 
            </div>
            <div class="threedi" :class="fangda == super_house[2].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="super_house[2].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/gaojitudi.png" alt="" srcset="" v-show="super_house[2].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi13.png" alt="" srcset="" v-show="super_house[2].status == 1" @click="houseadd_detail(super_house[2].id,super_house[2].type,super_house[2].num,super_house[2].sort,super_house[2].prop_dog_level,super_house[2].prop_fence_level)">
                <div class="xiaoji" v-show="super_house[2].num > 0" @click="houseadd_chick(super_house[2].id,super_house[2].type,super_house[2].num,super_house[2].sort,super_house[2].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="super_house[2].status == 0" @click="housebuild(super_house[2].id)">
                <div class="weilandengji" v-show="super_house[2].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="super_house[2].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="super_house[2].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="super_house[2].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="super_house[2].prop_fence_level == 4">
                </div>
                <div class="goudengji"  v-show="super_house[2].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="super_house[2].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="super_house[2].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="super_house[2].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="super_house[2].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="super_house[2].eggs > 0" @click="shouhuo(super_house[2].id)">
                
            </div>
            <div class="fourdi" :class="fangda == super_house[3].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="super_house[3].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/gaojitudi.png" alt="" srcset="" v-show="super_house[3].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi14.png" alt="" srcset="" v-show="super_house[3].status == 1" @click="houseadd_detail(super_house[3].id,super_house[3].type,super_house[3].num,super_house[3].sort,super_house[3].prop_dog_level,super_house[3].prop_fence_level)">
                <div class="xiaoji" v-show="super_house[3].num > 0" @click="houseadd_chick(super_house[3].id,super_house[3].type,super_house[3].num,super_house[3].sort,super_house[3].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="super_house[3].status == 0" @click="housebuild(super_house[3].id)">
                <div class="weilandengji" v-show="super_house[3].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="super_house[3].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="super_house[3].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="super_house[3].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="super_house[3].prop_fence_level == 4">
                </div>
                <div class="goudengji"  v-show="super_house[3].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="super_house[3].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="super_house[3].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="super_house[3].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="super_house[3].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="super_house[3].eggs > 0" @click="shouhuo(super_house[3].id)">
                
            </div>
            <div class="fivedi" :class="fangda == super_house[4].id ? 'animatfangda' : 'animatsuoxiao'">
                <img src="../../assets/images/nongchang/yangzhi/weikaidi.png" alt="" srcset="" v-show="super_house[4].status == 0">
                <img src="../../assets/images/nongchang/yangzhi/gaojitudi.png" alt="" srcset="" v-show="super_house[4].status == 1">
                <img src="../../assets/images/nongchang/yangzhi/fangzi15.png" alt="" srcset="" v-show="super_house[4].status == 1" @click="houseadd_detail(super_house[4].id,super_house[4].type,super_house[4].num,super_house[4].sort,super_house[4].prop_dog_level,super_house[4].prop_fence_level)">
                <div class="xiaoji" v-show="super_house[4].num > 0" @click="houseadd_chick(super_house[4].id,super_house[4].type,super_house[4].num,super_house[4].sort,super_house[4].no_fence_chick_num)">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="" >
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                    <img src="../../assets/images/nongchang/yangzhi/xiaoji.gif" alt="" srcset="">
                </div>                
                <img src="../../assets/images/nongchang/yangzhi/suotou.png" alt="" srcset="" v-show="super_house[4].status == 0" @click="housebuild(super_house[4].id)">
                <div class="weilandengji" v-show="super_house[4].prop_fence != 0">
                    <img src="../../assets/images/nongchang/yangzhi/weilan1.png" alt="" srcset="" v-show="super_house[4].prop_fence_level == 1">
                    <img src="../../assets/images/nongchang/yangzhi/weilan2.png" alt="" srcset="" v-show="super_house[4].prop_fence_level == 2">
                    <img src="../../assets/images/nongchang/yangzhi/weilan3.png" alt="" srcset="" v-show="super_house[4].prop_fence_level == 3">
                    <img src="../../assets/images/nongchang/yangzhi/weilan4.png" alt="" srcset="" v-show="super_house[4].prop_fence_level == 4">
                </div>
                <div class="goudengji"  v-show="super_house[4].prop_dog != 0">
                    <img src="../../assets/images/nongchang/yangzhi/gou1.gif" alt="" srcset="" v-show="super_house[4].prop_dog == 1">
                    <img src="../../assets/images/nongchang/yangzhi/gou2.gif" alt="" srcset="" v-show="super_house[4].prop_dog == 2">
                    <img src="../../assets/images/nongchang/yangzhi/gou3.gif" alt="" srcset="" v-show="super_house[4].prop_dog == 3">
                    <img src="../../assets/images/nongchang/yangzhi/gou4.gif" alt="" srcset="" v-show="super_house[4].prop_dog == 4">

                </div>
                <img src="../../assets/images/nongchang/yangzhi/shouhuo.png" alt="" srcset="" v-show="super_house[4].eggs > 0" @click="shouhuo(super_house[4].id)">
                
            </div>
            
        </div>
        <!-- 风车 -->
        <div class="fengche">
            <img src="../../assets/images/nongchang/yangzhi/fengche.gif" alt="" srcset="" >  

        </div>

        <!-- 左下角按钮 -->
        <div class="PathInner" id="PathMenu" v-if="!userIdshow">

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
                <a class="link" href="javascript:;" title="订单" :style="dingdan" @click="dingdanhandle">
                    <span class="item" style="background-image:url(@/assets/images/nongchang/yangzhi/suotou.png); -moz-transform: rotate(0deg);" data-transform="rotate(0deg)"></span>
                </a>
                <!-- <div class="metaicondetail shadow"><div class="inner"><p>官方指导价</p>暂无价格<s></s></div></div> -->
            </div>

           <div class="pathlist">
               <!-- 鸡饲料 -->
               <div class="jisiliaolist flex " v-if="jisiliaolist">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao1.png" alt="" srcset="" @click="jiliaoProp(1)">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao2.png" alt="" srcset="" @click="jiliaoProp(2)">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao3.png" alt="" srcset="" @click="jiliaoProp(3)">
                   <img src="../../assets/images/nongchang/yangzhi/jisiliao4.png" alt="" srcset="" @click="jiliaoProp(4)">
               </div>
               <!-- 守护犬 -->
               <div class="shouhuquanlist flex " v-if="shouhuquanlist">
                   <img src="../../assets/images/nongchang/yangzhi/shouhuquan1.png" alt="" srcset="" @click="shouhuquanProp(1)">
                   <img src="../../assets/images/nongchang/yangzhi/shouhuquan2.png" alt="" srcset="" @click="shouhuquanProp(2)">
                   <img src="../../assets/images/nongchang/yangzhi/shouhuquan3.png" alt="" srcset="" @click="shouhuquanProp(3)">
                   <img src="../../assets/images/nongchang/yangzhi/shouhuquan4.png" alt="" srcset="" @click="shouhuquanProp(4)">
               </div>
               <!-- 围栏 -->
               <div class="weilanlist flex " v-if="weilanlist">
                   <img src="../../assets/images/nongchang/yangzhi/weilan_1.png" alt="" srcset="" @click="weilanProp(1)">
                   <img src="../../assets/images/nongchang/yangzhi/weilan_2.png" alt="" srcset="" @click="weilanProp(2)">
                   <img src="../../assets/images/nongchang/yangzhi/weilan_3.png" alt="" srcset="" @click="weilanProp(3)">
                   <img src="../../assets/images/nongchang/yangzhi/weilan_4.png" alt="" srcset="" @click="weilanProp(4)">
               </div>
           </div>
                
        </div>  

        <!-- 右上角 返回 -->
        <div class="fanhui flex flex_col">
            <img src="../../assets/images/nongchang/yangzhi/fanhui.png" alt=""  @click="$router.go(-1);">
            <img src="../../assets/images/nongchang/yangzhi/saobaquan.png" alt=""  @click="saobaquan" v-if="userIdshow">
            <div class="saobalist flex flex_col" v-show="saobalistshow">
                <img src="../../assets/images/nongchang/yangzhi/saoba1.png" alt=""  @click="tabsaoba(1)">
                <img src="../../assets/images/nongchang/yangzhi/saoba2.png" alt=""  @click="tabsaoba(2)">
                <img src="../../assets/images/nongchang/yangzhi/saoba3.png" alt=""  @click="tabsaoba(3)">
                <img src="../../assets/images/nongchang/yangzhi/saoba4.png" alt=""  @click="tabsaoba(4)">

            </div>
        </div>

        <!-- 个人信息 -->
        <div class="gerenxinxi animat" v-if="gerenxinxikuang">
            <div class="kuang">
                <div class="content  ">
                    <div class="flex">
                        <img :src="avatar" alt="" style="margin-right:2vw;">
                        <div class="flex flex_col">
                             <div @click="nicheng">昵称：{{nick_name}}<a style="background: linear-gradient(0deg, rgb(255, 168, 0) 0%, rgb(255, 245, 89) 100%);
                        padding: 0 2vw;
                        text-align: center;
                        display: inline-block;
                        border-radius: 1vw;
                        font-size: 14px;margin-left:2vw" href="javascript:;">修改</a></div>
                            <div>ID：{{user_id}}</div>
                        </div>
                    </div>
                    <div :data-clipboard-text="invite_code" class="copy">邀请人：{{first_leader.nick_name}} </div>

                    <div :data-clipboard-text="invite_code" class="copy">邀请码：{{invite_code}}<a style="background: linear-gradient(0deg, rgb(255, 168, 0) 0%, rgb(255, 245, 89) 100%);
                        padding: 0 2vw;
                        text-align: center;
                        display: inline-block;
                        border-radius: 1vw;
                        font-size: 14px;margin-left:2vw" href="javascript:;">复制</a> </div>
                    <div @click="bangding">绑定手机：{{mobile}}<a style="background: linear-gradient(0deg, rgb(255, 168, 0) 0%, rgb(255, 245, 89) 100%);
                        padding: 0 2vw;
                        text-align: center;
                        display: inline-block;
                        border-radius: 1vw;
                        font-size: 14px;margin-left:2vw" href="javascript:;">修改</a></div>
                    <div>团队总鸡分量：{{team_info.integral}} </div>
                    <div>团队总鸡量：{{team_info.credit1}} </div>
                    <div>团队总蛋量：{{team_info.credit2}} </div>
                    <div>团队总鸡分量：{{team_info.integral}} </div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/gerenxinxi/fenxiang.png" alt="" @click="tofenxiang">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

         <!-- 扫把 -->
        <div class="saobakuang animat" v-if="saobakuang">
            <div class="kuang">
                <div class="content">
                    <div>当前鸡舍：<span>{{sort}}号{{type == 1 ? '普通' : '高级'}}鸡舍</span></div>
                    <div>扫帚等级：<span>扫帚LV{{dengji}}</span></div>
                    <div>小鸡数量：<span>{{num}}</span></div>
                    <div>扫帚消耗：<span>{{xiaohaoxiaoji}}鸡分</span></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="saobaqueding">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

        <!-- 增养 -->
        <div class="zengyang animat" v-if="zengyangkuang">
            <div class="kuang">
                <div class="content">
                    <div>当前鸡舍：<span>{{sort}}号{{type == 1 ? '普通' : '高级'}}鸡舍</span></div>
                    <div>小鸡数量：<span>{{num}}</span></div>
                    <div>增养数量：<input type="text" v-model="zengyangshuliang"></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="zengyangqueding">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
        <div class="nechenggenghuan animat" v-if="nechenggenghuan">
            <div class="kuang">
                <div class="content ">
                    <!-- <img src="../../assets/images/icon/7.png" alt=""> -->
                    <!-- <div>购买物品：小鸡</div> -->
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>会员昵称：</span>
                        <input type="text" v-model="newnicheng" placeholder="请输入新会员昵称">
                    </div>   
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="nechengxiugai">
                </div>
            </div>
        </div>

        <!-- 围栏 -->
        <div class="weilan animat" v-if="weilankuang">
            <div class="kuang">
                <div class="content">
                    <div v-if="sort">当前鸡舍：<span>{{sort}}号{{type == 1 ? '普通' : '高级'}}鸡舍</span></div>
                    <div>围栏等级：
                        <span>
                            <select style="background: #EDC782;border: 0;width: 88%;color: #955942;font-size: 4vw;" 
                            v-model="weilanID" @change="selectweilandengji(weilanID)">
                                <option :value ="item.id"  v-for="(item, index) in list" :key="index">{{item.title}}</option>
                            </select>    
                        </span>
                        <!-- <span>围栏LV{{dengji}}</span> -->
                    </div>
                    <div>围栏天数：<span>{{day}}天</span></div>
                    <div>小鸡数量：<span>{{num}}</span></div>
                    <div>围栏消耗：<span>{{xiaohaoxiaoji}}鸡分</span></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="weilanfanhui">
                   <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="weilanqueding">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

         <!-- 守护犬 -->
        <div class="shouhuquan animat" v-if="shouhuquankuang">
            <div class="kuang">
                <div class="content">
                    <div>当前鸡舍：<span>{{sort}}号{{type == 1 ? '普通' : '高级'}}鸡舍</span></div>
                    <div>守护等级：
                        <span>
                            <select style="background: #EDC782;border: 0;width: 88%;color: #955942;font-size: 4vw;" 
                            v-model="shouhuquanID" @change="selectdogdengji(shouhuquanID)">
                                <option :value ="item.id"  v-for="(item, index) in list" :key="index">{{item.title}}</option>
                            </select>    
                        </span>
                    </div>
                    <div>守护天数：<span>{{day}}天</span></div>
                    <div>守护消耗：<span>{{money}}鸡分</span></div>
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
                    <div>当前鸡舍：<span>{{sort}}号{{type == 1 ? '普通' : '高级'}}鸡舍</span></div>
                    <div>饲料等级：<span>鸡饲料LV{{dengji}}</span></div>
                    <div>小鸡数量：<span>{{num}}</span></div>
                    <div>喂养消耗：<span>{{xiaohaoxiaoji}}鸡分</span></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="jisiliaoqueding">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>

        <!--充值提现 -->
        <div class="chongzhitixiankuang animat" v-if="chongzhitixiankuang">
            <div class="kuang">
                <div class="content ">
                    <!-- <img src="../../assets/images/icon/7.png" alt=""> -->
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span style="white-space: nowrap;">操作类型：</span>
                        <select v-model="selectVal">
                            <option value ="1" >充值</option>
                            <option value ="2">提现</option>
                        </select>
                    </div>
                    <div class="flex flex_col flex_end" v-if="selectVal == 2">
                        <!-- <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;私钥：</span>
                            <input type="text" v-model="privatekey" >
                        </div>
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">合约地址：</span>
                            <input type="text" v-model="tokencontract" >
                        </div> -->
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">钱包地址：</span>
                            <input type="text" v-model="target" >
                        </div>
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">&nbsp;&nbsp;&nbsp;&nbsp;手续费：</span>
                            <input style="width: 20vw;" type="text" v-model="withdraw"  disabled>%
                        </div>
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">提现数量：</span>
                            <input type="text" v-model="tixianshuliang"  @blur="jisuandaozhang">
                        </div>
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">实际到账：</span>
                            <input type="text"  v-model="shijidaozhan" disabled>
                        </div>
                    </div>
                    <div v-else>
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">用户地址：</span>
                            <input type="text" v-model="fromaddress" placeholder="请登录获取用户地址" >
                            <!-- <a style="background: linear-gradient(0deg, rgb(255, 168, 0) 0%, rgb(255, 245, 89) 100%);
                            padding: 0 2vw;
                            text-align: center;
                            display: inline-block;
                            border-radius: 1vw;
                            color: #955942;
                            white-space: nowrap;
                            font-size: 14px;margin-left:2vw" href="javascript:;" :data-clipboard-text="chongzhidizhi" class="copy">复制</a>  -->
                        </div>
                        <div class="gmkshuliang flex flex_center ali_center">
                            <span style="white-space: nowrap;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数量：</span>
                            <input type="text" v-model="amount"  >                        </div>
                    </div>
                    
                   
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="tixianqueding"  v-if="selectVal == 2">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="chongzhiqueding" v-if="selectVal == 1">
                   <img src="../../assets/images/nongchang/denglv/login.png" alt="" @click="tologinqianbao" >
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>
        <!--支付密码 -->
        <div class="zhifukuang animat" v-if="zhifukuang">
            <div class="kuang">
                <div class="content  ">
                    
                    <div>请输入支付密码</div>
                    <!-- 密码输入框 -->
                    <van-password-input
                        :value="value"
                        :error-info="errorInfo"
                        :focused="showKeyboard"
                        @focus="showKeyboard = true"
                    />
                    
                   
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhuimima">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="zhifuqueding">
                   
                </div>
            </div>
            <!-- 数字键盘 -->
            <van-number-keyboard
                v-model="value"
                :show="showKeyboard"
                @blur="showKeyboard = false"
            />
        </div>
         <!-- 鸡蛋明细 -->
        <div class="jidangkuang animat" v-if="jidangkuang">
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="fanhui">
                </div>
                <div class="sdlan flex flex_center">
                    <img :src="shouhuoif ? shouhuo1 : shouhuo2" alt="" srcset="" @click="tabjidan(0)">
                    <img :src="touqu ? touqu1 : touqu2" alt="" srcset="" @click="tabjidan(1)">
                    <img :src="dasao ? dasao1 : dasao2" alt="" srcset="" @click="tabjidan(2)">
                    
                </div>
                <div class="sdlist" v-if="statusjidan == 0">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="propshouhuo"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <!-- <span>鸡舍：1号</span> -->
                                </div>
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">订单：{{item.id}}</span>
                                    <span>数量：{{item.change_amount}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="sdlist" v-if="statusjidan == 1">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="proptoudao"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <!-- <span>鸡舍：1号</span> -->
                                </div>
                                <div class="flex flex_between">
                                    <span  style="width: 30vw;overflow: hidden;margin-right:5vw;">ID：{{item.user_name}}</span>
                                    <span>数量：{{item.change_amount}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="sdlist" v-if="statusjidan == 2">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="propdasao"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <!-- <span>鸡舍：1号</span> -->
                                </div>
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">ID：{{item.user_name}}</span>
                                    <span>数量：{{item.change_amount}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <!-- <div class="jishou flex flex_center" v-if="statusjishi == 1">
                    <img src="../../assets/images/nongchang/jishi/jishou.png" alt="" srcset="" @click="jishoubtn">
                </div> -->
            </div>
        </div>
        <!-- 小鸡明细 -->
        <div class="xiaojikuang animat" v-if="xiaojikuang">
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="fanhui">
                </div>
                <div class="sdlan flex flex_center">
                    <img :src="jishi ? jishi1 : jishi2" alt="" srcset="" @click="tabxiaoji(0)">
                    <img :src="shangdian ? shangdian1 : shangdian2" alt="" srcset="" @click="tabxiaoji(1)">
                    <img :src="fuhua ? fuhua1 : fuhua2" alt="" srcset="" @click="tabxiaoji(2)">
                    
                </div>
                <div class="sdlist" v-if="statusxiaoji == 0">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="propjishi"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <!-- <span>鸡舍：1号</span> -->
                                </div>
                                <div class="flex flex_between">
                                    <span v-if="item.change_type == 1">鸡分：{{item.change_amount}}</span>
                                    <span v-else>鸡分：-{{item.change_amount}}</span>
                                    <span>数量：{{item.left_amount}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="sdlist" v-if="statusxiaoji == 1">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="propshangdian"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <!-- <span>等级：{{item.remark   }}</span> -->
                                </div>
                                <div class="flex flex_between">
                                    <!-- <span style="width: 30vw;overflow: hidden;margin-right:5vw;">小鸡：2号</span> -->
                                    <span>数量：{{item.change_amount}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="sdlist" v-if="statusxiaoji == 2">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="propfuhua"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <!-- <span>加速包：1号</span> -->
                                </div>
                                <div class="flex flex_between">
                                    <!-- <span v-if="item.status == 2" style="width: 30vw;overflow: hidden;margin-right:5vw;">订单：2号</span> -->
                                    <span>数量：{{item.change_amount}}</span>
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <!-- <div class="jishou flex flex_center" v-if="statusjishi == 1">
                    <img src="../../assets/images/nongchang/jishi/jishou.png" alt="" srcset="" @click="jishoubtn">
                </div> -->
            </div>
        </div>
        <!-- 鸡分明细 -->
        <div class="jifenkuang animat" v-if="jifenkuang">
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="fanhui">
                </div>
                <div class="sdlan flex flex_center">
                    <img :src="chongzhitixian ? chongzhitixian1 : chongzhitixian2" alt="" srcset="" @click="tabjifen(0)">
                    <img :src="zhuanrangjifen ? zhuanrangjifen1 : zhuanrangjifen2" alt="" srcset="" @click="tabjifen(1)">
                    <img :src="goumaixiaoji ? goumaixiaoji1 : goumaixiaoji2" alt="" srcset="" @click="tabjifen(2)">
                    
                </div>
                <div class="sdlist" v-if="statusjifen == 0">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="prochongzhitixian"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <span v-if="item.status != 1">ID：ys25421</span>
                                </div>
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;" v-if="item.source_type == 110">鸡分：-{{item.change_amount}}</span>
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;" v-else>鸡分：{{item.change_amount}}</span>
                                    <!-- <span>数量：300</span> -->
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="sdlist" v-if="statusjifen == 1">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="prozhuanzhang"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <span >ID：{{item.source_id}}</span>
                                </div>
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;" v-if="item.source_type == 105">鸡分：-{{item.source_type}}</span>
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;" v-else>鸡分：{{item.source_type}}</span>
                                    <!-- <span>数量：300</span> -->
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="sdlist" v-if="statusjifen == 2">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="projiaoyi"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;">类别:{{item.remark}}</span>
                                    <span>ID：{{item.source_id}}</span>
                                </div>
                                <div class="flex flex_between">
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;" v-if="item.source_type == 103">鸡分：-{{item.source_type}}</span>
                                    <span style="width: 30vw;overflow: hidden;margin-right:5vw;" v-else>鸡分：{{item.source_type}}</span>
                                    <!-- <span>数量：300</span> -->
                                </div>
                                
                                <div>时间：{{item.create_time}}</div>
                            </div>
                            <!-- <img src="../../assets/images/nongchang/shangdian/goumai.png" alt=""> -->
                        </div>
                        
                    </van-list>
                </div>
                <div class="jishou flex flex_center" >
                    <img src="../../assets/images/nongchang/jifenmingxi/zhuanrangbtn.png" alt="" srcset="" @click="zhuanrangbtn">
                </div>
            </div>
        </div>
        <!--鸡分转让 -->
        <div class="jifenzhuanrangkuang animat" v-if="jifenzhuanrangkuang">
            <div class="kuang">
                <div class="content  ">
                     <div class="zhuan flex ali_center">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;转让ID：</span>
                        <input type="number" v-model="to_user_id" placeholder="请输入转让ID">
                    </div>
                    <div class="zhuan flex ali_center">
                        <span>转让鸡分：</span>
                        <input type="number" v-model="jifennum" placeholder="请输入转让鸡分">
                    </div>
    
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="zhuanrangqueding">
                   
                </div>
            </div>
        </div>
        <!-- 鸡舍详情 -->
        <div class="jishexiangqingkuang animat" v-if="jishexiangqingkuang">
            <div class="kuang">
                <div class="content">
                    <div>当前鸡舍：<span>{{sort}}号{{type == 1 ? '普通' : '高级'}}鸡舍</span></div>
                    <div>小鸡数量：<span>{{num}}</span></div>
                    <div>守护等级：<span>LV{{prop_dog_level}}</span></div>
                    <div>围栏等级：<span>LV{{prop_fence_level}}</span></div>
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <!-- <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="shouhuquanqueding"> -->
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>


        <!-- 购买成功，守护犬已应用 ,到对应鸡舍 提示框 -->
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
        <!-- 预判断 -->
        <div class="yutishikuang animat" v-if="yutishikuang">
            <div class="kuang">
                <div class="content  ">
                    <div v-html="yutishixingxi"></div>
                </div>
                <div class="shezhibtn flex flex_center">
                    <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                    <img src="../../assets/images/nongchang/shezhi/queding.png" alt="" @click="yutishiqueding">

                </div>
            </div>
        </div>
        <!-- 订单明细 -->
        <div class="dingdankuang animat" v-if="dingdankuang">
            <div class="kuang">
                <div class="guanbi flex flex-end">
                    <img src="../../assets/images/nongchang/shangdian/guanbi.png" alt="" @click="guangbi">
                </div>
                <div class="sdlist" v-if="houselistshow">
                    
                    <div class="sditem flex ali_center flex_between" v-for="(item, index) in house_list" :key="index"> 
                        <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                        <div class="sdtext flex flex_col ">
                            <div class="flex flex_between" @click="houselog_list(item.id)">
                                <span style="width: 36vw;margin-right:5vw;">鸡舍等级：{{index > 9 ? '高级鸡舍' : '普通鸡舍'}}（{{item.sort}}号）</span>
                                <!-- <span>数量：100</span> -->
                            </div>
                            <div class="flex flex_between"  @click="houselog_list(item.id)">
                                <span  style="width: 36vw;overflow: hidden;margin-right:5vw;">小鸡总数：{{item.num}}</span>
                                <span>订单数量：{{item.order_num}}</span>
                            </div>
                            <div class="flex flex_between"  @click="houselog_list(item.id)" v-if="item.prop_dog_title">
                                <span  style="width: 36vw;overflow: hidden;margin-right:5vw;">守护犬：{{item.prop_dog_title}}</span>
                               
                            </div>
                             <div class="flex flex_between" v-if="item.prop_dog_title">
                                    <span style="width: 44vw;overflow: hidden;margin-right:5vw;">守护等级：{{item.prop_dog_level}}</span>
                                    <span style="background: #EDC782;border:1px solid #EDC782;padding: 1vw 2vw;
                                    box-sizing: border-box;
                                    /* font-size: 12px; */
                                    display: inline-block;
                                    height: 5vw;
                                    line-height: 3vw;
                                    border-radius: 1vw;" @click="dogshengji(item.id, item.prop_dog, item.sort)">升级</span>
                                </div>
                             <div class="flex flex_between"  @click="houselog_list(item.id)" v-if="item.prop_dog_end_time">
                                <span >到期时间：{{item.prop_dog_end_time}}</span>
                                <!-- <span>守护等级：{{item.order_num}}</span> -->
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="sdlist" v-if="houselog_listshow">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        :finished-text="'我是有底线的'"
                        @load="log_list"
                    >
                        <div class="sditem flex ali_center flex_between" v-for="(item, index) in list" :key="index"> 
                            <!-- <img src="../../assets/images/nongchang/shangdian/jiasu.png" alt="" srcset=""> -->
                            <div class="sdtext flex flex_col ">
                                <div class="flex flex_between" >
                                    <span>围栏等级：{{item.prop_fence_title}}</span>
                                    <span>小鸡数量数量：{{item.num}}</span>
                                </div>
                                <div class="flex flex_between" >
                                    <span style="width: 44vw;overflow: hidden;margin-right:5vw;">到期时间：{{item.prop_fence_end_time}}</span>
                                    <span style="background: #EDC782;border:1px solid #EDC782;padding: 1vw 2vw;
                                    box-sizing: border-box;
                                    /* font-size: 12px; */
                                    display: inline-block;
                                    height: 5vw;
                                    line-height: 3vw;
                                    border-radius: 1vw;" @click="weilanshengji(item.id, item.house_id, item.prop_fence, item.num)">升级</span>
                                </div>
                                
                            </div>
                        </div>
                    </van-list>

                    <div class="jishou flex flex_center">
                        <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="gopage">
                    </div>   
                </div>
               
            </div>
        </div>
        
        <!-- 更换绑定 -->
        <div class="genghuan animat" v-if="genghuan">
            <div class="kuang">
                <div class="content ">
                    <!-- <img src="../../assets/images/icon/7.png" alt=""> -->
                    <!-- <div>购买物品：小鸡</div> -->
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>新手机号：</span>
                        <input type="text" v-model="newmobile" placeholder="请输入新手机号">
                    </div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;验证码：</span>
                        <input type="text" v-model="newcode" placeholder="请输入验证码" style="width:23vw;">
                        <span @click="senVerifyCode()">{{timeAndTextOfSendcode}}</span>
                    </div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>登录密码：</span>
                        <input type="text"  placeholder="请输入登录密码" v-model="newpwd" >
                    </div>
                    <div class="gmkshuliang flex flex_center ali_center">
                        <span>确认密码：</span>
                        <input type="text"  placeholder="请输入确认密码" v-model="newcompwd" >
                    </div>
                    
                </div>
                <div class="shezhibtn flex flex_center">
                   <img src="../../assets/images/nongchang/shezhi/fanhui.png" alt="" @click="fanhui">
                   <img src="../../assets/images/nongchang/jishi/queding.png" alt="" @click="genghuang">
                   <!-- <img src="../../assets/images/nongchang/shezhi/qiehuan.png" alt=""> -->
                </div>
            </div>
        </div>



    </div>
</template>
<script>
 // 複製模塊
import {copy} from '../../func/copy'
import { sendTransaction } from '../../utils/chongzhi'
import {enable} from "../../utils/web3utils";
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
            first_leader:{},
            balance:"",
            gerenxinxikuang:false,
            genghuan:false,
            nechenggenghuan:false,
            newmobile:"",
            newmobile:"",
            newcode:"",
            newpwd:"",
            newcompwd:"",
            timeAndTextOfSendcode:"发送验证码",
            zengyang:{backgroundImage: 'url(' + require('../../assets/images/nongchang/yangzhi/zengyang.png') + ')'},
            jisiliao:{backgroundImage: 'url(' + require('../../assets/images/nongchang/yangzhi/jisiliao.png') + ')'},
            shouhuquan:{backgroundImage: 'url(' + require('../../assets/images/nongchang/yangzhi/shouhuquan.png') + ')'},
            weilan:{backgroundImage: 'url(' + require('../../assets/images/nongchang/yangzhi/weilan.png') + ')'},
            dingdan:{backgroundImage: 'url(' + require('../../assets/images/nongchang/yangzhi/dingdan.png') + ')'},
            jisiliaolist:false,
            weilanlist:false,
            shouhuquanlist: false,
            weilankuang:false,
            zengyangshuliang:"", //增养数量
            zengyangkuang:false,
            shouhuquankuang: false,
            jisiliaokuang:false,
            tishikuang:false,
            yutishikuang:false,
            yutishixingxi:"是否开启鸡舍?",
            houseList:[], // 普通
            super_house:[], //高级
            tishixingxi: '购买成功，守护犬已应用 <br>到对应鸡舍',
            fangda:false, //放大效果
            tudiID:"",  //土地id
            type:"", //1：普通鸡舍；2：高级鸡舍
            num:"", //鸡舍里的小鸡数量
            sort:"",//土地编号
            no_fence_chick_num:"", //没有设置围栏的小鸡数量（用于计算使用围栏的 ）
            dengji:"", // 鸡饲料等级; 守护等级
            list:[], //鸡饲料 拿money
            siliaoID:"", //鸡饲料等级id;
            money:"", // 消耗小鸡数量的百分比;守护消耗
            xiaohaoxiaoji:"", //喂养消耗; 围栏消耗：；扫帚消耗：
            day:"", //守护天数
            shouhuquanID: "", //守护等级id;
            weilanID:"", // 围栏等级ID
            dingdankuang: false, //订单 明细
            house_list:[], //鸡舍详情
            list:[],
            page: 1,
            limit: 10,
            finished: false,
            loading: false,
            userIdshow:true,
            saobalistshow:false, 
            saobaID:"", //扫把等级ID
            saobakuang:false,//扫把框
            houselog_listshow:false,
            houselistshow: true,
            house_id:"",
            log_id:"", //围栏增养记录 id
            // shouhuquandengjixuan:"", //守护犬 等级 选择
            zhifukuang:false,
            value: '', //支付密码 数字键盘
            errorInfo: '',
            showKeyboard: false, //数字键盘
            jidangkuang:false,// 鸡蛋明细
            shouhuoif:false,
            shouhuo1:require('@/assets/images/nongchang/jidanmingxi/shouhuo.png'),
            shouhuo2:require('@/assets/images/nongchang/jidanmingxi/shouhuo1.png'),
            touqu:false,
            touqu1:require('@/assets/images/nongchang/jidanmingxi/touqu.png'),
            touqu2:require('@/assets/images/nongchang/jidanmingxi/touqu1.png'),
            dasao:false,
            dasao1:require('@/assets/images/nongchang/jidanmingxi/dasao.png'),
            dasao2:require('@/assets/images/nongchang/jidanmingxi/dasao1.png'),
            statusjidan:0,
            xiaojikuang: false,//小鸡明细
            jishi:false,
            jishi1:require('@/assets/images/nongchang/xiaojimingxi/jishi.png'),
            jishi2:require('@/assets/images/nongchang/xiaojimingxi/jishi1.png'),
            shangdian:false,
            shangdian1:require('@/assets/images/nongchang/xiaojimingxi/shangdian.png'),
            shangdian2:require('@/assets/images/nongchang/xiaojimingxi/shangdian1.png'),
            fuhua:false,
            fuhua1:require('@/assets/images/nongchang/xiaojimingxi/fuhua.png'),
            fuhua2:require('@/assets/images/nongchang/xiaojimingxi/fuhua1.png'),
            statusxiaoji:0,
            jifenkuang: false,//鸡分明细
            chongzhitixian:false,
            chongzhitixian1:require('@/assets/images/nongchang/jifenmingxi/chongzhitixian.png'),
            chongzhitixian2:require('@/assets/images/nongchang/jifenmingxi/chongzhitixian1.png'),
            zhuanrangjifen:false,
            zhuanrangjifen1:require('@/assets/images/nongchang/jifenmingxi/zhuanrangjifen.png'),
            zhuanrangjifen2:require('@/assets/images/nongchang/jifenmingxi/zhuanrangjifen1.png'),
            goumaixiaoji:false,
            goumaixiaoji1:require('@/assets/images/nongchang/jifenmingxi/goumaixiaoji.png'),
            goumaixiaoji2:require('@/assets/images/nongchang/jifenmingxi/goumaixiaoji1.png'),
            statusjifen:0,
            jifenzhuanrangkuang:false,
            to_user_id: "", //转让ID
            jifennum:"", //转让鸡分
            MP3_bg:require('@/assets/images/nongchang/music/bg_music.mp3'),
            MP3_click:require('@/assets/images/nongchang/music/click.mp3'),  
            chongzhitixiankuang:false,
            selectVal:1,
            tixianshuliang:"",
            shijidaozhan:"",
            chongzhidizhi:"jertye2862sadsd132sadasd5as4sasd12321",
            erweima:"http://6006.jujiawangluokeji.com/uploads/images/20211115/c5fab0dd442615f2055a26f0bb604f3f.jpg",
            privatekey:"", //Trx账户私钥：
            tokencontract:"", //币的合约地址
            target:"", //目标地址：
            withdraw: "", //提现手续费%
            jishexiangqingkuang: false,
            prop_fence_level:"",
            prop_dog_level:"",
            team_info:"",
            toaddress:"0xeA0be69A80C19FaD352b2a55D07Bcf1fe8B94688",
            fromaddress:"",
            amount:"",
            contractAddr:"", //合约地址
           
        }
    },
    created() {
        //傳遞複製按鈕選擇器, 接受複製插件的 clipboard 實例
        this.clipboard = copy('.copy')
        this.user_id_other = this.$route.query.user_id || ""
        console.log(this.user_id_other);
        if(this.user_id_other){
            this.userIdshow = true;
        }else{
            this.userIdshow = false;
        }
        this.houseIndex();
    },
    mounted(){
        this.getData();
        this.propfeed();
        this.propdog();
        this.propfence();
        this.propbroom_list();
        this.getshouxufei();
        
    },
    methods:{
        //点击房子 获取 详情
        houseadd_detail(id,type,num,sort,prop_dog_level,prop_fence_level){
            this.jishexiangqingkuang = true;
            console.log(id,type,num,sort,prop_dog_level,prop_fence_level);
            this.sort = sort;
            this.num = num;
            this.type = type;
            this.prop_dog_level = prop_dog_level
            this.prop_fence_level = prop_fence_level

        },
        //获取手续费
        async getshouxufei(){
             let res = await $ajax('config', {})
            if (!res) return false
            console.log(res);
            // this.shouxufei = res.trade.trade_fee //实际交易手续费（卖家成功卖出，收益到账时扣除%）
            this.withdraw = res.withdraw.balance_fee //提现手续费%
        },
        // -- 确认支付密码
        async zhifuqueding(){
            if(this.to_user_id && this.jifennum){ //鸡分转让 -- 转让ID
                if(!this.value || this.value == "") return Toast('请输入支付密码！');
                let res = await $ajax('transfersubmit', {
                    to_user_id: this.to_user_id,
                    num: this.jifennum,
                    pay_pwd: this.value,
                     
                 })
                if (!res) return false
                Toast(res.msg)
                this.value = "";
                this.to_user_id = "";
                this.jifennum = "";
                
            } 
            
        },
        //充值确定
        async chongzhiqueding(){
            let fromaddress = this.fromaddress
            let toaddress = this.toaddress
            let contractAddr = this.contractAddr
            let amount = this.amount
            if(!fromaddress) return Toast('请登录获取用户地址')
            if(!amount) return Toast('请输入数量')
            
            let res = await sendTransaction(fromaddress,toaddress,contractAddr,amount)
            if(!res) return false
            console.log(res)
            let resbalancerecharge_submit = await $ajax('balancerecharge_submit', {
                fromaddress: fromaddress, ////提交充值用户的钱包地址
                hastransaction: res.hastransaction ////发起交易后返回的哈希字符串
            })
            if (!resbalancerecharge_submit) return false
            Toast(resbalancerecharge_submit.msg)
            
        },
        //登录钱包
        async tologinqianbao(){
             //获取登录
            let res = await enable();
            if (!res) {
                this.noweb3 = true;
                
                return false;
            }else {
                this.fromaddress = res
                this.target = res
            }
        },
        //计算实际到账
        jisuandaozhang(){
            if(!this.tixianshuliang || this.tixianshuliang == "") return Toast('请输入提现数量')
            this.shijidaozhan = this.tixianshuliang * (1 - this.withdraw/100)
        },
        //提现
        async tixianqueding(){
            // if(!this.privatekey) return Toast('请输入Trx账户私钥')
            // if(!this.tokencontract) return Toast('请输入币的合约地址')
            if(!this.target) return Toast('请输入币的目标地址')
            if(!this.tixianshuliang) return Toast('请输入提现数量')
            let res = await $ajax('balancewithdraw', {
                // "privatekey": this.privatekey, //Trx账户私钥
                // "tokencontract": this.tokencontract, //币的合约地址
                "target": this.target, //币的目标地址
                "amount": this.tixianshuliang //数量(鸡分)
            })
            if (!res) return false
            console.log(res)
            Toast(res.msg)
            this.chongzhitixiankuang = false;
            // this.privatekey = ""
            // this.tokencontract = ""
            this.target = ""
            this.tixianshuliang = ""

        },
        //充值
        async chongzhitixianhandle(){
            
             let res = await $ajax('balancerecharge', {
                 uid: this.user_id
             })
            if (!res) return false
            console.log(res)
            this.toaddress = res.toaddress //转账地址
            this.contractAddr = res.contractAddr //合约地址
            this.chongzhitixiankuang = true;
        },
         // 转让确定 弹支付
        zhuanrangqueding(){
            if(!this.to_user_id) return Toast('请输入转让ID!')
            if(!this.jifennum || this.jifennum == '') return Toast('请输入转让鸡分!');
            this.zhifukuang = true
            
        },
        zhuanrangbtn(){
            this.jifenzhuanrangkuang = true

        },
        jifen(){
            this.tabjifen(0)
           this.jifenkuang = true
            
        },
        async prochongzhitixian(){
            let res = await $ajax('logbalance_integral', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async prozhuanzhang(){
            let res = await $ajax('logtransfer_integral', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async projiaoyi(){
            let res = await $ajax('logtrade_integral', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        //鸡分明细
        tabjifen(index){
            console.log(index)
            this.page = 1;
            this.list = [];
            this.loading = true;
            this.finished = false;
            this.statusjifen = index
            if(index == 0){
                this.chongzhitixian = true
                this.zhuanrangjifen = false
                this.goumaixiaoji = false
                this.prochongzhitixian()

            }else if(index == 1){
                this.chongzhitixian = false
                this.zhuanrangjifen = true
                this.goumaixiaoji = false
                this.prozhuanzhang()
            }else if(index == 2){
                this.chongzhitixian = false
                this.zhuanrangjifen = false
                this.goumaixiaoji = true
                this.projiaoyi()
              
            }
        },
        xiaoji(){
            this.tabxiaoji(0)
           this.xiaojikuang = true
            
        },
        async propjishi(){
            let res = await $ajax('logtrade_chick', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async propshangdian(){
            let res = await $ajax('logshop_chick', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async propfuhua(){
            let res = await $ajax('loghatch_chick', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        //小鸡明细
        tabxiaoji(index){
            this.page = 1;
            this.list = [];
            this.loading = true;
            this.finished = false;
            this.statusxiaoji = index

            if(index == 0){
                this.jishi = true
                this.shangdian = false
                this.fuhua = false
                this.propjishi();
            }else if(index == 1){
                this.jishi = false
                this.shangdian = true
                this.fuhua = false  
                this.propshangdian();
            }else if(index == 2){
                this.jishi = false
                this.shangdian = false
                this.fuhua = true
                this.propfuhua();
            }
        },
        jidan(){
            // this.shouhuo = true
            this.tabjidan(0)
            this.jidangkuang = true
            
            
        },
        async propshouhuo(){
            let res = await $ajax('logget_egg', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async proptoudao(){
            let res = await $ajax('logsteal_egg', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        async propdasao(){
            let res = await $ajax('logclean_egg', {
                 page: this.page
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        // 鸡蛋明细
        tabjidan(index){
            console.log(33333333333)
            console.log(index)
            this.page = 1;
            this.list = [];
            this.loading = true
            this.finished = false;
            this.statusjidan = index
            if(index == 0){
                this.shouhuoif = true
                this.touqu = false
                this.dasao = false
                this.propshouhuo();
            }else if(index == 1){
                this.shouhuoif = false
                this.touqu = true
                this.dasao = false   
                this.proptoudao();
            }else if(index == 2){
                this.shouhuoif = false
                this.touqu = false
                this.dasao = true
                this.propdasao();
              
            }
        },

        // 扫把确定 待定
        async saobaqueding(){
            let res = await $ajax('houseuse_broom', {
                house_id: this.tudiID, // 土地id
                prop_broom: this.saobaID // 扫把id
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
        // 选择扫把等级
        tabsaoba(id){
            if(!this.tudiID || this.tudiID == '') return Toast('请先选择土地')
            this.dengji = id
            this.list.forEach((item, index)=>{
                // let sort = index + 1;
                if(item.level == id){
                    this.money = item.money
                    this.saobaID = item.id
                    // this.day = item.day
                }
            })
            this.xiaohaoxiaoji = (this.num * (this.money/100)).toFixed(2)
            this.saobakuang = true
        },
        async propbroom_list(){ //扫帚列表
             let res = await $ajax('housebroom_list', {
                 page: 1
             })
            if (!res) return false
            // console.log(res)
            this.list = res.list
            console.log(this.list)
        },
        //返回 -鸡舍详情
        gopage(){
             this.houselog_listshow = false
            this.houselistshow = true
            this.page = 1;
            this.list = [];
            this.finished = false;
        },
        
        //增养记录列表 
        async log_list(){
            // let addAlert = `addAlert_${index}`
            // $(`${addAlert}`).show();
            let res = await $ajax('houselog_list', {
                 page: this.page,
                 house_id: this.house_id //鸡舍 
             })
            if (!res) return false
            // console.log(res)
            // this.list = res.goods                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            this.page++
            console.log(res.list)
            // this.listtotal = res.listtotal
            this.list.push(...res.list)
            // // 加载状态结束
            this.loading = false
            if (res.list.length === 0) {
                this.finished = true //加载完成
            } 
        },
        houselog_list(id){
            console.log(id);
            if(id){
                this.house_id = id 
            }
            this.houselog_listshow = true
            this.houselistshow = false
            this.page = 1;
            this.list = [];
            this.loading = true;
            this.finished = false;
            this.log_list()
        },
        //鸡舍详情
        async gethousesimple(){
            let res = await $ajax('housesimple', {
                // page: this.page
            })
            if (!res) return false
            console.log(res)
            this.house_list = res.house_list
        },
        saobaquan(){
            this.saobalistshow = !this.saobalistshow
        },
        dingdanhandle(){
            this.dingdankuang = true;
            this.houselistshow = true;
            this.gethousesimple();
        },
        guangbi(){
            this.dingdankuang = false;
            
        },
        //围栏升级
        weilanshengji(id, house_id, prop_fence_id, num){
             this.log_id = id
             this.tudiID = house_id
             this.weilanID = prop_fence_id
             this.num = num
              this.propfence();
            setTimeout(()=>{
                this.shengjiweilanProp(prop_fence_id)
            },500)
            
            this.weilankuang = true
        },
        // 狗狗升级
        dogshengji(id, prop_dog_id, sort){
             this.tudiID = id
             this.shouhuquanID = prop_dog_id
             this.sort = sort
             this.propdog();
             setTimeout(()=>{
                 this.shouhuquanProp(prop_dog_id)
             },500)
             
            this.shouhuquankuang = true
        },
        // async shengji(id,prop_fence_level){
        //     let res = await $ajax('houseuse_fence', {
        //         "house_id": this.house_id, //鸡舍id
        //         "prop_fence":  prop_fence_level, //围栏id
        //         "log_id": id //增养记录 
        //     })
        //     if (!res) return false
        //     Toast(res.msg)
        // },
        
        //围栏 购买
        async weilanqueding(){
            let res = await $ajax('houseuse_fence', {
                house_id: this.tudiID, // 土地id
                prop_fence: this.weilanID, // 围栏id
                log_id: this.log_id //增养记录 
            })
            if (!res) return false
            this.tishixingxi = res.msg
            this.tishikuang = true
            this.houseIndex();
            this.fangda = false;
            this.tudiID = ""; //土地id 清空
            this.type = ""; //1：普通鸡舍；2：高级鸡舍 清空
            this.num = ""; //鸡舍里的小鸡数量 清空
            this.log_id = ""; // 增养记录id
            this.weilanID = "" //围栏id
             this.weilankuang = false
            this.houselistshow = true
            this.houselog_listshow = false

        },
        // 围栏返回
        weilanfanhui(){
            this.weilankuang = false
            this.houselistshow = true
            this.houselog_listshow = false
        },
        // 升级围栏
        selectweilandengji(value){
           this.shengjiweilanProp(value) 
        },
        // 升级 -- 选择围栏等级
        async shengjiweilanProp(id){
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
            // console.log(this.num)
            // console.log(this.money)
            this.xiaohaoxiaoji = (this.num * (this.money/100)).toFixed(2)
            this.weilankuang = true
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
            this.xiaohaoxiaoji = (this.no_fence_chick_num * (this.money/100)).toFixed(2)
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
            this.jisiliaolist = false;
            this.shouhuquanlist = false;
             this.propfence();
        },
        //守护犬 购买
        async shouhuquanqueding(){
            let res = await $ajax('houseuse_dog', {
                house_id: this.tudiID, // 土地id
                prop_dog: this.shouhuquanID // 狗狗id
            })
            if (!res) return false
            this.tishixingxi = res.msg
            this.tishikuang = true
            this.houseIndex();
            this.fangda = false;
            this.tudiID = ""; //土地id 清空
            this.type = ""; //1：普通鸡舍；2：高级鸡舍 清空
            this.num = ""; //鸡舍里的小鸡数量 清空
            this.list = []; //清空列表
            this.sort = ""; // 土地编号 清空
            this.shouhuquanID = "" //守护犬ID 清空
        },
        selectdogdengji(value){
            this.shouhuquanProp(value)
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
            this.xiaohaoxiaoji = (this.num * (this.money/100)).toFixed(2)
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
            this.jisiliaolist = false
            this.weilanlist = false
            this.propdog();
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
            this.xiaohaoxiaoji = (this.num * (this.money/100)).toFixed(2)
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
            this.shouhuquanlist = false;
            this.weilanlist = false;
            this.propfeed();
        },
        //收货鸡蛋 
        async shouhuo(id){
            console.log(this.user_id_other)
            if(!this.user_id_other || this.user_id_other == ""){
                let res = await $ajax('housereap', {
                    house_id: id,
                })
                if (!res) return false
                this.tishixingxi = res.msg
                this.tishikuang = true
                this.houseIndex();
            }else{
                let res = await $ajax('housesteal', {
                    house_id: id,
                })
                if (!res) return false
                this.tishixingxi = res.msg
                this.tishikuang = true
                this.houseIndex();
            }
            
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
        async houseadd_chick(id, type, num, sort, no_fence_chick_num){
            if(this.fangda){
                this.fangda = false
                this.tudiID = ""; //土地id 清空
                this.type = ""; //1：普通鸡舍；2：高级鸡舍 清空
                this.num = ""; //鸡舍里的小鸡数量 清空
                this.sort = ""; //土地编号
                this.no_fence_chick_num = ""; //没有设置围栏的小鸡数量（用于计算使用围栏的 ）

            }else{
                this.fangda = id
                this.tudiID = id; //土地id
                this.type = type; //1：普通鸡舍；2：高级鸡舍
                this.num = num; //鸡舍里的小鸡数量
                this.sort = sort; //土地编号
                this.no_fence_chick_num = no_fence_chick_num; //没有设置围栏的小鸡数量（用于计算使用围栏的 ）

            }
            // this.PathRun()
        },
        async yutishiqueding(){
            let res = await $ajax('housebuild', {
                house_id: this.tudiID
            })
            if (!res) return false
            console.log(res)
            this.tishixingxi = res.msg
            this.tishikuang = true
            this.houseIndex();
        },
        //开鸡舍
        async housebuild(id){
            if(this.userIdshow) return false
            this.tudiID = id;
            this.yutishixingxi = '是否开鸡舍?'
            this.yutishikuang = true;
            // Dialog.confirm({
            //     message: '是否开鸡舍',
            // })
            // .then( async() => {
            //     // on confirm
            //      let res = await $ajax('housebuild', {
            //         house_id: id
            //     })
            //     if (!res) return false
            //     console.log(res)
            //     this.tishixingxi = res.msg
            //     this.tishikuang = true
            //     this.houseIndex();
            // })
            // .catch(() => {
            //     // on cancel
            // });
            // console.log(id)
           
        },
        async houseIndex(){
            let userID = this.user_id || this.user_id_other
            let res = await $ajax('houseindex', {
                fans_id:userID
            })
            if (!res) return false
            console.log(res)
            this.houseList = res.house
            this.super_house = res.super_house
            
        },
        async getData(){
            let res = await $ajax('userinfo', {
                "fans_id": this.user_id_other //好友user_id（不填就是自己的）
            })
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
         //去分享
        tofenxiang(){
            this.$router.push({
                name:'invite'
            })
        },
        timing () {
            this.timer = setInterval( () => {
                this.timeAndTextOfSendcode--
                if (this.timeAndTextOfSendcode <= 0) {
                    clearInterval(this.timer)
                    this.timeAndTextOfSendcode = '发送验证码'
                }
            }, 1000)
        },
        // 发送验证码
        async senVerifyCode () {
            // let { register } = this.$i18n
            
            if ( this.timeAndTextOfSendcode !== '发送验证码') return false
            if (!this.newmobile) return Toast( '请输入手机号')
            let res = await $ajax('sendVerifycode',{
                mobile: this.newmobile,
                 "type": "edit_mobile" //短信验证码类型：register，forget
            })
            if (!res) return false
            Toast(res.msg)
            this.timeAndTextOfSendcode = 60
            this.timing() //執行倒計時
        },
        async genghuang(){
             if(this.newmobile == "") return Toast('请输入新手机号')
             if(this.newcode == "") return Toast('请输入验证码')
             if(this.newpwd == "") return Toast('请输入登录密码')
             if(this.newcompwd == "") return Toast('请输入确认密码')

            let res = await $ajax('useredit', {
                "mobile": this.newmobile, //手机号码
                "pwd": this.newpwd, //登录密码
                "pwd_confirm": this.newcompwd, //确认登录密码
                "sms_code":  this.newcode //短信验证码
             })
            if (!res) return false
            console.log(res)
            Toast(res.msg)
            this.fanhui();
        },
        async nechengxiugai() {
            if(this.newnicheng == "") return Toast('请输入新会员昵称')
            let res = await $ajax('useredit_nick_name', {
                "nick_name": this.newnicheng, //手机号码
             })
            if (!res) return false
            console.log(res)
            Toast(res.msg)
            this.fanhui();
            this.getData();
        },
         nicheng(){
            this.nechenggenghuan = true;
        },
        bangding(){
            this.genghuan = true;
        },
        gerenxinxi(){
            this.gerenxinxikuang = true;
        },
        fanhuimima(){
            this.zhifukuang = false;
        },
        fanhui(){
            this.list = []; //清空列表
           this.gerenxinxikuang = false;
           this.weilankuang = false;
            this.zengyangkuang = false;
            this.shouhuquankuang = false;
            this.jisiliaokuang = false;
            this.tishikuang = false;
            this.yutishikuang = false;
            this.jisiliaolist = false;
            this.shouhuquanlist = false;
            this.weilanlist = false;
            this.saobakuang = false;
            this.genghuan = false;

            this.jidangkuang = false;
            this.xiaojikuang = false;
            this.jifenkuang = false;
            this.jifenzhuanrangkuang = false;
            this.value = '';
            this.chongzhitixiankuang = false;
            this.jishexiangqingkuang = false;
            this.nechenggenghuan = false;
        },
        

    },
}
</script>
<style lang="less" scope>
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
            position: fixed;
            top: 6vw;
            left: 2.5vw;
            z-index:99;
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
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
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
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
                }
            }
            >.threedi{
                position: absolute;
                left: 30%;
                top: 50%;
                z-index:10;
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
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
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
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
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
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
                }
            }
            >.sixdi{
                position: absolute;
                left: 50%;
                top: 58%;
                z-index:10;
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
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
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
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
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
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
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
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
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
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
                }
            }
        }
        .fengche{
            img:first-child{
                position: absolute;
                left: 82%;
                top: 78%;
                width: 50vw;
            }
        }
        .huacaoche{
            >img:first-child{
                position: absolute;
                left: 28%;
                top: 32%;
                width: 25vw;
            }
            >img:nth-child(2){
                position: absolute;
                left: 40%;
                top: 31%;
                width: 121vw;
                z-index: 0; 
            }
            >img:nth-child(3){
                position: absolute;
                left: 36%;
                top: 41%;
                width: 121vw;
                z-index: 0; 
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
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
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
                left: 45%;
                top: 24%;
                z-index:10;
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
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
                }
            }
            >.threedi{
                position: absolute;
                left: 65%;
                top: 30%;
                z-index:10;
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
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
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
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
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
                >.weilandengji{
                    >img{
                        width: 52vw;
                        position: absolute;
                        top: -5vw;
                        left: -1vw;
                        z-index: 11;
                    }
                }
                >.goudengji{
                    >img{
                        width: 14vw;
                        position: absolute;
                        top: -5vw;
                        left: 2vw;
                        z-index: 10;
                    }
                }
                >img:nth-child(8){
                    width: 10vw;
                    position: absolute;
                    top: -7vw;
                    left: 20vw;
                    z-index: 15;
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
                        width: 13vw;
                        // height: 15vw;
                    }
                }
                .shouhuquanlist{
                    background: rgba(255, 255, 255, 0.5);
                    padding: 1vw 1vw;
                    border-radius: 10vw;
                    >img{
                        width: 13vw;
                        // height: 15vw;
                    }
                }
                .weilanlist{
                    background: rgba(255, 255, 255, 0.5);
                    padding: 1vw 1vw;
                    border-radius: 10vw;
                    >img{
                        width: 13vw;
                        // height: 15vw;
                    }
                }
            }
        }
        
        .fanhui{
            position: fixed;
            left: 5vw;
            top:25vw;
            z-index: 99;
            >img{
                width: 12vw;
                margin-bottom: 4vw;
                // height: 10vw;
            }
            >div{
                background: rgba(255, 255, 255, 0.5);
                border-radius: 10vw;
                >img{
                width: 13vw;
                margin-bottom: 4vw;
                // height: 10vw;
            }
            }
        }
        .nechenggenghuan{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            // background: rgba(0, 0, 0, 0.7);
            z-index: 99;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 50vw;
                background-image: url(../../assets/images/nongchang/nichenggenghuan.png);
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
                    text-align: left;
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        height: 6vw;
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }
                    .gmkshuliang{
                        margin-top: 3vw;
                        input{
                            background: #EDC782;
                            border-radius: 1vw;
                            padding: 1vw 1vw;
                            width: 40vw;
                            color:#955942;
                            font-size: 12px;
                        }
                        span:last-child{
                            font-size: 3vw;
                            line-height: 8vw;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            background: #FFE19D;
                            border-radius: 1vw;
                            color: #955942;
                            border: 1vw solid #FEF2C2;
                            border-radius: 2vw;
                            height: 10vw;
                            width: 17vw;
                            text-align: center;

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
                height: 110vw;
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
                    text-align: left;
                    margin-left: 7vw;
                    img{
                        width: 15vw;
                        height: 15vw;
                        border-radius: 50%;
                    }
                    div{
                        // height: 6vw;
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
        
        .saobakuang{
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
                background-image: url(../../assets/images/nongchang/yangzhi/saobakuang.png);
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

        .weilan{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 100;
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
            z-index: 100;
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
        .chongzhitixiankuang{
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
                height: 120vw;
                background-image: url(../../assets/images/nongchang/chongzhitixian.png);
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
                    padding: 5vw 17vw;
                    margin-top: 15%;
                    text-align: left;
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        // height: 6vw;
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }
                    .gmkshuliang{
                        margin-top: 3vw;
                        input{
                            background: #EDC782;
                            border-radius: 1vw;
                            padding: 1vw 1vw;
                            width: 24vw;
                            color:#955942;
                            font-size: 10px;
                        }
                        select{
                            background: #EDC782;
                            border-radius: 1vw;
                            padding: 1vw 1vw;
                            width: 26vw;
                            color:#955942;
                            font-size: 10px;
                            height: 8vw;
                            border:0;
                        }
                        img{
                            width: 50vw;
                            height: 50vw;
                        }
                    }
                    
                    

                }
                .shezhibtn{
                    // margin-top: 8%;
                    img{
                        width: 16vw;
                    }
                }

           } 
        }
        .zhifukuang{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(32, 29, 29, 0.7);
            z-index: 101;
            .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -70%);
                width: 80%;
                height: 58vw;
                background-image: url(../../assets/images/nongchang/jishi/jishikuang.png);
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
                    margin-top: 10%;
                    text-align: center;
                    color:#955942;
                    font-size: 5vw;
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                      
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
        .jidangkuang{
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
                background-image: url(../../assets/images/nongchang/jidanmingxi/kuang.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                .guanbi{
                    // margin-top: 10%;
                    img:first-child{
                        width: 13vw;
                        height: 13vw;
                    }
                }
                
                .sdlan{
                    margin-top: 20%;
                    img{
                        width: 20vw;
                        height: 6vw;
                    }
                }
                .sdlist{
                    margin-top: 13%;
                    height: 78vw;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    width: 90%;
                    margin-left: 5%;
                    .sditem{
                        background: #FFECDC;
                        width: 76%;
                        margin-left: 12%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                        //   padding: 1vw 5vw;
                        // box-sizing: border-box;
                        
                        .sdtext{
                            // margin-left: 1vw;
                            padding: 1vw;
                            box-sizing: border-box;
                            div{
                                font-size: 12px;
                                white-space: nowrap;
                                height: 4vw;
                                line-height: 4vw;
                            }
                        }
                        .sdtextone{
                            padding: 1vw;
                            box-sizing: border-box;
                            img:first-child{
                                width: 10vw;
                                height: 10vw;
                                border-radius: 50%;
                            }
                            .sdtext{
                                margin-left: 1vw;
                                div{
                                    font-size: 10px;
                                    white-space: nowrap;
                                    height: 4vw;
                                    line-height: 4vw;
                                    width: 22vw;
                                    overflow: hidden;
                                }
                            }
                            img:last-child{
                                width: 15vw;
                                margin-left: 3vw;
                            }
                            // .jishoubtn{
                            //      margin-left: 3vw;
                            //     img{
                            //         width: 15vw;
                            //         height: 5vw;
                            //         border-radius: 0;
                            //         // margin-bottom: 2vw;
                            //         margin-left: 0;
                            //     }
                            // }
                        }
                        
                    }
                }
                .jishou{
                    margin-top: 3vw;
                    img{
                        width: 15vw;
                        height: 7vw;

                    }
                }
            }
        }
        .xiaojikuang{
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
                background-image: url(../../assets/images/nongchang/xiaojimingxi/kuang.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                .guanbi{
                    // margin-top: 10%;
                    img:first-child{
                        width: 13vw;
                        height: 13vw;
                    }
                }
                
                .sdlan{
                    margin-top: 20%;
                    img{
                         width: 20vw;
                        height: 6vw;
                    }
                }
                .sdlist{
                    margin-top: 13%;
                    height: 78vw;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    width: 90%;
                    margin-left: 5%;
                    .sditem{
                        background: #FFECDC;
                        width: 76%;
                        margin-left: 12%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                        //   padding: 1vw 5vw;
                        // box-sizing: border-box;
                        
                        .sdtext{
                            // margin-left: 1vw;
                            padding: 1vw;
                            box-sizing: border-box;
                            width: 100%;
                            div{
                                font-size: 12px;
                                white-space: nowrap;
                                height: 4vw;
                                line-height: 4vw;
                            }
                        }
                        .sdtextone{
                            padding: 1vw;
                            box-sizing: border-box;
                            img:first-child{
                                width: 10vw;
                                height: 10vw;
                                border-radius: 50%;
                            }
                            .sdtext{
                                margin-left: 1vw;
                                div{
                                    font-size: 10px;
                                    white-space: nowrap;
                                    height: 4vw;
                                    line-height: 4vw;
                                    width: 22vw;
                                    overflow: hidden;
                                }
                            }
                            img:last-child{
                                width: 15vw;
                                margin-left: 3vw;
                            }
                            // .jishoubtn{
                            //      margin-left: 3vw;
                            //     img{
                            //         width: 15vw;
                            //         height: 5vw;
                            //         border-radius: 0;
                            //         // margin-bottom: 2vw;
                            //         margin-left: 0;
                            //     }
                            // }
                        }
                        
                    }
                }
                .jishou{
                    margin-top: 3vw;
                    img{
                        width: 15vw;
                        height: 7vw;

                    }
                }
            }
        }
        .jifenkuang{
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
                height: 140vw;
                background-image: url(../../assets/images/nongchang/jifenmingxi/kuang.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                .guanbi{
                    // margin-top: 10%;
                    img:first-child{
                        width: 13vw;
                        height: 13vw;
                    }
                }
                
                .sdlan{
                    margin-top: 20%;
                    img{
                         width: 20vw;
                        height: 6vw;
                    }
                }
                .sdlist{
                    margin-top: 13%;
                    height: 75vw;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    width: 90%;
                    margin-left: 5%;
                    .sditem{
                        background: #FFECDC;
                        width: 76%;
                        margin-left: 12%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                        //   padding: 1vw 5vw;
                        // box-sizing: border-box;
                        
                        .sdtext{
                            // margin-left: 1vw;
                            padding: 1vw;
                            box-sizing: border-box;
                            div{
                                font-size: 12px;
                                white-space: nowrap;
                                height: 4vw;
                                line-height: 4vw;
                            }
                        }
                        .sdtextone{
                            padding: 1vw;
                            box-sizing: border-box;
                            img:first-child{
                                width: 10vw;
                                height: 10vw;
                                border-radius: 50%;
                            }
                            .sdtext{
                                margin-left: 1vw;
                                div{
                                    font-size: 10px;
                                    white-space: nowrap;
                                    height: 4vw;
                                    line-height: 4vw;
                                    width: 22vw;
                                    overflow: hidden;
                                }
                            }
                            img:last-child{
                                width: 15vw;
                                margin-left: 3vw;
                            }
                            // .jishoubtn{
                            //      margin-left: 3vw;
                            //     img{
                            //         width: 15vw;
                            //         height: 5vw;
                            //         border-radius: 0;
                            //         // margin-bottom: 2vw;
                            //         margin-left: 0;
                            //     }
                            // }
                        }
                        
                    }
                }
                .jishou{
                    margin-top: 6vw;
                    img{
                        width: 15vw;
                        height: 7vw;

                    }
                }
            }
        }
        .jifenzhuanrangkuang{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 100;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 80vw;
                background-image: url(../../assets/images/nongchang/jifenmingxi/jifenzhuanrangkuang.png);
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

                    padding: 5vw 5vw;
                    margin-top: 25%;
                    .zhuan{
                        width: 100%;
                        // background: #f7f6fc;
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
                            width: 60%;
                            height: 7vw;
                            border: 0;
                            text-indent: 3vw;
                            background: #EDC782;
                            border: 0.5vw solid #EDC782;
                            border-radius: 2vw;
                            font-size: 3vw;
                        }
                    }

                }
                .shezhibtn{
                    // margin-top: ;
                    img{
                        width: 23vw;
                    }
                }

           } 
        }
        .jishexiangqingkuang{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 100;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 80vw;
                background-image: url(../../assets/images/nongchang/yangzhi/jishexiangqing.png);
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
            z-index: 100;
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
        .yutishikuang{
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

        .dingdankuang{
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
                background-image: url(../../assets/images/nongchang/yangzhi/dingdanmingxi.png);
                background-size: 100% 100%;
                color: #955942;
                font-family: Adobe Heiti Std;
                font-size: 4vw;
                .guanbi{
                    // margin-top: 10%;
                    img:first-child{
                        width: 13vw;
                        height: 13vw;
                    }
                }
                
                // .sdlan{
                //     margin-top: 20%;
                //     img{
                //         width: 17.5vw;
                //         height: 5vw;
                //     }
                // }
                .sdlist{
                    margin-top: 27%;
                    height: 95vw;
                    overflow-x: hidden;
                    overflow-y: scroll;
                    width: 90%;
                    margin-left: 5%;
                    .sditem{
                        background: #E9D6BE;
                        box-shadow: 0px 2px 3px 0px rgba(255, 255, 255, 0.6), 0px 2px 0px 0px rgba(209, 190, 169, 0.5);
                        width: 87%;
                        margin-left: 8%;
                        border-radius: 1vw;
                        margin-bottom: 2vw;
                        // height: 13vw;
                        //   padding: 1vw 5vw;
                        // box-sizing: border-box;
                        
                        .sdtext{
                            // margin-left: 1vw;
                            padding: 1vw;
                            box-sizing: border-box;
                            >div{
                                font-size: 12px;
                                white-space: nowrap;
                                height: 4vw;
                                line-height: 4vw;
                                margin-bottom: 2vw;
                            }
                            >.sdtextxiala{
                                padding: 1vw;
                                box-sizing: border-box;
                                background: #FFECDC;
                                height: 16vw;
                                border-radius: 1vw;
                                >div{
                                    font-size: 12px;
                                    white-space: nowrap;
                                    height: 4vw;
                                    line-height: 4vw;
                                    margin-bottom: 1vw;
                                    img{
                                        width: 12vw;
                                        height: 5vw;
                                    }
                                }
                            }
                        }
                        
                        .sdtextone{
                            padding: 1vw;
                            box-sizing: border-box;
                            img:first-child{
                                width: 10vw;
                                height: 10vw;
                                border-radius: 50%;
                            }
                            .sdtext{
                                margin-left: 1vw;
                                div{
                                    font-size: 10px;
                                    white-space: nowrap;
                                    height: 4vw;
                                    line-height: 4vw;
                                    width: 22vw;
                                    overflow: hidden;
                                }
                            }
                            img:last-child{
                                width: 15vw;
                                margin-left: 3vw;
                            }
                            // .jishoubtn{
                            //      margin-left: 3vw;
                            //     img{
                            //         width: 15vw;
                            //         height: 5vw;
                            //         border-radius: 0;
                            //         // margin-bottom: 2vw;
                            //         margin-left: 0;
                            //     }
                            // }
                        }
                        
                    }
                }
                .jishou{
                    // margin-top: 3vw;
                    position: absolute;
                    bottom: -1vw;
                    left: 38%;
                    img{
                        width: 15vw;
                        height: 7vw;

                    }
                }
            }
        }
        .genghuan{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            // background: rgba(0, 0, 0, 0.7);
            z-index: 99;
           .kuang{
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
                width: 80%;
                height: 80vw;
                background-image: url(../../assets/images/nongchang/bangding.png);
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
                    text-align: left;
                    // img{
                    //     width: 15vw;
                    //     height: 15vw;
                    //     border-radius: 50%;
                    // }
                    div{
                        height: 6vw;
                        // a{
                        //     color:#FE523B;
                            
                        // }
                    }
                    .gmkshuliang{
                        margin-top: 3vw;
                        input{
                            background: #EDC782;
                            border-radius: 1vw;
                            padding: 1vw 1vw;
                            width: 40vw;
                            color:#955942;
                            font-size: 12px;
                        }
                        span:last-child{
                            font-size: 3vw;
                            line-height: 8vw;
                            -webkit-box-sizing: border-box;
                            box-sizing: border-box;
                            background: #FFE19D;
                            border-radius: 1vw;
                            color: #955942;
                            border: 1vw solid #FEF2C2;
                            border-radius: 2vw;
                            height: 10vw;
                            width: 17vw;
                            text-align: center;

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
.PathMenu{position:absolute;right: 0px; bottom: 0px; width: 60px; height: 60px;}
.PathInner{position:fixed;width: 60px; height: 60px; bottom: 2vw;left: 12%;z-index: 15;}
.PathInner .PathItem{position:absolute;left: 0px; bottom: 0px;}
.PathInner a {/* position:absolute; */display:block;/* overflow:hidden; */background-position:center;background-repeat:no-repeat;z-index:999;}
.PathInner a .item, .rotate{width:100%;height:100%;background-position:center;background-repeat:no-repeat;display:block;overflow:hidden;text-align:center;vertical-align:middle;position:absolute;}
.PathInner .PathMain{z-index:1000;position:absolute;display:block;/* overflow:hidden; */background-position:center;background-repeat:no-repeat;bottom:0;left:0;}
.PathInner .PathMain .Tmain{background-image: url(../../assets/images/nongchang/yangzhi/daoju.png); width: 15vw; height: 15vw;background-size: 100% 100%;}
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
    animation:mymove 1.5s normal;
    animation-direction:normal;/*轮流反向播放动画。*/
    animation-timing-function: ease-in-out; /*动画的速度曲线*/
    -webkit-animation:mymove 1.5s normal; /*Safari and Chrome*/
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
    transition: all 0.5s ease-in-out;
    transform: scale(1.1); /*放大1.1倍*/
}
// 缩小
.animatsuoxiao{
    transition: all 0.5s ease-in-out;
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