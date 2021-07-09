<template>
  <div class="scroll-button" @click="handleClick" data-cursor-hidden>
    <div
      class="triangle triangle--up "
      :class="currentSlide === 3 ? 'triangle--active' : ''"
    ></div>
    <span class="text--desktop">{{
      currentSlide === 3 ? "Top" : "Slide"
    }}</span>
    <span class="text--mobile">{{ currentSlide === 3 ? "Top" : "Swipe" }}</span>
    <div
      class="triangle triangle--down"
      :class="currentSlide !== 3 ? 'triangle--active' : ''"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ScrollButton",
  props: {
    currentSlide: Number
  },
  methods: {
    handleClick() {
      if (this.currentSlide !== 3) {
        this.$emit("slideTo", this.currentSlide + 1);
      } else {
        this.$emit("slideTo", 1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll-button {
  color: white;
  width: 100px;
  text-align: center;
  & .text {
    &--desktop {
      display: block;
      font-size: 20px;
      margin: 10px 0;
      @include breakpoint("mobile") {
        display: none;
      }
    }
    &--mobile {
      display: none;
      @include breakpoint("mobile") {
        font-size: 20px;
        margin: 10px 0;
        display: block;
      }
    }
  }
  & .triangle {
    margin: 0 auto;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    transition: opacity 0.3s;
    &--down {
      opacity: 0;
      border-top: 10px solid;
      border-top-color: white;
    }
    &--up {
      opacity: 0;
      border-bottom: 10px solid;
      border-bottom-color: white;
    }
    &--active {
      opacity: 1;
    }
  }
  &:hover {
    color: $color-red;
    & .triangle {
      border-top-color: $color-red;
      border-bottom-color: $color-red;
    }
  }
}
</style>
