<template>
  <section class="section">
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
    color: #176efa;
    border-top: 4px solid #176efa;
  }

  .headline {
    margin-top: 65px;
    margin-bottom: 65px;

    background-image: linear-gradient(
      -225deg,
      #3c38f5 0%,
      #666efe 29%,
      #ef698b 67%,
      #f672a6 100%
    );
    background-clip: border-box;
    background-size: 200% auto;
    color: $white;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 15s linear infinite;
    animation-direction: reverse;
    display: inline-block;
    font-weight: 500;

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
    .description {
      width: 100%;

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
