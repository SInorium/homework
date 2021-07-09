<template>
  <main class="main">
    <VueSlickCarousel
      :vertical="true"
      :verticalSwiping="true"
      :arrows="false"
      :swipeToSlide="true"
      :touchMove="true"
      :infinite="false"
      :draggable="false"
      ref="carousel"
      class="carousel"
    >
      <div @dragstart.stop="test">
        <First />
      </div>
      <div>
        <Second />
      </div>
      <div>
        <Third />
      </div>
    </VueSlickCarousel>
    <template v-if="currentSlide !== 3">
      <Contacts />
    </template>
    <div class="slide-progress">
      <SlideProgress
        :currentSlide="currentSlide"
        :radius="44"
        :progress="33"
        :stroke="7"
      />
    </div>
    <div class="slide-button">
      <ScrollButton @slideTo="slideTo" :currentSlide="currentSlide" />
    </div>
  </main>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import { throttle, debounce } from "lodash";
import {
  Sidebar,
  Contacts,
  First,
  Second,
  Third,
  SlideProgress,
  ScrollButton
} from "../components";
export default {
  name: "Home",
  components: {
    First,
    Second,
    Third,
    Sidebar,
    Contacts,
    SlideProgress,
    VueSlickCarousel,
    ScrollButton
  },
  data: () => ({
    currentSlide: 1
  }),
  methods: {
    nextSlide: throttle(function() {
      if (this.currentSlide !== 3) {
        this.$refs.carousel.next();
        this.currentSlide++;
      }
    }, 50),
    prevSlide: throttle(function() {
      if (this.currentSlide !== 1) {
        this.$refs.carousel.prev();
        this.currentSlide--;
      }
    }, 50),
    slideTo: debounce(function(slideIndex) {
      this.$refs.carousel.goTo(slideIndex - 1);
      this.currentSlide = slideIndex;
    }, 50),
    handleWheel: throttle(
      function(event) {
        if (event.deltaY < 0) {
          this.prevSlide();
        } else if (event.deltaY > 0) {
          this.nextSlide();
        }
      },
      1500, //1500
      { trailing: false }
    ),
    test(e) {
      console.log(e);
    }
  },
  mounted() {
    window.addEventListener("wheel", this.handleWheel);
    if (this.$route.hash === "#community") {
      this.slideTo(3);
    }
  },
  destroyed() {
    window.removeEventListener("wheel", this.handleWheel);
  },
  computed: {
    currentHash() {
      return this.$route.hash;
    }
  },
  watch: {
    currentHash(val) {
      if (val == "#community") {
        this.slideTo(3);
      } else {
        this.slideTo(1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
}
.main {
  width: 100vw;
  height: 100vh;
  /* cursor: none; */

  @include breakpoint("mobile") {
    & .carousel {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
    }
  }
  & .slide-progress {
    position: fixed;
    bottom: 20px;
    right: 20px;
    @include breakpoint("mobile") {
      display: none;
    }
  }
  & .slide-button {
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    @include breakpoint("mobile") {
      bottom: 10px;
    }
  }
}
</style>
<style lang="scss">
.slick-track div {
  &:focus {
    outline: none;
  }
}
.slick-slide {
  border: none !important;
}
</style>
