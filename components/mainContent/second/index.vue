<template>
  <section class="section section__step--second d-flex">
    <div class="section__content d-flex flex-column">
      <h3 class="section__caption">
        What we are trying to do
      </h3>
      <h2 class="section__title">
        Our goal is to provide the users with as much original and licensed
        content as possible and make the true WAIFU experience grow.
      </h2>
      <Button class="btn" text="Learn more"></Button>
    </div>
    <div class="section__image-wrapper">
      <p class="section__image-caption glitch" data-text="について">について</p>
    </div>
  </section>
</template>

<script>
import Button from "../../button";
export default {
  name: "Second",
  components: { Button }
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: relative;
  overflow: hidden;
  padding-top: 220px;
  padding-left: 289px;
  @include breakpoint("mobile") {
    padding: 0;
    padding-top: 180px;
    height: var(--app-height);
  }
  &__step--second {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("~~static/images/Gumiho.png") no-repeat;
    background-size: cover;

    @include breakpoint("mobile") {
      background-image: url("~~static/images/mobile-bg__Gumiho.jpg");
      background-repeat: no-repeat;
    }
  }

  &__content {
    display: flex;
    z-index: 4;
    max-width: 610px;
    width: 100%;

    @include breakpoint("mobile") {
      padding: 0 20px;

      & > .btn {
        display: none;
      }
    }
  }

  &__caption {
    display: flex;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: $color-white;
    margin-bottom: 32px;
    &::before {
      display: block;
      content: "";
      width: 64px;
      height: 1px;
      background-color: $color-white;
      position: relative;
      top: 6px;
      margin-right: 24px;
      @include breakpoint("mobile") {
        width: 36px;
        margin-right: 12px;
      }
    }
    @include breakpoint("mobile") {
      margin-bottom: 24px;
    }
  }
  &__title {
    max-width: 100%;
    color: $color-white;

    margin-bottom: 56px;
    @include breakpoint("mobile") {
      font-size: 1.55rem;
    }
  }

  &__image-wrapper {
    position: absolute;
    width: inherit;
    right: 1em;
    top: 125px;
    width: 1em;
    font-size: 15vh;
    height: calc(100% - 220px);
    text-align: center;
    vertical-align: middle;

    @include breakpoint("mobile") {
      left: 20px;
      top: 205px;

      height: auto;
    }
  }

  &__image-caption {
    padding-right: 1em;
    font-family: "TT Norms";
    z-index: 4;
    font-weight: 800;
    font-size: 15vh;
    line-height: 1em;
    mix-blend-mode: difference;
    text-shadow: 0px 0px 5px #fd5055;
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform-origin: 0 100%;

    margin: auto auto;
    filter: drop-shadow(0px 0px 10px #fd5057);

    @include breakpoint("mobile") {
      font-size: 2.22rem;
      text-shadow: 0px 0px 10px #ffffff;
      writing-mode: horizontal-tb;
      filter: drop-shadow(0px 4px 64px rgba(0, 0, 0, 0.25));
    }
  }
}
</style>
