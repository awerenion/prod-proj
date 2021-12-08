import { updStorage } from './plugin'
export const plugins = [updStorage]

export const state = () => ({
  productList: []
})

export const getters = {
  productList: state => state.productList
}

export const actions = {
  setProducts ({ commit }, products) {
    commit('setProducts', products)
  },
  removeProduct ({ commit }, product) {
    commit('removeProduct', product)
  },
  addNewProduct ({ commit }, product) {
    commit('addNewProduct', product)
  },
  sortProducts ({ commit }, sort) {
    commit('sortProducts', sort)
  }
}

export const mutations = {
  setProducts (state, products) {
    state.productList = products
  },
  removeProduct (state, id) {
    state.productList = state.productList.filter(product => product.id !== id)
  },
  addNewProduct (state, product) {
    const highId = [...state.productList].sort((a, b) => b.id - a.id)
    product.id = highId[0].id + 1
    state.productList.push(product)
    console.log(product)
  },
  sortProducts (state, sort) {
    state.productList.sort((a, b) => {
      if (sort === 'min') {
        return a.price - b.price
      }
      if (sort === 'max') {
        return b.price - a.price
      }
      if (sort === 'name') {
        return a.name.localeCompare(b.name)
      }
      return a.id - b.id
    })
  }
}
