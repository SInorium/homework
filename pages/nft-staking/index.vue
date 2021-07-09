<template>
  <main>
    <section class="section section__step--second d-flex">
      <div class="section__content d-flex flex-column">
        <h1 class="section__title">
          <span class="title__shadow glitch" data-text="近日公開"
            >近日公開</span
          >
          Coming Soon
        </h1>
        <p class="section__text text-md">
          Harem NFT's redeemed can be used to generate interest. Look out for
          NFT staking in the future!
        </p>
      </div>
    </section>
    <Contacts />
  </main>
</template>

<script>
import { Sidebar, Contacts } from "../../components/index";
export default {
  name: "NFTStaking",
  components: { Sidebar, Contacts },
  head: {
    title: "The WAIFU - NFT Staking"
  },
  mounted() {
    document.getElementsByTagName("html")[0].style.overflowY = "hidden";
  },
  destroyed() {
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
  }
};
</script>

<style lang="scss" scoped>
.section {
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("~~static/images/Riven.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: $color-black;
  overflow: hidden;
  @include breakpoint("mobile") {
    background-image: url("~~static/images/mobile-bg__NFT.jpg");
  }

  &__content {
    display: flex;
    width: 100vw;
    height: 100vh;
    margin-left: 200px;
    justify-content: center;
    align-items: center;

    @include breakpoint("mobile") {
      margin: 0;
      padding: 0 20px;
    }
  }

  &__title {
    position: relative;
    text-align: center;
    z-index: 1;

    margin-bottom: 44px;

    @include breakpoint("mobile") {
      margin-bottom: 56px;
    }

    .title__shadow {
      position: absolute;
      right: 35px;
      top: -35px;

      font-weight: 800;
      mix-blend-mode: color-burn;
      text-shadow: 0px 0px 0px #fd5057;
      // color: rgb(53, 54, 67);
      color: initial;

      z-index: -1;

      @include breakpoint("mobile") {
        font-size: 40px;
        right: 30px;
        top: -20px;
      }
    }
  }

  &__text {
    max-width: 465px;
    color: $color-white;
    line-height: 26px;
    margin-bottom: 56px;
    text-align: center;
  }
}
</style>
