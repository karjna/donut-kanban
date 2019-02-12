<template>
  <div class="task">
    <div class = "task__content">
      <div class = "task__title">
        {{ task.name }}
      </div>
      <div class = "task__desc">
        {{ task.description }}
      </div>
      <div class = "task__date">
        <i class="fas fa-calendar-day"></i> Due {{ task.dueDate }}
      </div>
    </div>
    <div class = "actions">
      <div v-if = "beforeColumn" class = "action action__before" @click="moveToBefore">
        {{ beforeColumn.action }}
      </div>
      <div v-if = "afterColumn" class = "action action__after" @click="moveToAfter">
        {{ afterColumn.action }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Task',
  data() {
    return{
      beforeButtonText: 'Undo',
      afterButtonText: 'Start',
    }
  },
  props: {
    task: Object,
    columnId: Number
  },
  computed:{
    beforeColumn: function(){
      if (this.columnId - 1 > 0){
        return this.$store.state.columnList[this.columnId-1]
      }
      return false
    },
    afterColumn: function(){
      if (this.columnId + 1 < this.$store.state.columnList.length){
        return this.$store.state.columnList[this.columnId+1]
      }
      return false
    },


  },
  methods:{
    moveToAfter: function () {
      this.$store.commit('changeColumn', {
        taskId: this.task.id,
        columnId: this.afterColumn.id
      })
    },
    moveToBefore: function () {
      this.$store.commit('changeColumn', {
        taskId: this.task.id,
        columnId: this.beforeColumn.id
      })
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .task{
    border-radius: 5px;
  }

  .task__content{
    border: 2px solid #E9E9F0;
    border-bottom: 0px;
    border-radius: 5px 5px 0 0px;
    padding: 15px;
    font-size: 13px;
  }

  .task__title{
    font-weight: bold;
    text-transform: capitalize;
  }

  .task__desc{
    color:#83808D;
    margin: 10px 0;
  }

  .task__date{
    color:#7658F6;
  }

  .action{
    background-color: #7658F6;
    color:white;
    border-radius: 0px 0px 5px 5px;
    text-align: center;
    font-size: 12px;
    padding: 7px;
  }
</style>
