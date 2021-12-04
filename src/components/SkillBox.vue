<template>
  <div class="skill">
    <img :src="require(`@/assets/img/${src}`)" alt="" />
  </div>
</template>

<script>
export default {
  name: "Nav",
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
    -webkit-filter: grayscale(0.95);
    -webkit-filter: grayscale(95%);
    filter: grayscale(95%);
    cursor: pointer;

    @media (max-width: $responsive-width) {
      max-width: 100px;
      max-height: 40px;
    }

    &:hover {
      opacity: 1;
      filter: none;
      -webkit-filter: grayscale(0);
    }
  }
}
</style>
