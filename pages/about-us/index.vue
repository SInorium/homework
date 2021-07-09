<template>
  <div :class="!isSafari ? 'compress-bg' : ''">
    <AboutTop />
    <AboutBottom />
    <AboutTeam />
    <Contacts />
  </div>
</template>

<script>
import {
  Sidebar,
  Contacts,
  AboutTop,
  AboutBottom,
  AboutTeam
} from "~~/components";
export default {
  name: "AboutUs",
  components: { Sidebar, Contacts, AboutTop, AboutBottom, AboutTeam },
  head: {
    title: "The WAIFU - About us"
  },
  computed: {
    isSafari() {
      if (process.browser) {
        return (
          navigator.vendor &&
          navigator.vendor.indexOf("Apple") > -1 &&
          navigator.userAgent &&
          navigator.userAgent.indexOf("CriOS") == -1 &&
          navigator.userAgent.indexOf("FxiOS") == -1
        );
      } else return false;
    }
  },
  watch: {
    isSafari(val) {
      if (val) alert("safari!!");
    }
  },
  mounted() {
    document.getElementsByTagName("html")[0].style.overfloY = "scroll";
  },
  destroyed() {
    document.getElementsByTagName("html")[0].style.overfloY = "hidden";
  }
};
</script>

<style lang="scss" scoped>
html {
  overflow-y: scroll !important;
}
div {
  width: 100%;
  z-index: 1;
  // background: linear-gradient(180deg, #2f323b 0%, #343b50 100%);
  background-image: url("~~static/images/about_bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #121a1f 100%);
    z-index: -1;
  }
  &.compress-bg {
    background-image: url("~~static/images/about_bg.png?webp");
    @include breakpoint("mobile") {
      background-image: url("~~static/images/mobile-bg__About.jpg");
      background-size: cover;
    }
  }
  @include breakpoint("mobile") {
    overflow: hidden;
    background-image: url("~~static/images/mobile-bg__About.jpg");
    background-size: cover;
  }
}
</style>
