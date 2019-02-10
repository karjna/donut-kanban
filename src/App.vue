<template>
  <div id="app">
    <Board/>
  </div>
</template>

<script>
import Board from './components/Board.vue';

export default {
  name: 'app',
  components: {
    Board,
  },
};
</script>

<style lang="scss">
body {
  background-color: #F4F3F8;
  font-family: "Trebuchet MS", Helvetica, sans-serif
}
</style>
