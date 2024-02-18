<template>
  <section class="heading section parallax">
    <div class="heading-content" id="heading-text">
      <h1>
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
  created() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      if (window.innerWidth >= 768) this.setMargin();
    },
    setMargin() {
      if (!this.titleElement) {
        this.titleElement = document.getElementById("heading-text");
      }
      this.titleElement.style.marginTop = `${window.scrollY}px`;
    },
  },
};
</script>

<style scoped lang="scss">
.section {
  height: 80vh;
  min-height: 750px;

  @media (max-width: $responsive-width) {
    height: 65vh;
    min-height: 500px;
  }
}

.heading {
  padding-left: 30px;
  padding-right: 30px;
  background-image: $heading-bg;
  background-attachment: fixed;
  color: $font-color;

  -webkit-transition: background-image 0.25s ease-in;
  transition: background-image 0.25s ease-in;

  @media (max-width: $responsive-width) {
    background-attachment: scroll;
  }

  .heading-content {
    position: relative;
    width: 100%;
    max-width: 1080px;
    text-align: center;
    vertical-align: middle;

    @media (max-width: $responsive-width) {
      h1 {
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
        transition: border 3s;
      }
    }
  }
}
</style>
