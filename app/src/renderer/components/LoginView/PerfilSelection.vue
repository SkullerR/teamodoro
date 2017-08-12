<template>
<div>

  Logo
  <img src="" >

  <label>email:</label>
  <input type="email" />
  
  
  <button v-on:click="changeVisibility" type="submit">Logar</button>
  {{ok}}
</div>
</template>

<script>
  this.data = function () {
    return {
      ok: true
    }
  }
  this.methods = {
    changeVisibility() {
      this.ok = !this.ok;
    }
  }
</script>

<style scoped>
  div {
    background-color: darkgrey;
  }
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
