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
}

.section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  &.static {
    align-items: normal;
    justify-content: left;
    max-width: 1800px;
    margin: 0 auto;
  }

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
    }
  }
}

.parallax {
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
