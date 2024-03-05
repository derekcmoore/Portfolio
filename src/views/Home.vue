<template>
  <div id="home" class="home wrapper">
    <Heading />
    <Skills />
    <About />
    <!-- <Projects /> -->
    <Experience />
    <Footer />
  </div>
</template>

<script>
import Heading from "./Heading.vue";
import Skills from "./Skills.vue";
import About from "./About.vue";
// import Projects from "./Projects.vue"; TODO: Add projects page
import Experience from "./Experience.vue";
import Footer from "./Footer.vue";

export default {
  name: "Home",
  computed: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: { Heading, Skills, About, Experience, Footer },
};
</script>

<style lang="scss">
.wrapper {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  -webkit-perspective: 300px;
  perspective: 300px;

  background-image: $heading-bg;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: $off-white;
  -webkit-transition: background-color 0.1s ease-in;
  transition: background-color 0.1s ease-in;

  .section-wrapper {
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 30px;
    padding-right: 30px;
    overflow-y: visible;
    position: relative;
    color: $font-color;

    .header {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.08em;
      line-height: 1.5em;
      padding-top: 10px;
      width: 60px;

      &.before-enter {
        opacity: 0;
        width: 0px;
      }

      &.enter {
        opacity: 1;
        width: 60px;
        transition: opacity 1s linear, width 1s ease-in;
      }
    }
  }
}

.parallax {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  -webkit-transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
}
</style>
