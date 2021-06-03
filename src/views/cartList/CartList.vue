<template>
<div class="wrapper"> 
  <div class="CartList__header"><span class="CartList__header__details">我的全部购物车</span></div>
  <div class="CartList__body">
          <div class="products">
     <div class="products__title">
       {{shopName}}
       </div>
       <div class="products__wrapper">
       <div class="products__list">
          <template
            v-for="item in productList"
            :key="item._id">
            <div  class="products__item"
            v-if="item.count > 0"
            >
              <img class="products__item__img" :src="item.imgUrl" />
              <div class="products__item__detail">
                <h4 class="products__item__title">{{item.name}}</h4>
                <p class="products__item__price">
                  <span class="products__item__price__single">
                     <span class="products__item__yen">&yen;</span>
                     {{item.price}} x {{item.count}}
                  </span>
                  <span class="products__item__price__total">
                     <span class="products__item__yen"></span>
                     &yen; {{(item.price * item.count).toFixed(2)}}
                  </span>
                </p>
              </div>
            </div>
          </template>
          </div>
           <div class="P_details"> 
         共计10件/1.4KG
       </div>
       </div>
   </div>
  </div>
  </div>

<Docker :currentIndex="1"/>
</template>

<script>
// import ProductList from '../orderConfirmation/ProductList'
import Docker from '../../components/Docker'
import { get } from '../../utils/request'
//获取路由
import { useRoute } from 'vue-router'
import { useCommonCartEffect,shopName } from '../../effects/cartEffect'
export default {
  
    name:'CartList',
    components:{Docker},
    setup(){
       const route = useRoute()
      const shopId = 1
      const { productList,shopName, } = useCommonCartEffect(shopId)
      return { productList,shopName}
    }

}
//需求根据不同的店铺展示不同的内容
</script>

<style lang="scss" scoped>
@import "../../style/viriavles.scss";
@import "../../style/mixins.scss";
.wrapper{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .5rem;
  padding: 0;
 background-color: #eee;
 overflow-y: scroll;
}
  .CartList__header{
    padding-top: .31rem;
    margin-bottom: .16rem;
    box-sizing: border-box;
    width: 100%;
    height: .64rem;
    background-color: #fff;
    &__details{
    display:block;
    
    text-align: center;
    font-size: 16px;
    color: #333333;
    }
  }
  .CartList__body{
    margin: 0 .18rem .16rem .18rem;
    // padding: 0 .16rem;
    width: 3.39rem;
    height: 2.22rem;
    background-color: #fff;
    overflow-y: scroll;

     &__order__title{
       padding:.16rem 0 .16rem 0;
       font-size: .16rem;
       color:#333;
     }
     &__order__content__img{
      width: .46rem;
      height: .46rem;
     }
  }
  .products{
  margin:.16rem .18rem .1rem .18rem;
  background: $bgColor;
  &__title{
  margin-top: .16rem;
  padding: .16rem .16rem .16rem 0;
  font-size: .16rem;
  color: $content-fontcolor;
  }
  &__wrapper{
    overflow-y: scroll;
  }
  &__list{
    background: $bgColor;
    padding-bottom: .16rem;
    overflow-y: scroll;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 0 .16rem 0;
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__sales {
      margin: 0.06rem 0;
      line-height: 0.16rem;
      font-size: 0.12rem;
      color: $content-fontcolor;
    }
    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $highlight-fontColor;
      &__total{
        flex:1;
        text-align: right;
        color: $dark-fontColor;
      }
    }
    &__yen {
      font-size: 0.12rem;
    } 
  }

  }
  .P_details{
    box-sizing: border-box;
    margin: 0 .16rem;
    padding-top: .04rem;
    width: 3.07rem;
    height: 0.28rem;
    background-color: #F5F5F5;
    color: #999999;
    text-align: center;
    font-size: .14rem;
  }
  
</style>