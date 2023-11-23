<script setup>
import {reactive, ref} from 'vue'
import router from "@/router";
import {request} from "@/request/request";

const form = reactive({
  account: '',
  password: ''
})

const login = () => {
  request.post('/login', form).then((res) => {
    if (res.data.code === 200) {
      // router.push('/eshop')
      localStorage.setItem('token', res.data.data.token)
    }
  })
}
</script>

<template>
  <div class="login">
    <el-input class="login-button" v-model="form.account"
              placeholder="账号"/>
    <el-input type="password" class="login-button"
              v-model="form.password" placeholder="密码"/>
    <br>
    <el-button @click="login()" class="login-button"
               type="success">登录
    </el-button>
    <br>
    <router-link to="/reg">没有账号？立即注册</router-link>
  </div>
</template>
<style scoped>
.login-button {
  width: 80%;
  height: 60px;
  margin-left: 10%;
  margin-top: 10px;
  font-size: 25px;
}

.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 500px;
  border-radius: 20px;
  background-color: white;
}

a {
  width: 20%;
  margin-top: 20px;
  margin-left: 40%;
}
</style>
