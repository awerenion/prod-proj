export const updStorage = (store) => {
  store.subscribe((mutation, state) => {
    const { type } = mutation
    if (type === 'removeProduct' || type === 'addNewProduct') {
      const products = state.productList.map(JSON.stringify)
      localStorage.setItem('products', products)
    }
  })
}
