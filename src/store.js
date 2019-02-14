import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false,
    modalAction: 'new',
    modalColumn: 0,
    taskId: null,
    taskList:[
      {
        id:0,
        name: "this is my task",
        description: "this is its description",
        dueDate: "2017-06-01",
        columnId: 0,
      }
    ],
    columnList:[
      {
        id:0,
        title: "Backlog",
        action: "Backlog",
        createButton: true
      },
      {
        id:1,
        title: "In Progress",
        action: "In Progress",
        createButton: true
      },
      {
        id:2,
        title: "Completed",
        action: "Complete",
        createButton: false
      }
    ]
  },
  mutations: {
    showModal (state) {
      state.showModal = true;
    },
    hideModal (state) {
      state.showModal = false;
    },
    whichModal (state, modalInfo) {
      state.modalAction = modalInfo.action
      state.modalColumn = modalInfo.columnId
      state.taskId = modalInfo.taskId
    },
    addTask (state, taskObject) {
      taskObject.task.id = state.taskList.length;
      taskObject.task.columnId = state.modalColumn;
      state.taskList.push(taskObject.task)
    },
    changeColumn (state, taskAndColumn) {
      var index = state.taskList.findIndex(task => task.id == taskAndColumn.taskId)
      Vue.set(state.taskList[index], 'columnId', taskAndColumn.columnId);
    },
    saveEdits (state, editedTask) {
      Vue.set(state.taskList, editedTask.id, editedTask)
    }
  },
  actions: {

  },
  getters: {
    getTaskByColumnId: (state) => (id) => {
      return state.taskList.filter(task => task.columnId == id)
    },
    getTaskById: (state) => (id) => {
      return state.taskList.filter(task => task.id == state.taskId)
    }
  }
});
