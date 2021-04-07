<template>
  <div class="shop">
    <img class="shop__img" :src="item.imgUrl">
    <div :class="{'shop__content':true,'shop__content--bordered': hideBorder ? false : true}">
     <div class="shop__content__title">{{item.name}}
     </div>
     <div class="shop__content__tags">
       <span class="shop__content__tag">月售 :{{item.sales}}</span>
       <span class="shop__content__tag">起送 :{{item.expressLimit}}</span>
       <span class="shop__content__tag">基础运费 :{{item.expressPrice}}</span>
     </div>
     <p class="shop__content__highlight">{{item.slogan}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'ShopInfo',
    // 父组件向子组件传递数据,用props接收就可以了,
    // 在模板中就可以直接用了
    // 这样就把附近店铺的通用组件，封装成一段代码了
    props:['item','hideBorder']
}
</script>

<style lang="scss">
@import '../style/viriavles.scss';
.shop{
display: flex;
padding-top: .12rem;
&__img{
    margin-right: .16rem;
    width: .56rem;
    height: .56rem;
}
&__content{
padding-bottom: .12rem;

&--bordered{
    border-bottom: 0.01rem solid $content-bgcolor;
}
    &__title{
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
    }
    &__tags{
    margin-top: .08rem;
    line-height: .18rem;
    font-size: .13rem;
    color: $content-fontcolor;

    }
    &__tag{
        margin-right:.16rem;
    }
    &__highlight{
        margin: .08rem 0 0 0;
        line-height: .18rem;
        font-size: .13rem;
        color: $highlight-fontColor;
    }
}
}
</style>