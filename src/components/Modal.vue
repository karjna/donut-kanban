<template>
  <!-- remove modalaction and then maybe do it by count of todo objects you're editing -->
  <div class="modal">
    <div class = "modal__body">
      <div class = "modal__content">
        <div class = "modal__header" v-if="showEdit">Edit Task</div>
        <div class = "modal__header" v-else>Create New Task</div>
        <form @submit.prevent="showEdit? saveTask : createTask">
          <input type="text" placeholder="Name" v-model="tempTask.name"/>
          <textarea placeholder="Description (optional)" v-model="tempTask.description"></textarea>
          <input type="date" placeholder="Due On" v-model="tempTask.dueDate"/>
        </form>
        <div class = "modal__footer">
          <div class = "btn btn--red" v-if="showEdit" @click="deleteTask">Delete</div>
          <div class = "float-right">
            <div class = "btn btn--white" @click="hideModal">Cancel</div>
            <div class = "btn btn--purple" @click="saveTask" v-if="showEdit">Save</div>
            <div class = "btn btn--purple" @click="createTask" v-if="!showEdit">Create</div>
          </div>
        </div>
      </div>
    </div>
    <div class = "modal__bg" @click="hideModal"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Modal',
  props: {
    modalAction: String,
    modalColumn: Number
  },
  data() {
    return{

    }
  },
  computed: mapState({
    showEdit: function() {
      return this.modalAction == 'edit'
    },
    editedTask: function () {
      if (this.showEdit) {
        return Object.assign({}, this.$store.getters.getTaskById()[0]);
      }else {
        return false
      }
    },
    tempTask: function() {
      return {
        name: this.showEdit ? this.editedTask.name : "",
        description: this.showEdit ? this.editedTask.description : "",
        dueDate: this.showEdit ? this.editedTask.dueDate : "",
      }
    },
  }),
  methods:{
    hideModal: function () {
      this.$store.commit('hideModal');
    },
    resetForm: function () {
      this.tempTask.name = "";
      this.tempTask.description = "";
      this.tempTask.dueDate = "";
    },
    createTask: function () {
      this.$store.commit('addTask', {
        task: Object.assign({}, this.tempTask)
      });
      this.resetForm();
      this.$store.commit('hideModal');
    },
    saveTask: function () {
      this.$store.commit('saveEdits', {
        id: this.editedTask.id,
        name: this.tempTask.name,
        description: this.tempTask.description,
        dueDate: this.tempTask.dueDate,
        columnId:  this.editedTask.columnId,
      });
      this.resetForm();
      this.$store.commit('hideModal');
    },
    deleteTask: function () {
      this.$store.commit('deleteTask', this.editedTask.id);
      this.$store.commit('hideModal');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .modal{
    width:100%;
    height:100%;
  }
  .modal__bg{
    background-color: rgba(255, 255, 255, 0.5);
    width: 100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 2;
  }

  .modal__body{
    background-color: #fff;
    z-index: 3;
    position: absolute;
    top:50px;
    left:0;
    right:0;
    margin: auto;
    max-width: 420px;
    border-radius: 10px;
    box-shadow: 1px 2px 20px 2px #d0c8d8;
    padding: 30px;
  }

  .modal__header{
    font-weight: bold;
    margin-bottom: 20px;
  }

  input, textarea{
    font-size: 12px;
    border-radius: 4px;
    border: 2px solid #E9E9F0;
    width: 100%;
    margin-bottom:10px;
    padding: 7px 15px;
    -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box;
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: #908B99;
      font-style: italic;
    }
    &::-moz-placeholder { /* Firefox 19+ */
      color: #908B99;
      font-style: italic;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      color: #908B99;
      font-style: italic;
    }
    &:-moz-placeholder { /* Firefox 18- */
      color: #908B99;
      font-style: italic;
    }
  }

  input{
    height:30px;
  }

  textarea {
    min-height: 60px;
  }

  .btn{
    display: inline-block;
    padding: 10px 15px;
    font-size: 13px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn--purple{
    background-color: #7658F6;
    &:hover{
      background-color: #5132d4;
    }
  }

  .btn--white{
    color: #7658F6;
  }

  .btn--red{
    background-color: #EB3430;
  }

  .float-right{
    float: right;
  }
</style>
