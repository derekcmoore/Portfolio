<template>
  <section class="heading section parallax">
    <div class="heading-content" id="heading-text">
      <h1>
        I strive to <span class="white" v-scrollAnimation>enhance</span>
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
    return {};
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
      if (window.innerWidth >= 768) this.setMargin(window.pageYOffset);
    },
    setMargin(margin) {
      document.getElementById("heading-text").style.marginTop = `${margin}px`;
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

  background-image: url("~@/assets/img/heading-bg.svg");
  background-attachment: fixed;

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

    .white {
      padding: 0 0.15em;
      color: #092372;

      &.before-enter {
        box-shadow: 0 0 0 #fff inset, 0 0 0 #fff inset;
      }

      &.enter {
        box-shadow: 50vw 0 0 #fff inset, -50vw 0 0 #fff inset;
        transition: box-shadow 3s;
      }
    }

    .underline {
      &.before-enter {
        border-bottom: 5px solid transparent;
      }

      &.enter {
        border-color: $white;
        transition: border 3s;
      }
    }
  }
}
</style>
