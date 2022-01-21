<style>


    /* work-sans-regular - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('~/assets/fonts/worksans/work-sans-v13-latin-ext_latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('~/assets/fonts/worksans/work-sans-v13-latin-ext_latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-600 - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('~/assets/fonts/worksans/work-sans-v13-latin-ext_latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('~/assets/fonts/worksans/work-sans-v13-latin-ext_latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-800 - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 800;
  src: local(''),
       url('~/assets/fonts/worksans/work-sans-v13-latin-ext_latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('~/assets/fonts/worksans/work-sans-v13-latin-ext_latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-italic - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 400;
  src: local(''),
       url('~/assets/fonts/worksans/work-sans-v13-latin-ext_latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('~/assets/fonts/worksans/work-sans-v13-latin-ext_latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-600italic - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 600;
  src: local(''),
       url('~/assets/fonts/worksans/work-sans-v13-latin-ext_latin-600italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('~/assets/fonts/worksans/work-sans-v13-latin-ext_latin-600italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* work-sans-800italic - latin-ext_latin */
@font-face {
  font-family: 'Work Sans';
  font-style: italic;
  font-weight: 800;
  src: local(''),
       url('~/assets/fonts/worksans/work-sans-v13-latin-ext_latin-800italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('~/assets/fonts/worksans/work-sans-v13-latin-ext_latin-800italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
   .bg-white {
     background:  rgb(255,255,255,1);
   }
   .bg-a100c-1-splash {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.15) 0%, rgba(255,117,0,0.15) 50%, rgba(255,0,35,0.15) 100%);
      background-image: var(--background-image);
      background-size: cover;
   }
   .bg-a100c-1-hover, .bg-a100c-1-button {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.5) 0%, rgba(255,117,0,0.5) 50%, rgba(255,0,35,0.5) 100%);
   }
   .bg-a100c-1-button {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.75) 0%, rgba(255,117,0,0.75) 50%, rgba(255,0,35,0.76) 100%);
   }
   .bg-a100c-2 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,117,0,0.15) 0%, rgba(255,0,35,0.15) 50%, rgba(255,0,249,0.15) 100% );
   }
   .bg-a100c-3 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,35,0.15) 0%, rgba(255,0,249,0.15) 50%, rgba(255,117,0,0.15) 100% );
   }
</style>

<template>
<div id="page">
  <style>
  :root {
    --background-color: {{ data.background_color }};
    --background-image: url('{{ data.backgroundimage_link }}');
  }
  </style>
  <div class="relative flex overflow-x-auto items-top justify-center min-h-screen bg-a100c-1-splash sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto px-6 py-3 lg:px-12 lg:py-6">

      <div class="mt-4 overflow-hidden bg-white shadow sm:rounded-lg px-8 py-4 md:px-8 lg:px-8">
        <h2 class="text-3xl beta">
          <span v-if="this.data.title">{{ this.data.title }}</span>
          <span v-else>Welcome to the prototype of our web map</span>
        </h2>
        <p class="mt-3 text-gray-600">
          <span v-if="this.data.subtitle">{{ this.data.subtitle }}</span>
          <span v-else>We are developing a web map, that can easily be generated and published on the web. You will not need server side technologies for that, just a simple webspace. This prototype is work in progress.</span>
        </p>
        <p class="mt-4 pt-4 text-gray-800">
          <nuxt-link :to="{ path: '/main', hash:'map', query: { layer: this.custom_data_url }}" class="bg-red-400 bg-a100c-1-button text-white text-center px-4 py-2 rounded-lg">Check it out</nuxt-link>
        </p>
        <p class="mt-4 pt-4 text-gray-800">
          <span v-if="this.data.tease">{{ this.data.tease }}</span>
          <span v-else></span>
        </p>
      </div>
      <div class="mt-4 overflow-hidden bg-white shadow sm:rounded-lg px-8 py-4 md:px-8 lg:px-8">
        <p class="mt-3 text-gray-600">
          This map is provided by A thousand channels
        <p class="mt-3 text-gray-600">
          Give us a shout if you have questions, need help or want to support us. Please visit our <a href="https://github.com/a-thousand-channels/a1000c-map-client" style="text-decoration: none; background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%); background-repeat: no-repeat; background-size: 100% 0.4em; background-position: 0 100%">Website</a>.
          We always are very happy about feedback and contributions :)
        </p>
        <p class="mt-3">
          <a href="https://www.a-thousand-channels.xyz/" target="_blank" style="text-decoration: none; background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%); background-repeat: no-repeat; background-size: 100% 0.4em; background-position: 0 100%">
            A Thousand Channels – a queer 🏳️‍🌈 mapping 🗺 platform 🎁
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

import config from '../nuxt.config'

export default {
 data() {
    return {
        dataobj: {},
        data: {},
        places: [],
        places_with_relations: [],
      custom_data_url: '',
      data_url: '',
      // data_url is now predefined via nuxt.config.js
      default_data_url: config.defaultDataUrl,
    }
  },
  watch: {
    '$route.query': '$fetch'
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
      // does not work (yet)
      // this.$router.push('/')
      this.data_url = this.default_data_url
    }
    // check local content
    // var dataobj_temp = await this.$content(this.localDataUrl).fetch();
    // this.dataobj = dataobj_temp[0];

    console.log('fetch LOCAL...')
    console.log(this.dataobj)
    // if( this.dataobj.length == 0 ) {
      this.dataobj = await axios.get(this.data_url).then(response =>
        response.data
      )
      console.log('fetch REMOTE... ')
      console.log(this.dataobj)
    // }

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
          console.log("mapcenter "+ this.mapcenter)
        }
        if (this.data.zoom ) {
          this.mapzoom = this.data.zoom
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

    if ( (this.data) && (this.places) && (this.$refs.map) ) {
      if ( this.places.length > 0 ) {
        // console.log("afterFetch: fitBounds w/"+this.places.length)
        // disabled, since counters the flyto feature
        // this.$refs.map.mapObject.fitBounds(this.places.map(m => { return [m.lat, m.lon] }))
      } else {
        console.log("afterFetch: NO fitBounds w/"+this.places.length)
      }
      if ( this.data.layer ) {
        console.log("Check for data.layer w/"+this.data.layer.length+ " layer(s)")
        this.drawCurves();
      }
    }
    this.$set(this.data, 'state', false)
    // TODO: For static hosting , the fetch hook is only called during page generation!!
  },
  mounted: function() {
    if ( (this.$route) && (this.$route.query.layer) ) {
      console.log(this.$route.query.layer)
      this.custom_data_url = this.$route.query.layer
    }
  }
}
</script>