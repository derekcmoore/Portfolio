<template>
  <section class="section static">
    <div class="about section-wrapper">
      <h2 class="header">About</h2>
      <h2 class="headline">
        Developer with experience in full-stack application development with a
        passion for thoughtful UI design and usability.
      </h2>
      <div class="details">
        <div class="description">
          <p>
            Through my internship opportunities and side projects, I have
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
        <div class="headshot">
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
.section {
  background-image: radial-gradient(
    circle farthest-side at 60% bottom,
    rgba(255, 191, 108, 0.6) 0,
    transparent 60%
  );
}

.about {
  width: 100%;

  .header {
    color: #e07f10;

    &::before {
      border-top: 4px solid #e07f10;
    }
  }

  .headline {
    margin-top: 65px;
    margin-bottom: 65px;
  }

  .details {
    display: flex;
    align-items: center;

    .headshot {
      position: absolute;
      left: 52%;
      right: auto;
      bottom: 0;
      background-color: #ffffff;
      border-radius: 20px 20px 0 0;

      @media (max-width: $responsive-width) {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .border {
        position: relative;
        box-shadow: 0 12px 30px 0 rgb(0 0 0 / 15%);
        padding: 30px 30px 0 30px;

        @media (max-width: $responsive-width) {
          padding: 20px 20px 0 20px;
        }

        img {
          max-height: 340px;
          margin-bottom: -7px;

          @media (max-width: $responsive-width) {
            max-height: unset;
            width: 100%;
          }
        }
      }
    }

    .description {
      width: 50%;

      @media (max-width: $responsive-width) {
        width: 100%;
        padding-bottom: 75%;
      }
    }
  }
}
</style>
