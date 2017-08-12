<template>
  <div id="app">
    <header-view></header-view>
    <body-view></body-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  import BodyView from 'components/BodyView'
  import HeaderView from 'components/HeaderView'
  export default {
    store,
    components: {
      BodyView,
      HeaderView
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
  h1 { color:teal}
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
