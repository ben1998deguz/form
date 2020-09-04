<template>
  <div id="app">
    <FirstPage />
  </div>
</template>

<script>
import FirstPage from './components/FirstPage'

export default {
  name: 'App',
  components: {
    FirstPage
  }
}
</script>

<style>
  #app {
    background-color: lightgrey;
  }
</style>