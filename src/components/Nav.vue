<template>
  <nav :class="{ scrolled: scrolled }" id="nav">
    <div class="nav-content">
      <div class="title">Derek Moore</div>
      <div class="occupation">Software Engineer</div>
    </div>
    <div class="toggle-wrapper">
      <ToggleSlider :is_toggled="is_toggled" @toggle="toggleDarkMode($event)" />
    </div>
  </nav>
</template>

<script>
import ToggleSlider from "@/components/ToggleSlider.vue";
import CookiesMixin from "@/helpers/cookies.js";

export default {
  name: "Nav",
  computed: {},
  mixins: [CookiesMixin],
  data() {
    return {
      scrolled: false,
      is_toggled: false,
    };
  },
  components: { ToggleSlider },
  created() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll, true);

    this.toggleDarkMode(this.getCookie("dark-mode") === "true");
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      let distance = this.getRelativeScrollHeight();
      this.scrolled = distance <= 0;
    },
    toggleDarkMode(toggle) {
      this.is_toggled = toggle;
      this.setCookie("dark-mode", this.is_toggled);
      if (this.is_toggled) {
        document.documentElement.className = "dark";
      } else {
        document.documentElement.className = "";
      }
    },
    getRelativeScrollHeight() {
      let nav = document.getElementById("nav");
      let headingText = document.getElementById("heading-text");
      if (headingText && nav) {
        let headingPosition = headingText.getBoundingClientRect().top + window.scrollY;
        let navPosition = nav.getBoundingClientRect().bottom + window.scrollY;
        return headingPosition - navPosition;
      } else {
        return 100;
      }
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 25px 30px;
  z-index: 9999;
  overflow-y: hidden;
  top: 0;
  background-color: transparent;
  color: $font-color;
  transition: background-color 0.1s ease;
  box-sizing: border-box;

  &.scrolled {
    box-shadow: 0 3px 8px rgb($black-rgb / 0.15);
    background-color: $white;
    color: $font-color;
    height: auto;
  }

  .nav-content {
    max-width: 1280px;

    .title {
      display: inline-block;
      font-size: 40px;
      font-weight: 400;
      margin-right: 15px;

      @media (max-width: $responsive-width) {
        font-size: 1.5rem;
      }
    }

    .occupation {
      display: inline-block;
      font-weight: 300;
    }
  }

  .toggle-wrapper {
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>
