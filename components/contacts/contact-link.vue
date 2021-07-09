<template>
  <li
    class="contacts__item"
    @mouseenter="onMouseEnter"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <a :href="`${to}`" class="contact-link" target="_blank">
      <img
        :src="require(`@/static/icons/contacts/${img}.svg`)"
        data-hide-cursor="true"
        class="link__img"
      /><span
        class="link-border"
        :class="isEnter ? 'link-border--active' : ''"
        :style="borderPos"
      ></span>
    </a>
  </li>
</template>

<script>
export default {
  props: ["to", "img"],
  data: () => ({
    x: null,
    y: null,
    isEnter: false
  }),
  methods: {
    onMouseEnter(e) {
      this.isEnter = true;
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    onMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    onMouseLeave(e) {
      this.isEnter = false;
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  },
  computed: {
    borderPos() {
      return {
        top: `${this.y - 18}px`,
        left: `${this.x - 18}px`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-link {
  position: relative;
  width: 30px;
  height: 30px;
  & .link__img {
    width: 30px;
    height: 30px;
    transition: all 0.1s ease-out;
    filter: invert(100%);
  }
  &:hover {
    cursor: none;
    & .link__img {
      transform: scale(1.1);
      filter: invert(45%) sepia(87%) saturate(4089%) hue-rotate(332deg)
        brightness(116%) contrast(121%);
    }
  }
}
.link-border {
  display: block;
  opacity: 0;
  position: absolute;
  border: 1px solid $color-red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  pointer-events: none;
  transition: width 0.2s, height 0.2s;
  &--active {
    opacity: 1;
    width: 40px;
    height: 40px;
  }
}
</style>
