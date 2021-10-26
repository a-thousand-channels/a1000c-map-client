<style>
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
  <div class="relative flex items-top justify-center min-h-screen bg-pink-100 bg-a100c-1 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-12">
      <div class="flex justify-center pt-8 sm:pt-0">
        <img src="a-thousand-channels--logo-variant-a--short.png" title="A thousand channels">
      </div>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Welcome to an early prototype of our web map.
        </h2>
        <p class="mt-3 text-gray-600">
          We are developing a static web map, that can easily be generated and published on the web. You will not need server side technologies for that, just a simple webspace. This prototype is work in progress.
        </p>
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          Please feel free to try out. We would very happy about feedback and contributions.
        </p>
        <p class="mt-4 pt-4 text-gray-800">
          Give us a shout if you have questions or need help. Please visit the <a href="https://github.com/a-thousand-channels/a1000c-map-client" style="text-decoration: none; background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%); background-repeat: no-repeat; background-size: 100% 0.4em; background-position: 0 100%">Github repository for this project</a>.
        </p>
      </div>
      <div class="flex justify-center pt-4 space-x-2">
        <a href="https://www.a-thousand-channels.xyz/" target="_blank" style="text-decoration: none; background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%); background-repeat: no-repeat; background-size: 100% 0.4em; background-position: 0 100%">
          A Thousand Channels – a queer 🏳️‍🌈 mapping 🗺 platform 🎁
        </a>
      </div>
    </div>
  </div>
  <div class="relative flex items-top justify-center min-h-screen bg-pink-100 bg-a100c-2 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-12">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          MAP
        </h2>

      </div>
      <div class="flex justify-center pt-4 space-x-2">
        <a href="https://www.a-thousand-channels.xyz/" target="_blank" style="text-decoration: none; background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%); background-repeat: no-repeat; background-size: 100% 0.4em; background-position: 0 100%">
          A Thousand Channels – a queer 🏳️‍🌈 mapping 🗺 platform 🎁
        </a>
      </div>
    </div>
  </div>
  <div class="relative flex items-top justify-center min-h-screen bg-pink-100 bg-a100c-3 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-12">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          LIST (of all places)
        </h2>

      </div>
      <div class="flex justify-center pt-4 space-x-2">
        <a href="https://www.a-thousand-channels.xyz/" target="_blank" style="text-decoration: none; background-image: linear-gradient(120deg, #fde68a 0, #fde68a 100%); background-repeat: no-repeat; background-size: 100% 0.4em; background-position: 0 100%">
          A Thousand Channels – a queer 🏳️‍🌈 mapping 🗺 platform 🎁
        </a>
      </div>
    </div>
  </div>
</div>
</template>
