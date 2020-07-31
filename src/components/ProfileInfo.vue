<template>
  <div>
    <ViewField value="Juan"
    @editclick="switchToEdit" v-if="state == 'viewing'"/>
    <EditField
    @cancelclick="switchToView" v-else-if="state == 'editing'"/>
  </div>
</template>

<script>
  import ViewField from './ViewField.vue'
  import EditField from './EditField.vue'

  export default {
    name: 'ProfileInfo',
    components: {
      ViewField,
      EditField
    },
    props: {
      type: String
    },
    data() { return {
      state: 'viewing'
    }},
    methods: {
      switchToEdit() { this.state = 'editing' },
      switchToView() { this.state = 'viewing' }
    }
  }
</script>

<style>

</style>
