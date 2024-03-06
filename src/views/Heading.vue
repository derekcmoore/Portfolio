<template>
  <section class="parallax">
    <div class="heading-content">
      <h1 id="heading-text">
        I strive to <span class="text-bg" v-scrollAnimation>enhance</span>
        the lives of others
        <span class="underline" v-scrollAnimation>through software</span>
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "Heading",
  computed: {},
  data() {
    return {
      titleElement: null,
    };
  },
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.section {
  min-height: 750px;
  padding-left: 30px;
  padding-right: 30px;
}

.heading-content {
  position: relative;
  width: 100%;
  max-width: 1080px;
  text-align: center;
  vertical-align: middle;

  -webkit-transform: translateZ(-300px) scale(2);
  transform: translateZ(-300px) scale(2);
  z-index: 3;
  transition: color 0.1s ease-in;
  -webkit-transition: color 0.1s ease-in;
  h1 {
    font-weight: 500;

    @media (max-width: $responsive-width) {
      font-size: 1.5rem;
    }
  }

  .text-bg {
    padding: 0 0.15em;
    color: $white;

    &.before-enter {
      box-shadow: 0 0 0 $font-color inset, 0 0 0 $font-color inset;
    }

    &.enter {
      box-shadow: 50vw 0 0 $font-color inset, -50vw 0 0 $font-color inset;
      transition: box-shadow 3s;
    }
  }

  .underline {
    &.before-enter {
      border-bottom: 5px solid transparent;
    }

    &.enter {
      border-color: $font-color;
      transition: border 1s;
    }
  }
}
</style>
