<template>
  <section class="section section__step--second d-flex">
    <div class="section__content d-flex flex-column">
      <h1 class="section__title">
        <span class="title__shadow glitch" data-text="近日公開">近日公開</span>
        What's our Marketplace?
      </h1>
      <p class="section__text text-md">
        An exchange where 2D/3D, manga, and comic artists can take commissions
        and fans can subscribe or request an artist for personal or commercial
        use. This is the second phase of our project and will begin development
        in 2021. Until then take a look at our current digital collectibles made
        by great artists we hope to feature on our marketplace!
      </p>
      <Button text="Current NFT’s"></Button>
    </div>
    <Contacts />
  </section>
</template>

<script>
import { Sidebar, Contacts, Button } from "../../components/index";
export default {
  name: "Marketplace",
  components: { Sidebar, Contacts, Button },
  head: {
    title: "The WAIFU - Marketplace"
  },
  mounted() {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  }
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  height: 100vh;
  z-index: 1;

  &__content {
    display: flex;
    width: 100%;
    height: 100vh;
    padding-left: 285px;
    justify-content: center;
    align-items: flex-start;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("~~static/images/background_cs.png");
    background-repeat: no-repeat;
    background-size: cover;

    @include breakpoint("mobile") {
      padding: 0 20px;
      padding-top: 206px;
      background-image: url("~~static/images/mobile-bg__MarketPlace.jpg");

      justify-content: end;

      & > .btn {
        display: none;
      }
    }
  }

  &__title {
    position: relative;
    text-align: left;
    color: $color-white;
    z-index: 1;
    font-size: 40px;
    margin-bottom: 44px;

    @include breakpoint("mobile") {
      margin-bottom: 56px;
    }
    .title__shadow {
      position: absolute;
      left: 0px;
      top: -70px;
      font-size: 90px;
      font-weight: 800;
      mix-blend-mode: color-burn;
      text-shadow: 0px 0px 0px #fd5057;
      // color: rgb(53, 54, 67);

      z-index: -1;

      @include breakpoint("mobile") {
        font-size: 40px;

        top: -20px;
        left: 25px;
      }
    }
  }

  &__text {
    max-width: 500px;
    color: $color-white;
    line-height: 26px;
    margin-bottom: 56px;
    text-align: left;

    @include breakpoint("mobile") {
      font-size: 18px;
    }
  }
}
</style>
