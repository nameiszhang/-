<template>
    <div class="wrap">
        <section class="login">
            <p>
                <input type="text" placeholder="手机号码" v-model="phone_value">
            </p>
            <p>
                <input type="password" placeholder="密码" v-model="pwd_value">
            </p>
            <button class="loginbtn" @click="handleLogin">登录</button>
        </section>
    </div>
</template>
<script>
import api from '@/api'
const phonereg = /^1[3679]\d{9}$/;
export default {
    data(){
        return{
            phone_value:'',
            pwd_value:''
        }
    },
    methods:{
        handleLogin(){
            if(phonereg.test(this.phone_value)&&this.pwd_value.trim() !==''){
                api.userlogin({
                    phone:this.phone_value,
                    password:this.pwd_value
                }).then(res=>{
                    console.log(res)
                    window.localStorage.setItem('token',res.data.token);
                    this.$router.back()
                }).catch(error=>{
                    alert(error.response.data.message)
                })
            }else{
                alert("手机号或密码输入有误")
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../../../static/_minix.scss";
    @import "../../../static/common.scss";
    .login{
        @include sizing;
        padding: pxTorem(20px);
        width: 100%;
        p{
            width: 100%;
            height: pxTorem(60px);
            border-bottom: 1px solid #ccc;
            font-size: pxTorem(16px);
            line-height: pxTorem(60px);
            input{
                width:100%;
            }
        }
    }
    .loginbtn{
        width: 100%;
        height: pxTorem(50px);
        margin-top: pxTorem(10px);
        line-height: pxTorem(50px);
        text-align: center;
        background: none;
        outline: none;
        background:gray;
        color: #fff;
        font-size: pxTorem(16px);
        border-radius:pxTorem(25px) 
    }
</style>
