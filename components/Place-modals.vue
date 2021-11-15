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

</style>

<template>
  <div class="places-list">
    <div v-for='(place,index) in list'>
      <div class="modal" :class="{ 'is-active' : place.state }" v-bind:id="'place-' + index">
        <div class="modal-background"></div>
        <div class="modal-content mt-8 p-4 bg-white bg-a100c-white overflow-hidden shadow">
          <div class="text-right px-1 py-1 text-2xl">
            <button class="close-button" aria-label="close" @click="toggleModal(place)">&times;</button>
          </div>
          <div v-swiper:[index]="swiperOptions">
            <div class="swiper-wrapper" v-if="place.images">
              <div v-for="image,iindex in place.images" class="swiper-slide">
                <span v-if="image.file">
                  <img v-bind:src="'/images/'+image.file" alt="">
                </span>
                <span v-else>
                  <img src="https://via.placeholder.com/585x870?text=Platzhalter_585x870px" :alt="iindex">
                </span>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="modal-header">
            <h2>{{index+1}} <strong>{{place.title}}</strong> {{place.state}}</h2>
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
      console.log(place.state)
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
