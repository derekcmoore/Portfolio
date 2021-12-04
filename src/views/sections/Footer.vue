<template>
  <footer class="footer">
    <div class="content">
      <div class="title">
        <div class="name">Derek Moore</div>
        <div class="occupation">Software Engineer</div>
      </div>
      <div class="socials">
        <div>Follow me</div>
        <div class="icons">
          <SocialLink
            :src="'linkedin.svg'"
            :url="'https://www.linkedin.com/in/derek-c-moore/'"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialLink from "../../components/SocialLink.vue";

export default {
  name: "Footer",
  computed: {},
  components: { SocialLink },
  methods: {},
};
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  padding: 46px 30px 54px 30px;
  background: #21292e;
  color: #ffffff;

  .content {
    max-width: 1280px;
    display: flex;
    margin-left: auto;
    margin-right: auto;

    .title {
      width: 50%;

      .name {
        display: inline-block;
        font-size: 40px;
        font-weight: 500;
        margin-right: 15px;

        @media (max-width: $responsive-width) {
          font-size: 1.5rem;
        }
      }

      .occupation {
        display: inline-block;
      }
    }

    .socials {
      position: relative;
      color: rgba(255, 255, 255, 0.6);
      width: 50%;
      text-align: right;

      .icons {
        position: absolute;
        right: 0;
        margin-top: 10px;
      }
    }
  }
}
</style>
