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
  tutorialContent = `%3Cp%3ESwagger%20is%20an%20open-source%20software%20framework%20backed%20by%20a%20large%20ecosystem%20of%20tools%20that%20helps%20developers%20design,%20build,%20document,%20and%20consume%20RESTful%20Web%20services.%3C/p%3E%0A%3Cp%3EShivneri%20provides%20a%20seperate%20library%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/Shivneri-swagger%22%3EShivneri-swagger%3C/a%3E%20for%20swagger%20integration.%20It%20provides%20automatic%20generation%20of%20swagger%20documents.%3C/p%3E%0A%3Cp%3ERead%20the%20following%20docs%20for%20more%20information%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Ca%20href=%22/tutorial/swagger/initiate%22%3EInitiate%20Swagger%3C/a%3E%20%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22/tutorial/swagger/model%22%3EDefining%20model%20in%20swagger%3C/a%3E%3C/li%3E%0A%3C/ul%3E`;
  title="Swagger";
  keywords="swagger, automatic generate, integrate, Shivneri, crystal";
  description="How to integrate swagger in Shivneri";
}
</script>
