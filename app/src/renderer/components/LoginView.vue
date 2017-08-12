<template>
  <div>

    <perfil-selection></perfil-selection>
    <perfil-validation></perfil-validation>
    <br>
    <router-link to="/registrar">Realizar cadastro</router-link>
    <router-link to="/forgot-password">Esqueci minha senha</router-link>
    <!-- <img src="./LandingPageView/assets/logo.png" alt="electron-vue"> -->
    <!-- <h1>Login welcome.</h1> -->
    <!-- <router-link to="/">go-another-route</router-link> -->
    <!-- <current-page></current-page> -->
    <!-- <versions></versions> -->
    <!-- <links></links> -->
  </div>
</template>

<script>
  import PerfilSelection from './LoginView/PerfilSelection'
  import PerfilValidation from './LoginView/PerfilValidation'
  


  export default {
    components: {
      PerfilSelection,
      PerfilValidation     
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
