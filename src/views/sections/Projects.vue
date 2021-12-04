<template>
  <section class="section static">
    <div class="projects section-wrapper">
      <h2 class="header">Projects</h2>
      <!-- <table class="grid">
        <tr>
          <td><h2>Test Project</h2></td>
          <td>test</td>
          <td>test</td>
        </tr>
      </table> -->
      coming soon
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  computed: {},
  components: {},
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
    color: #4c96db;

    &::before {
      border-top: 4px solid #4c96db;
    }
  }

  .grid {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    td {
      width: calc(100% / 3);
    }
  }
}
</style>
