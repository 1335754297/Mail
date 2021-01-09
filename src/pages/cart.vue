<template>
  <div>
    <order-header></order-header>
    cart
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter.vue'
export default {
  name: 'order',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>
<style scoped></style>
