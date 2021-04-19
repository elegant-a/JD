<template>
    <div class="wrapper">
        <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="请输入手机号"
            v-model="username"/>
        </div>
        <div class="wrapper__input">
            <input class="wrapper__input__content" placeholder="请输入密码" type="password"
            v-model="password" autocomplete="new-password">
        </div>
        <div class="wrapper__login-button" @click="handleLogin">登陆</div>
        <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div>
        <Toast v-if="show" :message="toastMessage"/>   
    </div>
    
</template>

<script>
import { reactive,toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { post } from '../../utils/request'
// Toast相关的逻辑和数据的的东西都放到toast组件统一维护,样式,逻辑
// login里面只需要引进相关的代码就可以使用了
import Toast,{useToastEffect} from '../../components/Toast'

// 处理注册逻辑
const useLoginEffect = (showToast)=>{
      const router = useRouter()
      const data = reactive({username:'',password:''})
      const handleLogin = async () => {
          const { username,password } = data;
          if(username == '' || password == ''){
              showToast('请输入用户名或密码')
              return
          }
         else{
             try{
        const result = await post('api/user/login',{
        username:data.username,
        passwoed:data.password
        })
        if(result?.errno === 0){
           localStorage.isLogin = true
           router.push({name:'Home'})
        }else{
           showToast('登陆失败')
        }
        } catch(e){
            showToast('请求失败')
        }
         }
        }
        // .then(()=>{
        //     // 登陆成功才会发送Login为True的请求
        //     localStorage.isLogin = true
        //     router.push({name:'Home'})
        // }).catch(()=>{
        //     alert('失败')
        // })
         const {username,password } = toRefs(data)
         return {username,password,handleLogin}
}
// 处理注册跳转
const useRegisterEffect = () =>{
    const router = useRouter();
     const handleRegisterClick = ()=>{
            router.push({name:'Register'})
        }
        return { handleRegisterClick }
}

export default {
    name:'Login',
    components:{ Toast },
    setup(){
        // 职责就是告诉你,代码执行的一个流程
       const  { toastMessage,show,showToast} = useToastEffect()
       const {username,password,handleLogin} = useLoginEffect(showToast)
       const { handleRegisterClick } = useRegisterEffect()
       return { toastMessage,show,handleLogin,handleRegisterClick,username,password, }
    }
    }

</script>

<style lang="scss" scoped>
@import '../../style/viriavles.scss';
 .wrapper{
     position: absolute;
     top: 50%;
     left: 0;
     width: 100%;;
     transform: translateY(-50%);
     overflow: visible;
     &__img{
         display: block;
         margin: 0 auto .4rem auto;
         width: .66rem;
         height: .66rem;
     }
     &__input{
         height: .48rem;
         margin: 0 .4rem .16rem .4rem;
         padding: 0 .16rem;
         background: #F9F9F9;
         border: .01rem solid rgba(0,0,0,0.10);
         border-radius: .06rem;
         &__content{
             margin-top: .12rem;
             line-height: .22rem;
             border:none;
             outline: none;
             width: 100%;
             background: none;
             font-size: .16rem;
             color: $content-notice-fontcolor;
            &::placeholder{
                color: $content-notice-fontcolor;
            }
         }
     }
     &__login-button{
         margin: .32rem .4rem .16rem .4rem;
         line-height: .48rem;
         background: $btn-bgColor;
         box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
         border-radius: .04rem;
         border-radius: .04rem;
         color: $bgColor;
         font-size: .16rem;
         text-align: center;
     }
     &__login-link{
         text-align: center;
        font-size: .14rem;
        color: $content-notice-fontcolor;

     }
 }
</style>