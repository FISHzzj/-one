<template>
    <div id="app">
            <transition :name="names">
                <keep-alive exclude="index,yangzhi">
                    <router-view/>
                </keep-alive>
            </transition>
            <!-- 背景音乐 -->
            <audio :src="MP3_bg" loop ref="MusicPlay" preload="preload"  controls="controls" style="display:none;"></audio>
            <audio :src="MP3_click" ref="MusicClick" preload="preload"  controls="controls" style="display:none;"></audio>
            <Loader v-if="isLoading" text="拼命加载中" background="rgba(0,0,0,0.2)"></Loader>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import Test from './components/test.vue'
import Loader from './element/common/Loader.vue'
import store from './store/index'
export default {
    name: 'App',
    components:{
        Test,
        Loader
    },
    watch: {
        $route (to, from){
            // 小于 则为 返回原页面， 大于 则为 进入新页面
            if (to.meta.index < from.meta.index) {
                this.names="right" //返回原页面
            } else if (from.meta.index === undefined || to.meta.index === from.meta.index) {
                this.names="" //什么都没有发生, 默认
            } else {
                this.names="left" // 进入新页面
            }
        }
    },
    data(){
        return{
            names:'left',
            active: 0,
            MP3_bg:require('@/assets/images/nongchang/music/bg_music.mp3'),
            MP3_click:require('@/assets/images/nongchang/music/click.mp3'),
            yinyue: true,
            // isLoading: false
        }
    },
    computed: {
        ...mapState({  //
            isLoading : state => state.golbal.loading, //获取isLoading
            // allList: state => state.collection.collects, //获取changeNum
        }),
    },
    mounted() {
        console.log('state.golbal.isLoading', store.state.golbal.loading)
        console.log(2222222)
        let openPlay = localStorage.getItem('openMusic') || ''
        console.log(openPlay)
        if(openPlay == 1 || openPlay == ''){
            this.$refs.MusicPlay.play()
        }else {
            this.$refs.MusicPlay.pause()
        }
        
    },
    
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
.line {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
}
.line2 {
     text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
#app > div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    height: 100vh;
    background-color: #fff;
}
/* 过度动画 */
/* 进入 新页面 */
.left-enter {
    transform:translateX(100%);
}
.left-enter-to {
    transform:translateX(0);
}
.left-enter-active {
    transition: 0.4s;
}
.left-leave-to {
    transform:translateX(-100%);
}
.left-leave-active {
    transition: 0.4s;
}

/* 进入原页面*/
.right-enter {
    transform:translateX(-100%);
}
.right-enter-to {
    transform:translateX(0);
}
.right-enter-active{
    transition: 0.4s;
}
/* 开始便是此处， 可去除 */
/* .right-leave {
    transform:translateX(0);
} */
.right-leave-to {
    transform:translateX(100%);
}
.right-leave-active {
    transition: 0.4s;
}
.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    -o-box-lines: multiple;
}
.flex_row{
    flex-direction: row;
}
.flex_col{
    flex-direction: column;
}
.flex_wrap{
    flex-wrap: wrap;
}
.flex_nowrap{
    flex-wrap: nowrap;
}
.flex_center{
    justify-content: center;
    -webkit-justify-content: center;
}
.flex_between {
    justify-content: space-between;
    -webkit-justify-content: space-between;
}
.flex_around {
    justify-content: space-around;
    -webkit-justify-content: space-around;
}
.flex-start {
    justify-content: flex-start;
    -webkit-justify-content: flex-start;
}
.flex-end {
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
}
.ali_center {
    align-items: center;
    -webkit-align-items: center;
}
input {
    outline: none;
    background: transparent;
    border: none;
}

input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill{
	 -webkit-box-shadow: 0 0 0px 1000px #D6C695 inset;   
}
</style>
