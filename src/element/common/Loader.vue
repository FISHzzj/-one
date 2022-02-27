<template>
  <!-- <teleport to="#back"> -->
    <div
      class="loaderbg"
      :style="{backgroundColor:background || ''}"
    >
      <div class="loading-content" >
        <div class="spinner-border text-primary" role="status">
          <van-loading size="24px" color="#ffffff" vertical>{{text || 'Loading...'}}</van-loading>
          <span class="visually-hidden"></span>
        </div>
        <!-- <p v-if="text" class="text-primary small">{{text}}</p> -->
      </div>
    </div>
  <!-- </teleport> -->
</template>
<script>

export default {
  name: 'loader',
  props: {
    text: {
      type: String
    },
    background: {
      type: String
    }
  },
  data(){
    return {
      node: null
    }
  },
  mounted() {
    // this.node = document.createElement('div')
    // this.node.id = 'back'
    // document.body.appendChild(this.node)
  },
  destroyed() {
    // document.body.removeChild(this.node)
  }
}
</script>
<style scoped>
.loaderbg{
  width: 100%!important;
  height: 100%!important;
  /* background: rgba(255, 255, 255, 0.5); */
  z-index: 500;
  position: fixed!important;
}
.loading-content{
    /* background: rgba(255, 255, 255, 0.5); */
    z-index: 500;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
