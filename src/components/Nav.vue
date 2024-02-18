<template>
  <nav :class="{ scrolled: scrolled }">
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
      let skillPanel = window.pageYOffset;
      if (window.innerWidth >= 769) this.scrolled = skillPanel >= 460;
      if (window.innerWidth <= 387) this.scrolled = skillPanel >= 180;
      else this.scrolled = skillPanel >= 320;
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
      font-weight: 500;
      margin-right: 15px;

      @media (max-width: $responsive-width) {
        font-size: 1.5rem;
      }
    }

    .occupation {
      display: inline-block;
    }
  }

  .toggle-wrapper {
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>
