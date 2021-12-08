<template>
  <div class="basic-form">
    <div class="basic-container">
      <div
        :class="{ 'form-group--error': $v.product.name.$error }"
        class="basic-inner"
      >
        <label
          for="basic-name"
          class="basic-label"
        >
          <span class="basic-title circle">Наименование товара</span>
        </label>
        <input
          id="basic-name"
          v-model="$v.product.name.$model"
          type="text"
          placeholder="Введите наименование товара"
          class="basic-input"
        >
        <div
          v-if="!$v.product.name.required && $v.product.name.$dirty"
          class="error"
        >
          Поле является обязательным
        </div>
      </div>
      <div class="basic-inner">
        <label
          for="basic-description"
          class="basic-label"
        >
          <span class="basic-title">Описание товара</span>
        </label>
        <textarea
          id="basic-description"
          v-model="product.description"
          type="text"
          placeholder="Введите описание товара"
          class="basic-input description"
        />
      </div>
      <div
        class="basic-inner"
        :class="{ 'form-group--error': $v.product.imgUrl.$error }"
      >
        <label
          for="basic-imgUrl"
          class="basic-label"
        >
          <span class="basic-title circle">Ссылка на изображение товара</span>
        </label>
        <input
          id="basic-imgUrl"
          v-model="$v.product.imgUrl.$model"
          type="text"
          placeholder="Введите ссылку"
          class="basic-input"
        >
        <div
          v-if="!$v.product.imgUrl.required && $v.product.imgUrl.$dirty"
          class="error"
        >
          Поле является обязательным
        </div>
      </div>
      <div
        class="basic-inner"
        :class="{ 'form-group--error': $v.product.price.$error }"
      >
        <label
          for="basic-price"
          class="basic-label"
        >
          <span class="basic-title circle">Цена товара</span>
        </label>
        <input
          id="basic-price"
          v-model.number="$v.product.price.$model"
          type="text"
          placeholder="Введите цену"
          class="basic-input"
        >
        <div
          v-if="!$v.product.price.required && $v.product.price.$dirty"
          class="error"
        >
          Поле является обязательным
        </div>
      </div>
      <button
        :class="checkActive"
        class="basic-button"
        @click="addNewProduct"
      >
        Добавить товар
      </button>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'ProductForm',
  data () {
    return {
      product: {
        name: '',
        description: '',
        imgUrl: '',
        price: ''
      }
    }
  },
  validations: {
    product: {
      name: {
        required
      },
      imgUrl: {
        required
      },
      price: {
        required
      }
    }
  },
  computed: {
    checkActive () {
      return {
        'active-button': !this.$v.product.price.$error && this.$v.product.price.$dirty && !this.$v.product.imgUrl.$error && this.$v.product.imgUrl.$dirty && !this.$v.product.name.$error && this.$v.product.name.$dirty
      }
    }
  },
  methods: {
    addNewProduct () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$emit('save', this.product)
        this.product = {
          name: '',
          description: '',
          imgUrl: '',
          price: ''
        }
      }
      this.$v.$reset()
    }
  }
}
</script>

<style lang="scss" scoped>
  .basic-form {
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    height: 435px;
  }

  .basic-container {
    padding: 24px;
  }

  .basic-inner {
    margin-bottom: 16px;
    img {
      position: absolute;
      top: 0;
      right: -3px;
    }
  }

  .basic-label {
    position: relative;
    margin-bottom: 4px;
    align-items: center;
    display: flex;
  }

  .basic-input {
    font-size: 12px;
    width: 284px;
    height: 36px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
  }

  input[type=text] {
    padding-left: 16px;
  }

  .basic-title {
    position: relative;
    font-size: 10px;
    color: #49485E;
    letter-spacing: -0.02em;
  }

  .basic-input.description {
    resize: none;
    height: 108px;
  }

  textarea[type=text] {
    padding: 10px 0 0 16px;
  }

  .basic-button {
    color: #B4B4B4;
    background: #EEEEEE;
    border-radius: 10px;
    width: 284px;
    height: 36px;
    border: none;
    font-weight: 600;
    cursor: pointer;
  }

  .basic-title.circle::after {
    position: absolute;
    top: -5px;
    content: url(../assets/circle.svg);
  }

  .active-button {
    background: #7BAE73;
    color: white;
  }

  .form-group--error {
    div {
      color: #FF8484;
      font-size: 8px;
      margin-top: 4px;
      margin-bottom: 2px;
    }
    input {
      border: 1px solid #FF8484;
    }
  }
</style>
