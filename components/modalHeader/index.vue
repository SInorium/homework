<template>
  <div class="header-modal d-flex">
    <div class="header-modal-links-wrapper d-flex">
      <template v-for="link in links">
        <nuxt-link
          :key="link.text"
          :to="link.to"
          class="header-modal-links"
          v-if="!link.modal"
          @click.native="closeHeaderModal"
        >
          {{ link.text }}
        </nuxt-link>
      </template>
    </div>
    <div class="header-modal-footer-wrapper d-flex"></div>
    <div class="header-modal-contacts-wrapper">
      <Contacts />
    </div>
    <p class="copyright">Copyright © 2020 Waifu Token</p>
  </div>
</template>

<script>
import { mutations } from "../../plugins/modal";
import { Contacts } from "../../components/index";
export default {
  components: { Contacts },
  name: "ModalHeader",
  props: ["links"],
  methods: {
    closeHeaderModal() {
      this.$emit("close");
    },
    toggleModalForm() {
      mutations.toggleModal();
      this.closeHeaderModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.header-modal {
  display: none;
  @include breakpoint("mobile") {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: $color-black;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-top: 50px;
    &-links-wrapper {
      flex-direction: column;
      align-items: center;

      :last-child {
        margin-bottom: 0;
      }
    }

    &-links {
      margin-bottom: 40px;
      font-size: 24px;
      color: $color-white;
      &:hover {
        color: $color-red;
      }
    }
    & > .copyright {
      max-width: 250px;
      margin: 25px auto;

      font-size: 12px;
      line-height: 17px;
      opacity: 0.5;
    }
    &-contacts-wrapper {
      margin-top: 140px;
      > .contacts {
        display: block;
        position: static;
        margin: 0;
        transform: none;
      }
    }
  }

  body {
    overflow-x: hidden !important;
  }
}
</style>
