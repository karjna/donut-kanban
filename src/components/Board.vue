<template>
  <div class="board">
      <Column
        v-for="item in columns"
        v-bind:title="item.title"
        v-bind:createButton="item.createButton"
        v-bind:key="item.id"></Column>
  </div>
</template>

<script>
import Column from './Column.vue';

export default {
  name: 'Board',
  components:{
    Column
  },
  data() {
    return{
      columns: [
        {id: 0, title: 'Backlog', createButton: true},
        {id: 1, title: 'In Progress', createButton: true},
        {id: 2, title: 'Completed', createButton: false}
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .board{
   text-align: center;
   margin: 70px 20px;
 }
</style>
