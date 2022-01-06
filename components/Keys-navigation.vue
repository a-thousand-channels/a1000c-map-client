<style>


</style>

<template>
  <div class="static z-50 invisible md:visible">
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p class="text-red-300 text-sm items-center whitespace-nowrap">
        Navigate with arrow keys:
        <button @click="navigate_left()" class="whitespace-nowrap rounded-lg bg-red-100 pl-1 pr-2">
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path class="text-red-300 fill-current"  d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
          back
        </button> |
        <button @click="navigate_top()" class="whitespace-nowrap rounded-lg bg-red-100 pl-1 pr-2">
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path class="text-red-300 fill-current" d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/></svg>
          home
        </button> |
        <button @click="navigate_right()" class="whitespace-nowrap rounded-lg bg-red-100 pl-1 pr-2">
          <svg class="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path class="text-red-300 fill-current"  d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
          forward
        </button>
      </p>
    </div>
  </div>
</template>


<script>


export default {
  props: {
  },
  components: {
  },
  methods: {
    navigate_top() {
      console.log( "<-- top "+this.$route.hash)
      this.$router.push({ name: 'index', hash: '' })
    },
    navigate_left() {
      console.log( "<-- from "+this.$route.hash)
      let to = '';
      if ( this.$route.hash == '#map' ) {
        to = '#info'
      } else if ( this.$route.hash == '#list' ) {
        to = '#map'
      }
      if (to) {
        this.$router.push({ name: 'main', hash: to })
        location.hash = to;
      }
    },
    navigate_right() {
      console.log( "--> from " +this.$route.hash)
      let to = '';
      if ( this.$route.hash == '#map' ) {
        to = '#list'
      } else if ( this.$route.hash == '#info' ) {
        to = '#map'
      }
      if (to) {
        this.$router.push({ name: 'main', hash: to })
        location.hash = to;
      }
    }
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
