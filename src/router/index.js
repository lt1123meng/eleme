import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../components/goods/goods.vue'
import Rating from '../components/ratings/ratings.vue'
import Seller from '../components/sellers/sellers.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/rating',
      name: 'Rating',
      component: Rating
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ]
})
