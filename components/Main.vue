<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer components {
      border-transparent {
        border-color:  transparent;
      }
    }


    #info_content p a,
    button.text-link,
    a.text-link {
      text-decoration: none;
      background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%);
      background-repeat: no-repeat;
      background-size: 100% 0.4em;
      background-position: 0 100%;
    }

    body.mainX {
      scroll-behavior: smooth;
      /* overflow-y: hidden;
      overflow-x: auto; */
      overflow-y: auto;
      overflow-x: hidden;
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
    flex-basis: 98%;
    }
    #map #map_inner,
    #info #info_inner,
    #list #list_inner {
      height: auto;
      width: auto;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    #info > .content::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    #info > .content {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    #info #info_inner img {
      max-height: 45vh;
    }
    #info #info_inner p {
      @apply mb-3
    }
    #map {
      align-items: stretch;
    }
    #map > .content {
    flex-shrink: 1;
    flex-basis: 95%;
    }
    #map #map_inner {
      width: 97%;
      height: 90%;
    }
    #map #map_map {
      background-color: transparent;
    }
    #map #map_map.dark {
      background-color: rgba(68, 68, 68,0.9) !important;
      border-color: transparent;
    }
    #map #modals_wrapper {
      display: none;
    }
    #map #modals_wrapper.is-active {
      display: block;
    }
    #list #list_inner {
      width: 97%;
    }
   .bg-a100c-1 {
       background: rgb(111,80,80);
      background: linear-gradient(90deg, rgba(240,235,227,0.5)  0%, rgba(146,153,101,0.5) 48%, rgba(111,80,80,0.5)100%);
   }
   .bg-a100c-2 {
       background: rgb(111,80,80);
      background: linear-gradient(90deg, rgba(111,80,80,0.5) 0%, rgba(240,235,227,0.85) 48%, rgba(146,153,101,0.5) 100%);
   }
   .bg-a100c-3 {
         background: rgb(111,80,80);
      background: linear-gradient(90deg, rgba(146,153,101,0.5) 0%, rgba(111,80,80,0.5)  48%, rgba(240,235,227,0.5) 100%);
   }
   .bg-a100c-dark {

    }
   .bg-a100c-white {
      background-color: rgba(255,255,255,0.8);
   }
   .bg-red-100 {
      background-color: rgba(255,255,255,0.55);
   }
   .bg-map {

   }
   .text-gray {
     color: rgba(0,0,0,0.3);
   }
   .text-gray:hover {
     color: rgba(0,0,0,0.8);
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
   .inline { display: inline-block; }
   .swiper-container {
      max-width: 85vw;
      overflow: hidden;
      /* background-color: silver; */
   }

   .vue2leaflet-map {
      z-index: 39;
    }

   .leaflet-container {
      background-color: rgba(255,255,255,0.3);
      background-color: rgba(55, 55, 55, 0.3);
      background-color: transparent;
   }
   .leaflet-touch .leaflet-control-layers, .leaflet-touch .leaflet-bar {
      background-clip: padding-box;
      border-radius: 0;
      background-color: transparent;
      border: 2px solid transparent;
      line-height: 0;
      /* display:  none; */
    }
    .leaflet-touch .leaflet-control-layers:hover, .leaflet-touch .leaflet-bar:hover {
      border: 2px solid #444;
    }
    #map_map .leaflet-touch .leaflet-control-attribution {
      /* display: none */
      background: rgba(255, 255, 255, 0.5);
    }
    @media only screen and (max-width: 600px) {
      #map_map .leaflet-touch .leaflet-control-attribution {
        display: none;
      }
    }
    #map_map .leaflet-control-zoom-in, .leaflet-control-zoom-out {
      background-color: transparent;
    }
    #map_map  .leaflet-bar a, #map_map  .leaflet-bar a:hover {
      background-color: transparent;
      border-bottom: 2px solid transparent;
    }
    #map_map  .leaflet-bar a.leaflet-control-zoom-in, #map_map  .leaflet-bar a.leaflet-control-zoom-in:hover {
      border-bottom: 2px solid white;
      padding-bottom:  2px;
      border-bottom: 2px solid #333;
      line-height: 21px;
    }
    #map_map .leaflet-bar a.leaflet-disabled {
      cursor: default;
      color: #666;
    }
    #map_map .leaflet-bottom.leaflet-left svg {
     /* width: 32px;
      height: 35px; */
    }
    #map_map .leaflet-touch .leaflet-control-layers-toggle {
      width: 35px;
      height: 35px;
    }
    #map_map .leaflet-control-layers-toggle {
      background-image: url("data:image/svg+xml;base64,PHN2ZwogICB3aWR0aD0iOS44MjY1MzA1bW0iCiAgIGhlaWdodD0iOS44MjY1MzE0bW0iCiAgIHZpZXdCb3g9IjAgMCA5LjgyNjUzMDQgOS44MjY1MzE0IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcyMzQyOSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4xLjEgKDNiZjVhZTBkMjUsIDIwMjEtMDktMjApIgogICBzb2RpcG9kaTpkb2NuYW1lPSJhMTAwMC1yZW1peC1pY29uLS1zdGFjay5zdmciCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyMzQyNiIgLz4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJFYmVuZSAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzcuNTM3NzczLC0xMTAuODc1NDcpIj4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDp0cmFuc3BhcmVudDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4xNzM0NjkiCiAgICAgICBpZD0icmVjdDE4NTgtNTAtMyIKICAgICAgIHdpZHRoPSI5LjgyNjUzMDUiCiAgICAgICBoZWlnaHQ9IjkuODI2NTMxNCIKICAgICAgIHg9Ijc3LjUzNzc3MyIKICAgICAgIHk9IjExMC44NzU0NyIgLz4KICAgIDxnCiAgICAgICBpZD0iZzk4Ny00LTIiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjMxMzg3NTU2LDAsMCwwLjMyMDU0MTYyLDc4LjY4NDUzNywxMTEuOTQyMjMpIj4KICAgICAgPHBhdGgKICAgICAgICAgZmlsbD0ibm9uZSIKICAgICAgICAgZD0iTSAwLDAgSCAyNCBWIDI0IEggMCBaIgogICAgICAgICBpZD0icGF0aDk3NS02LTQiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMjAuMDgzLDE1LjIgMS4yMDIsMC43MjEgYSAwLjUsMC41IDAgMCAxIDAsMC44NTggbCAtOC43Nyw1LjI2MiBhIDEsMSAwIDAgMSAtMS4wMywwIGwgLTguNzcsLTUuMjYyIGEgMC41LDAuNSAwIDAgMSAwLC0wLjg1OCBMIDMuOTE3LDE1LjIgMTIsMjAuMDUgWiBtIDAsLTQuNyAxLjIwMiwwLjcyMSBhIDAuNSwwLjUgMCAwIDEgMCwwLjg1OCBMIDEyLDE3LjY1IDIuNzE1LDEyLjA3OSBhIDAuNSwwLjUgMCAwIDEgMCwtMC44NTggTCAzLjkxNywxMC41IDEyLDE1LjM1IFogbSAtNy41NjksLTkuMTkxIDguNzcxLDUuMjYyIGEgMC41LDAuNSAwIDAgMSAwLDAuODU4IEwgMTIsMTMgMi43MTUsNy40MjkgYSAwLjUsMC41IDAgMCAxIDAsLTAuODU4IGwgOC43NywtNS4yNjIgYSAxLDEgMCAwIDEgMS4wMywwIHogTSAxMiwzLjMzMiA1Ljg4Nyw3IDEyLDEwLjY2OCAxOC4xMTMsNyBaIgogICAgICAgICBpZD0icGF0aDk3Ny0wLTciIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K")
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
        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    }

    /* hotfix for display error #40 */
    div#page_inner {
      @apply border-solid border-2 border-transparent
    }
