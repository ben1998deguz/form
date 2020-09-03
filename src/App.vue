<template>
  <div id="app">
    <Header />
    <FirstPage />
  </div>
</template>

<script>
import Header from './components/Header'
import FirstPage from './components/FirstPage.vue'

export default {
  name: 'App',
  components: {
    Header,
    FirstPage
  }
}
</script>

<style>
  #app {
    background-color: lightgrey;
  }
</style>