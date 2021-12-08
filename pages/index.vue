<template>
  <div class="container">
    <div class="header">
      <div class="header__inner">
        <span class="header__title">Добавление товара</span>
        <v-select
          :placeholder="selectedOption"
          :options="options"
          @selected="selectSort"
        />
      </div>
    </div>
    <div class="main">
      <product-form
        class="main__form"
        @save="addNewProduct"
      />
      <products-list
        :product-list="productList"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vSelect from '@/components/select/v-select.vue'
import ProductList from '@/productList.json'
import ProductForm from '@/components/ProductForm.vue'
import ProductsList from '@/components/ProductList.vue'

export default {
  components: {
    ProductForm,
    ProductsList,
    vSelect
  },
  data () {
    return {
      options: [
        {
          name: 'По умолчанию',
          value: 'default'
        },
        {
          name: 'По возрастанию',
          value: 'min'
        },
        {
          name: 'По убыванию',
          value: 'max'
        },
        {
          name: 'По названию',
          value: 'name'
        }
      ],
      selectedOption: 'По умолчанию'
    }
  },
  computed: {
    ...mapGetters({
      productList: 'productList'
    })
  },
  mounted () {
    if (!localStorage.getItem('products')) {
      const products = ProductList.productList.map(JSON.stringify)
      localStorage.setItem('products', products)
    }
    this.$store.dispatch('setProducts', localStorage.getItem('products').split(/({.*?}),/g).filter(Boolean).map(JSON.parse))
  },
  methods: {
    addNewProduct (product) {
      this.$store.dispatch('addNewProduct', product)
    },
    selectSort (sort) {
      this.selectedOption = sort.name
      if (sort && sort.value) {
        this.$store.dispatch('sortProducts', sort.value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .header {
    margin-bottom: 16px;
  }

  .header__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__title {
    color: #3F3F3F;
    font-weight: 600;
    font-size: 28px;
  }

  .main {
    display: flex;
  }

  .main__form {
    position: sticky;
    width: 332px;
    top: 16px;
  }

</style>
