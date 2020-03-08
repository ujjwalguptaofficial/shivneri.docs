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
  tutorialContent = `%3Cp%3EMiddleware%20is%20a%20technique%20which%20is%20heavily%20used%20in%20crystal%20frameworks%20like%20express%20etc.%20It%20is%20based%20on%20chain%20of%20responsibility%20pattern%20means%20one%20middleware%20will%20call%20another.%3C/p%3E%0A%3Cp%20class=%22highlight%22%3EMiddleware%20are%20methods%20which%20has%20parameters%20-%20request,%20response%20and%20next%20callback.%3C/p%3E%0A%3Ch2%20id=%22howtouseinshivneri%22%3EHow%20to%20use%20in%20Shivneri%3C/h2%3E%0A%3Cp%3E%3Cbr%3EShivneri%20provides%20different%20types%20of%20components%20which%20are%20in%20hierarchy%20and%20every%20component%20has%20access%20to%20request%20and%20response%20object.%20Thus%20you%20can%20use%20any%20middleware%20inside%20the%20component%20and%20you%20have%20the%20control%20how%20to%20use%20&amp;%20in%20what%20order.%3C/p%3E%0A%3Cp%3ELet's%20see%20how%20to%20use%20%3Ca%20href=%22https://www.npmjs.com/package/helmet%22%3Ehelmetjs%3C/a%3E%20inside%20component%20wall%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Wall,%20textResult%20%7D%20from%20%22Shivneri%22;%0Aimport%20*%20as%20helmet%20from%20'helmet';%0Aexport%20class%20HelmetWall%20extends%20Wall%20%7B%0A%20%20%20%20async%20onIncoming()%20%7B%0A%20%20%20%20%20%20%20%20const%20result%20=%20await%20this.callMiddleWare(helmet());%0A%20%20%20%20%7D%0A%0A%20%20%20%20callMiddleWare(middleWare)%20%7B%0A%20%20%20%20%20%20%20%20return%20new%20Promise((res,%20rej)%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20middleWare(this.request,%20this.response,%20res);%0A%20%20%20%20%20%20%20%20%7D);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20a%20similar%20way%20other%20middleware%20can%20be%20used%20in%20any%20component.%3C/p%3E%0A%3Cp%3EYou%20can%20download%20example%20from%20here%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/Shivneri-examples/tree/master/middleware%22%3EMiddleware%20example%3C/a%3E%3C/p%3E%0A%3Cp%3EFor%20detailed%20information%20visit%20this%20article%20-%20%3Ca%20href=%22https://medium.com/Shivneri/middleware-pattern-in-Shivneri-7329cc7cf499%22%3Ehttps://medium.com/Shivneri/middleware-pattern-in-Shivneri-7329cc7cf499%3C/a%3E%20written%20by%20%3Ca%20href=%22https://twitter.com/ujjwal_kr_gupta%22%3EUjjwal%20Gupta%3C/a%3E%3C/p%3E`;
  title="Middleware";
  keywords="middleware, pattern, Shivneri, crystal";
  description="This page tells about how to use middleware paatern in Shivneri.";
}
</script>
