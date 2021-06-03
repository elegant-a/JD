<template>
<div class="container">
    <span class="bgc"></span>
    <div class="head">
        <div class="head__fixed iconfont">&#xe8c7;</div>
        <div class="head__body">
        <div class="head__face"><img class="head__img" src="../../../public/img/a08b87d6277f9e2f726b0e3db2882622b999f3ec.jpeg"/></div>
        <span class="head__leval "><span class="head__leval__collect collect iconfont">&#xe66f;</span>123</span>
        <div class="head__name">热心市民李先生</div>
        <div class="head__ID">ID: 1069643013</div>
        <div class="head__details">

        <div class="details__items">
         <div class="details__items__head">红包</div>
         <div class="details__items__body">218</div>
        </div>
         
         <div class="details__items">
         <div class="details__items__head">优惠券   </div>
         <div class="details__items__body">12张</div>
        </div>

        <div class="details__items">
         <div class="details__items__head">鲜豆</div>
         <div class="details__items__body">88</div>
        </div>

        <div class="details__items">
         <div class="details__items__head">白条</div>
         <div class="details__items__body">100</div>
        </div>
     </div>
    
    </div>
    </div>
    <div class="help">

     <div class="help__ballet">
         <span class="help__ballet__picture iconfont">&#xe60f;</span>我的钱包 <span class="help__next iconfont">&#xe71f;</span>
     </div>

     <div class="help__position">
         <span class="help__position__picture iconfont">&#xe62b;</span>我的地址 <span class="help__next iconfont">&#xe71f;</span>
     </div>

     <div class="help__service">
         <span class="help__service__picture iconfont">&#xe71c;</span>帮助与客服 <span class="help__next iconfont">&#xe71f;</span>
     </div>
    
    </div>
    <div/>
</div>
<Docker  :currentIndex="3"/>
</template>
<script>
import Docker from '../../components/Docker'
export default{
    name:'Profile',
    components:{Docker}
}
</script>

<style lang="scss" scoped>
@import '../../style/iconfont.scss';
 .container{
    position: absolute;
    left: 0;
    bottom: 0.5rem;
    top: 0;
    right: 0;
    padding: 0;
    overflow: auto;
    background-color: #f8f8f8;
 }
    .bgc{
        display: inline-block;
        position: relative;
        left: -20%;
        width: 140%;
        height: 2.5rem;
        background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
        border-radius: 0 0 50% 50%;  
        overflow: hidden;
        &__body{
            margin: 1.08rem .18rem 0 .18rem;
            width: 3.39rem;
            height: 2.03rem;
            background-color: red;
        }
    }
    .head{
      position: absolute;
      top: 1.08rem;
      left: 0.18rem;
      width: 3.39rem;
      height: 2.03rem;
      background-color: #fff;
      box-shadow: 0 0.08rem 0.16rem 0 rgba(0,0,0,0.08);
      border-radius: 0.08rem;
      border-radius: 0.08rem;
      &__fixed{
        position: absolute;
        top: -0.318rem;
        right: 0;
        color: #fff;
      }
      &__face{
          margin: -.47rem 0 0 1.23rem;
          width: .94rem;
          height: .94rem;
          border-radius: 50%;
      }
      &__img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
      }
      &__name{
          margin: .12rem .84rem .02rem .84rem;
          width: 1.7rem;
          line-height: .36rem;
          font-size: .24rem;
          color: #262628;
          letter-spacing: 0.0019rem;
          text-align: center;
      }
      &__leval{
          display: inline-block;
          position: absolute;
          top: .7rem;
          left: 2.67rem;
          width: .35rem;
          height: .15rem;
          background-image: linear-gradient(180deg, #BEE700 0%, #8ACA00 100%);
          border-radius: 0.075rem;
          font-size: .1rem;
          color: #FFFFFF;
          letter-spacing: -0.0036rem;
          text-align: center;
          &__collect{
            width: 0.07rem;
            height: 0.07rem;
            font-size: .1rem;
            border-radius: 50%;
            color: yellow;
          }
          
      }
      &__ID{
              margin: .02rem .88rem 0 .89rem;
              width: 1.62rem;
              line-height: 0.17rem;
              text-align: center;
              font-size: 0.14rem;
              color: #C1C0C9;
          }
          &__details{
              display: flex;
              padding-top: .12rem;
              margin-top: .12rem;
              width: 100%;
              height: .76rem;
              text-align: center;
              border-top: 1px solid #f1f1f1;
              
          }
    }
    .details{
        
        &__items{
            flex: 1;
            &__head{
            font-size: 0.12rem;
            color: #C1C0C9;
            }
            &__body{
            margin-top: .03rem;
            font-size: .2rem;
            color: #262628;
        }
        
        }
 
    }
    .help{
        margin:.7rem .18rem 0 .18rem;
        background-color: #fff;
        width: 3.39rem;
        height: 1.46rem;
        border-radius: 0.08rem;
        box-shadow: 0 0.08rem 0.16rem 0 rgba(0,0,0,0.08);
        &__ballet{
         line-height: 0.48rem;
         width: 100%;
         font-size: .14rem;
         color: #262626;
         &__picture{
             margin: .21rem .17rem auto .21rem;
             font-size: .22rem;
             color: #ED4A47;
         }
        }
        &__position{
            line-height: 0.48rem;
            width: 100%;
            font-size: .14rem;
            color: #262626;
            &__picture{
             margin: .21rem .17rem auto .21rem;
             color: #32C5FF;
             font-size: .22rem;
         }
        }
        &__service{
            line-height: 0.48rem;
            width: 100%;
            font-size: .14rem;
            color: #262626;
            &__picture{
             margin: .21rem .17rem auto .21rem;
             color: #9013FE;
             font-size: .22rem;
         }
        }
        &__next{
            float: right;
            padding-right: .16rem;
        }
    }
    //  transform: scale(0.5 0.5) !important;
//   transform-origin: center top; transform只对块级元素有效如果不是块级元素就会就会失效
</style>