<template>
  <div>
   <Header />
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'FirstPage',
  components: {
    Header
  },
  props: {
    msg: String
  }
}
</script>


