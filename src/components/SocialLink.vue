<template>
  <div class="social-link" @click="redirect()">
    <img :src="require(`@/assets/img/${src}`)" alt="" />
  </div>
</template>

<script>
export default {
  name: "SocialLink",
  props: {
    src: String,
    url: String,
  },
  computed: {},
  components: {},
  methods: {
    redirect() {
      window.open(this.url, "_blank").focus();
    },
  },
};
</script>

<style scoped lang="scss">
.social-link {
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 10px;
  width: 15px;
  height: 15px;
  padding: 10px;
  line-height: 10px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50px;

  img {
    max-width: 100%;
    -webkit-filter: invert(100%);
    filter: invert(100%);
    cursor: pointer;

    @media (max-width: $responsive-width) {
    }
  }

  &:hover {
    opacity: 0.6;
  }
}
</style>
