<template>
  <section class="section static">
    <div class="about section-wrapper">
      <h2 class="header" v-scrollAnimation>About</h2>
      <h2 class="headline" v-scrollAnimation>
        Developer with experience in full-stack application development with a
        passion for thoughtful UI design and usability.
      </h2>
      <div class="details">
        <div class="description" v-scrollAnimation>
          <p>
            Through my professional opportunities and side projects, I have
            developed a passion for Application Development and Software
            Engineering. From self-teaching myself React to developing a
            full-stack application using Ruby on Rails and Vue, I always want to
            stay ahead of the game by learning new frameworks and technologies
            in my free time.
          </p>
          <p>
            I am always striving to be the best version of myself through hard
            work and self-motivation. I hope to impact those around me by
            developing a healthy work culture through my positive outlook and
            work demeanor. I want to learn from my teammates and help them grow
            while developing meaningful software along the way.
          </p>
        </div>
        <div class="headshot" v-scrollAnimation>
          <div class="border">
            <img src="@/assets/img/headshot.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  computed: {},
  data() {
    return {};
  },
  components: {},
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.about {
  width: 100%;

  .header {
    color: #ff1361;
    border-top: 4px solid #ff1361;
  }

  .headline {
    margin-top: 65px;
    margin-bottom: 65px;

    background-image: linear-gradient(
      -225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%
    );
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 6s linear infinite;
    animation-direction: reverse;
    display: inline-block;

    @keyframes textclip {
      to {
        background-position: 200% center;
      }
    }

    &.before-enter {
      opacity: 0;
      transform: translateY(-4em);
    }

    &.enter {
      opacity: 1;
      transition: opacity 1s linear, transform 2s cubic-bezier(0.2, 0.5, 0.1, 1);
      transform: translateY(0);
    }
  }

  .details {
    display: flex;
    align-items: center;

    .headshot {
      position: absolute;
      left: 56%;
      right: auto;
      bottom: 0;
      background-color: $white;
      border-radius: 20px;
      box-shadow: 0 12px 30px 0 rgb(0 0 0 / 15%);
      transition: 0.5s linear;

      &:hover {
        transform: rotate(0deg) !important;
      }

      @media (max-width: $responsive-width) {
        right: 0;
        bottom: 0;
        left: 0;
        transform: rotate(0deg);
        border-radius: 0px;
      }

      .border {
        position: relative;
        padding: 30px;

        @media (max-width: $responsive-width) {
          padding: 20px;
        }

        img {
          max-height: 300px;

          @media (max-width: $responsive-width) {
            max-height: unset;
            width: 100%;
          }
        }
      }

      &.before-enter {
        transform: translateX(4em) rotate(0);
        opacity: 0;
      }

      &.enter {
        opacity: 1;
        transition: opacity 1s linear,
          transform 2s cubic-bezier(0.2, 0.5, 0.1, 1);
        transform: translateX(0) rotate(5deg);

        @media (max-width: $responsive-width) {
          transform: translateX(0) rotate(0deg);
        }
      }
    }

    .description {
      width: 50%;

      @media (max-width: $responsive-width) {
        width: 100%;
        padding-bottom: 75%;
      }

      &.before-enter {
        transform: translateX(-4em);
        opacity: 0;
      }

      &.enter {
        opacity: 1;
        transition: opacity 1s linear,
          transform 2s cubic-bezier(0.2, 0.5, 0.1, 1);
        transform: translateX(0);
      }
    }
  }
}
</style>
