<style>

    body.splash {
      scroll-behavior: smooth;
      overflow-y: scroll;
      overflow-x: hidden;
    }
   .bg-white {
      background-color: rgba(255,255,255,0.8);
   }
   .bg-a100c-1-splash {
       background: rgb(111,80,80);
      background: linear-gradient(90deg, rgba(111,80,80,0.5) 0%, rgba(240,235,227,0.5) 48%, rgba(146,153,101,0.5) 100%);
    }
    .bg-a100c-1-splash-image {
      background-image: var(--background-image);
      background-size: cover;
   }
   .bg-a100c-1-hover {
      background: rgb(111,80,80);
      background: linear-gradient(90deg, rgba(111,80,80,1) 0%, rgba(223,214,185,1) 48%, rgba(146,153,101,1) 100%);
   }
   .bg-a100c-1-button {
      background: rgb(111,80,80);
      background: linear-gradient(90deg, rgba(111,80,80,1) 0%, rgba(223,214,185,1) 48%, rgba(146,153,101,1) 100%);
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
   .text-color {
      color: #373030
   }

</style>

<template>
<div id="page">
  <style v-if="this.data.backgroundimage_link && this.data.background_color">
    :root {
      --background-color: {{ this.data.background_color ?  this.data.background_color : '' }};
      --background-image: url('{{ this.data.backgroundimage_link ? this.data.backgroundimage_link : '' }}');
    }
      .bg-a100c-1-splash {
        background-image: var(--background-image);
        background-color: var(--background-color);
        background-size: cover;
     }
     .bg-a100c-1-button {
        background: none;
        background-color: rgba(242, 71, 38, 1);
     }
  </style>
  <style v-else-if="!this.data.backgroundimage_link && this.data.background_color">
    :root {
      --background-color: {{ this.data.background_color ?  this.data.background_color : '' }};
    }
     .bg-a100c-1-splash {
        background: var(--background-color);
        background-color: none;
        background-size: cover;
     }
     .bg-a100c-1-button {
        background: none;
        background-color: rgba(242, 71, 38, 1);
     }
      #map #map_map {
         background-color: var(--background-color);
      }
  </style>

  <div class="flex items-top justify-center min-h-screen bg-a100c-1-splash sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto px-6 py-3 lg:px-12 lg:py-6">

      <div class="bg-white shadow sm:rounded-lg mt-4 px-8 py-4 md:px-8 lg:px-8">
        <div class="lg:px-0" v-if="data.image_link">
          <img v-bind:src="data.image_link" :alt="data.title" class="mx-auto max-w-full sm:max-w-ws max-h-[34rem]">
        </div>
        <h2 class="text-4xl mt-4">
          <span v-if="this.data.title">{{ this.data.title }}</span>
          <span v-else>Welcome to the prototype of our web map</span>
        </h2>
        <p class="mt-3 text-gray-600">
          <span v-if="this.data.subtitle">{{ this.data.subtitle }}</span>
          <span v-else>We are developing a web map, that can easily be generated and published on the web. You will not need server side technologies for that, just a simple webspace. This prototype is work in progress.</span>
        </p>
        <p class="mt-4 pt-4 text-gray-800">
          <nuxt-link :to="{ path: '/main', hash:'map', query: { layer: this.custom_data_url }}" class="bg-red-400 bg-a100c-1-button text-white text-center px-4 py-2 rounded-lg" id="jump">Check it out</nuxt-link>
        </p>
        <p class="mt-4 pt-4 text-gray-800">
          <span v-if="this.data.teaser" v-html="this.data.teaser"></span>
          <span v-else></span>
        </p>
      </div>
      <div class="mt-4 bg-white text-small shadow sm:rounded-lg px-8 py-4 md:px-8 lg:px-8">
        <p class="mt-3 text-gray-600">
          This demo map is provided by A thousand channels
        <p class="mt-3 text-gray-600">
          Give us a shout if you have questions, need help or want to support us. Please visit our <a href="https://www.a-thousand-channels.xyz/" style="text-decoration: none; background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%); background-repeat: no-repeat; background-size: 100% 0.4em; background-position: 0 100%">Website</a>.
          We always are very happy about feedback and contributions :)
        </p>
        <p class="mt-3">
          <a href="https://www.a-thousand-channels.xyz/" target="_blank" style="text-decoration: none; background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%); background-repeat: no-repeat; background-size: 100% 0.4em; background-position: 0 100%">
            A Thousand Channels – a queer 🏳️‍🌈 mapping 🌎 platform 🎁
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
      title: 'A 1000 Channels map prototype',
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
  head() {
    return {
      title: this.data.title || this.title,
      meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'title', name: 'title', content: this.data.title || this.title },
            { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: this.data.title || this.title },
            { hid: 'og:site_name', name: 'og:site_name', content: this.data.title || this.title },
            { hid: 'og:title', name: 'og:title', content: this.data.title || this.title },
            { hid: 'description', name: 'description', content: this.data.subtitle || 'This is the demo version of a web map, that can easily be generated and published on the web.' },
            { hid: 'og:description', name: 'og:description', content: this.data.subtitle ||  'This is the demo version of a web map, that can easily be generated and published on the web.' },
            { name: 'og:image', content: this.data.image_link || 'https://a-thousand-channels.github.io/a1000c-map-client/a-thousand-channels--logo-variant-a--short.png'
            },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'theme-color', content: '#ffffff' },
            { name: 'msapplication-TileColor', content: '#ffffff' }
      ],
      link: [
        { hid: 'icon', rel: 'icon', type: 'image/x-icon', href: this.data.favicon_link || '/favicon.ico' },
        { hid: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '120x120', href: this.data.favicon_link || '/apple-touch-icon.png' },
        { hid: 'icon-32', rel: 'icon', type: 'image/png', sizes: "32x32", href: this.data.favicon_link || '/favicon-32x32.png' },
        { hid: 'icon-16', rel: 'icon', type: 'image/png', sizes: "16x16", href: this.data.favicon_link ||  '/favicon-16x16.png' }
      ]

    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  mounted: function() {
    document.body.classList.remove('main')
    document.body.classList.add('splash')
    console.log("Mounted****")
  },
  async fetch() {
    if (this.$route.query.layer ) {
      this.custom_data_url = this.$route.query.layer
      this.$store.commit("setlayerUrl", this.$route.query.layer)
    } else if ( this.$store.getters["getlayerUrl"] ) {
      this.custom_data_url= this.$store.getters["getlayerUrl"]
    }
    console.log('Start to fetch ...')
    console.log(this.dataobj )
    if ( this.dataobj && this.dataobj.length > 0) {
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
      console.log('Fetch LOCAL ...')
      console.log(this.dataobj)

    } else {
      console.log('Fetch LOCAL unvailable ...')
      // get remote content
      if(this.dataobj.length == undefined ) {
        this.dataobj = await axios.get(this.data_url).then(response =>
          response.data
        )
        console.log('fetch REMOTE... ')
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
        this.$refs.map.mapObject.fitBounds(this.places.map(m => { return [m.lat, m.lon] }))
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
  }
}
</script>