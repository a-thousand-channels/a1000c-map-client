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
    button.text-link,
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
    #map {
      align-items: stretch;
    }
    #map > .content {
    flex-shrink: 1;
    flex-basis: 95%;
    }
    #map #map_inner {
      width: 100%;
      height: 90%;
    }
    #info #info_inner img {
      max-height: 45vh;
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
   .bg-red-100 {
      background-color: transparent;
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
  <div id="page_inner" class="flex a1000c-horizontal" ref="scroll_container" @wheelX="scrollX">
    <section ref="info" id="info" class="flex items-stretch min-h-screen max-h-screen bg-a100c-1 sm:pt-0 sm:pb-8"> <div class="content flex items-top overflow-x-auto">
        <div id="info_inner" class="bg-red-100 bg-opacity-30 my-4 mx-5">
          <p v-if="$fetchState.pending">Loading...</p>
          <p v-else-if="$fetchState.error">An error occurred :(</p>
          <div v-else>
            <info :data="this.data"></info>
          </div>
        </div>
      </div>
      <div class="nav flex items-center content-center justify-center">
        <nuxt-link :to="{ path: '/main', hash:'map'}" class="flex h-full w-full items-center justify-center text-white font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
        </nuxt-link>
      </div>
    </section>

    <section ref="map" id="map" class="flex min-h-screen max-h-screen bg-a100c-2">
      <div class="nav flex flex-col content-center">
        <nuxt-link :to="{ path: '/main', hash:'info'}" class="flex h-full self-center items-center justify-center text-white font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
        </nuxt-link>
      </div>


      <div class="content items-center justify-center">
        <div id="map_header" class="block">
          <p v-if="$fetchState.pending" class="text-sm text-red-300">Fetching places...</p>
          <p v-else-if="$fetchState.error" class="text-sm text-red-300">An error occurred :(</p>
          <div v-else>
            <p id="map_header_content" class="text-sm text-red-300">
              <nuxt-link :to="{ path: '/main', hash: 'info'}">{{ this.data.title }}</nuxt-link> //
              <button @click="$fetch" >Reload view</button> //
              <nuxt-link :to="{ path: '/'}" class="text-red-300">Home</nuxt-link>
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
        <div id="map_inner" class="h-full bg-red-100 bg-opacity-10 my-1 mx-1">
          <div id="map_map" class="h-full w-full border-solid border-2 border-white shadow z-40">
           <client-only>
                <l-map :zoom=4 :minZoom=2 :center="[55.9464418,8.1277591]" ref="map" @ready="onMapReady">
                  <l-control-layers position="topright"></l-control-layers>



                  <l-layer-group
                      name="Maps"
                      layer-type="overlay"
                    >
                  <l-layer-group
                      v-for="layer in this.data.layer"
                      :key="layer.id"
                      :name="layer.title"
                      :ref="layer.title"
                      layer-type="overlay"
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
                        :options="{ title: 'marker-' + place.id, id: place.id}"
                      >
                        <l-tooltip :content="place.title" :options="{ permanent: 'true', direction: 'top' }" />
                      </l-circle-marker>
                  </l-layer-group>
                  </l-layer-group>
                   <l-tile-layer
                        url="https://tiles.3plusx.io/world/dark/{z}/{x}/{y}.png"
                        name="Simple Basemap"
                        layer-type="base">
                    </l-tile-layer>
                    <l-tile-layer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        name="Openstreetmap"
                        layer-type="base">
                    </l-tile-layer>
               </l-map>
           </client-only>
          </div>
        </div>
      </div>
      <p v-if="$fetchState.pending" class="text-sm text-red-300">...</p>
      <p v-else-if="$fetchState.error" class="text-sm text-red-300">An error occurred :(</p>
      <div v-else class="sm:absolute sm:top-4 sm:right-4">
        <place-modals :data="this.data"></place-modals>
      </div>

      <div class="nav flex flex-col  items-center content-center justify-center">
        <nuxt-link :to="{ path: '/main', hash:'list'}" class="flex h-full self-center items-center justify-center text-white font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"/></svg>
        </nuxt-link>
      </div>
    </section>

    <section ref="list"  id="list" class="flex min-h-screen max-h-screen bg-a100c-3 sm:pt-0">
      <div class="nav flex items-center content-center justify-center">
        <nuxt-link :to="{ path: '/main', hash:'map'}" class="flex h-full w-full items-center justify-center text-white font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
        </nuxt-link>
      </div>
      <div class="content flex items-top overflow-x-auto pb-10">
          <div id="list_inner" class="bg-red-100 bg-opacity-30 my-0 mx-0 sm:my-4 sm:mx-5">
            <p v-if="$fetchState.pending">Loading...</p>
            <p v-else-if="$fetchState.error">An error occurred :(</p>
            <div v-else>
              <list :places="this.list_content" :map="this.mapobj"></list>
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
    if (this.$route.query.layer ) {
      console.log(this.$route.query);
      console.log(this.$route.query.layer)
      this.custom_data_url = this.$route.query.layer
    }
    this.jumpToMap()
  },
  data() {
      return {
        mapobj: null,
        dataobj: {},
        data: {},
        list_content: [],
        tooltip: {
        },
        data_url: '',
        custom_data_url1: 'https://orte.link/public/maps/queer-places-in-hamburg/layers/nachtbar.json',
        custom_data_url2: 'https://orte.link/public/maps/from-gay-to-queer/layers/thomas.json',
        custom_data_url4: 'https://orte.link/public/maps/queer-places-in-hamburg/layers/nachtbar.json',
        custom_data_url5: 'https://orte.link/public/maps/from-gay-to-queer/layers/manu.json',
        custom_data_url: 'https://staging.orte.link/public/maps/from-gay-to-queer.json',

        circle: {
          radius: 14,
          color: 'transparent',
          fillcolor: 'rgba(242, 71, 38, 1)',
          fillopacity: 0.85
        }
      }
  },
  async fetch() {
    if (this.$route.query.layer ) {
      this.custom_data_url = this.$route.query.layer
    }
    console.log('fetch...')
    console.log(this.dataobj)
    if ( this.dataobj ) {
      console.log('data already fetched')
    }
    if ( this.custom_data_url ) {
      this.data_url = this.custom_data_url
    } else {
      this.data_url = this.default_data_url
    }
    console.log(this.data_url)
    // if ( this.$route.query.layer ) {
    //  this.data_url = this.$route.query.layer
    // }
    this.dataobj = await axios.get(this.data_url).then(response =>
      response.data
    )
    console.log('fetch... add state value')

    // check if its a map
    if ( this.dataobj.map ) {
      this.data = this.dataobj.map
      console.log("Data for a map ")
      console.log("Data for a map with " + this.data.layer.length + " accessible layers")
      this.data.places = []
      this.data.places_with_relations = []
      this.data.layer.forEach ((layer, key) => {
        this.data.places.push(...layer.places);
        this.data.places_with_relations.push(...layer.places_with_relations);
      });
      console.log("Map with "+this.data.places.length+" places")

      // TODO add state value to all places
      // add state value to all places
      for (let i = 0; i < this.data.places.length; i++) {
        if ( i=== 0) {
          // this.$set(this.data.places[i], 'state', true)
          this.$set(this.data.places[i], 'state', false)
        } else {
          this.$set(this.data.places[i], 'state', false)
        }
      }

    // or a layer
    } else {
      console.log("Data for a single layer")
      this.data = this.dataobj.layer
      this.data.layer[0] = this.dataobj.layer
      this.list_content = this.data.places
      console.log("Data for a map with " + this.data.layer.length + " accessible layers")

      // add state value to all places
      for (let i = 0; i < this.data.places.length; i++) {
        if ( i=== 0) {
          // this.$set(this.data.places[i], 'state', true)
          this.$set(this.data.places[i], 'state', false)
        } else {
          this.$set(this.data.places[i], 'state', false)
        }
      }
    }


    // exposes $fetchState with .pending and .error
    // TODO: For static hosting , the fetch hook is only called during page generation!!
  },
  methods: {
    onMapReady(mapObject) {
      // this.$nextTick(() => {
        this.mapobj = mapObject;
        if ( (this.data) && (this.data.places) && (this.$refs.map) ) {
          console.log("onMapReady: fitBounds")
          this.$refs.map.mapObject.fitBounds(this.data.places.map(m => { return [m.lat, m.lon] }))



          var curves_layer = L.layerGroup().addTo(mapObject);

          if ( this.data.places_with_relations ) {

            this.data.places_with_relations.forEach ((place, key) => {

              console.log("places_with_relations");
              console.log(key);
              console.log(place.relations);
              console.log(place.relations.length);
              console.log(place.relations);

              place.relations.forEach ((relation, kkey) => {

                console.log(relation.from.lat);
                console.log(relation.from.lon);
                console.log("Relation_from ID:  "+relation.from.id);
                var point1 = [Number(relation.from.lat), Number(relation.from.lon)];
                var point2 = [Number(relation.to.lat), Number(relation.to.lon)];
                console.log(point1);
                console.log(point2);


                var color = "hsl(" + Math.random() * 360 + ", 100%, 85%)";
                // var color = clustercolor;
                var pathOptions = {
                        color: color,
                        weight: 5,
                        opacity: 1,
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

        }
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
      } else {
        this.$router.push({ name: 'main', hash: '#map' })
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

      if ( e.target.options.title ) {

        // set all state to false
        for (let i = 0; i < this.data.places.length; i++) {
            this.$set(this.data.places[i], 'state', false)
        }
        var clicked_place = this.data.places.find( place => place.id === e.target.options.id )
        var clicked_place_index = this.data.places.findIndex( place => place.id === e.target.options.id )
        console.log("Clicked place: "+clicked_place.title)
        console.log("Clicked place ID: "+clicked_place.id)
        // show modal
        this.data.places[clicked_place_index].state = !this.data.places[clicked_place_index].state;
        // if in map mode: show place content in the list view!
        this.list_content = []
        this.list_content.push(this.data.places[clicked_place_index])

      }
    }
  },
  computed: {

  }
};
</script>
