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
  tutorialContent = `%3Cp%3EShivneri%20provides%20following%20decorators%20-%20%3C/p%3E%0A%3Col%3E%0A%3Cli%3E%3Ca%20href=%22/tutorial/decorator/expect-body%22%3EExpectBody%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22/tutorial/worker%22%3EWorker%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22/tutorial/worker%22%3ERoute%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22/tutorial/wall%22%3EWall%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22/tutorial/shield%22%3EShield%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22/tutorial/guard%22%3EGuard%3C/a%3E%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22/tutorial/decorator/expect-query%22%3EExpectQuery%3C/a%3E%3C/li%3E%0A%3C/ol%3E`;
  title="Decorator";
  keywords="route, worker, guard, shield, Shivneri, crystal";
  description="This page tells about different decorator present in Shivneri.";
}
</script>
