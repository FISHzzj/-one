<template>
    <div>
        <div class="fanhui" @click="fanhui">
            <img src="../../assets/images/nongchang/yangzhi/fanhui.png" alt="">
        </div>
        
        <div id="invite" @touchstart="touchStrat" @touchend="touchEnd">
            <img :src="img" alt="分享背景">
            <div class="fenxiang">
                <img :src="url" alt="分享二維碼">
                <div class="yaoqingma flex flex_col ali_center">
                    <span>我的邀请码：<strong>{{invite_code}}</strong> </span>
                    <span class="btn copy" :data-clipboard-text="invite_code" >复制</span>
                </div>
            </div>
            <div class="textzi">可截图保存图片到手机</div>
            
        </div>
    </div>

</template>

<script>
 // 複製模塊
import {copy} from '../../func/copy'
export default {
    name: 'invite',
    data() {
        return {
            img: '',
            invite_code:"",
            url:"",
            longTouch: false, // 長觸碰控制器
            timer: 0, //計時器
        }
    },
    mounted () {
        //傳遞複製按鈕選擇器, 接受複製插件的 clipboard 實例
        this.clipboard = copy('.copy')
        this.getData()
    },
    methods: {
        async getData() {
            let res = await $ajax('userposter', {})
            this.img = res.background_img
            this.invite_code = res.invite_code
            this.url = res.url
        },
        fanhui(){
            this.$router.go(-1)
        },
        touchStrat () {
            this.timer = setTimeout( () => {
                this.longTouch = true //達到長按
                Dialog.confirm({
                    title: this.$i18n.invite['提示'],
                    message: this.$i18n.invite['確定下載圖片嗎']
                })
                .then( () => {
                    this.toDownLoad()
                }).catch( err => {
                    console.log(err)
                    this.longTouch = false
                })
            }, 500)
        },
        async touchEnd () {
            // 如果未達到長按
            if (!this.longTouch) {
                clearTimeout(this.timer)
                return false
            }
        },
        async toDownLoad () {
            // 如果不是 在 app 中使用
            if (!apicloud) {
                console.warn('此功能只能在 app 中使用')
                return false
            }
            // 進行登錄 提示
			const toast = Toast.loading({
				message: this.$i18n.invite['下載中'],
				forbidClick: true, // 禁用背景点击
				loadingType: 'spinner',
				position: 'bottom',
				duration: 0
            })
            let resDownload = await apicloud.download(this.img)
            if (!resDownload.isOk) {
                toast.clear() //取消加載提示
                return alert(`downloadErr${resDownload.err}`)
            }
            let resSave = await apicloud.saveToAlbum(resDownload.path)
            if (!resSave.isOk) {
                toast.clear() //取消加載提示
                return alert(`saveErr:${resSave.err}`)
            }
            toast.clear() //取消加載提示
            this.longTouch = false //重置回未長按
            Toast( this.$i18n.invite['下載完成'] )
        }
    }
}
</script>
<style lang="less" scoped>
.fanhui{
    position: absolute;
    top: 3%;
    left: 3%;
    img{
        width: 13vw;
        
    }
}
#invite {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    background-color: #999;
    height: 100vh;
    img:first-child {
        width: 100%!important;
        height: 100%;
    }
    .fenxiang{
        position: absolute;
        top: 30%;
        background: #fff;
        padding: 10vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 80%;
        left: 10%;
        >img {
            width: 50vw;
        
        }
        .yaoqingma{
            span{
                // padding: 2vw 0;
                margin-top: 4vw;

            }
            .btn{
                color: #00AE88;
                border-radius: 5vw;
                border: 1px solid #00AE88;
                padding: 2vw 10vw;
                box-sizing: border-box;
            }
        }
    }
    .textzi{
        position: absolute;
        top: 92%;
        left: 28%;
        text-align:center;
        color: #fff;
        font-weight: 600;
        // margin-top: 10vw;
    }
    
}
</style>