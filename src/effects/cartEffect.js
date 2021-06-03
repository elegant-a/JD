// 引入useStore数据
import { computed } from 'vue'
import { useStore } from 'vuex'
// 获取cartlist数据,购物车相关逻辑
export const useCommonCartEffect = (shopId) => {
    const store = useStore();
    //获取store中的cartList数据结构
    const cartList = store.state.cartList;
    // 定义一个方法,用于更改store中的cartList的数据,并且传入四个参数
    const changeCartItemInfo = (shopId,productId,productInfo,num)=>{
       store.commit('changeCartItemInfo',{shopId,productId,productInfo,num})
    }
    //获取商品列表,一旦发生变化,会自动计算,computed属性
    const productList = computed(()=>{
        const productList = cartList[shopId]?.productList || {}
        const notEmptyProductList = {}
        for(let i in productList){
            const product = productList[i]
            if(product.count > 0){
                notEmptyProductList[i] = product
            }
        }
        console.log(notEmptyProductList)
        return productList
    })
    const shopName = computed(()=>{
        const shopName = cartList[shopId]?.shopName || ''
        return shopName
    })
    const calculations = computed(()=>{
        const productList = cartList[shopId]?.productList
        const result = { total:0,price:0,allChecked:true}
        if(productList){
         for(let i in productList){
             const product = productList[i];
             result.total += product.count 
             if(product.check){
                 //如果商品是选中的,则计入总价,不是选中的则不计入总价
               result.price += (product.count * product.price)
             }
             if(product.count > 0 && !product.check){
               result.allChecked = false;
             }
        }
        }
        result.price = result.price.toFixed(2)
        return result
    })
    return {productList,shopName,changeCartItemInfo,cartList,calculations }
}