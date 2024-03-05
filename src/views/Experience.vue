<template>
  <section class="section">
    <div class="experience section-wrapper">
      <h2 class="header" v-scrollAnimation>Experience</h2>
      <Job :src="'sb2.png'" :timeline="sbTimeline" :content="sbContent" />
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
      sbTimeline: ["Senior Software Engineer (Remote), June 2022 - Present"],
      sbContent: [
        "Reconstructed the checkout experience and cross-selling of products",
        "Established and continued communication with partners and customers when implementing changes",
        "Co-led a discovery initiative in application questionnaires and processes",
        "Implemented A/B testing framework and conducted tests to determine customer impact and conversion rates",
        "Aided in the hiring process by conducting technical and cultural fit interviews",
        "Developed new features and maintained multiple services and company gems",
        "Regularly facilitated architecture discussions to ensure any changes followed company standards and best practices",
        "Mentored over five software engineers to ensure their proper career growth",
        "Properly tested any code changes through Rspec and smoke tests",
      ],
      nelnetTimeline: [
        "Software Engineer at PaymentSpring (Remote), May 2020 - June 2022",
      ],
      nelnetContent: [
        "Rewrote an internal admin tool using Ruby on Rails and Vue.js, increasing end-user productivity by reworking the UI and back-end functionality",
        "Aided in the development of production and UAT environments with CloudFormation within AWS, using services such as Parameter Store, ECS, CodePipeline, Lambdas, etc.",
        "Maintained microservices utilizing Ruby on Rails",
        "Utilized Rspec and Jest unit testing across multiple microservices",
        "Led weekly meetings and discussions relating to progress and future product development of applications",
        "Kept continuous communication with product users to ensure feedback became properly implemented during development",
        "Implemented internationalization within multiple Rails applications",
        "Refactored a recurring payment scheduler to utilize AWS ECS scheduled tasks",
        "Directed a team of engineers and business personnel during an innovation week",
      ],
      dplTimeline: ["Software Engineering Intern, May 2019 - August 2019"],
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
    color: #6f27bb;
    border-top: 4px solid #6f27bb;
  }
}
</style>
