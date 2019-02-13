<template>
  <div id="app">
    <Board/>
    <Modal v-bind:modalAction="modalAction" v-bind:modalColumn="modalColumn" v-show="showModal"/>
  </div>
</template>

<script>
import Board from './components/Board.vue';
import Modal from './components/Modal.vue';
import { mapState } from 'vuex';

export default {
  name: 'app',
  data () {
    return{
    }
  },
  components: {
    Board,
    Modal,
  },
  computed: mapState([
      'showModal',
      'modalAction',
      'modalColumn',
    ]),
  methods: {
  }
};
</script>

<style lang="scss">
@import "./assets/css/resetr.css";

body {
  background-color: #F4F3F8;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  width: 100%;
  height:100%;
}

#app{
  display: inline-block;
  width: 100%;
}
</style>
