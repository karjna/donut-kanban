<template>
  <div class="column">
    <div class = "column__content">
      <div class = "column__title">{{ title }}</div>
    </div>
    <div v-if="createButton" @click="">

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
    display: inline-block;
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
</style>
