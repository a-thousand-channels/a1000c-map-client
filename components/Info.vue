<style>


</style>

<template>
  <div class="block bg-a100c-white rounded shadow py-2 px-2 sm:px-6 lg:px-8 lg:py-8">
    <div id="info_image" class="lg:px-8" v-if="layer.image_link">
      <img v-bind:src="layer.image_link" :alt="layer.title" class="max-w-full sm:max-w-ws">
    </div>
    <div id="info_content" class="my-2">
      <div id="info_content_header" class="">
        <h2 class="block font-semibold text-2xl px-4 py-1 lg:px-8">{{ layer.title }}</h2>
        <h3 v-if="layer.subtitle" class="block font-semibold text-md px-4 py-1 lg:px-8">{{ layer.subtitle }}</h3>
      </div>
      <div  class="block px-4 py-1 lg:px-8" v-html="layer.text"></div>
      <div v-if="layer.credits" class="block text-sm text-grey-500  px-4 py-2 lg:px-8" v-html="layer.credits"></div>
    </div>
  </div>
</template>


<script>


export default {
  props: {
    layer: {
      type: Object,
      required: true
    }
  },
  components: {
  },
  methods: {
  },
  data() {
    return {}
  },
  computed: {
  },
  mounted() {
  }
}
</script>
