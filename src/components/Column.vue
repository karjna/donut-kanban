<template>
  <div class="column">
    <div class = "column__content">
      <div class = "column__title">{{ title }}</div>
    </div>
    <div class = "tasks">

    </div>
    <div v-if="createButton" @click="newTodoModal" class = "column__button">
      Create Task
    </div>
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: {
    title: String,
    createButton: Boolean,
  },
  methods:{
    newTodoModal: function(){
      this.$store.commit('whichModal', 'new');
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
  }

  .column + .column{
    margin-left: 20px;
  }

  .column__content{
    padding: 30px 25px;
  }

  .column__title{
    font-weight: bold;
  }

  .column__button{
    width:100%;
    background-color: #7658F6;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 0.7px;

  }
</style>
