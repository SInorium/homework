<template>
  <section class="section section__step--second d-flex">
    <div class="section__content d-flex flex-column">
      <h1 class="section__title">
        Accumulate some WAIF to earn a HAREM
        <span class="title__shadow glitch" data-text="ハーレム">ハーレム</span>
      </h1>
      <p class="section__text text-md">
        WAIF tokens can be acquired on our Uniswap pool. Users may then add
        liquidity to the pool by providing WAIF tokens and ETH in a 1:1 ratio to
        acquire LP tokens. <br /><br />
        HAREM tokens are your ticket to our beautiful collectible NFTs. Users
        may either stake LP tokens or WAIF by itself to earn HAREM rewards.
        Staking LP tokens generates over three times as much HAREM per day
        compared to WAIF only! HAREM Balances are reflected on our PORTAL and
        can be redeemed for NFTs at any time while supplies last.
      </p>
      <p class="coming-soon text-md">
        <Button
          class="btn btn__first"
          text="Farm HAREM"
          :link="'https://nft.waifutoken.io'"
          :filled="true"
        ></Button>
      </p>
    </div>
    <Contacts />
  </section>
</template>

<script>
import { Sidebar, Contacts, Button } from "../../components/index";
export default {
  name: "Harem",
  components: { Sidebar, Contacts, Button },
  head: {
    title: "The WAIFU - Harem"
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
main {
  width: 100vw;
  height: 100vh;
}
.section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-image: url("~~static/images/Harem.png");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  padding-top: 139px;
  padding-left: 289px;
  @include breakpoint("desktop_md") {
    padding-top: 109px;
  }
  @include breakpoint("mobile") {
    padding: 0 20px;
    padding-top: 116px;
    background-image: url("~~static/images/mobile-bg__Harem.jpg");
  }
  &__content {
    z-index: 1;
    height: fit-content;
    display: flex;
    width: 665px;
    max-width: 100%;
  }

  &__title {
    width: 455px;
    max-width: 100%;
    color: $color-white;
    z-index: 1;
    font-size: 40px;
    margin-bottom: 56px;
    @include breakpoint("mobile") {
      position: relative;
      margin-bottom: 20px;
      font-size: 36px;
    }

    & > .title__shadow {
      position: absolute;
      left: 320px;
      top: 150px;
      font-size: 90px;
      font-weight: 800;
      mix-blend-mode: difference;
      text-shadow: 0px 0px 0px #fd5057;
      color: initial;

      z-index: 1;

      @include breakpoint("mobile") {
        text-shadow: 0px 0px 10px #fd5057;
        top: -20px;
        left: 0;
        font-size: 40px;
      }
    }
  }

  &__text {
    max-width: 500px;
    color: $color-white;
    margin-bottom: 56px;

    line-height: 130%;
    @include breakpoint("desktop_md") {
      max-width: 560px;
      margin-bottom: 40px;
      font-size: 1.1em;
    }
    @include breakpoint("mobile") {
      font-size: 14px;
      margin-bottom: 36px;
    }
  }
  @include breakpoint("mobile") {
    & .coming-soon {
      font-weight: 500;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
