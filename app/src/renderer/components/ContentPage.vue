<template id="content-page">
  <div>
    <!--<img src="./LandingPageView/assets/logo.png" alt="electron-vue">-->
    <h1>Janela de conteúdo</h1>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'content-page',
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
