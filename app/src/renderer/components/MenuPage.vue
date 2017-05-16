<template id="menu-page">
	<div>
		<router-link to="/meu-dia">Meu dia</router-link>
		<router-link to="/projetos">Projetos</router-link>
		<router-link to="/configuracoes">Configurações</router-link>  
	</div>
</template>  

<script>
  export default {
    name: 'menu-page',
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>