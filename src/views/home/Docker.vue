<template>
  <div class="docker">
  <span v-for="(item,index) in dockerList" 
  :class="{'docker__item':true,'docker__item--active':index === 0}"
  class="docker__item" 
  :key="item.icon">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div></span>
  </div>
</template>

<script>
export default {
    name:'Docker',
    setup(){
      const dockerList = [
          {icon:'&#xe60b',text:'首页'},
          {icon:'&#xe607',text:'购物车'},
          {icon:'&#xe60a',text:'订单'},
          {icon:'&#xe660',text:'我的'}
      ]
      return { dockerList }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriavles.scss';
@import '../../style/mixins.scss';
  .docker{
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: 1px solid $content-bgcolor;
  color: $content-fontcolor;
  &__item {
    flex:1;
    text-align: center;
    .iconfont{
      margin: 0.07rem 0 0.02rem 0;
      font-size:.18rem;
}
&--active{
  color: #1FA4FC;
}
  }
  &__title{
  // 浏览器默认显示的最小文字为12px
  font-size: .1rem;
  transform: scale(0.5 0.5) !important;
  transform-origin: center top;
  }
}
</style>