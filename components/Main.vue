<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* work-sans-regular - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('static/fonts/worksans/work-sans-v13-latin-ext_latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('static/fonts/worksans/work-sans-v13-latin-ext_latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-600 - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('static/fonts/worksans/work-sans-v13-latin-ext_latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('static/fonts/worksans/work-sans-v13-latin-ext_latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-800 - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 800;
  src: local(''),
       url('static/fonts/worksans/work-sans-v13-latin-ext_latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('static/fonts/worksans/work-sans-v13-latin-ext_latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-italic - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 400;
  src: local(''),
       url('static/fonts/worksans/work-sans-v13-latin-ext_latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('static/fonts/worksans/work-sans-v13-latin-ext_latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-600italic - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 600;
  src: local(''),
       url('static/fonts/worksans/work-sans-v13-latin-ext_latin-600italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('static/fonts/worksans/work-sans-v13-latin-ext_latin-600italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-800italic - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 800;
  src: local(''),
       url('static/fonts/worksans/work-sans-v13-latin-ext_latin-800italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('static/fonts/worksans/work-sans-v13-latin-ext_latin-800italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}


    @layer base {
      h1 {
        @apply text-2xl;
      }
      h2 {
        @apply text-xl;
      }
      a {

      }
    }
    a.text-link {
      text-decoration: none;
      background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%);
      background-repeat: no-repeat;
      background-size: 100% 0.4em;
      background-position: 0 100%;
    }

    body {
      scroll-behavior: smooth;
      overflow-y: hidden;
      overflow-x: auto;
    }
    #page {

    }
    #page_inner.a1000c-horizontal {
      height: 100%;
      display: flex;
      /* important */
      overflow-y: hidden;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-snap-stop: always;
    }
    #page_inner.a1000c-horizontal > .flex {
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
      transition: 1.5s all;
    }
    .nav:hover {
      background-color: rgba(20,20,20,0.05);
      color: rgba(255,255,255,1);
      transition: 1s all;
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
    flex-basis: 95%;
    }
    #map #map_inner,
    #info #list_inner,
    #list #list_inner {
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
   .border-white {
      border-color: rgba(255,255,255,1);

   }

   .vue2leaflet-map {
      z-index: 39;
    }

   .leaflet-container {
      background-color: rgba(255,255,255,0.3);
      background-color: transparent;
   }
   .leaflet-tooltip-top::before {
        bottom: 0;
        margin-bottom: -12px;
        border-top-color: none;
    }
   .leaflet-tooltip-bottom::before, .leaflet-tooltip-top::before {
        left: 50%;
        margin-left: -6px;
    }
   .leaflet-tooltip-top::before, .leaflet-tooltip-bottom::before, .leaflet-tooltip-left::before, .leaflet-tooltip-right::before {
      position: absolute;
      pointer-events: none;
      border: 6px solid transparent;
      border-top-color: transparent;
      background: transparent;
      content: "";
    }
    .leaflet-tooltip-top {
        margin-top: -20px;
    }
    .leaflet-tooltip {
        position: absolute;
        padding: 3px 8px;
        background-color: rgba(252, 164, 148, 0.75);
        border: 0px solid #fff;
        border-radius: 0;
        color: #fff;
        font-family: monospace;
        white-space: nowrap;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }



</style>

<template>
<div id="page">
  <div id="page_inner" class="flex a1000c-horizontal" ref="scroll_container" @wheel="scrollX">
    <section id="info" class="flex items-stretch min-h-screen max-h-screen bg-a100c-1 sm:pt-0">
      <div class="content flex items-top">
        <div id="info_inner" class="bg-red-100 bg-opacity-30 my-1 mx-5">
          <p v-if="$fetchState.pending">Loading...</p>
          <p v-else-if="$fetchState.error">An error occurred :(</p>
          <div v-else>
            <h2 class="block font-semibold text-lg bg-a100c-white px-2 py-1 rounded shadow mt-8">{{ this.data.layer.title }}</h2>
            <div class="block bg-a100c-white px-2 py-1 rounded shadow mt-8" v-html="this.data.layer.text"></div>
          </div>
        </div>
      </div>
      <div class="nav flex items-center content-center justify-center">
        <nuxt-link :to="{ path: '/main', hash:'map'}" class="flex h-full w-full items-center justify-center text-white font-bold">&gt;</nuxt-link>
      </div>
    </section>

    <section id="map" class="flex min-h-screen max-h-screen bg-a100c-2">
      <div class="nav flex items-center content-center justify-center">
        <nuxt-link :to="{ path: '/main', hash:'info'}" class="flex h-full w-full items-center justify-center text-white font-bold">&lt;</nuxt-link>
      </div>
      <div class="content items-center justify-center">
        <div id="map_header" class="block">
          <p v-if="$fetchState.pending" class="text-sm text-red-300">Fetching places...</p>
          <p v-else-if="$fetchState.error" class="text-sm text-red-300">An error occurred :(</p>
          <div v-else>
            <p class="text-sm text-red-300">
              <button @click="$fetch" >Refresh</button> //
              <nuxt-link :to="{ path: '/'}" class="text-red-300">Home</nuxt-link>
            </p>
          </div>
          <p>
            <button class="hidden" v-shortkey="['arrowup']" @shortkey="navigate_top()">^</button>
            <button class="hidden" v-shortkey="['arrowleft']" @shortkey="navigate_left()">&lt;</button>
            <button class="hidden" v-shortkey="['arrowright']" @shortkey="navigate_right()">&gt;</button>
          </p>
        </div>
        <div id="map_inner" class="h-full bg-red-100 bg-opacity-10 my-1 mx-1">
          <div id="map_map" class="h-full w-full border-solid border-2 border-white shadow z-40">
           <client-only>
                <l-map :zoom=4 :minZoom=2 :center="[55.9464418,8.1277591]">
                  <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                   <l-circle-marker
                    v-for="(place, index) in this.data.layer.places"
                    :key="'marker-' + index"
                    :lat-lng="[place.lat,place.lon]"
                    :radius="circle.radius"
                    :color="circle.color"
                    :stroke="circle.stroke"
                    :fillColor="circle.fillcolor"
                    :fillOpacity="circle.fillopacity"
                    @click="handleMapClick"
                    :id="index"
                    :options="{ title: 'marker-' + index, id: index}"
                  >
                    <l-tooltip :content="place.title" :options="{ permanent: 'true', direction: 'top' }" />
                  </l-circle-marker>
               </l-map>
           </client-only>
          </div>
        </div>
      </div>
      <p v-if="$fetchState.pending" class="text-sm text-red-300">Fetching places...</p>
      <p v-else-if="$fetchState.error" class="text-sm text-red-300">An error occurred :(</p>
      <div v-else>
        <place-modals :list="this.data.layer.places"></place-modals>
      </div>
      <div class="nav flex items-center content-center justify-center">
        <nuxt-link :to="{ path: '/main', hash:'list'}" class="flex h-full w-full items-center justify-center text-white font-bold">&gt;</nuxt-link>
      </div>
    </section>

    <section id="list" class="flex min-h-screen max-h-screen bg-a100c-3 sm:pt-0">
      <div class="nav flex items-center content-center justify-center">
        <nuxt-link :to="{ path: '/main', hash:'map'}" class="flex h-full w-full items-center justify-center text-white font-bold">&lt;</nuxt-link>
      </div>
      <div class="content flex items-top overflow-x-auto pb-10">
          <div id="list_inner" class="bg-red-100 bg-opacity-30 my-1 mx-5">
            <p v-if="$fetchState.pending">Loading...</p>
            <p v-else-if="$fetchState.error">An error occurred :(</p>
            <div v-else>
              <ul class="pb-10">
                <li v-for="(place,index) in this.data.layer.places" class="bg-a100c-white px-4 py-2 rounded shadow mt-8">
                  <div v-swiper:[index]="swiperOptions">
                    <div class="swiper-wrapperX px-4 pt-4" v-if="place.images">
                      <div v-for="image,iindex in place.images" class="swiper-slideX">
                        <span v-if="image">
                          <img v-bind:src="image.image_url" :alt="image.alt" class="max-w-xs">
                        </span>
                        <span v-else>
                          <img src="https://via.placeholder.com/585x870?text=Platzhalter_585x870px" :alt="iindex">
                        </span>
                      </div>
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                  <h3 class="font-semibold text-lg px-4 py-2">{{ place.title }}</h3>
                  <div class="text-gray-500 px-4" v-html="place.teaser"></div>
                  <footer>
                    <p class="text-gray-500 px-4 mt-5"><a href="#" class="text-link">Show on the map (TODO)</a></p>
                  </footer>
                </li>
              </ul>
            </div>
        </div>
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
import axios from "axios";
import PlaceModals from '~/components/Place-modals.vue';

export default {
  name: "App",
  watch: {
    '$route.query': '$fetch'
  },
  mounted: function() {
    // this.jumpToMap()
    this.$router.push({ name: 'main', hash: '#map' })
  },
  data() {
      return {
        data: {
          layer: {}
        },
        tooltip: {
        },
        data_url1: 'https://staging.orte.link/public/maps/cities/layers/european-cities.json',
        data_url: 'https://orte.link/public/maps/queer-places-in-hamburg/layers/nachtbar',
        circle: {
          radius: 14,
          color: 'transparent',
          fillcolor: 'rgba(242, 71, 38, 1)',
          fillopacity: 0.85
        },
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          paginationClickable: true,
          spaceBetween: 50,
        }
      }
  },
  async fetch() {
    console.log('fetch...')
    // console.log(this.$route.query.layer)
    // if ( this.$route.query.layer ) {
    //  this.data_url = this.$route.query.layer
    // }
    this.data = await axios.get(this.data_url).then(response =>
      response.data
    )
    // add state value to all places
    console.log('fetch... add state value')
    for (let i = 0; i < this.data.layer.places.length; i++) {
      if ( i=== 0) {
        // this.$set(this.data.layer.places[i], 'state', true)
        this.$set(this.data.layer.places[i], 'state', false)
      } else {
        this.$set(this.data.layer.places[i], 'state', false)
      }
    }
    // exposes $fetchState with .pending and .error
    // TODO: For static hosting , the fetch hook is only called during page generation!!
  },
  methods: {
    jumpToMap() {
      console.log("jumpToMap")
      this.$router.push({ name: 'main', hash: '#map' })
    },
    scrollX(e) {
      console.log('scrollx: '+e.deltaY)
      console.log( "from "+this.$route.hash)
      let to = '';
      if ( e.deltaY < 0 ) {
        console.log( "to right")
        if ( this.$route.hash == '#map' ) {
          to = '#list'
        } else if ( this.$route.hash == '#info' ) {
          to = '#map'
        }

      } else {
        console.log( "to left")
        if ( this.$route.hash == '#map' ) {
          to = '#info'
        } else if ( this.$route.hash == '#list' ) {
          to = '#map'
        }
      }
      if (to) {
        // TODO: fix scrolling down in sections
        // this.$router.push({ name: 'main', hash: to })
        // location.hash = to;
      }
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
    },
    handleMapClick(e) {
      // toggleModal
      console.log("onclick");
      console.log(e.target.options.id);
      console.log(e.target.options.title);

      if ( e.target.options.title ) {

        // set all state to false
        for (let i = 0; i < this.data.layer.places.length; i++) {
            this.$set(this.data.layer.places[i], 'state', false)
        }
        console.log("Clicked place: "+this.data.layer.places[e.target.options.id].title)
        console.log("Clicked place ID: "+this.data.layer.places[e.target.options.id].id)
        this.data.layer.places[e.target.options.id].state = !this.data.layer.places[e.target.options.id].state;
      }
    }
  }
};
</script>
