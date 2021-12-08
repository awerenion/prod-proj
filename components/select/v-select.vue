<template>
  <div class="v-select">
    <div
      class="title"
      :class="getBorder"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      {{ placeholder }}
      <img
        class="arrow"
        src="../../assets/arrow.svg"
      >
    </div>
    <div
      v-if="areOptionsVisible"
      class="options"
    >
      <p
        v-for="option in options"
        :key="option.value"
        @click="selected(option)"
      >
        <span class="text">{{ option.name }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSelect',
  props: {
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    placeholder: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      areOptionsVisible: false
    }
  },
  computed: {
    getBorder () {
      return {
        active: this.areOptionsVisible,
        inactive: !this.areOptionsVisible
      }
    }
  },
  // mounted () {
  //   document.addEventListener('click', this.hideSelect.bind(this), true)
  // },
  // beforeDestroy () {
  //   document.removeEventListener('click', this.hideSelect)
  // },
  methods: {
    selected (option) {
      this.$emit('selected', option)
      this.areOptionsVisible = false
    }
    // hideSelect () {
    //   this.areOptionsVisible = false
    // }
  }
}
</script>

<style lang="scss" scoped>
  .v-select {
    cursor: pointer;
    position: relative;
    width: 122px;
    p {
      margin: 0;
    }
  }

  .title {
    user-select: none;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #B4B4B4;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    img {
      margin-left: 5px;
    }
    z-index: 1;
  }

  .options {
    position: absolute;
    top: 35px;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: #B4B4B4;
    border-radius: 0 0 4px 4px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
  }

  .options p:hover {
    background: #e7e7e7;
  }

  .active {
    border-radius: 4px 4px 0 0;
    img {
      transition: transform 0.2s linear;
      transform: rotate(0deg);
    }
  }

  .inactive {
    border-radius: 4px;
  }

  .arrow {
    transition: transform 0.2s linear;
    transform: rotate(90deg);
  }

  .text {
    padding-left: 15px;
  }
</style>
