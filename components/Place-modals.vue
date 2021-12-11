<style>
.places-list {
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
  min-width: 18em;
}


</style>

<template>
  <div class="places-list sm:relative z-50">
    <div v-for='(layer,lindex) in layers'>
      <div v-for='(place,index) in layer.places'>
        <div class="modal" :class="{ 'is-active' : place.state }" v-bind:id="'place-' + place.id">
          <div class="modal-background"></div>
          <div class="modal-content absolute inset-4 p-4 pt-2 m-0 z-50 sm:relative sm:inset-0 sm:mt-8 bg-white bg-a100c-white overflow-hidden shadow min-w-none sm:min-w-min sm:max-w-md">
            <div class="text-right px-0 py-0 w-8 float-right text-3xl">
              <button class="close-button" aria-label="close" @click="toggleModal(place)">&times;</button>
            </div>
            <div v-if="place.images && place.images.length > 0" class="px-0 pb-4 sm:px-4">
              <div class="">
                <span v-if="place.images[0]">
                  <img v-bind:src="place.images[0].image_url" :alt="place.images[0].alt" class="max-w-full sm:max-w-md max-h-56 sm:max-h-60 lg:max-h-64">
                </span>
              </div>
            </div>
            <div class="modal-header pt-2 px-4">
              <p class="my-4">{{data.title}} :: {{layer.title}}<span v-if="data.layer[parseInt(lindex)]">— {{ data.layer[parseInt(lindex)].title}}</span></p>
              <h2><strong>{{place.title}}</strong> ({{place.id}})</h2>
            </div>
            <div class="modal-content">
              <div v-if="place.teaser" class="text-gray-500 px-4" :inner-html.prop="place.teaser | truncate(200, '...')"></div>
            </div>
            <div class="modal-player">
                <p class="captions" :id="'place-' + place.id + '-infos'"></p>
                <div id="audio" class="player-wrapper" v-if="place.audio">
                  <audio-player :place="place"></audio-player>
                </div>
            </div>
            <footer>
              <p class="text-gray-500 px-4 py-2 sm:px-4 sm:py-4">
                <button @click="showPlaceInList(place.id)" class="text-link">Show details</button>
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
    }
  },
  components: {
    // AudioPlayer
  },
  methods: {
    toggleModal(place) {
      place.state = !place.state;
    },
    showPlaceInList(id) {
      this.$nextTick(() => {
        console.log("show place "+ id +" in list");
        this.$router.push({ name: 'main', hash: '#list' });
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
