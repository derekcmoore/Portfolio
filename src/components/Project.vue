<template>
  <div class="project"></div>
</template>

<script>
export default {
  name: "Project",
  props: {
    src: String,
    content: Array,
  },
  computed: {},
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.project {
  float: left;
  width: calc(100% / 3 - 40px);
  margin-left: 30px;
  margin-top: 20px;
  font-size: 30px;

  @media (max-width: $responsive-width) {
    width: calc(50% - 45px);
  }
}
</style>
