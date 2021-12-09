<style>


</style>

<template>
  <div>
  <div class="block bg-a100c-white rounded shadow py-2 px-2 sm:px-6 lg:px-8 lg:py-8">
    <div id="info_image" class="lg:px-8" v-if="data.image_link">
      <img v-bind:src="data.image_link" :alt="data.title" class="max-w-full sm:max-w-ws">
    </div>
    <div id="info_content" class="my-2">
      <div id="info_content_header" class="">
        <h2 class="block font-semibold text-2xl px-4 py-1 lg:px-8">{{ data.title }}</h2>
        <h3 v-if="data.subtitle" class="block font-semibold text-md px-4 py-1 lg:px-8">{{ data.subtitle }}</h3>
      </div>
      <div  class="block px-4 py-1 lg:px-8" v-html="data.text"></div>
      <div v-if="data.credits" class="block text-sm text-grey-500  px-4 py-2 lg:px-8" v-html="data.credits"></div>
    </div>
  </div>
  <div class="block bg-a100c-white rounded shadow py-2 px-2 sm:px-10 lg:px-10 lg:py-8 mt-4">
    <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M14.935 7.204l-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17zM2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5zm4 6h2v2H6v-2zm4 0h2v2h-2v-2zm5.998-.063L17.236 9.7l1.06 1.06-1.237 1.238 1.237 1.238-1.06 1.06-1.238-1.237-1.237 1.237-1.061-1.06 1.237-1.238-1.237-1.237L14.76 9.7l1.238 1.237z"/></svg>
    Please go right to see
    <nuxt-link :to="{ path: '/main', hash:'map'}" class="text-link">
      the map
    </nuxt-link>
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
