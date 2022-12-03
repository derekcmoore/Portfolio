<template>
  <div class="job">
    <div class="title">
      <img :src="require(`@/assets/img/companies/${src}`)" alt="" />
      <div class="timeline">
        <div v-for="(job, index) in timeline" :key="index">
          {{ job }}
        </div>
      </div>
    </div>

    <div class="content">
      <ul>
        <li
          v-scrollAnimation
          v-for="(line, index) in content"
          :key="index"
          :style="{ '--i': index }"
        >
          {{ line }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: {
    src: String,
    timeline: Array,
    content: Array,
  },
  computed: {},
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
.job {
  position: relative;
  box-shadow: 0 12px 30px 0 rgb(0 0 0 / 15%);
  margin-top: 100px;
  padding: 32px 15px;
  text-align: center;
  border-radius: 20px;
  background-color: $white;

  .title {
    margin-bottom: 40px;

    img {
      max-width: 12em;
      max-height: 5em;
      @media (max-width: $responsive-width) {
        width: 100%;
      }
    }

    .timeline {
      margin-top: 15px;
      color: $grey;
    }
  }

  .content {
    text-align: left;

    ul {
      list-style: none;
      margin: 2em;
      padding: 0;

      li {
        position: relative;
        margin: 0;
        margin-bottom: 1em;
        padding-left: 1.5em;

        &:after {
          content: "";
          height: 0.4em;
          width: 0.4em;
          background: #44107a;
          display: block;
          position: absolute;
          transform: rotate(45deg);
          top: 9px;
          left: 0;
        }
      }
    }
  }
}

.before-enter {
  transform: translateX(-1em);
  opacity: 0;
}

.enter {
  opacity: 1;
  transition: opacity 0.5s linear, transform 0.5s cubic-bezier(0.2, 0.5, 0.1, 1);
  transition-delay: calc(0.1s * var(--i));
  transform: translateX(0);
}
</style>
