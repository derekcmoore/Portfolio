<template>
  <div class="skill">
    <img :src="require(`@/assets/img/skills/${src}`)" alt="" />
  </div>
</template>

<script>
export default {
  name: "SkillBox",
  props: {
    src: String,
  },
  computed: {},
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.skill {
  position: relative;
  display: flex;
  padding: 20px 60px;

  @media (max-width: $responsive-width) {
    padding: 20px 30px;
  }

  img {
    position: relative;
    max-width: 150px;
    max-height: 60px;
    opacity: 0.7;
    -webkit-filter: $image-filter;
    -webkit-filter: $image-filter;
    filter: $image-filter;
  }
}
</style>
