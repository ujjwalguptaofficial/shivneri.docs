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
  tutorialContent = `%3Cp%3ELogging%20is%20a%20very%20necessary%20part%20of%20development.%20We%20log%20for%20debugging,%20saving%20exception,%20information%20etc.%3C/p%3E%0A%3Cp%3EThat's%20why%20Shivneri%20provides%20a%20default%20logger%20which%20is%20very%20simple%20&amp;%20logs%20everything%20in%20console.%20The%20advantage%20of%20provided%20logger%20is%20that%20you%20don't%20need%20to%20import%20it%20everywhere.%3C/p%3E%0A%3Cp%3EThe%20%3Ccode%3Elogger%3C/code%3E%20is%20a%20class%20member%20of%20all%20components%20i.e%20controller,%20shield,%20wall,%20guard.%20Let's%20see%20an%20example%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20Worker%20%7D%20from%20%22Shivneri%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20@Worker()%0A%20%20%20async%20getAllUsers()%7B%0A%20%20%20%20%20%20%20const%20users%20=%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20id:1,%0A%20%20%20%20%20%20%20%20%20%20%20name:'ujjwal'%0A%20%20%20%20%20%20%20%7D%5D;%0A%20%20%20%20%20%20%20//%20log%20users%0A%20%20%20%20%20%20%20this.logger.debug('users%20are',%20users);%0A%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EBut%20you%20might%20want%20to%20log%20everything%20in%20files%20or%20database,%20so%20want%20to%20customize%20the%20logger.%20Logger%20can%20be%20customized%20very%20easily%20by%20creating%20a%20class%20&amp;%20extending%20%3Ccode%3ELogger%3C/code%3E%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Logger%20%7D%20from%20'Shivneri';%0A%0Aexport%20class%20CustomLogger%20extends%20Logger%20%7B%0A%20%20%20%20debug(message)%20%7B%0A%20%20%20%20%20%20%20%20//%20do%20anything%20with%20message%0A%20%20%20%20%7D%0A%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ELogger%20has%20following%20methods%20available%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Edebug(%E2%80%A6args)%3C/li%3E%0A%3Cli%3Einfo(%E2%80%A6args)%3C/li%3E%0A%3Cli%3Eerror(%E2%80%A6args)%3C/li%3E%0A%3Cli%3Elog(%E2%80%A6args)%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3ESince%20you%20are%20extending,%20you%20can%20create%20your%20own%20method%20too.%3C/p%3E%0A%3Cp%3E%3Cbr%3E%0AFor%20more%20help%20-%20You%20can%20see%20examples%20for%20%3Ca%20href=%22https://www.npmjs.com/package/winston%22%3Ewinston%3C/a%3E%20implementation%20:%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/Shivneri/tree/master/example/winston%22%3Ehttps://github.com/ujjwalguptaofficial/Shivneri/tree/master/example/winston%3C/a%3E%3C/p%3E`;
  title="Logger";
  keywords="logger, customization, Shivneri, crystal";
  description="How to use & customize logger in Shivneri";
}
</script>
