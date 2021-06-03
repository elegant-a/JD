<template>
 <div class="wrapper1">
     <div class="search">
         <div class="search__back iconfont"
         @click="handleBackClick">&#xe65e;</div>
         <div class="search__content">
             <span class="search__content__icon iconfont">&#xe665;</span>
             <input class="search__content__input" placeholder="请输入商品名称" />
         </div>
     </div>
     <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl"/>
     <Content :shopName="item.name"/>
     <Cart />
 </div>   
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter,  useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/Shopinfo'
import Content from './Content'
import Cart from './Cart'

// 获取当前商铺信息
const useShopInfoEffect = () => {
    const route = useRoute()
    const data = reactive({item:{}})
    const getItemData = async ()=>{
        const result= await get(`/api/shop/${route.params.id}`)
        if(result?.errno === 0 && result?.data){
            data.item = result.data
        }
    }
    const { item } = toRefs(data)
    return { item,getItemData }
}
// 点击回退流程
const useBackRouterEffect = () => {
    const router = useRouter();
    const handleBackClick = ()=>{ 
          router.back();
        }
        return handleBackClick 
}

export default {
    name:'Shop',
    
    components:{ ShopInfo,Content,Cart},
    setup(){
        const { item,getItemData } = useShopInfoEffect()
        const handleBackClick = useBackRouterEffect()
        getItemData()
        return{item,handleBackClick}
    }
}
</script>
<style lang="scss">
@import '../../style/viriavles.scss';
.wrapper1{
    padding: 0 .18rem;
}
.search{
    display: flex;
    margin: .14rem 0 .08rem 0;
    line-height: .32rem;
    &__back{
       width: .3rem;
       font-size: .24rem;
       color: #B6B6B6;
    }
    &__content{
        display: flex;
        flex: 1;
        line-height: .32rem;
        background-color: $search-bgColor;
        border-radius:.16rem;
        &__icon{
           width: .44rem;
           text-align: center;
           color: $search-fontColor;
        }
        &__input{
           display: block;
           width: 100%;
           padding-right: .2rem; 
           border:none;
           outline: none;
           background: none;
           color: $content-fontcolor;
           &::placeholder{
               color: $content-fontcolor;
               font-size: .14rem;
           }
        }
    }
}
</style>