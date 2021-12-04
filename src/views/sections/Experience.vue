<template>
  <section class="section static">
    <div class="experience section-wrapper">
      <h2 class="header">Experience</h2>
      coming soon
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
  computed: {},
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.section {
  background-image: linear-gradient(
    177deg,
    rgba(172, 11, 137, 0.2) 0,
    transparent 65%
  );
  padding-top: 65px;
  padding-bottom: 80px;
}

.experience {
  width: 100%;
  height: 100vh;

  .header {
    color: #ba4cdb;

    &::before {
      border-top: 4px solid #ba4cdb;
    }
  }
}
</style>
