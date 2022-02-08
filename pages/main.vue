<template>
  <Main />
</template>

<script>

import config from '../nuxt.config'

export default {

 data() {
    return {
      title: 'Map prototype'
    }
  },
  head() {
    return {
      title: this.title,
    }
  }
}
</script>
