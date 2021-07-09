<template>
  <div class="custom-cursor">
    <div
      class="custom-cursor__circle"
      :style="circleStyle"
      ref="customCursorCircle"
    ></div>
    <div
      class="custom-cursor__dot"
      :style="dotStyle"
      ref="customCursorDot"
    ></div>
  </div>
</template>

<script>
export default {
  name: "CustomCursor",
  props: {
    circleColor: String,
    circleColorHover: String,
    dotColor: String,
    dotColorHover: String,
    hoverSize: Number,
    hideOnHover: Boolean
  },
  data() {
    return {
      scale: 1,
      x: null,
      y: null,
      circlePosX: null,
      circlePosY: null,
      dotPosX: null,
      dotPosY: null,
      circleStyle: null,
      dotStyle: null
    };
  },
  methods: {
    customCursor(e) {
      // cursor pos
      this.x = e.clientX;
      this.y = e.clientY;
      // cursor circle
      const circle = this.$refs.customCursorCircle;
      this.circlePosX = this.x - circle.clientWidth / 2;
      this.circlePosY = this.y - circle.clientWidth / 2;
      // cursor circle
      const dot = this.$refs.customCursorDot;
      this.dotPosX = this.x - dot.clientWidth / 2;
      this.dotPosY = this.y - dot.clientHeight / 2;
      //change style when hovering on selected targets
      if (e.target.getAttribute("data-hide-cursor")) {
        if (this.hideOnHover) {
          this.circleStyle = { opacity: 0 };
          this.dotStyle = { opacity: 0 };
        } else {
          this.scale = this.hoverSize;
          this.circleStyle = { borderColor: this.circleColorHover };
          this.dotStyle = { backgroundColor: this.dotColorHover };
        }
      } else {
        this.scale = 1;
        this.circleStyle = { borderColor: this.circleColor };
        this.dotStyle = { backgroundColor: this.dotColor };
      }
      //move custom cursor
      circle.style.transform = `translate(${this.circlePosX}px,${this.circlePosY}px) scale(${this.scale})`;
      dot.style.transform = `translate(${this.dotPosX}px,${this.dotPosY}px)`;
    }
  },
  mounted() {
    window.addEventListener("mousemove", this.customCursor);
  },
  destroyed() {
    window.removeEventListener("mousemove", this.customCursor);
  }
};
</script>

<style lang="scss" scoped>
$ease: cubic-bezier(0.23, 1, 0.32, 1);
.custom-cursor {
  cursor: none;
  pointer-events: none;
  @include breakpoint("mobile") {
    display: none;
  }
}
.custom-cursor__circle {
  position: fixed;
  cursor: none;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border: 1px solid $color-red;
  border-radius: 50%;
  transform: translate(-100%, -100%);
  transition: all 0.4s $ease;
  z-index: 999;
}
.custom-cursor__dot {
  position: fixed;
  z-index: 999;
  cursor: none;
  top: 1px;
  left: 1px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: $color-red;
  transform: translate(-100%, -100%);
  transition: all 0.2s $ease;
}
</style>
