<template>
    <div class="cart">
     <div class="check">
         <div class="check__icon">
             <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
             <div class="check__icon__tag">1</div>
         </div>
         
         <div class="check__info">
        总计: <span class="check__info__price">&yen;128</span>
         </div>
          <div class="check__btn">去结算</div>
    </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import '../../style/viriavles.scss';
.cart{
 position:absolute;
 left:0;
 right: 0;
 bottom: 0;
 height: .5rem;
 
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
         right: .2rem;
         top: .04rem;
         width: .2rem;
         height: .2rem;
         line-height: .2rem;
         background-color: $highlight-fontColor;
         border-radius: 50%;
         text-align: center;
         width: #fff;
         transform: scale(.6);
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
