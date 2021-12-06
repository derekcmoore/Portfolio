<template>
  <section class="section static">
    <div class="projects section-wrapper">
      <h2 class="header">Projects</h2>
      <div class="grid-list">
        <div class="headline">From useful to fun applications I have built</div>
        <Project :src="'cornhacks.png'" />
      </div>
    </div>
  </section>
</template>

<script>
import Project from "../components/Project.vue";

export default {
  name: "Projects",
  computed: {},
  components: { Project },
  methods: {},
};
</script>

<style scoped lang="scss">
.section {
  padding-top: 65px;
}

.projects {
  width: 100%;
  height: 100vh;

  .header {
    margin-bottom: 65px;
    color: #4c96db;

    &::before {
      border-top: 4px solid #4c96db;
    }
  }

  .grid-list {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    justify-content: space-evenly;
    width: 100%;

    .headline {
      float: left;
      width: calc(100% / 3 - 40px);
      margin-left: 30px;
      margin-top: 20px;
      font-size: 30px;

      @media (max-width: $responsive-width) {
        width: calc(50% - 45px);
      }
    }
  }
}
</style>
