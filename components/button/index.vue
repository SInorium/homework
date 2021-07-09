<template>
  <button class="btn" :class="`btn--${type}  ${filled ? 'btn--filled' : ''}`">
    <a class="btn__text text-md" :href="link" :target="link ? '_blank' : ''">{{
      text
    }}</a>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      default: "",
      type: String
    },
    text: {
      default: "",
      type: String
    },
    link: {
      default: "",
      type: String
    },
    filled: {
      default: false,
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  height: 48px;
  width: 100%;
  max-width: fit-content;

  position: relative;
  overflow: hidden;

  padding: 11px 32px 18px 32px;

  border: 1px solid $color-white;
  background: transparent;
  color: $color-white;
  /* cursor: pointer; */
  &--filled {
    background: $color-red;
    border-color: $color-red;
    > a {
      color: $color-white;
    }
  }
  &__text {
    position: relative;
    font-weight: 500;
    color: $color-red;
    transition: all 0.1s ease 0.3s;
    &:hover,
    &:active,
    &:visited {
      outline: none;
      color: white;
    }
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 300px;
    width: 30px;
    height: 30px;
    background: $color-white;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &:hover {
    & .btn__text {
      color: $color-red;
    }

    &::before {
      animation: hover-one 1s ease forwards;
    }
  }

  &--secondary {
    border: 1px solid $color-red;
    background: $color-red;

    &::before {
      background: $color-main-red;
    }

    &:hover {
      border-color: $color-main-red;
      transition: border-color 0.1s ease 0.3s;
      & .btn__text {
        color: $color-white;
      }
    }
  }
  @keyframes hover-one {
    0% {
      top: 50%;
      left: 300px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      transform: translateY(-50%);
      opacity: 0;
    }
    25% {
      top: 50%;
      left: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      transform: translateY(-50%);
      opacity: 0.7;
    }
    50% {
      top: 0;
      left: 0;
      width: 25%;
      height: 100%;
      border-radius: 0;
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0;
      transform: translateY(0);
    }
  }
}
</style>
