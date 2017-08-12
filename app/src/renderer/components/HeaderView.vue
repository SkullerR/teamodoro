<template id="header-view">
	<div>
    <user-actions-component></user-actions-component>
    <menu-component></menu-component>
	</div>
</template>  

<script>
  import MenuComponent from './HeaderView/MenuComponent';
  import UserActionsComponent from './HeaderView/UserActionsComponent';
  export default {    
    components: {
      MenuComponent,
      UserActionsComponent
    },
    name: 'header-view',
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>