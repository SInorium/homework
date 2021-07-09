<template>
  <nav class="contacts">
    <ul class="contacts__list">
      <template v-for="(val, name) in links">
        <ContactLink :key="val" :to="val" :img="name"/>
      </template>
    </ul>
  </nav>
</template>

<script>
import ContactLink from "./contact-link";
export default {
  name: "Contacts",
  components: {
    ContactLink
  },
  data() {
    return {
      links: {
        twitter: "https://twitter.com/WaifuToken",
        telegram: " https://t.me/waifutoken",

        uniswap:
          "https://info.uniswap.org/pair/0xb27c012b36e79decb305fd1e512ba90eb035a6fa",
        medium: "https://medium.com/@waifutoken",
        discord: "https://discord.gg/KYpC7uGBqs",
        instagram: "https://www.instagram.com/waifutoken/",
        reddit: "https://www.reddit.com/r/WaifuToken/"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  align-items: center;
  margin-left: 88px;
  z-index: 3;
  position: fixed;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  &__list {
    @include breakpoint("mobile") {
      display: flex;
    }
  }
  &__item {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 15px;
      @include breakpoint("mobile") {
        margin: 0;
        margin-right: 21px;
      }
    }
    & > a {
      display: flex;
      align-items: center;
      justify-content: center;
      & .link__img {
        width: 30px;
        height: 30px;
        transition: all 0.1s ease-out;
        filter: invert(100%);
      }

      &:hover {
        padding: 8px;
        & .link__img {
          transform: scale(1.1);
          filter: invert(45%) sepia(87%) saturate(4089%) hue-rotate(332deg)
            brightness(116%) contrast(121%);
        }
      }
    }
  }
  @include breakpoint("mobile") {
    display: none;
  }
}
</style>
