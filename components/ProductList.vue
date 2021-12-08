<template>
  <div>
    <div>
      <div
        v-for="product in productList"
        :key="product.id"
      >
        <product
          :product-data="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product.vue'

export default {
  name: 'ProductList',
  components: {
    Product
  },
  props: {
    productList: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
