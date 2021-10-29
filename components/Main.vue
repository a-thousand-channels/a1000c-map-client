<style>
    body {
      scroll-behavior: smooth;
      overflow-y: hidden;
      overflow-x: auto;

    }
    #page {

    }
    .a1000c-horizontal {
      height: 100%;
      display: flex;
      /* important */
      overflow-y: hidden;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
    }
    .a1000c-horizontal > .flex {
      flex-shrink: 0;
      width: 100vw;

      /* important */
      scroll-snap-align: center;

    }
    .nav {
      flex-shrink: 1;
      flex-basis: 4%;
      width: 20px;
      background-color: rgba(20,20,20,0);
      color: rgba(255,255,255,0.1);
    }
    .nav:hover {
      background-color: rgba(20,20,20,0);
      color: rgba(255,255,255,1);
    }
    .content {
    flex-shrink: 1;
    flex-basis: 97%;
    }
    #map {
      align-items: stretch;

    }
    #map > .content {
    flex-shrink: 1;
    flex-basis: 93%;
    }
    #map #map_inner {
      height: 90%;
      width: 95%;
      align-items: none;
    }
   .bg-a100c-1 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.15) 0%, rgba(255,117,0,0.15) 50%, rgba(255,0,35,0.15) 100%);
   }
   .bg-a100c-2 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,35,0.15) 0%, rgba(255,0,249,0.15) 50%, rgba(255,117,0,0.15) 100% );
   }
   .bg-a100c-3 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,117,0,0.15) 0%, rgba(255,0,35,0.15) 50%, rgba(255,0,249,0.15) 100% );
   }
   .bg-a100c-white {
      background-color: rgba(255,255,255,0.8);
   }
   .text-white {
      color: rgba(255,255,255,0.8);
      text-shadow: 0 0 0 #ddd;
   }
   .text-white:hover {
      color: rgba(255,255,255,1);
      text-shadow: 0 0 3px #bbb;
   }

</style>

<template>
<div id="page">
  <div id="page_inner" class="flex a1000c-horizontal" ref="scroll_container" @mousewheel="scrollX">
    <section id="info" class="flex min-h-screen bg-a100c-1 sm:items-center sm:pt-0">
      <div class="flex content items-center justify-center">
        <h2 class="bg-a100c-white px-2 py-1 rounded shadow mt-8">Info</h2>
      </div>
      <nuxt-link :to="{ path: '/main', hash:'map'}" class="nav flex block items-center justify-center text-white font-bold">&gt;</nuxt-link>
    </section>
    <section id="map" class="flex min-h-screen bg-a100c-2 sm:items-center sm:pt-0">
      <nuxt-link :to="{ path: '/main', hash:'info'}" class="nav flex items-center justify-center text-white font-bold">&lt;</nuxt-link>
      <div class="flex content items-center justify-center">
        <div id="map_inner" class="flex items-center justify-center bg-red-100 bg-opacity-30 my-1 mx-5">
          <h2 class="bg-a100c-white px-2 py-1 rounded shadow mt-8">Map</h2>
          <p>
            <button class="hidden" v-shortkey="['arrowup']" @shortkey="navigate_top()">^</button>
            <button class="hidden" v-shortkey="['arrowleft']" @shortkey="navigate_left()">&lt;</button>
            <button class="hidden" v-shortkey="['arrowright']" @shortkey="navigate_right()">&gt;</button>
          </p>
        </div>
      </div>
      <nuxt-link :to="{ path: '/main', hash:'list'}" class="nav flex block items-center justify-center text-white font-bold">&gt;</nuxt-link>
    </section>
    <section id="list" class="flex min-h-screen bg-a100c-3 sm:items-center sm:pt-0">
      <nuxt-link :to="{ path: '/main', hash:'map'}" class="nav flex items-center justify-center text-white font-bold">&lt;</nuxt-link>
      <div class=" content flex items-center justify-center ">
        <h2 class="bg-a100c-white px-2 py-1 rounded shadow mt-8">List</h2>
      </div>
    </section>
  </div>
  <div class="static invisible md:visible">
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p class="text-red-300 items-center">
        You can navigate with arrow keys (<button @click="navigate_left()">🡸 back</button> | <button @click="navigate_top()">🡱 home</button> | <button @click="navigate_right()">🡲 forward</button>)
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "App",
  mounted: function() {
    // this.jumpToMap()
    this.$router.push({ name: 'main', hash: '#map' })
  },
  methods: {
    jumpToMap() {
      console.log("jumpToMap")
      this.$router.push({ name: 'main', hash: '#map' })
    },
    scrollX(e) {
      console.log('scrollx')
      this.$refs['scroll_container'].scrollLeft += e.deltaY;
    },
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
  }
};
</script>
