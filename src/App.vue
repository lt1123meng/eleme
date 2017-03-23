<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab_item">
        <router-link to="/goods" active-class="active">商品</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/rating" active-class="active">评价</router-link>
      </div>
      <div class="tab_item">
        <router-link to="/seller" active-class="active">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view :seller="seller"></router-view>
    </div>
  </div>
</template>
<script>
  import header from './components/header/header.vue'
  export default {
    data () {
      return {
        seller: {}
      }
    },
    created: function () {
      this.$http.get('/api/seller').then((response) => {
        response = response.body
        this.seller = response.data
      })
    },
    components: {
      'v-header': header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/index.styl"
  #app
    .tab
      display flex
      height 40px
      line-height 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab_item
        flex 1
        text-align center
        & > a
          display block
          &.active
            color: rgb(240, 20, 20)

</style>
