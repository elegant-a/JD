<template>
    <div class="cart">
    <div class="container">
        <div class="product">
         <div class="product__item" v-for="(item) in productList" :key="item._id">
            <img class="product__item__img" :src="item.imgUrl" alt="">
            <div class="product__item__detail">
                <h4 class="product__item__title">{{item.name}}</h4>
                <p class="product__item__price">
                <span class="product__item__yen">&yen;</span>{{item.price}}
                <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
                </p>
            </div>
                <div class="product__number">
               <span class="product__number__minus"
                @click="()=>{changeCartItemInfo(shopId,item._id,item,-1)}">-</span>
               {{item.count || 0}}
               <span class="product__number__plus"
               @click="()=>{changeCartItemInfo(shopId,item._id,item,1)}"
               >+</span>
                </div>
            </div>   

    </div>  
     <div class="check">
         <div class="check__icon">
             <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
             <div class="check__icon__tag">{{total}}</div>
         </div>
         
         <div class="check__info">
        总计: <span class="check__info__price">&yen; {{price}}</span>
         </div>
          <div class="check__btn">去结算</div>
    </div>
    </div>
    
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

// 获取购物车信息逻辑
const useCartEffect = (shopId)=>{
      const store = useStore()
        const cartList = store.state.cartList
        const total = computed(()=>{
            const productList = cartList[shopId]
            let count = 0
            if(productList){
             for(let i in productList){
                 const product = productList[i];
                 count += product.count 
            }
            }
           
            return count
        })
            const price = computed(()=>{
            const productList = cartList[shopId]
            let count = 0
            if(productList){
             for(let i in productList){
                 const product = productList[i];
                 count += (product.count * product.price)
            }
            }
           
            return count.toFixed(2)
        })
        const productList = computed(()=>{
            const productList = cartList[shopId] || []
            return productList
        })
        return {total,price,productList}
}
export default {
    name:'Cart',
    setup() {
        const route = useRoute();
        // shopId从route里面获取然后导出出去
        const shopId = route.params.id;
        const {changeCartItemInfo} = useCommonCartEffect()
        const { total,price,productList } = useCartEffect(shopId)
        return { total,price,productList,changeCartItemInfo,}
    }
}
</script>

<style lang="scss">
@import '../../style/viriavles.scss';
@import '../../style/mixins.scss';
.cart{
 position:absolute;
 left:0;
 right: 0;
 bottom: 0;
 z-index: 2;
 height: .5rem;
}
.container{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
}
.product{
    flex:1;
    overflow-y: scroll;
    background: #fff;
    &__item{
        &__detail{
            overflow: hidden;
        }
        position: relative;
        display: flex;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solid $content-bgcolor;
        &__img{
            width: .46rem;
            height: .46rem;
            margin-right: .16rem;
        }
        &__title{
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $content-fontcolor;
            @include ellipsis
        }
        &__price{
            margin: .06rem 0 0 0;
            line-height:.2rem ;
            font-size: .14rem;
            color: $highlight-fontColor;
        }
        &__yen{
            font-size: .12rem;
        }
        &__origin{
            margin-left: .06rem;
            line-height: .2rem;
            font-size: .12rem;
            color: #999;
            text-decoration: line-through;
        }
    }
    &__number{
        position: absolute;
        right: 0rem;
        bottom: .12rem;
        &__minus,&__plus{
            display: inline-block;
            width: .2rem;
            height: .2rem;
            line-height: .16rem;
            border-radius: 50%;
            border:.01rem solid $medium-fontColor;
            font-size: .2rem;
            text-align: center;

        }
         &__minus{
             border:.01rem solid $medium-fontColor;
             color: $medium-fontColor;
             margin-right: .05rem;
         }
        &__plus{
            background: $btn-bgColor;
            color: $bgColor;
            margin-left: .05rem;
        }
    
    }
}
.check{
    display: flex;
    box-sizing: border-box;
    height: .51rem;
    border-top: .01rem solid $content-bgcolor;
    line-height: .5rem;
    &__icon{
        position: relative;
     width: .84rem;
     &__img{
         display: block;
         margin: .12rem auto;
         width: .28rem;
         height: .26rem;
     }
     &__tag{
         position: absolute;
         left: .46rem;
         top: .04rem;
         padding: 0 .04rem;
         min-width: .2rem;
         height: .2rem;
         line-height: .2rem;
         background-color: $highlight-fontColor;
         border-radius: .1rem ;
         text-align: center;
         color: #fff;
         transform: scale(.6);
         transform-origin: left center;
     }
    }
    &__info{
        flex: 1;
        color:#333;
        &__price{
            color: $highlight-fontColor;
            font-size: .18rem;
        }
    }
    &__btn{
        width: .98rem;
        line-height: .5rem;
        background-color: #4fb0f9;
        color: #fff;
        font-size: .14rem;
        text-align: center;
    }
}
</style>
