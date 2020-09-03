<template>
  <div id="app">
    <Header />
    <FirstPage />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import FirstPage from './components/FirstPage.vue'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    FirstPage,
    Footer
  }
}
</script>

<style>
  #app {
    background-color: lightgrey;
  }
</style>