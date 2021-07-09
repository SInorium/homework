<template>
  <div class="top-panel__container" :class="{ fill: isFill }">
    <div class="top-panel__line"></div>
    <div class="top-panel__name">{{ getRouteName }}</div>
  </div>
</template>

<script>
import { throttle } from "lodash";

export default {
  data: () => ({
    isFill: false
  }),
  computed: {
    getRouteName() {
      switch (this.$route.name) {
        case "harem":
          return "Harem";
        case "marketplace":
          return "Marketplace";
        case "about":
          return "About";
        case "nft-staking":
          return "NFT Staking";
        case "about-us":
          return "About us";
        case "goals":
          return "Goals";
        case "community":
          return "Community";
        default:
          return this.$route.name;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: throttle(function() {
      if (window.scrollY > 100) {
        this.isFill = true;
      } else {
        this.isFill = false;
      }
    }, 150)
  }
};
</script>

<style lang="scss" scoped>
.top-panel__container {
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 200px);
  height: 84px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  opacity: 1;
  transition: opacity 0.2s ease 0.1s;
  z-index: 1;

  @include breakpoint("mobile") {
    padding: 0;
    padding-top: 87px;
    left: 20px;
  }
}

.fill {
  opacity: 0;
  transition: opacity 0.2s ease 0.1s;
}

.top-panel__line {
  width: 44px;
  height: 1px;
  margin-right: 20px;
  background-color: #fff;

  @include breakpoint("mobile") {
    width: 24px;
    margin-right: 12px;
  }
}

.top-panel__name {
  color: #fff;
  font-size: 28px;

  @include breakpoint("mobile") {
    font-size: 1rem;
  }
}
</style>
