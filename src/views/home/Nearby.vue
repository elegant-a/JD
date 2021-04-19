<template>
<div class="nearby">
  <h3 class="nearby__title">附近店铺</h3>
 <router-link  v-for="item in nearbyList" 
 :key="item._id"
 :to="`/shop/${item._id}`">
  <ShopInfo  :item="item"/>
 </router-link>
</div>
</template>
<script>
// 传给子组件的数据就是 :item="item"
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/Shopinfo'

const useNearbyListEffect = () => {
   const nearbyList = ref([]);
        const getNearbyList = async() =>{
        const result = await get('api/shop/hot-list')
        console.log(result)
        if(result?.errno === 0 && result?.data?.length){
             nearbyList.value = result.data;
        }
        }
        return {nearbyList,getNearbyList}
}
export default {
    name:'Nearby',
    components:{ ShopInfo },
     setup(){
       const  { nearbyList,getNearbyList } = useNearbyListEffect()
        getNearbyList()
        return {nearbyList}
}
}
</script>

<style lang="scss">

@import '../../style/viriavles.scss';
@import '../../style/mixins.scss';
.nearby{
  &__title{
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    color: $content-fontcolor;
    font-weight: normal;
  }
  a{
    text-decoration: none;
  }
}
</style>