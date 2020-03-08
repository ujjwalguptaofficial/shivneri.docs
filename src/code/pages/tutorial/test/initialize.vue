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
  tutorialContent = `%3Cp%3Einitialize%20is%20a%20method%20in%20a%20controller%20which%20initializes%20a%20controller%20&amp;%20set%20the%20controller%20property%20provided%20in%20param.%20This%20is%20helpful%20when%20you%20are%20doing%20unit%20testing%20where%20you%20want%20to%20set%20the%20controller%20properties.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Let's%20say%20i%20want%20to%20set%20the%20%3Ccode%3Ebody%3C/code%3E%20&amp;%20%3Ccode%3Equery%3C/code%3E%20of%20%3Ccode%3EUserController%3C/code%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%3Econst%20userControllerObj%20=%20new%20UserController();%0AuserControllerObj.initialize(%7B%0A%20%20%20%20body:%7B%0A%20%20%20%20%20%20%20%20name:'ujjwal',%0A%20%20%20%20%20%20%20%20gender:'male'%0A%20%20%20%20%7D,%0A%20%20%20%20query:%7B%0A%20%20%20%20%20%20%20%20id:1%0A%20%20%20%20%7D%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20same%20way%20-%20you%20can%20set%20other%20properties%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Erequest:%20HttpRequest;%3C/li%3E%0A%3Cli%3Equery:%20%7B%20%5Bkey:%20string%5D:%20string%20%7D;%3C/li%3E%0A%3Cli%3Ebody:%20%7B%20%5Bkey:%20string%5D:%20any%20%7D;%3C/li%3E%0A%3Cli%3EcookieValue:%20%7B%20%5Bkey:%20string%5D:%20string%20%7D;%3C/li%3E%0A%3Cli%3Eparam:%20%7B%20%5Bkey:%20string%5D:%20string%20%7D;%3C/li%3E%0A%3Cli%3Edata:%20%7B%20%5Bkey:%20string%5D:%20any%20%7D;%3C/li%3E%0A%3Cli%3Efile:%20%7B%20%5BfieldName:%20string%5D:%20HttpFile%20%7D%3C/li%3E%0A%3C/ul%3E`;
  title="Initialize Controller";
  keywords="test, unit, initialize, Shivneri, crystal";
  description="initialize is a method in a controller which initializes a controller.";
}
</script>
