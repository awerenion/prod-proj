<template>
  <div class="wrapper">
    <div
      v-for="product in productList"
      :key="product.id"
      class="products"
    >
      <product
        class="product"
        :product-data="product"
      />
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
  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .product {
    width: 332px;
  }

  @media (min-width: 1470px) {
    .products:nth-child(2n+1) {
    margin-left: 16px;
    margin-right: 16px;
    }
  }

  @media (max-width: 1470px) {
    .products:nth-child(1n+2) {
    margin-left: 16px;
    }
    .product:nth-child(2n+2) {
      margin-left: 16px;
    }
    .products:nth-child(1) {
      margin-left: 16px;
    }
  }
</style>
