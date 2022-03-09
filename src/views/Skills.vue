<template>
  <section class="section static">
    <div class="section-wrapper">
      <div class="skill-panel">
        <h4>Languages &amp; Skills</h4>
        <div class="skill-table">
          <SkillBox :src="'ruby-on-rails.svg'" />
          <SkillBox :src="'vue.svg'" />
          <SkillBox :src="'angular.svg'" />
          <SkillBox :src="'react.svg'" />
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

  box-shadow: 0 12px 30px 0 rgb(0 0 0 / 15%);
  padding: 32px 10px;
  text-align: center;
  border-radius: 20px;
  background-color: $white;

  h4 {
    font-size: 1.3rem;
    color: #9faaaf;
  }
}

.skill-table {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}
</style>