</style>

<template>

<div id="page">
  <style v-if="this.data.backgroundimage_link && this.data.background_color">
    :root {
      --background-color: {{ this.data.background_color ?  this.data.background_color : '' }};
      --background-image: url('{{ this.data.backgroundimage_link ? this.data.backgroundimage_link : '' }}');
    }
      .bg-a100c-1,
      .bg-a100c-2,
      .bg-a100c-3 {
        background-image: none;
        background-color: var(--background-color);
        background-size: cover;
     }
  </style>
  <style v-else-if="this.data.background_color">
    :root {
      --background-color: {{ this.data.background_color ?  this.data.background_color : '' }};
    }
      .bg-a100c-1,
      .bg-a100c-2,
      .bg-a100c-3 {
        background: var(--background-color);
        background-color: none;
        background-size: cover;
     }
    #map #map_map {
       background-color: var(--background-color);
    }
  </style>
  <div id="page_inner" class="flex a1000c-horizontal" ref="scroll_container" @wheelX="scrollX">
    <section ref="info" id="info" class="flex items-stretch min-h-screen max-h-screen bg-a100c-1 sm:pt-0 sm:pb-8"> <div class="content flex items-top overflow-x-auto">
        <div id="info_inner" class="bg-opacity-30 my-4 mx-5">
          <p v-if="$fetchState.pending" class="text-sm text-color">Loading...</p>
          <p v-else-if="$fetchState.error" class="text-sm text-color">Please wait ...</p>
          <div v-else>
            <info :data="this.data"></info>
          </div>
        </div>
      </div>
      <div class="nav flex items-center content-center justify-center">
        <nuxt-link :to="{ path: '/main', hash:'map'}" class="flex h-full w-full items-center justify-center text-white font-bold" id="link_to_map">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
        </nuxt-link>
      </div>
    </section>

    <section ref="map" id="map" class="flex min-h-screen max-h-screen bg-a100c-2">
      <div class="nav flex flex-col content-center">
        <nuxt-link :to="{ path: '/main', hash:'info'}" class="flex h-full self-center items-center justify-center text-white font-bold" id="link_to_info">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
        </nuxt-link>
      </div>


      <div class="content items-center justify-center">
        <div id="map_header" class="block">
          <p v-if="$fetchState.pending" class="text-sm text-color">Fetching places...</p>
          <p v-else-if="$fetchState.error" class="text-sm text-color">Can't fetch map data... :(</p>
          <div v-else>
            <p id="map_header_content" class="text-sm text-color">
              <nuxt-link :to="{ path: '/'}" class="text-color">Start</nuxt-link>
              —
              <nuxt-link :to="{ path: '/main', hash: 'info'}">{{ this.data.title }}</nuxt-link>

            </p>
          </div>
          <p>
            <button class="hidden" v-shortkey="['arrowup']" @shortkey="navigate_top()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 11.828l-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z"/></svg>
            </button>
            <button class="hidden" v-shortkey="['arrowleft']" @shortkey="navigate_left()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"/></svg>
            </button>
            <button class="hidden" v-shortkey="['arrowright']" @shortkey="navigate_right()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
            </button>
          </p>
        </div>
        <div id="map_inner" class="h-full bg-red-0 bg-opacity-0 my-1 mx-1">
          <div id="map_map" class="h-full w-full border-solid border-2 shadow z-40">
           <client-only>
                <l-map :zoom="this.mapzoom" :minZoom=2 :maxZoom=19 :center="this.mapcenter" ref="map" @ready="onMapReady" class=" bg-map">
                  <l-control-layers position="topright"></l-control-layers>
                  <l-layer-group
                      v-for="(layer,lindex) in this.data.layer"
                      :key="layer.id"
                      :name="layer.title"
                      :ref="layer.title"
                      layer-type="overlay"
                      @update:visible="onLayerVisible(layer.id,layer.title)"
                    >
                       <l-circle-marker
                        v-for="(place, index) in layer.places"
                        :key="'marker-' + index"
                        :lat-lng="[place.lat,place.lon]"
                        :radius="circle.radius"
                        :color="circle.color"
                        :stroke="circle.stroke"
                        :fillColor="layer.color"
                        :fillOpacity="circle.fillopacity"
                        @click="handleMapClick"
                        :id="index"
                        :options="{ title: 'marker-' + place.id, id: place.id, place_index: index, layer_index: lindex, layer_title: layer.title}"
                      >
                        <l-tooltip :content="place.title" :options="tooltip_options" />
                      </l-circle-marker>
                  </l-layer-group>
                  <div class="leaflet-bottom leaflet-left">
                    <div class="leaflet-control leaflet-control-layers">
                      <button class="" v-on:click="centerMap()"><svg width="9.8265mm" height="9.8265mm" version="1.1" viewBox="0 0 9.8265 9.8265" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-154.92 -71.428)"><rect x="154.92" y="71.428" width="9.8265" height="9.8265" fill="transparent"/><g transform="matrix(.90179 0 0 .90179 170.41 131.3)"><path d="m-13.24-60.949-1.6667 1.6667-0.33329-0.33329 1.3334-1.3334-1.3334-1.3334 0.33329-0.33306z"/><path d="m-10.208-60.949 1.6667-1.6667 0.33329 0.33329-1.3334 1.3334 1.3334 1.3334-0.33329 0.33306z"/><circle cx="-11.724" cy="-60.949" r=".75"/></g></g></svg></button>
                    </div>
                  </div>
               </l-map>
           </client-only>
          </div>
        </div>
      </div>
      <p v-if="$fetchState.pending" class="text-sm text-color">...</p>
      <p v-else-if="$fetchState.error" class="text-sm text-color">...</p>
      <div v-else id="modals_wrapper" class="absolute top-4 right-4 sm:absolute sm:top-4 sm:right-4" :class="{ 'is-active' : this.data.state }">
        <place-modals :layers="this.data.layer" :data="this.data" :map="this.mapobj"></place-modals>
      </div>

      <div class="nav flex flex-col  items-center content-center justify-center">
        <nuxt-link :to="{ path: '/main', hash:'list'}"  class="flex h-full self-center items-center justify-center text-white font-bold" id="link_to_list">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
        </nuxt-link>
      </div>
    </section>

    <section ref="list"  id="list" class="flex min-h-screen max-h-screen bg-a100c-3 sm:pt-0">
      <div class="nav flex items-center content-center justify-center">
        <nuxt-link :to="{ path: '/main', hash:'map'}" class="flex h-full w-full items-center justify-center text-white font-bold" id="link_from_list_to_map">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
        </nuxt-link>
      </div>
      <div id="list_content" class="content flex items-top overflow-x-auto pb-10">
          <div id="list_inner" class="bg-opacity-30 my-0 mx-0 mr-6 sm:my-4 sm:mx-5">
            <p v-if="$fetchState.pending">Fetching places...</p>
            <p v-else-if="$fetchState.error">Can't fetch map data... :(</p>
            <div v-else>
              <list :places="this.list_content" :layerindex="this.list_content_layer_index" :data="this.data" :map="this.mapobj"></list>
            </div>
        </div>
      </div>
    </section>

    <keys-navigation></keys-navigation>
  </div>
