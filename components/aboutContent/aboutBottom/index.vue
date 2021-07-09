<template>
  <section class="section section__step--second">
    <div class="section__content content ">
      <div class="image__wrapper">
        <div class="image-sticky">
          <div class="block-shadow"></div>
          <img
            class="content__image content__image--first"
            src="~~/static/images/Nezuko-2.png"
            alt="Nezuko"
          />
        </div>
      </div>
      <div class="content__wrapper d-flex flex-column">
        <h3 class="content__caption">
          Where It’s Going
        </h3>
        <h2 class="content__title">
          Up next…
        </h2>
        <ul class="content__list">
          <li class="content__item text-sm">
            On-boarding more artists to use the WAIFU platform for commissions
            and sales of their artwork.
          </li>
          <li class="content__item text-sm">
            Implement direct payment and subscription dApps to compete with
            sites like Pixiv or Deviantart.
          </li>
          <li class="content__item text-sm">
            Open a fiat on/off-ramp for both crypto veterans and new users who
            want to participate.
          </li>
          <li class="content__item text-sm">
            Deploy our interest-bearing NFTs which feature a discrete staking
            pool for the owner only.
          </li>
          <li class="content__item text-sm">
            Continuing to commission works for our HAREM farming platform.
          </li>
          <li class="content__item text-sm">
            Widespread marketing efforts in Japanese, Chinese, Korean and more!
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutBottom"
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;

  &__content {
    position: relative;
    margin-top: 220px;
    padding-bottom: 5%;
    padding-left: 298px;
    max-width: fit-content;
    @include breakpoint("mobile") {
      padding: 0 20px;
      margin-top: 100px;
      max-width: 100%;
    }

    .content {
      &__image {
      }
      &__wrapper {
        // margin-top: 160px;
        position: relative;
        z-index: 2;
        @include breakpoint("mobile") {
        }
      }

      &__caption {
        display: flex;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: $color-white;
        margin-bottom: 32px;
        @include breakpoint("mobile") {
          margin-bottom: 28px;
        }
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
      }
      &__title {
        color: $color-white;
        line-height: 47px;
        margin-bottom: 56px;
        width: 950px;
        @include breakpoint("mobile") {
          margin-bottom: 40px;
          font-size: 28px;
          line-height: 32.34px;
          max-width: 239px;
        }
      }
      &__list {
        list-style: none;
        padding-left: 55px;
      }
      &__item {
        color: $color-white;
        width: 420px;

        &::before {
          display: block;
          content: "";
          width: 40px;
          height: 1px;
          background-color: $color-red;
          position: relative;
          top: 10px;
          right: 52px;
          @include breakpoint("mobile") {
            width: 20px;
            right: 32px;
          }
        }
        margin-bottom: 16px;
        @include breakpoint("mobile") {
          width: 250px;
        }
        &:first-child {
          @include breakpoint("mobile") {
            width: 200px;
          }
        }
      }
    }
  }
  & .image__wrapper {
    position: absolute;
    top: 0;
    right: 30px;
    height: 100%;
    width: 20%;
    z-index: 1;
    padding-top: 80px;
    @include breakpoint("mobile") {
      display: none;
    }

    & .content__image {
      margin: 0 auto;
    }
    .block-shadow {
      position: absolute;
      z-index: -1;
      top: 20%;
      left: 45%;
      transform: translateX(-45%);
      width: 40%;
      max-width: 350px;
      height: 40%;
      background-color: #fd5057;
      opacity: 0.5;
      border-radius: 50%;
      filter: blur(100px);
      @include breakpoint("mobile") {
        top: 10%;
        width: 60%;
      }
    }
  }
  & .image-sticky {
    position: sticky;
    top: 0;
    z-index: 1;
    @include breakpoint("mobile") {
      position: static;
    }
  }
  &__title {
    position: relative;
    color: $color-white;
    z-index: 1;
    width: 60%;
    min-width: 930px;
    margin-bottom: 44px;
    @include breakpoint("mobile") {
      width: 100%;
      max-width: 335px;
      min-width: auto;

      margin-bottom: 56px;
    }

    .title__shadow {
      position: absolute;
      left: 0;
      top: 150px;

      font-weight: 800;
      mix-blend-mode: color;
      text-shadow: 0px 0px 2px #fd5057;
      // color: rgb(53, 54, 67);
      color: initial;
      transform: rotate(90deg) translateY(180%);

      z-index: 1;
      @include breakpoint("mobile") {
        top: 70px;
      }
    }
  }
}
</style>
