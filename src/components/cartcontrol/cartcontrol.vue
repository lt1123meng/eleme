<template>
  <div class="cartControl">
    <transition name="fade">
      <div class="cart-decrease" v-show="food.count>0" @click="delCart($event)">\
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-increase icon-add_circle" @click="addCart($event)"></div>
  </div>
</template>
<script>
  export default {
    props: {
      food: {
        type: Object
      }
    },
    data () {
      return {}
    },
    methods: {
      addCart (event) {
        if (!event._constructed) {
          return
        }
        if (!this.food.count) {
          this.$set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
      },
      delCart (event) {
        if (!event._constructed) {
          return
        }
        this.food.count--
      }
    },
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartControl
    font-size 0
    color dodgerblue
    .cart-decrease
      display inline-block
      padding 6px
      &.fade-enter-active, &.fade-leave-active
        transition: all .5s linear
        opacity 1
        transform translateX(0) rotate(0deg)
      &.fade-enter, &.fade-leave-active
        opacity 0
        transform translateX(48px) rotate(180deg)
      .inner
        display inline-block
        line-height 24px
        font-size 24px
        color rgb(0, 160, 220)
        transition all 0.4 linear
        transform rotate(0)
    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding 6px
      text-align center
      line-height 24px
      font-size 10px
      color rgba(147, 153, 159, 1)
    .cart-increase
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
    p

</style>
