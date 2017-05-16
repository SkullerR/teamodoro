<template>
  <div id="app">
    <menu-page></menu-page>
    <content-page></content-page>


    <div id="content">
    </div>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  import ContentPage from 'components/ContentPage'
  import MenuPage from 'components/MenuPage'
  export default {
    store,
    components: {
      ContentPage,
      MenuPage
    },
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    display: flex;
    font-family: Lato, Helvetica, sans-serif;
    justify-content: center;
    text-align: center;
  }
</style>
