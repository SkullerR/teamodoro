<template>
  <div>
    <label for="username">Username</label>      
    <input id="username" name="username" type="text" />
    
    <label for="password">Password</label>   
    <input id="password" name="password" type="password" />

    <label for="repeat_password">Repeat Password</label>   
    <input id="repeat_password" name="repeat_password" type="password" />
    
  </div>
</template>

<script>
  //import LoginForm from './Re/LoginForm'
  export default {
    components: {
      //LoginForm
    },
    name: 'register-view'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
