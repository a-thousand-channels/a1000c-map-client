<style>
.places-list {
  display: block;
   margin-top: -6px;
}

.modal {
  display: block;
  transition: all 1s ease-out;
  opacity: 0;
  height: 0;
  width: 0;
  min-width: none;
  overflow: hidden;
}
.modal.is-active {
  display: block;
  transition: all 0.6s ease-in;
  opacity: 1;
  height: auto;
  width: auto;
  min-width: none;
}


.modal-content {
  min-width: 15em;
}


</style>

<template>
  <div class="places-list sm:relative z-50">
    <div v-for='(layer,lindex) in layers' class="">
      <div v-for='(place,index) in layer.places'>
        <div class="modal" :class="{ 'is-active' : place.state }" v-bind:id="'place-' + place.id">
          <div class="modal-background"></div>
          <div class="modal-content absolute inset-4 p-4 pt-2 m-1 z-50 sm:relative sm:inset-0 sm:mt-7 sm:mr-10 md:mt-2 md:mr-18 bg-white bg-a100c-white overflow-hiddenX overflow-x-auto shadow min-w-none sm:min-w-min sm:max-w-md">
            <div class="text-right px-0 py-0 w-8 float-right text-3xl">
              <button class="close-button" aria-label="close" @click="closeModal(place)">&times;</button>
            </div>
            <div v-if="place.images && place.images.length > 0" class="px-0 pb-4 sm:px-4">
              <div class="">
                <span v-if="place.images[0]">
                  <span v-if="layer.id == 70">
                    <img v-bind:src="place.images[0].image_url" :alt="place.images[0].alt" class="max-w-full sm:max-w-md max-h-56 sm:max-h-60 md:max-w-[85vw] md:max-h-[95vh] lg:max-w-[85vw] lg:max-h-[95vh]">
                  </span>
                  <span v-else>
                    <img v-bind:src="place.images[0].image_url" :alt="place.images[0].alt" class="max-w-full sm:max-w-md max-h-56 sm:max-h-60 lg:max-h-96">
                  </span>
                </span>
              </div>
            </div>
            <div class="modal-header pt-1 sm:pt-2 px-4">
              <p class="text-sm sm:text-md my-0 sm:my-4"><span v-if="data.title != layer.title">{{data.title}} </span><span v-else><nuxt-link :to="{ path: '/'}">Start</nuxt-link></span> <span v-if="data.layer[parseInt(lindex)]">— {{ data.layer[parseInt(lindex)].title}}</span></p>
              <h2 class="text-sm sm:text-md"><strong>{{place.title}}</strong> ({{place.id}})</h2>
            </div>
            <div class="modal-content">
              <div v-if="place.teaser" class="text-sm sm:text-md  text-gray-500 px-4" :inner-html.prop="place.teaser | truncate(200, '...')"></div>
            </div>
            <div class="modal-player">
                <p class="captions" :id="'place-' + place.id + '-infos'"></p>
                <div id="audio" class="player-wrapper px-4" v-if="place.audio">
                  <audio-player :place="place"></audio-player>
                </div>
                <div id="audio" class="player-wrapper px-4" v-if="place.audiolink" v-html="place.audiolink">
                </div>
            </div>
            <footer class="flex">
              <p class="flex-auto text-sm sm:text-md text-gray-500 px-4 py-1 sm:px-4 sm:py-4">
                <button @click="showPlaceInList(place)" class="text-link">Show details</button>
              </p>
              <p class="flex-auto text-sm sm:text-md text-gray-500 px-4 py-1 sm:px-4 sm:py-4">
                <button @click="openNextPopup(map,place,layer,index)" class="text-link">Next place</button>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import AudioPlayer from '~/components/Audio-player.vue';


export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    layers: {
      type: Array,
      required: true
    },
    map: {
      type: Object,
      required: false
    }
  },
  components: {
    // AudioPlayer
  },
  methods: {
    closeModal(place) {
      this.data.state = false
      place.state = false
    },
    showPlaceInList(place) {
      this.$nextTick(() => {
        this.data.state = !this.data.state
        place.state = !place.state;
        console.log("show place "+ place.id +" in list");
        this.$router.push({ name: 'main', hash: '#list', query: { place_id: "list-place-"+place.id }});
      })
    },
    openNextPopup(map,place,layer,index) {
      this.$nextTick(() => {
        var next_index = index + 1
        place.state = !place.state;
        if ( layer.places[next_index] ) {
          layer.places[next_index].state = !layer.places[next_index].state;
        } else {
          next_index = 0;
          layer.places[next_index].state = !layer.places[next_index].state;
        }
        console.log("open next place "+ next_index +" in list");
        map.flyTo([layer.places[next_index].lat,layer.places[next_index].lon],map.getZoom());
      })
    }
  },
  data() {
    return {


    }
  },
  computed: {
  },
  mounted() {

  }
}
</script>
