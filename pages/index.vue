<template>
  <Splash />
</template>

<script>
export default {
 data() {
    return {
      title: 'Map prototype'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>
