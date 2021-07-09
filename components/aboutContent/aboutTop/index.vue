<template>
  <main>
    <section class="section section__step--second">
      <div class="section__content content ">
        <h1 class="section__title">
          <span class="title__shadow glitch" data-text="私達がすること"
            >私達がすること</span
          >
          Artwork that appreciates over time
        </h1>
        <div class="content__wrapper d-flex">
          <div class="content__image-wrapper">
            <div class="image-sticky">
              <div class="block-shadow"></div>
              <img
                class="content__image content__image--first"
                src="~~/static/images/Nezuko-1.png"
                alt="Nezuko"
              />
            </div>
          </div>
          <div class="content__wrapper--text d-flex flex-column">
            <h3 class="content__caption">
              How It Started
            </h3>
            <h2 class="content__title">
              From scratch!
            </h2>
            <p class="content__paragraph text-sm">
              The WAIFU Project began as a community project for Ethereum
              developers and enthusiasts to explore different ways to reward
              collectible artwork for contributing to a decentralized liquidity
              pool. Although there was no project funding, it was clear that
              there is an energetic community surrounding this idea and the
              project grew organically from day 1 with a tiny market share and
              some big dreams. It has since grown into a sustained effort
              focused on generating original cryptocurrency-inspired WAIFU
              characters and finding new ways to create interesting economies
              around tradeable NFTs on the Ethereum network.
              <br /><br />
              We want to provide users with even more WAIFU collectibles that
              can be acquired either through our entirely unique farming
              experience or by purchasing these limited-number works on a
              peer-to-peer marketplace. The WAIF token is the backbone of this
              ecosystem.
            </p>
            <p class="content__paragraph content__paragraph--small text-sm">
              The WAIF token is a non-inflationary ERC-20 launched on August 5,
              2020 with a fully diluted supply of 1 billion tokens. 90% of the
              all tokens were permanently locked into a Uniswap liquidity
              contract, while the other 10% of tokens are set aside in a
              multi-signature wallet for future development, which includes web
              design, smart contract deployment, and the commissioning of
              artists to produce exclusive content.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "AboutTop"
};
</script>

<style lang="scss" scoped>
.section {
  &__content {
    position: relative;
    width: 100%;
    padding-top: 144px;
    padding-left: 289px;

    @include breakpoint("mobile") {
      padding: 0 20px;
      padding-top: 126px;
    }

    .content {
      @include breakpoint("mobile") {
        &__wrapper {
          flex-direction: row-reverse;
          justify-content: space-between;
        }
      }

      &__image-wrapper {
        height: 130vh;
        width: 50%;

        @include breakpoint("mobile") {
          display: none;
        }
      }
      &__image {
        max-width: 95%;
        margin: 0 auto;

        @include breakpoint("mobile") {
          position: relative;
          right: -170px;
          max-width: 250px;
        }
      }
      &__wrapper {
        &--text {
          width: fit-content;
          margin-right: 84px;
          margin-left: auto;
          max-width: 40%;
          width: 100%;

          @include breakpoint("mobile") {
            margin: 0;
            max-width: 100%;
          }
        }
      }
      &__text {
        width: 75%;
        color: $color-white;
        opacity: 0.6;
        margin-top: 20px;
        margin-bottom: 114px;
        @media screen and (min-width: 2000px) {
          font-size: 28px;
        }
        @include breakpoint("mobile") {
          font-size: 12px;
          max-width: 212px;
          margin-bottom: 56px;
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
        color: $color-white;
        line-height: 47px;
        margin-bottom: 56px;
        max-width: 90%;
        @include breakpoint("mobile") {
          margin-bottom: 40px;
          font-size: 28px;
          line-height: 32.34px;
          max-width: 310px;
        }
      }

      &__paragraph {
        width: 90%;
        line-height: 140%;
        color: $color-white;
        &--small{
          margin-top: 40px;
          font-size: 16px;
          font-weight: 400;
          opacity: 0.7;
          max-width: 346px;
        }
        @include breakpoint("mobile") {
          max-width: 335px;
          line-height: 25.2px;
        }
      }
    }
  }

  &__title {
    position: relative;
    color: $color-white;
    z-index: 1;
    max-width: 80%;
    margin-bottom: 44px;
    user-select: none;
    .title__shadow {
      position: absolute;
      left: 450px;
      top: -40px;

      font-weight: 800;
      mix-blend-mode: color;
      text-shadow: 0px 0px 2px #fd5057;
      // color: rgb(53, 54, 67);
      color: initial;

      z-index: 1;
      @include breakpoint("mobile") {
        font-size: 40px;
        left: 5px;
        top: -25px;
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
  .image-sticky {
    position: sticky;
    width: 100%;
    top: 0;
    height: fit-content;

    @include breakpoint("mobile") {
      position: static;
      width: auto;
    }
  }
  .block-shadow {
    position: absolute;
    z-index: -1;
    width: 40%;
    max-width: 350px;
    height: 40%;
    background-color: #fd5057;
    opacity: 0.5;
    top: 20%;
    left: 45%;
    transform: translateX(-45%);
    border-radius: 50%;
    filter: blur(100px);

    @include breakpoint("mobile") {
      left: 75%;
      width: 10%;
      z-index: auto;
    }
  }
}
</style>
