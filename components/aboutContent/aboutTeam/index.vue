<template>
  <section class="section">
    <div>
      <h2 class="section__title title">
        Who We Are
        <span class="title__hint">Spoiler: nerds with no gf</span>
      </h2>
      <p class="section__description">
        We are an international team of artists, developers and entrepreneurs
        with blockchain experience. Our organization spans three continents and
        we are always looking for new team members or advisors who share our
        vision!
      </p>
    </div>
    <div class="section__team team d-flex">
      <div class="team__left team__list">
        <h3 class="team__title">THE TEAM</h3>
        <div class="card__container d-flex">
          <template v-for="(card, i) in team">
            <div class="team__card card" :key="i">
              <img
                class="card__image"
                :src="require(`@/static/images/team/${card.img}.png`)"
              />
              <span class="card__name">{{ card.name }}</span>
              <hr class="card__line" />
              <span class="card__post" v-if="card.position">{{
                card.position
              }}</span>
              <a
                class="card__twitter"
                v-if="card.twitter"
                :href="`https://twitter.com/${card.twitter}`"
                target="_blank"
                >{{ card.twitter }} <img src="/icons/arrow.svg" alt="arrow" />
              </a>
            </div>
          </template>
        </div>
      </div>
      <div class="team__right team__list">
        <h3 class="team__title">OUR ADVISORS</h3>
        <div class="card__container d-flex">
          <template v-for="(card, i) in advisors">
            <div class="team__card card" :key="i">
              <img
                class="card__image"
                :src="require(`@/static/images/team/${card.img}.png`)"
              />
              <span class="card__name">{{ card.name }}</span>
              <hr class="card__line" />
              <span class="card__post" v-if="card.position">{{
                card.position
              }}</span>
              <a
                class="card__twitter"
                v-if="card.twitter"
                :href="`https://twitter.com/${card.twitter}`"
                target="_blank"
                >{{ card.twitter }} <img src="/icons/arrow.svg" alt="arrow" />
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="mail-us">
      <p class="mail-us__desc">
        Questions? Comments? Free taco coupons to share? Real business
        inquiries?
      </p>
      <a class="mail-us__link" href="mailto:info@waifutoken.io" target="_blank"
        >info@waifutoken.io</a
      >
      <img class="mail-us__img" alt="lam" src="/images/lam.png" />
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutTeam",
  data() {
    return {
      team: [
        {
          img: "jerry",
          name: "Jerry",
          position: "Founder",
          twitter: "@ThinkingLSD"
        },
        {
          img: "junaid",
          name: "Junaid",
          position: "Project Lead",
          twitter: "@tekkaadan"
        },
        {
          img: "umr",
          name: "UMR",
          position: "Product Design",
          twitter: "@codealdnoah"
        }
      ],
      advisors: [
        {
          img: "trill",
          name: "Trill",
          twitter: "@trilldeceased"
        },
        {
          img: "steve",
          name: "Steve IP",
          position: "Entrepeneur, Game Designer"
        },
        {
          img: "arcadia",
          name: "The Arcadia Group",
          position: "Blockchain Development",
          twitter: "@TheArcadiaGroup"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  position: relative;
  padding-left: 298px;
  padding-right: 80px;
  max-width: 100%;
  overflow: hidden;
  @include breakpoint("mobile") {
    padding: 0 20px;
  }
  & .title {
    font-size: 40px;
    &__hint {
      display: block;
      margin-top: 12px;
      font-size: 16px;
      opacity: 0.7;
    }
  }
  &__description {
    margin-top: 56px;
    max-width: 479px;
    font-size: 18px;
    line-height: 1.4em;
  }
  & .team {
    width: 100%;
    margin-top: 70px;
    justify-content: space-between;
    @include breakpoint("desktop_sm") {
      flex-wrap: wrap;
    }
    @include breakpoint("mobile") {
      flex-wrap: wrap;
    }
    &__left {
      margin-right: 30px;
      max-width: 48%;
      @include breakpoint("desktop_sm") {
        max-width: 100%;
      }
      @include breakpoint("mobile") {
        flex-wrap: wrap;
        margin-right: 0;
      }
    }
    &__right {
      width: 48%;
      @include breakpoint("desktop_sm") {
        margin-top: 80px;
        width: 100%;
        max-width: 100%;
      }
      @include breakpoint("mobile") {
        margin-top: 40px;
      }
    }
    &__title {
      flex-basis: 100%;
      font-size: 20px;
      height: 1em;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @include breakpoint("mobile") {
        width: 100%;
      }
      & .card {
        margin-top: 20px;
        max-width: 160px;
        width: 100%;
        height: 300px;
        &:not(:last-child) {
          margin-right: 15px;
        }
        @include breakpoint("mobile") {
          max-width: 150px;
          height: 300px;
          margin-right: 18px;
          &:nth-child(2) {
            margin-right: 0;
          }
        }
        &__container {
          width: 100%;
          @include breakpoint("mobile") {
            flex-wrap: wrap;
          }
        }
        &__image {
          width: 100%;
          height: 100%;
          max-width: 180px;
          max-height: 249px;
          object-fit: cover;
          @include breakpoint("mobile") {
            max-height: 200px;
          }
        }
        &__name {
          display: block;
          font-size: 16px;
          margin-top: 16px;
          margin-bottom: 10px;
        }
        &__post {
          display: block;
          margin-top: 10px;
          font-size: 16px;
          opacity: 0.6;
        }
        &__twitter {
          display: inline-block;
          margin-top: 10px;
          font-size: 16px;
          color: $color-red;
          padding-bottom: 3px;
          &:hover,
          &:active {
            border-bottom: 1px solid $color-red;
            color: $color-red;
          }
          @include breakpoint("mobile") {
            font-size: 0.9em;
            margin-bottom: 10px;
          }

          > img {
            transform: translateY(2px);
            display: inline-block;
          }
        }
      }
    }
  }
  & .mail-us {
    margin-top: 150px;
    position: relative;
    padding-bottom: 100px;
    &__desc {
      font-size: 40px;
      max-width: 50%;
      margin-bottom: 40px;
    }
    &__link {
      font-size: 20px;
      color: $color-red;
    }
    &__img {
      -webkit-user-select: none;
      pointer-events: none;
      position: absolute;
      bottom: -450px;
      right: 0;
    }
    @include breakpoint("mobile") {
      margin-top: 100px;
      padding-bottom: 350px;
      &__desc {
        font-size: 28px;
        max-width: 100%;
      }
      &__img {
        bottom: -300px;
        right: -20px;
      }
    }
  }
}
</style>
