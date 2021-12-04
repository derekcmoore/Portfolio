<template>
  <div id="home" class="home wrapper">
    <Heading />
    <Skills />
    <About />
    <Projects />
    <Experience />
    <Footer />
  </div>
</template>

<script>
import Heading from "./sections/Heading.vue";
import Skills from "./sections/Skills.vue";
import About from "./sections/About.vue";
import Projects from "./sections/Projects.vue";
import Experience from "./sections/Experience.vue";
import Footer from "./sections/Footer.vue";

export default {
  name: "Home",
  computed: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: { Heading, Skills, About, Projects, Experience, Footer },
};
</script>

<style lang="scss">
.wrapper {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 4px;
  transform-style: preserve-3d;
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
    color: #263238;

    .header {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.08em;
      line-height: 1.5em;

      &::before {
        display: block;
        content: " ";
        width: 60px;
        height: 10px;
        transition: width 0.3s ease;
      }
    }
  }
}

.parallax::after {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateY(-40px) scale(1.1);
  transform-style: preserve-3d;
  background-size: cover;
  background-position: center;
  z-index: -1;
  @media (max-width: $responsive-width) {
    transform: unset;
  }
}
</style>
