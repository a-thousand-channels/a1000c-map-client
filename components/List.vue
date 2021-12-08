<style>


</style>

<template>
  <div class="">
    <ul class="pb-10">
      <li v-for="(place,index) in places" class="bg-a100c-white px-4 py-2 rounded shadow mt-4">
        <div v-swiper:[index]="swiperOptions" class="md:px-12">
          <div class="swiper-wrapper" v-if="place.images">
            <div v-for="(image,iindex) in place.images" :key="iindex" class="swiper-slide px-0 pb-4 pt-2 sm:px-4 sm:pt-4">
              <p v-if="place.images.length > 1" class="text-sm text-gray max-w-60 text-left">({{iindex+1}}/{{place.images.length}})</p>
              <span v-if="image">
                <img v-bind:src="image.image_url" :alt="image.alt" class="max-w-full sm:max-w-ws max-h-72 sm:max-h-80 lg:max-h-96">
                <span class="text-sm text-gray max-w-60">{{image.title}}</span>
              </span>
              <span v-else>
                <img src="https://via.placeholder.com/585x870?text=Platzhalter_585x870px" alt="">
              </span>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <h3 class="font-semibold text-lg px-4 py-2 sm:px-16 sm:pt-8">{{ place.title }}</h3>
        <div class="text-gray-500 px-4 sm:px-16 sm:py-4" v-html="place.teaser"></div>
        <ul class="pb-4 sm:px-8">
          <li v-for="(annotation,aindex) in place.annotations" class="bg-a100c-3 px-4 py-4 rounded shadow mt-4 mb-6">
            <h4 v-if="annotation.title" class="font-semibold text-md px-4 py-2">{{ annotation.title }}</h4>
            <div class="text-gray-500 px-4" v-html="annotation.text"></div>
          </li>
        </ul>
        <footer>
          <p class="text-gray-500 px-4 py-2 sm:px-16 sm:py-4">
            <button @click="recenterMap(place.lat,place.lon,index)" class="text-link">Show on the map</button>
          </p>
        </footer>
      </li>
    </ul>
  </div>
</template>


<script>


export default {
  props: {
    places: {
      type: Array,
      required: true
    },
    map: {
      type: Object,
      required: false
    }
  },
  components: {
  },
  methods: {
    recenterMap(lat,lon,index) {
      this.$nextTick(() => {
        console.log("recenter map to "+ lat +"/"+lon);
        this.$router.push({ name: 'main', hash: '#map' });
        // this.$refs.map.mapObject.flyTo([lat,lon],16);
        // this.$parent.mapObject.flyTo([lat,lon],16);
        this.map.flyTo([lat,lon],17);

      })
    }
  },
  data() {
    return {
      swiperOptions: {
          width: null,
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          paginationClickable: true,
          spaceBetween: 50
        }
    }
  },
  computed: {
  },
  mounted() {
  }
}
</script>
