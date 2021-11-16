<style>
.places-list {
    margin-top: -6px;
}
.modal {
  display: none;
}
.modal.is-active  {
  display: block;
}
.modal-content {
  min-width: 24em;
}


</style>

<template>
  <div class="places-list">
    <div v-for='(place,index) in list'>
      <div class="modal" :class="{ 'is-active' : place.state }" v-bind:id="'place-' + index">
        <div class="modal-background"></div>
        <div class="modal-content absolute inset-4 p-4 pt-2 m-0 z-50 sm:relative sm:inset-0 sm:mt-8 bg-white bg-a100c-white overflow-hidden shadow min-w-max">
          <div class="text-right px-0 py-0 text-2xl">
            <button class="close-button" aria-label="close" @click="toggleModal(place)">&times;</button>
          </div>
          <div v-swiper:[index]="swiperOptions">
            <div class="swiper-wrapperX px-4 pb-4" v-if="place.images">
              <div v-for="image,iindex in place.images" class="swiper-slideX">
                <span v-if="image">
                  <img v-bind:src="image.image_url" :alt="image.alt" class="max-w-md">
                </span>
                <span v-else>
                  <img src="https://via.placeholder.com/585x870?text=Platzhalter_585x870px" :alt="iindex">
                </span>
              </div>
            </div>
            <div class="swiper-pagination"></div>
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
  computed: {
  },
  mounted() {

  }
}
</script>
