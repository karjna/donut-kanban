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
        <i class="fas fa-calendar-day"></i> Due {{ task.dueDate | moment("MMMM D, YYYY")}}
      </div>
    </div>
    <div class = "actions">
      <div v-if = "beforeColumn" class = "action action--before" @click="moveToBefore"  v-html="firstLast(beforeColumn)"></div>
      <div v-if = "afterColumn" class = "action action--after" @click="moveToAfter"  v-html="firstLast(afterColumn)"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Task',
  data() {
    return{
      firstColumnClass: "Start",
      lastColumnClass: "Undo"
    }
  },
  props: {
    task: Object,
    columnId: Number
  },
  computed:{
    beforeColumn: function () {
      if (this.columnId - 1 >= 0){
        return this.$store.state.columnList[this.columnId-1]
      }
      return false
    },
    afterColumn: function () {
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
    },
    firstLast: function (column) {
        if (this.columnId + 1 == this.$store.state.columnList.length) {
          return this.lastColumnClass
        }else if (this.columnId == 0) {
          return this.firstColumnClass
        }else{
          return column.action
        }
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .task{
    border-radius: 5px;
  }

  .task + .task{
    margin-top: 10px;
  }

  .task__content{
    border: 2px solid #E9E9F0;
    border-bottom: 0px;
    border-radius: 5px 5px 0 0px;
    padding: 20px 15px;
    font-size: 12px;
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
    font-style: italic;
  }

  .actions{
    display: flex;
    border-radius: 0px 0px 5px 5px;
    overflow: hidden;
  }

  .action{
    background-color: #60A7F0;
    color:white;
    text-align: center;
    font-size: 12px;
    padding: 10px 7px;
    flex-grow: 1;
  }

  .action--after{
    background-color: #5DCEBD;
  }

  .column--first{
    .action{
      background-color: #7658F6
    }
  }
</style>
