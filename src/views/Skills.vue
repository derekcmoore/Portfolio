<template>
  <section class="section static">
    <div class="section-wrapper">
      <div class="skill-panel" v-scrollAnimation>
        <h4>Languages &amp; Skills</h4>
        <div class="skill-table" v-scrollAnimation>
          <SkillBox :src="'ruby-on-rails.svg'" />
          <SkillBox :src="'vue.svg'" />
          <SkillBox :src="'react.svg'" />
          <SkillBox :src="'angular.svg'" />
          <SkillBox :src="'python.svg'" />
          <SkillBox :src="'aws.svg'" />
          <SkillBox :src="'cSharp.svg'" />
          <SkillBox :src="'dot-net-core.svg'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillBox from "../components/SkillBox.vue";

export default {
  name: "Skills",
  computed: {},
  data() {
    return {};
  },
  components: { SkillBox },
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.skill-panel {
  position: relative;
  top: -80px;
  z-index: 9997;

  box-shadow: rgb(252, 239, 245) 10px -10px, rgb(255, 238, 184) 20px -20px,
    rgb(248, 194, 216) 30px -30px, rgb(241, 179, 195) 40px -40px;
  padding: 32px 10px;
  text-align: center;
  border-radius: 20px;
  background-color: $white;

  @media (max-width: $responsive-width) {
    box-shadow: rgb(252, 239, 245) 0px 10px, rgb(255, 238, 184) 0px 20px,
      rgb(248, 194, 216) 0px 30px, rgb(241, 179, 195) 0px 40px;
  }

  h4 {
    font-size: 1.3rem;
    color: $grey;
  }

  &.before-enter {
    -webkit-transform: scale(0.1);
    -ms-transform: scale(0.1);
    transform: scale(0.1);
  }

  &.enter {
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    transition: all 1s ease;
  }
}

.skill-table {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;

  &.before-enter {
    visibility: hidden;
    opacity: 0;
  }

  &.enter {
    visibility: visible;
    opacity: 1;
    transition: visibility 1.5s, opacity 2s linear;
  }
}
</style>
