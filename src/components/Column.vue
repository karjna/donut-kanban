<template>
  <div class="column" v-bind:class="firstLast">
    <div class = "column__content">
      <div class = "column__title">{{ title }}</div>
    </div>
    <div class = "tasks">
      <Task v-for="item in taskList" v-bind:task="item" v-bind:columnId="columnId"/>
    </div>
    <div v-if="createButton" @click="newTodoModal" class = "column__button">
      Create Task
    </div>
  </div>
</template>

<script>
import Task from './Task.vue';
import { mapState } from 'vuex';

export default {
  name: 'Column',
  data() {
    return{

    }
  },
  props: {
    title: String,
    createButton: Boolean,
    columnId: Number,
  },
  components: {
    Task
  },
  computed: {
    taskList () {
      return this.$store.getters.getTaskByColumnId(this.columnId)
    },
    firstLast: function() {
      if (this.columnId + 1 == this.$store.state.columnList.length) {
        return 'column--last'
      }
      if (this.columnId == 0) {
        return 'column--first'
      }
    }
  },
  methods:{
    newTodoModal: function(){
      this.$store.commit('whichModal', {
        action:'new',
        columnId: this.columnId
      });
      this.$store.commit('showModal');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .column{
    width:240px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    display: table-cell;
    text-align: left;
    position: relative;
    padding-bottom: 50px;
  }

  .column + .column{
    margin-left: 20px;
  }

  .column__content{
    padding: 25px 25px 20px;
  }

  .column__title{
    font-weight: bold;
    font-size: 14px;
  }

  .column__button{
    width:100%;
    background-color: #7658F6;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 0.7px;
    position: absolute;
    bottom:0;
  }

  .tasks{
    margin: 0 7px;
  }

  .column--first{
    .column__button{
      background-color: #60A7F0
    }
  }
</style>
