<template>
  <div class="board">
      <Column
        v-for="item in columnList"
        v-bind:title="item.title"
        v-bind:createButton="item.createButton"
        v-bind:columnId="item.id"
        ></Column>
  </div>
</template>

<script>
import Column from './Column.vue';
import { mapState } from 'vuex';

export default {
  name: 'Board',
  data() {
    return{

    }
  },
  components:{
    Column
  },
  computed: mapState({
    columnList: state => state.columnList,
    
  })

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .board{
   text-align: center;
   margin: 70px auto;
   display: table;
   border-spacing: 15px;
 }


</style>
