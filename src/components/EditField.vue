<template>
  <div>
    <input type="text" name="" value="Edit">
    <div>
      <button class="confirm">
        <i class="material-icons">check</i>
      </button>
      <button class="cancel" @click="cancel">
        <i class="material-icons">highlight_off</i>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      inputType: String,
      value: String
    },
    methods: {
      cancel() { this.$emit('cancelclick') }
    }
  }
</script>

<style scoped>

</style>
