<template>
  <section class="section section__step--first d-flex">
    <div class="section__content d-flex flex-column">
      <h3 class="section__caption">
        WAIFU Token
      </h3>
      <h1 class="section__title">
        Your currency for a collectible digital girlfriend
      </h1>
      <ul class="section__description description-list d-flex">
        <li class="description-list__item">
          <span class="title text-simple--bold">For Creators</span>
          <p class="title__caption text-simple">
            FInd your audience as you earn cryptocurrency on a platform for
            anime fans and illustrators.You keep more!
          </p>
        </li>
        <li class="description-list__item">
          <span class="title text-simple--bold">For Collectors</span>
          <p class="title__caption text-simple">
            Farm, stake and trade exclusive, high quality NFTs which are minted
            in low quantities by discerning curators and talented artists
          </p>
        </li>
        <li class="description-list__item">
          <span class="title text-simple--bold">Decentralized</span>
          <p class="title__caption text-simple">
            We have never raised USD or ETH. There are no VC-backers, pre-sale
            buyers, or vesting/unlock schedules. And 90% of pool liquidity is
            locked forever!
          </p>
        </li>
      </ul>
      <Button
        class="btn btn__first"
        text="Buy WAIFU"
        :link="
          'https://app.uniswap.org/#/swap?outputCurrency=0xb2279b6769cfba691416f00609b16244c0cf4b20'
        "
        :filled="true"
      ></Button>
    </div>
    <div class="section__image-wrapper">
      <p class="section__image-caption glitch" data-text="ワイフ">ワイフ</p>
    </div>
  </section>
</template>

<script>
import { Button } from "~/components";
export default {
  name: "First",
  components: {
    Button
  },
  data() {
    return {
      width: null
    };
  },
  methods: {
    appHeight() {
      const doc = document.documentElement;
      this.width = window.innerWidth;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    }
  },
  watch: {
    width(val) {
      if (val <= 600) {
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.appHeight);
    this.appHeight();
  },
  destroyed() {
    window.removeEventListener("resize", this.appHeight);
  }
};
</script>

<style lang="scss" scoped>
html {
  overflow: hidden;
  @include breakpoint("mobile") {
    overflow: hidden;
  }
}
.section {
  width: 100%;
  height: 100vh;
  z-index: 1;
  padding-top: 75px;
  padding-left: 289px;
  position: relative;
  @include breakpoint("desktop_md") {
    padding-left: 230px;
  }
  @include breakpoint("desktop_sm") {
    padding-left: 200px;
  }
  @include breakpoint("mobile") {
    padding: 0;
    padding-top: 70px;
    height: var(--app-height);
  }
  &__step--first {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("~~static/images/Crystal Maiden.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: $color-black;
    overflow: hidden;

    @include breakpoint("mobile") {
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("~~static/images/mobile-bg__CrystalMaiden.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  &__content {
    padding: 0 20px;
    display: flex;
    width: 100%;
    position: relative;
    z-index: 4;
  }
  & .btn__first {
    position: absolute;
    bottom: 50px;
    max-width: 200px !important;
    @include breakpoint("mobile") {
      position: relative;
      bottom: 0;
      top: 15px;
      bottom: 60px;
      margin: 0 auto;
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
      margin-bottom: 16px;
    }
  }
  &__title {
    max-width: 630px;
    color: $color-white;
    line-height: 0.9em;
    // font-size: 90px;
    @include breakpoint("mobile") {
      max-width: 320px;
      line-height: 39, 27px;
      font-size: 1.5em;
    }
  }

  &__description {
    max-width: 730px;
    margin: auto 0;
    color: $color-white;

    @media screen and (min-width: 1400px) {
      margin-top: 62px;
    }
    @include breakpoint("mobile") {
      margin-top: 16px;
      flex-basis: 300px;
      flex-wrap: wrap;
      justify-content: space-between;
      max-height: 250px;
      margin-bottom: 0;
    }
    .description-list {
      &__item {
        &:not(:last-child) {
          margin-right: 42px;
          @include breakpoint("desktop_sm") {
            margin-right: 16px;
          }
          @include breakpoint("mobile") {
            // margin-right: 1rem;
            margin-bottom: 1rem;
            max-width: 48%;
            margin-right: 0;
          }
        }
        width: 100%;
        max-width: 200px;
        @include breakpoint("mobile") {
          max-width: 100%;
          height: fit-content;
        }
        .title {
          white-space: nowrap;

          color: $color-red;
          margin-bottom: 12px;
          position: relative;

          &::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            bottom: -12px;
            height: 1px;
            width: 32px;
            border: 1px solid $color-white;
            @include breakpoint("mobile") {
              bottom: -10px;
            }
          }

          &__caption {
            margin-top: 29px;
            @include breakpoint("desktop_sm") {
              font-size: 14px;
            }
            @include breakpoint("mobile") {
              margin-top: 16px;
              font-size: 13px;
            }
          }
        }
      }
    }
  }

  &__image-wrapper {
    position: absolute;
    width: inherit;
    right: 1em;
    width: 1em;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    font-size: 15vh;
    @include breakpoint("mobile") {
      left: 20px;
      top: 165px;
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
      font-size: 2.2rem;
      writing-mode: horizontal-tb;
    }
  }
}
</style>
