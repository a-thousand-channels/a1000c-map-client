<style>
    body {
      scroll-behavior: smooth;
      overflow: hidden;
    }
    #page {
    }
    .a1000c-horizontal {
    }
    .a1000c-horizontal > .flex {
      flex-shrink: 0;
     }
     .nav {
      flex-shrink: 1;
      flex-basis: 5%;
      background-color: rgba(20,20,20,0.1);
     }
     .nav:hover {
      background-color: rgba(20,20,20,0.35);

     }
     .content {
      flex-shrink: 1;
      flex-basis: 95%;
     }
   .bg-a100c-1 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.15) 0%, rgba(255,117,0,0.15) 0%, rgba(255,0,35,0.15) 100%);
      width: 100vw;
   }
   .bg-a100c-2 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,117,0,0.15) 0%, rgba(255,0,35,0.15) 50%, rgba(255,0,249,0.15) 100% );
      width: 100vw;
   }
   .bg-a100c-3 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,35,0.15) 0%, rgba(255,0,249,0.15) 50%, rgba(255,117,0,0.15) 100% );
      width: 100vw;
   }
   h2 {
    display: inline-block;
    background-color: white;
    padding: 0 6px;
   }
   .text-white {
      color: rgba(255,255,255,0.85);
   }

</style>

<template>
<div id="page">
  <div class="flex a1000c-horizontal">
    <section id="info" class="flex min-h-screen bg-a100c-1 sm:items-center sm:pt-0">
        <div class="flex content items-center justify-center">
          <h2 class="bg-white-500 px-2 py-1 rounded">Info</h2>
        </div>
        <a href="#map" class="nav flex block items-center justify-center text-white font-bold">&gt;</a>
    </section>
    <section id="map" class="flex min-h-screen bg-a100c-2 sm:items-center sm:pt-0">
      <a href="#info" class="nav flex items-center justify-center text-white font-bold">&lt;</a>
      <div class="flex content items-center justify-center">
        <h2 class="bg-white-500 px-2 py-1 rounded">Map</h2>
        <p>
          <button class="hidden" v-shortkey="['arrowleft']" @shortkey="navigate_left()">&lt;</button>
          <button class="hidden" v-shortkey="['arrowright']" @shortkey="navigate_right()">&gt;</button>
        </p>

      </div>
      <a href="#list" class="nav flex block items-center justify-center text-white font-bold">&gt;</a>
    </section>
    <section id="list" class="flex min-h-screen bg-a100c-3 sm:items-center sm:pt-0">
      <a href="#map" class="nav flex items-center justify-center text-white font-bold">&lt;</a>
      <div class=" content flex items-center justify-center">
        <h2 class="bg-white-500 px-2 py-1 rounded">List</h2>
      </div>
    </section>
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
    navigate_left() {
      console.log( "<-- from "+this.$route.hash)
      if ( this.$route.hash == '#map' ) {
        this.$router.push({ name: 'main', hash: '#info' })
      }
      else if ( this.$route.hash == '#list' ) {
        this.$router.push({ name: 'main', hash: '#map' })
      }
    },
    navigate_right() {
      console.log( "--> from " +this.$route.hash)
      if ( this.$route.hash == '#info' ) {
        this.$router.push({ name: 'main', hash: '#map' })
      }
      else if ( this.$route.hash == '#map' ) {
        this.$router.push({ name: 'main', hash: '#list' })
      }
    }
  }
};
</script>