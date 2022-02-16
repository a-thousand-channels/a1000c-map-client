<template>
  <Main />
</template>

<script>

import config from '../nuxt.config'

export default {

 data() {
    return {
       title: 'A 1000 Channels map prototype'
    }
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>
