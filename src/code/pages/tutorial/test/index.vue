<template>
<Tutorial :pageDescription="description" :pageKeywords="keywords" :innerHtml="tutorialContent" :pageTitle="title"></Tutorial>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Tutorial from "~/components/tutorial.vue";
@Component({
  components: {
    Tutorial
  }
})
export default class extends Vue {
  tutorialContent = `%3Cp%3ESetting%20up%20test%20configuration%20is%20very%20easy%20in%20Shivneri,%20infact%20Shivneri%20already%20provides%20setup%20configuration%20for%20unit%20testing%20and%20e2e%20testing.%3C/p%3E%0A%3Cp%3EThe%20default%20setup%20uses%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EJest%20as%20a%20test%20framework%3C/li%3E%0A%3Cli%3EAxios%20for%20sending%20http%20request%20in%20e2e%20test%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3EThe%20default%20setup%20adds%20the%20unit%20test%20cases%20inside%20particular%20components%20folder%20&amp;%20e2e%20test%20cases%20inside%20dedicated%20folder%20e2e.%20%0Ae.g%20-%20controllers%20test%20are%20added%20in%20controllers%20folder%20with%20suffix%20%22.test%22%20-%20test%20for%20%22user_controller.js%22%20is%20added%20into%20file%20%22user-controller.test.js%22.%3C/p%3E%0A%3Cp%3EHowever%20with%20the%20project%20growing,%20its%20very%20necessary%20to%20put%20your%20test%20cases%20in%20seperate%20dedicated%20folder.%20So%20feel%20free%20to%20rearrange%20the%20files.%3C/p%3E%0A%3Ch4%20id=%22testcommand%22%3ETest%20Command%3C/h4%3E%0A%3Cp%3EThe%20default%20setup%20is%20configured%20with%20script%20test,%20so%20command%20-%20%3Ccode%3Enpm%20run%20test%3C/code%3E%20will%20run%20all%20test%20cases.%20It%20sets%20the%20%3Ccode%3ENODE_ENV%3C/code%3E%20as%20test.%3C/p%3E%0A%3Ch4%20id=%22testexamples%22%3ETest%20Examples%3C/h4%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/test/unit-test%22%3EUnit%20Test%3C/a%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Ca%20href=%22/tutorial/test/e2e-test%22%3Ee2e%20Test%3C/a%3E%3C/p%3E%3C/li%3E%0A%3C/ul%3E`;
  title="Test";
  keywords="test, unit, e2e, Shivneri, crystal";
  description="Setting up test in Shivneri";
}
</script>
