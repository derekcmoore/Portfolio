<template>
  <section class="section static">
    <div class="experience section-wrapper">
      <h2 class="header">Experience</h2>
      <Job
        :src="'nelnet.png'"
        :timeline="nelnetTimeline"
        :content="nelnetContent"
      />
      <Job
        :src="'dont_panic_labs.png'"
        :timeline="dplTimeline"
        :content="dplContent"
      />
    </div>
  </section>
</template>

<script>
import Job from "../components/Job.vue";

export default {
  name: "Experience",
  computed: {},
  data() {
    return {
      nelnetTimeline: [
        "Software Engineer at PaymentSpring (Remote), June 2021-Present",
        "Software Engineering Intern at PaymentSpring (Remote), May 2020-June 2021",
      ],
      nelnetContent: [
        "Rewrote an internal admin tool using Ruby on Rails and Vue.js, increasing end-user productivity by reworking the UI and back-end functionality",
        "Aided in the development of production and UAT environments with CloudFormation within AWS, using services such as Parameter Store, ECS, CodePipeline, Lambdas, etc.",
        "Maintained microservices utilizing Ruby on Rails",
        "Utilized Rspec and Jest unit testing across multiple microservices",
        "Led weekly meetings and discussions relating to progress and future product development of applications",
        "Kept continuous communication with product users to ensure feedback became properly implemented during development",
        "Implemented internationalization within multiple Rails applications",
        "Rewrote the recurring payment scheduler to utilize AWS ECS scheduled tasks",
        "Managed and led a team of engineers and business personnel during an innovation week",
      ],
      dplTimeline: ["Software Engineering Intern, May 2019-August 2019"],
      dplContent: [
        "Developed a single solution using IDesign architecture principles",
        "Created a project management tool from the beginning using Angular and ASP.NET Core",
        "Wrote unit tests for API implementations using Moq",
        "Implemented continuous integration and continuous deployment using Azure DevOps pipelines",
        "Utilized Azure hosting for frontend and backend solutions",
      ],
    };
  },
  components: { Job },
  methods: {},
};
</script>

<style scoped lang="scss">
.section {
  padding-top: 65px;
  padding-bottom: 80px;
}

.experience {
  width: 100%;

  .header {
    color: #4cdb64;

    &::before {
      border-top: 4px solid #4cdb64;
    }
  }
}
</style>
