<template>
<div class="top">
     <div class="top__bgcor">
         <div class="top__header">
              <div class="iconfont top__header__back"
              @click="handleBackClick">&#xe65e;</div>
              确认订单
         </div>
         <div class="top__receiver">
             <div class="top__receiver__title">收货地址</div>
              <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
               <div class="top__receiver__info">
                   <span class="top__receiver__info__name">瑶妹（先生）</span>
                   <span class="top__receiver__info__name">18911024266</span>
               </div>
               <div class="iconfont top__receiver__icon">&#xe65e;</div>
         </div>
     </div>
   </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name:'TopArea',
    setup(){
      const router = useRouter()
      const handleBackClick = ()=>{ router.back()}
      return { handleBackClick }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriavles.scss";
@import "../../style/mixins.scss";
    .top{
  position: relative;
    height: 1.96rem;
    background-size: 100% 1.59rem;
    background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
    background-repeat: no-repeat;
    &__header{
        position: relative;
      padding-top: .15rem;
      line-height: .24rem;
      font-size: .16rem;
      color: $bgColor;
      text-align: center;
      &__back{
        position: absolute;
        font-size: .18rem;
        left: .18rem;
      }
    }
    &__receiver{
      position: absolute;
      left: .18rem;
      right: .18rem;
      bottom: 0;
      height: 1.11rem;
      background-color: $bgColor;
      
      border-radius: .04rem;
      
      &__title{
        padding: .16rem 0 .14rem .16rem;
        font-size: .16rem;
        line-height: .22rem;
        color: $content-fontcolor;
      }
      &__address{
      padding: 0 .4rem 0 .14rem;
      font-size: .14rem;
      line-height: .2rem;
      color: $content-fontcolor;
      }
      &__info{
        padding: .06rem 0 0 .16rem;
        &__name{
          margin-right: .06rem;
          line-height: .18rem;
            font-size: .12rem;
            color: $medium-fontColor;
        }
      }
      &__icon{
        position: absolute;
        right: .16rem;
        top: .5rem;
        color: $medium-fontColor;
        font-size: .2rem;
        transform: rotate(180deg);
      }
    }
}
</style>