<template>
  <div>
    <h1>WIP......</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('form/handlers14', false)
    this.$store.dispatch('form/handlers15', false)
    this.$store.dispatch('form/handlers16', true)
  },
}
</script>