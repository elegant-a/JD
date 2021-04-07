import { createStore } from 'vuex'

// 可以把全局的数据存到store的index里面
export default createStore({
  state: {
    // 第一层级是商铺的ID
    cartList:{

    }
  },
  mutations: {
    addItemToCart(state,payload){
      const {shopId
        ,productId,
        productInfo
      } = payload;
      let shopInfo = state.cartList[shopId];
      if(!shopInfo){ shopInfo = {}}
      let product = shopInfo[productId]
      if(!product){
        product = productInfo
        product.count = 0
      }
      product.count += 1;
      shopInfo[productId] = product;
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
