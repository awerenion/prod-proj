<template>
  <div class="product" @mouseenter="hoverChange(true)" @mouseleave="hoverChange(false)">
    <div
      v-if="isHovered"
      class="product-delete"
      @click="deleteProduct"
    >
      <img
        src="@/assets/trash.svg"
        alt="scam"
        class="delete-img"
      >
    </div>
    <img :src="productData.imgUrl" alt="photo" class="product-image">
    <span class="product-title">{{ productData.name }}</span>
    <span class="product-description">{{ productData.description }}</span>
    <span class="product-price">{{ productData.price | rightPrice }} руб.</span>
  </div>
</template>

<script>
export default {
  name: 'Product',
  filters: {
    rightPrice (val) {
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
  },
  props: {
    productData: {
      type: Object,
      required: true,
      default: null
    }
  },
  data () {
    return {
      isHovered: false
    }
  },
  methods: {
    hoverChange (val) {
      this.isHovered = val
    },
    deleteProduct () {
      this.$store.dispatch('removeProduct', this.productData.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .product {
    display: flex;
    flex-direction: column;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    margin-bottom: 16px;
    position: relative;
  }

  .product-title {
    color: #3F3F3F;
    font-weight: 600;
    font-size: 20px;
    margin: 16px 0 16px 16px;
  }

  .product-image {
    max-width: 332px;
  }

  .product-description {
    font-size: 16px;
    max-width: 300px;
    margin: 0 16px 32px;
  }

  .product-price {
    font-size: 24px;
    margin: 0 0 24px 16px;
    color: #3F3F3F;
    font-weight: 600;
  }

  .product-delete {
    cursor: pointer;
    width: 32px;
    height: 32px;
    position: absolute;
    background: #FF8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -6px;
    right: -6px;
  }
</style>
