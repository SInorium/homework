<template>
  <div class="slide-progress">
    <span class="slide-progress__count">{{ currentSlide }} / 3 </span>
    <svg :height="radius * 2" :width="radius * 2" class="slide-progress__svg">
      <circle
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
        stroke="white"
        fill="transparent"
      />
      <circle
        stroke="white"
        :stroke-dasharray="circumference + ' ' + circumference"
        :style="{ strokeDashoffset: strokeDashoffset }"
        :stroke-width="stroke"
        fill="transparent"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
        :data-dash="strokeDashoffset"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    radius: Number,
    stroke: Number,
    currentSlide: Number
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    return {
      normalizedRadius,
      circumference
    };
  },
  computed: {
    progress() {
      return this.currentSlide * 33.3;
    },
    strokeDashoffset() {
      return this.circumference - (this.progress / 100) * this.circumference;
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-progress {
  position: relative;
  &__count {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
  }
  &__svg {
    transform: rotate(-90deg);
    & circle {
      transition: stroke-dashoffset 0.3s linear;
    }
  }
}
</style>
