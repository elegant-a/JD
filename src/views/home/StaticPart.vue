<template>
<div class="position">
<span class="iconfont position__icon">&#xe64f;</span>
北京理工大学国防科技园2号楼10层33333333
<span class="iconfont position__notice">&#xe6bb;</span>
</div>
<div class="search">
<span class="iconfont">&#xe665;</span>
<span class="search__text">山姆会员商店优惠商品</span>
</div>
<div class="banner">
<img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
</div>
<div class="icons">
<div class="icons__item" v-for="item in iconsList" :key="item.desc">
<img class="icons__item__img" :src="`http://www.dell-lee.com/imgs/vue3/${item.imageName}.png`" alt="">
<p class="icons__item__desc">{{item.desc}}</p>
</div>
</div>
<div class="gap"></div>

</template>
<script>
export default {
    name: 'StaticPart',
    setup(){
      const iconsList = [
        {imageName:"超市",desc:"便利超市"}, 
        {imageName:"菜市场",desc:"菜市场"},
        {imageName:"水果店",desc:"水果店"},
        {imageName:"鲜花",desc:"鲜花绿植"},
        {imageName:"医药健康",desc:"医药健康"},
        {imageName:"家居",desc:"家居时尚"},
        {imageName:"签到",desc:"签到"},
        {imageName:"蛋糕",desc:"烘焙蛋糕"},
        {imageName:"大牌免运",desc:"大牌免运"},
        {imageName:"红包",desc:"红包套餐"},
]
      return { iconsList }
    }
}
</script>
<style lang="scss" scoped> 
@import '../../style/viriavles.scss';
@import '../../style/mixins.scss';
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position_notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background-color: $search-bgColor; 
  color: $search-fontColor;
  border-radius: .16rem;
  .iconfont {
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display:block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgcolor;
} 
</style> 