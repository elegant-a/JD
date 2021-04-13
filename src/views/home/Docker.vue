<template>
  <div class="docker">
  <span v-for="(item,index) in dockerList" 
  :class="{'docker__item':true,'docker__item--active':index === 0}"
  class="docker__item" 
  :key="item.icon">
      <router-link :to="item.to">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{item.text}}</div>
      </router-link>
      </span>
  </div>
</template>

<script>
export default {
    name:'Docker',
    setup(){
      const dockerList = [
          {icon:'&#xe60b',text:'首页',to:{name:'Home'}},
          {icon:'&#xe607',text:'购物车',to:{name:'CartList'}},
          {icon:'&#xe60a',text:'订单',to:{name:'Home'}},
          {icon:'&#xe660',text:'我的',to:{name:'Home'}}
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
a{
  color: $content-fontcolor;
  text-decoration: none;
}
&--active{
  a{
      color: #1FA4FC;
  }
  
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