</div>
</template>

<script>
import axios from "axios";
import List from '~/components/List.vue';
import Info from '~/components/Info.vue';
import PlaceModals from '~/components/Place-modals.vue';
import KeysNavigation from '~/components/Keys-navigation.vue';

import config from '../nuxt.config'


export default {
  name: "App",
  transition: {
    name: "bounce",
    mode: "in-out", // default is out-in
    appear: true, // default is false
  },
  watch: {
    '$route.query': '$fetch'
  },
  mounted: function() {
    console.log("Mounted****")
    document.body.classList.remove('splash')
    document.body.classList.add('main')
    this.jumpToMap()
  },
  data() {
      return {
        mapobj: null,
        dataobj: {},
        data: {},
        places: [],
        places_with_relations: [],
        list_content: [],
        list_content_layer_title: '',
        list_content_layer_index: 0,
        data_url: '',
        // data_url is now predefined via nuxt.config.js
        default_data_url: config.defaultDataUrl,
        // mapcenter could be definied via this.data or calculated by the extent of all places
        mapcenter: [0,0],
        mapzoom: 10,
        mapbounds: [],
        tooltip_options: { permanent: false, direction: 'top', interactive: 'true' },
        custom_basemap: [],
        circle: {
          radius: 14,
          color: 'transparent',
          fillcolor: 'rgba(242, 71, 38, 1)',
          fillopacity: 0.95
        }
      }
  },
  async fetch() {
    if (this.$route.query.layer ) {
      this.custom_data_url = this.$route.query.layer
    } else if ( this.$store.getters["getlayerUrl"] ) {
      console.log('Get layer from store')
      this.custom_data_url= this.$store.getters["getlayerUrl"]
      console.log('Stored layerUrl: '+ this.$store.getters["getlayerUrl"])
    }
    console.log('Start to fetch...')
    if ( this.dataobj && this.dataobj.length > 0 ) {
      console.log('Data already fetched')
    }
    if ( this.custom_data_url ) {
      this.data_url = this.custom_data_url
    } else {
      this.data_url = this.default_data_url
    }
    // check local content
    var dataobj_temp = await this.$content(this.localDataUrl).fetch().catch((err) => {
      console.log('Error')
    });
    
    if(dataobj_temp.length > 0 ) {
      this.dataobj = dataobj_temp[0];
      console.log('Fetch LOCAL...')
      console.log(this.dataobj)
    } else {
      console.log('Fetch LOCAL ERROR...',this.dataobj.length)
      // get remote content
      if(this.dataobj.length == undefined ) {
        this.dataobj = await axios.get(this.data_url).then(response =>
          response.data
        )
        console.log('Fetch REMOTE... ')
        if ( this.$route.query.layer ) {
          console.log('fetch REMOTE URL by param ... ')
        } else {
          console.log('fetch REMOTE URL by config ... ')
        }
        console.log('Layer title: "'+this.dataobj.layer.title+'"')
      }
    }
      
    // check if its a map
    if ( this.dataobj.map ) {
      this.data = this.dataobj.map
      console.log("Data for a map ")
      console.log("Data for a map with " + this.data.layer.length + " accessible layers")
      this.data.layer.forEach ((layer, key) => {
        this.places.push(...layer.places);
        this.places_with_relations.push(...layer.places_with_relations);
      });
      console.log("Map with "+this.places.length+" places")

      // add state value to all places
      this.data.layer.forEach ((layer, lkey) => {
        for (let i = 0; i < layer.places.length; i++) {
            this.$set(layer.places[i], 'state', false)
        }
      })

    // or a layer
    } else {
      console.log("Data for a single layer")
      if (this.dataobj && this.dataobj.layer ) {
        this.data = this.dataobj.layer
        this.data.layer = []
        this.data.layer[0] = this.dataobj.layer

        if (this.data.mapcenter_lat && this.data.mapcenter_lon ) {
          this.mapcenter = [this.data.mapcenter_lat, this.data.mapcenter_lon]
          console.log("Mapcenter "+ this.mapcenter)
        }
        if (this.data.zoom ) {
          this.mapzoom = this.data.zoom
        }
        if (this.data.tooltip_display_mode == 'permanent' ) {
          this.tooltip_options = { permanent: true, direction: 'top', interactive: 'true' }
        }
        console.log("Data for a map with " + this.data.layer.length + " accessible layer")
        this.places = this.data.places
        this.places_with_relations = this.data.places_with_relations
        this.list_content = this.data.places
        console.log("Layer Map with "+this.places.length+" places and "+this.places_with_relations.length+" Relations")

        // add state value to all places
        for (let i = 0; i < this.data.places.length; i++) {
          if ( i=== 0) {
            this.$set(this.data.places[i], 'state', false)
          } else {
            this.$set(this.data.places[i], 'state', false)
          }
        }
      }
    }
    if ( ( this.dataX ) && ( this.data.background_color ) ) {
      // var m = document.getElementById("page_inner");
      // m.style.background = this.data.background_color;
      console.log("background_color")
      var sections = document.getElementsByTagName("section");
      var i;
      for (i = 0; i < sections.length; i++) {
        sections[i].style.background  = this.data.background_color;
      }
    }
    if ( (this.data) && (this.places) && (this.$refs.map) ) {
      console.log("afterFetch: fitBounds w/"+this.places.length)
      if ( this.places.length > 0 && this.$route.query.flyto !== 'true' ) {
        // don't use bremen as center for ever :)
        console.log("Mapcenter: "+this.mapcenter[0])
        console.log("Mapzoom: "+this.mapzoom)
        if ( this.mapcenter[0] == 0 ) {
          console.log("afterFetch: fitBounds w/"+this.places.length)
          this.mapbounds = this.places.map(m => { return [m.lat, m.lon] })
          this.$refs.map.mapObject.fitBounds(this.mapbounds)
        }
      } else {
        console.log("afterFetch: NO fitBounds w/"+this.places.length)
      }
      if ( this.mapzoom == 0 )  {
        this.mapzoom = this.$refs.map.mapObject.getBoundsZoom(this.places.map(m => { return [m.lat, m.lon] }))
        console.log("afterFetch: set Mapzoom to "+this.mapzoom)
      }
      if ( this.data.layer ) {
        console.log("Check for data.layer w/"+this.data.layer.length+ " layer(s)")
        this.drawCurves();
      }

      if ( ( this.data ) && ( this.data.basemap_url ) ) {
        this.custom_basemap = L.tileLayer(this.data.basemap_url, {attribution: this.data.basemap_attribution}).addTo(this.$refs.map.mapObject);
        this.$refs.map.mapObject.addControl(this.custom_basemap);
        // remove basemap control element
        const controlelements1 = document.getElementsByClassName('leaflet-top leaflet-right');
        var elements = controlelements1[0].getElementsByClassName('leaflet-control-layers');
        if ( controlelements1[0].length > 0 ) {
          controlelements1[0].removeChild(elements[0]);
        }
      }
    }
    this.$set(this.data, 'state', false)
    // TODO: For static hosting , the fetch hook is only called during page generation!!
  },
  methods: {
    onLayerReady(mapObject) {
      this.mapobj = mapObject;
      console.log("onLayerReady");
      console.log(this.mapobj)

    },
    onLayerVisible(id,title) {
      this.id = id;
      console.log("onLayerVisible");
      console.log(id + " "+ title)
    },
    onTileLayerVisible(basemap) {
      console.log("onTileLayerVisible");
      console.log(basemap)

    },
    onMapReady(mapObject) {
      this.$nextTick(() => {
        this.mapobj = mapObject;
        if ( (this.data) && (this.places) && (this.$refs.map) ) {
          console.log("Map operations")
          // this is too early for async fetching of the map data. so see fetch for this routine
          if ( this.places.length > 0 ) {
            // dont use bremen as center for ever :)
            console.log("Mapcenter: "+this.mapcenter[0])
            if ( this.mapcenter[0] == 0 ) {
              console.log("onMapReady: fitBounds w/"+this.places.length)
              this.mapbounds = this.places.map(m => { return [m.lat, m.lon] })
              this.$refs.map.mapObject.fitBounds(this.mapbounds)
              this.mapzoom = this.$refs.map.mapObject.getBoundsZoom(this.mapbounds)
              console.log("afterFetch: set Mapzoom to "+this.mapzoom)
            }
          } else {
            console.log("onMapReady: NO fitBounds w/"+this.places.length)
          }

          const controlelements = document.getElementsByClassName('leaflet-top leaflet-right');
          var elements = controlelements[0].getElementsByClassName('leaflet-control-layers');
          controlelements[0].removeChild(elements[0]);

          var openstreetmap_layer = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Openstreemap Contributors' })
          var simple_basemap_layer = L.tileLayer('https://tiles.3plusx.io/world_populated_places/lightpink/{z}/{x}/{y}.png', {attribution: ''}).addTo(this.$refs.map.mapObject);
          var simple_basemap_dark = L.tileLayer('https://tiles.3plusx.io/world_populated_places/lightyellow/{z}/{x}/{y}.png', {attribution: ''})
          /*
          var m = document.getElementById("map_map");
          m.classList.add("dark");
          */
          var baseMaps = {
              "Basemap": simple_basemap_layer,
              "Basemap (dark)": simple_basemap_dark,
              "OpenStreetMap": openstreetmap_layer
          };
          console.log(baseMaps)

          console.log(this.data.basemap_url)

          console.log(this.custom_basemap)

          if ( this.$refs.map.mapObject ) {
            L.control.layers(baseMaps).addTo(this.$refs.map.mapObject);

            console.log(this.mapobj)
            this.mapobj.on('baselayerchange', function(e) {
              console.log('Changed to ' + e.name);
              var m = document.getElementById("map_map");
              if ( ( e.name =='Basemap (dark)') ) {
                m.classList.add("dark");
              } else {
                m.classList.remove("dark");
              }
            });
          }
          if ( this.data.layer ) {
            console.log("Check for data.layer w/"+this.data.layer.length+ " layer(s)")
            // this.drawCurves();
          }

        }
      })
    },
    drawCurves() {
        var curves_layer = L.layerGroup().addTo(this.mapobj);
            this.data.layer.forEach ((layer, lkey) => {
              if ( layer.places_with_relations ) {
                layer.places_with_relations.forEach ((place, key) => {

                  // console.log("places_with_relations: "+place.relations.length);

                  place.relations.forEach ((relation, kkey) => {

                    // console.log("Relation_from ID:  "+relation.from.id);
                    var point1 = [Number(relation.from.lat), Number(relation.from.lon)];
                    var point2 = [Number(relation.to.lat), Number(relation.to.lon)];
                    // console.log(point1);
                    // console.log(point2);


                    var color = "hsl(" + Math.random() * 360 + ", 100%, 85%)";
                    // var color = clustercolor;
                    // if ( layer.color ) {
                    //  color = layer.color
                    // }
                    var pathOptions = {
                            color: color,
                            weight: 5,
                            opacity: 0.75,
                            className: 'curve_normal curve_',
                            animate: false
                    }
                    var controlpoint = this.calcControlPoint(point1,point2,5)

                    var curvedPath = L.curve(
                      [
                        'M', point1,
                        'Q', controlpoint,
                           point2
                      ], pathOptions).addTo(curves_layer)

                    // draw endpoint, if it resides on an different layer
                      var iconSettings = {
                          mapIconUrl: "<svg height='{radius}' width='{radius}' xmlns='http://www.w3.org/2000/svg'><circle cx='15' cy='15' r='15' fill='{color}' fill-opacity='{opacity}' shape-rendering='geometricPrecision'></circle></svg>",
                          color: color,
                          opacity: 0.7,
                          radius: 30
                      };
                      var divIcon = L.divIcon({
                        className: "leaflet-data-outside-marker",
                        html: L.Util.template(iconSettings.mapIconUrl, iconSettings), //.replace('#','%23'),
                        iconAnchor  : [15, 15],
                        iconSize    : [30, 30],
                        popupAnchor : [0, -28]
                      });
                      if ( relation.from.layer_id != relation.to.layer_id) {
                        var endpoint2_marker = L.marker(point2, {icon: divIcon}).bindTooltip(relation.to.title, {
                          permanent: 'true',
                          direction: 'top'
                        }).addTo(curves_layer);

                      }


                  });
                });
              }
            });

    },
    calcControlPoint(point1,point2,distance_in_kms) {
      var boost = 2.9;
      var d = 2;
      // if transcontinental
      if ( distance_in_kms > 5000 ) {
        d = 7
      // if continental
      } else if ( distance_in_kms > 1000 ) {
        d = 7
      // if regional
      } else if ( distance_in_kms > 100 ) {
        d = 7
      // if local
      } else if ( distance_in_kms > 10 ) {
        d = 10
      // if close
      } else if ( distance_in_kms > 5 ) {
        d = 40
      } else if ( distance_in_kms > 1 ) {
        d = 120
      } else if ( distance_in_kms <= 1 ) {
        d = 1600 // sic!
      } else if ( distance_in_kms < 0.1 ) {
        // none;
      }


      var offsetX = point2[1] - point1[1],
      offsetY = point2[0] - point1[0];
      var r = Math.sqrt( Math.pow(offsetX, 0) + Math.pow(offsetY, 2) ),
                theta = Math.atan2(offsetY, offsetX);
      var thetaOffset = (3.14/boost);
      var r2 = (r/d)/(Math.cos(thetaOffset)),
                theta2 = theta + thetaOffset;
      var midpointX = (r2 * Math.cos(theta2)) + point1[1],
                midpointY = (r2 * Math.sin(theta2)) + point1[0];
      return [midpointY, midpointX];
    },
    centerMap() {
      console.log("centerMap")
      if ( this.mapcenter[0] == 0 ) {
        this.$refs.map.mapObject.flyToBounds(this.mapbounds,this.mapzoom);
      } else {
        this.$refs.map.mapObject.flyTo(this.mapcenter,this.mapzoom);
      }
    },
    recenterMap(lat,lon) {
      // this.$refs.map.mapObject.panTo(lat,lon);
      this.$nextTick(() => {
        console.log("recenter map to "+ lat +"/"+lon);
        this.$router.push({ name: 'main', hash: '#map' });
        this.$refs.map.mapObject.flyTo([lat,lon],16);
      })
    },
    jumpToMap() {
      console.log("jumpToMap " + this.$route.hash )
      if ( ( this.$route.hash === '#list' ) ||  ( this.$route.hash === '#info' ) )  {
        this.$router.push({ name: 'main', hash: this.$route.hash })
        location.hash = this.$route.hash;
      } else {
        this.$router.push({ name: 'main', hash: '#map' })
        location.hash = '#map';
      }
    },
    scrollX(e) {
      console.log('scrollx: '+e.deltaY)
      var section = this.$route.hash.replace('#', '')
      console.log( "at section "+section)
      var top = this.$refs.list.getBoundingClientRect().top
      console.log( "pixel from top "+top)
      var top = this.$refs.list.getBoundingClientRect().top
      console.log( "pixel from top "+top)
      console.log( "pixel from ...")
      console.log(this.$refs[section].scrollTop)
      this.$nextTick(()=>{
        console.log( "pixel (w/nextTick) from ...")
        console.log(this.$refs[section].scrollTop)
      })
      console.log( "--------");

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
      console.log(this.data);

      if ( e.target.options.title ) {

        // set all state to false
        for (let i = 0; i < this.places.length; i++) {
            this.$set(this.places[i], 'state', false)
        }
        var clicked_place = this.places.find( place => place.id === e.target.options.id )
        var clicked_place_index = this.places.findIndex( place => place.id === e.target.options.id )

        console.log("Clicked place: "+clicked_place.title)
        console.log("Clicked place ID: "+clicked_place.id)
        console.log("Clicked place index: "+e.target.options.place_index)
        console.log("Clicked layer title: "+e.target.options.layer_title)
        console.log("Clicked layer index: "+e.target.options.layer_index)
        // show modal
        this.places[clicked_place_index].state = !this.places[clicked_place_index].state;
        this.data.state = true;

        this.data.layer[parseInt(e.target.options.layer_index)].places[parseInt(e.target.options.place_index)].state = !this.data.layer[parseInt(e.target.options.layer_index)].places[parseInt(e.target.options.place_index)].state.state;
        // if in map mode: show place content in the list view!
        this.list_content = []
        this.list_content.push(this.places[clicked_place_index])
        this.list_content_layer_title = e.target.options.layer_title
        this.list_content_layer_index = parseInt(e.target.options.layer_index)
        console.log("Clicked layer index: "+this.list_content_layer_index)


      }
    }
  },
  computed: {

  }
};
</script>
