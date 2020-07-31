<template>
  <div @mouseover="hovering = true" @mouseleave="hovering = false">
    <span>{{ value }}</span>
    <button v-if="hovering" @click="edit">
     <i class="material-icons">edit</i>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      value: String
    },
    data() { return {
      hovering: false
    }},
    methods: {
      edit() { this.$emit('editclick') }
    }
  }
</script>

<style scoped>
  div {
    border-style: solid;
    border-width: 2px;
    border-color: red;
  }

  div:hover {
    border-style: solid;
    border-width: 2px;
    border-color: blue;
  }
</style>
