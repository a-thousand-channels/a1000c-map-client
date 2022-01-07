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


   .bg-a100c-1 {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.15) 0%, rgba(255,117,0,0.15) 50%, rgba(255,0,35,0.15) 100%);
   }
   .bg-a100c-1-hover {
      background: rgb(255,0,249);
      background: linear-gradient(90deg, rgba(255,0,249,0.5) 0%, rgba(255,117,0,0.5) 50%, rgba(255,0,35,0.5) 100%);
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
  <div class="relative flex overflow-x-auto items-top justify-center min-h-screen bg-pink-100 bg-a100c-1-splash sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-12">
      <div class="flex justify-center pt-8 mt-8 sm:pt-0">
        <img src="~/assets/a-thousand-channels--logo-variant-a--short.png" title="A thousand channels">
      </div>
      <div class="mt-4 overflow-hidden bg-white shadow sm:rounded-lg  md:px-4 lg:px-8 p-2">
        <h2 class="text-3xl beta">
          Welcome to an early prototype of our web map.
        </h2>
        <p class="mt-3 text-gray-600">
          We are developing a web map, that can easily be generated and published on the web. You will not need server side technologies for that, just a simple webspace. This prototype is work in progress.
        </p>
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          <nuxt-link :to="{ path: '/main', hash:'map', query: { layer: this.custom_data_url }}" class="bg-red-400 bg-a100c-1 text-white text-center px-4 py-2 rounded-lg">Check it out</nuxt-link>
        </p>
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          Please feel free to try out. We would very happy about feedback and contributions.
        </p>
        <p class="mt-4 pt-4 text-gray-800">
          Give us a shout if you have questions or need help. Please visit the <a href="https://github.com/a-thousand-channels/a1000c-map-client" style="text-decoration: none; background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%); background-repeat: no-repeat; background-size: 100% 0.4em; background-position: 0 100%">Github repository for this project</a>.
        </p>
      </div>
      <div class="flex justify-center p-4 m-2 space-x-2">
        <a href="https://www.a-thousand-channels.xyz/" target="_blank" style="text-decoration: none; background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%); background-repeat: no-repeat; background-size: 100% 0.4em; background-position: 0 100%">
          A Thousand Channels – a queer 🏳️‍🌈 mapping 🗺 platform 🎁
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
 data() {
    return {
      custom_data_url: ''
    }
  },
  mounted: function() {
    if ( (this.$route) && (this.$route.query.layer) ) {
      console.log(this.$route.query.layer)
      this.custom_data_url = this.$route.query.layer
    }
  }
}
</script>