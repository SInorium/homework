<template>
  <div class="default-layout">
    <Sidebar />
    <template v-if="getRouteName">
      <TopPanel />
    </template>
    <nuxt />
    <CustomCursor
      :circleColor="'#fd5055'"
      :circleColorHover="'#fd5055'"
      :dotColor="'#fd5055'"
      :dotColorHover="'#fd5055'"
      :hoverSize="1.8"
      :hideOnHover="true"
    />
    <!-- <cursor-fx :color="'#fd5055'" :hide-outside="true" :outside-size="'40'" /> -->
  </div>
</template>

<script>
import { TopPanel, Sidebar, CustomCursor } from "../components";
export default {
  components: {
    TopPanel,
    Sidebar,
    CustomCursor
  },
  computed: {
    getRouteName() {
      return this.$route.path !== "/";
    }
  }
};
</script>
<style lang="scss">
:root {
  --app-height: 100vh;
}
html {
  font-family: "TT Norms", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-feature-settings: "liga" off;
  @media screen and (min-width: 1600px) {
    font-size: 20px;
  }
  * {
    cursor: none !important;
  }
}
.default-layout{
  min-height: 100vh;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.glitch {
  color: initial;
  white-space: nowrap;
}
.glitch:after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  // text-shadow: -1px 0 10px $color-red;
  top: 0;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}

.glitch:before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  // text-shadow: 2px 0 #0c0e12;

  top: 0;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  filter: drop-shadow(0px 0px 2px #fd5057);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}

@keyframes noise-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
}

@keyframes noise-anim-2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
}
</style>
