import { createStore } from 'vuex'

const setLoaclCartList = (state)=>{
// 往localstorage里面存内容必须是JSON内容
const { cartList } = state
const cartListString = JSON.stringify(cartList)
localStorage.cartList = cartListString
}
// 可以把全局的数据存到store的index里面
const getLocalCartList = ()=>{
  try{
    return JSON.parse(localStorage.cartList) || {}
  }catch(e){
    return{}
  }
  
}
export default createStore({
  state: {
    cartList:getLocalCartList()
  },
  mutations: {
    changeCartItemInfo(state,payload){
      const {shopId,productId,productInfo} = payload;
      let shopInfo = state.cartList[shopId] || {
        shopName:'',productList:{}
      };
      let product = shopInfo.productList[productId]
      if(!product){
        product = productInfo
        product.count = 0;
      }
      product.count = product.count + payload.num
      if(payload.num > 0){
        product.check = true;
      }
      if(product.count < 0){
        product.count = 0
      }
      shopInfo.productList[productId] = product;
      state.cartList[shopId] = shopInfo
      setLoaclCartList(state)
    },
    changeCartItemChecked(state,payload){
      const{shopId,productId} = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLoaclCartList(state)
    },
    cleanCartProducts(state,payload){
      const { shopId } = payload
      state.cartList[shopId].productList = {}
      setLoaclCartList(state)
    },
    setCartItemsChecked(state,payload){
      const {shopId,} = payload
      const products = state.cartList[shopId].productList
      if(products){
        for(let key in products){
          const product = products[key]
          product.check = true
        }
      }
      setLoaclCartList(state)
    },
    changeShopName(state,payload){
     const {shopId,shopName} = payload
     const shopInfo = state.cartList[shopId] || {
       shopName:'',productList:{}
     }
     shopInfo.shopName = shopName
     state.cartList[shopId] = shopInfo
     setLoaclCartList(state);
    },
    clearCartData(state,shopId){
         state.cartList[shopId].productList = {}
    }
    
  },
  actions: {
  },
  modules: {
  }
})
