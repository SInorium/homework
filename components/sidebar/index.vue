<template>
  <header class="header d-flex flex-column">
    <nav class="header__navigate navigate">
      <ul class="navigate__list text-md">
        <li class="navigate__item navigate__item--logo">
          <nuxt-link to="/" class="navigate__link navigate__link--logo logo">
            <img src="/icons/logo.svg" alt="Logo Waifu" />
          </nuxt-link>
        </li>
        <template v-for="(link, i) in links">
          <li :key="i" class="navigate__item">
            <nuxt-link :to="link.to" class="navigate__link">{{
              link.text
            }}</nuxt-link>
          </li>
        </template>
      </ul>
      <template>
        <img
          src="/icons/burger__button.svg"
          alt="button"
          class="header-content-burger"
          @click="handleBurgerToggle"
          v-if="!isBurgerToggle"
        />
        <img
          src="/icons/cross.svg"
          alt="cross"
          class="header-content-burger cross"
          @click="handleBurgerToggle"
          v-else
        />
      </template>
    </nav>
    <p class="copyright">Copyright © 2020 Waifu Token</p>

    <transition name="mobile-menu">
      <ModalHeader
        v-if="isBurgerToggle"
        :links="links"
        @close="handleBurgerToggle"
      />
    </transition>
  </header>
</template>

<script>
export default {
  name: "Sidebar",
  components: { ModalHeader: () => import("../modalHeader") },
  data: () => ({
    links: [
      { text: "Home", to: "/" },
      { text: "Harem", to: "/harem" },
      { text: "Marketplace", to: "/marketplace" },
      { text: "NFT Staking", to: "/nft-staking" },
      { text: "Community", to: { path: "/", hash: "#community" } },
      { text: "About Us", to: "/about-us" }
    ],
    isBurgerToggle: false,
    isModalVisible: false
  }),
  methods: {
    handleBurgerToggle() {
      this.isBurgerToggle = !this.isBurgerToggle;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;

  z-index: 99;

  width: 200px;
  height: 100%;

  border-right: 1px solid rgba(255, 255, 255, 0.6);

  @include breakpoint("mobile") {
    width: 100%;
    height: initial;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);

    padding: 14px 20px;
  }

  .navigate {
    @include breakpoint("mobile") {
      display: flex;
      justify-content: space-between;
    }
    &__item {
      margin-bottom: 28px;
      padding-left: 40px;

      &--logo {
        margin-bottom: 200px;
        padding-bottom: 17px;
        padding-top: 22px;
        height: 84px;
        @include breakpoint("mobile") {
          margin: 0;
          padding: 0;
          max-width: 68px;
          height: 22px;
          z-index: 10;
        }
      }
      @include breakpoint("mobile") {
        margin: 0;
        padding: 0;
      }
    }

    &__link:not(.logo) {
      color: $color-white;
      position: relative;
      @include breakpoint("mobile") {
        display: none;
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: -8px;
        height: 1px;
        width: 0;
        background-color: $color-red;
      }
      &:hover {
        &::after {
          width: 100%;
          transition: width 0.5s ease-in-out;
        }
      }
      &:active {
        color: $color-red;
      }
    }
    .header-content-burger {
      display: none;
      @include breakpoint("mobile") {
        display: block;
        max-width: 28px;
        height: 28px;
        width: 100%;
        cursor: pointer;
        z-index: 2;
      }
    }

    .cross {
      display: block;
      @include breakpoint("mobile") {
        max-height: 30px;
      }
    }
  }
  & .active-link {
    color: $color-red !important;
    &::after {
      width: 100% !important;
      transition: width 0.5s ease-in-out;
    }
  }

  .copyright {
    max-width: 135px;
    margin: auto 40px 28px;

    font-size: 14px;
    line-height: 17px;
    opacity: 0.5;

    @include breakpoint("mobile") {
      display: none;
    }
  }
}
.mobile-menu-enter-active {
  transform: translateX(100%);
  transition: transform 0.7s ease-in-out;
}
.mobile-menu-enter-to {
  transform: translateX(0);
}
.mobile-menu-leave-active {
  transition: transform 0.7s ease-in-out;
}
.mobile-menu-leave-to {
  transform: translateX(100%);
}
</style>
