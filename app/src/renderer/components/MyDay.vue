<template id="my-day-page">
	<div>
		<h1>MEU DIA</h1>

    <draggable v-model="exampleList">
      <div v-for="text in exampleList">{{text}}</div>
    </draggable>
	</div>
	
</template>  

<script>
  import draggable from 'vuedraggable';

  export default {
    name: 'my-day-page',
    components: {
      draggable
    },

    data: () => ({
      exampleList: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5'
      ]
    })
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>