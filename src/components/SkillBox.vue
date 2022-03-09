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
    opacity: 0.4;
    filter: gray;
    -webkit-filter: grayscale(0.65);
    -webkit-filter: grayscale(65%);
    filter: grayscale(65%);
    cursor: pointer;

    @media (max-width: $responsive-width) {
      max-width: 100px;
      max-height: 40px;
      filter: none;
      -webkit-filter: none;
      -webkit-filter: none;
      opacity: 1;
    }

    &:hover {
      opacity: 1;
      filter: none;
      -webkit-filter: grayscale(0);
    }
  }
}
</style>
