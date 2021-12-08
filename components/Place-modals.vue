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
    <div v-for='(place,index) in list'>
      <div class="modal" :class="{ 'is-active' : place.state }" v-bind:id="'place-' + index">
        <div class="modal-background"></div>
        <div class="modal-content absolute inset-4 p-4 pt-2 m-0 z-50 sm:relative sm:inset-0 sm:mt-8 bg-white bg-a100c-white overflow-hidden shadow min-w-none sm:min-w-min">
          <div class="text-right px-0 py-0 text-2xl">
            <button class="close-button" aria-label="close" @click="toggleModal(place)">&times;</button>
          </div>
          <div class="px-0 pb-4 sm:px-4" v-if="place.images">
            <div class="">
              <span v-if="place.images[0]">
                <img v-bind:src="place.images[0].image_url" :alt="place.images[0].alt" class="max-w-full sm:max-w-md max-h-56 sm:max-h-60 lg:max-h-64">
              </span>
            </div>
          </div>
          <div class="modal-header">
            <h2>{{index+1}} <strong>{{place.title}}</strong></h2>
          </div>
          <div class="modal-content">
            <div class="text-gray-500 px-4" v-html="place.teaser"></div>
          </div>
          <div class="modal-player">
              <p class="captions" :id="'place-' + place.id + '-infos'"></p>
              <div id="audio" class="player-wrapper" v-if="place.audio">
                <audio-player :place="place"></audio-player>
              </div>
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
    list: {
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
