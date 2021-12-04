<template>
  <section class="heading section parallax">
    <div class="heading-content" :style="{ 'padding-top': `${marginTop}px` }">
      <h1>
        I strive to <span class="white">enhance</span>
        the lives of others
        <span class="underline">through software</span>
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
      marginTop: 0,
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
      if (window.innerWidth >= 768)
        this.marginTop = document.getElementById("home").scrollTop * 1.4;
      else this.marginTop = 0;
    },
  },
};
</script>

<style scoped lang="scss">
.section {
  height: 80vh;

  @media (max-width: $responsive-width) {
    height: 65vh;
  }
}

.heading {
  padding-left: 30px;
  padding-right: 30px;

  &::after {
    background-image: url("~@/assets/img/heading-bg.svg");
    background-attachment: scroll;
  }

  .heading-content {
    position: relative;
    width: 100%;
    max-width: 1080px;
    text-align: center;

    @media (max-width: $responsive-width) {
      h1 {
        font-size: 1.5rem;
      }
      margin-top: 25px;
    }

    .white {
      padding: 0 0.15em;
      color: #092372;
      background-color: #ffffff;
    }

    .underline {
      border-bottom: 5px solid #ffffff;
    }
  }
}
</style>
