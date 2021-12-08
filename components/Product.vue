<template>
  <div>
    <span>{{ productData.name }}</span>
    <span>{{ productData.description }}</span>
    <span>{{ productData.imgUrl }}</span>
    <span>{{ productData.price }}</span>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    productData: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
