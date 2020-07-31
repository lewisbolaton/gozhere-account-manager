<template>
  <div id="app">
    <div>
      <div>
        <ProfileInfo width="50%"/>
        <ProfileInfo width="50%"/>
      </div>
      <ProfileInfo/>
      <ProfileInfo/>
    </div>
  </div>
</template>

<script>
import ProfileInfo from './components/ProfileInfo.vue'

export default {
  name: 'App',
  components: {
    ProfileInfo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
