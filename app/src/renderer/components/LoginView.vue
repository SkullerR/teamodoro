<template>
  <div>

    <login-form></login-form>
    <login-actions></login-actions>
    <!-- <img src="./LandingPageView/assets/logo.png" alt="electron-vue"> -->
    <!-- <h1>Login welcome.</h1> -->
    <!-- <router-link to="/">go-another-route</router-link> -->
    <!-- <current-page></current-page> -->
    <!-- <versions></versions> -->
    <!-- <links></links> -->
  </div>
</template>

<script>
  import LoginForm from './LoginView/LoginForm'
  import LoginActions from './LoginView/LoginActions'
  export default {
    components: {
      LoginForm,
      LoginActions
    },
    name: 'login-view'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
