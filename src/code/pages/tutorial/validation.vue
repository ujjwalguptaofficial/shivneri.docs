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
  tutorialContent = `%3Cp%3EValidation%20is%20an%20important%20part%20of%20any%20application%20&amp;%20that's%20why%20Shivneri%20provides%20several%20components%20and%20decorators%20to%20help%20you%20write%20validation%20code%20in%20easy%20&amp;%20standard%20way.%3C/p%3E%0A%3Cp%3ELet's%20see%20how%20-%20%3C/p%3E%0A%3Col%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EUsing%20guard%3C/strong%3E%20-%20Guard%20is%20a%20component%20which%20sits%20on%20top%20of%20worker.%20So%20you%20can%20use%20guards%20for%20validation%20of%20incoming%20data.%20Read%20%3Ca%20href=%22/tutorial/guard%22%3Eguard%3C/a%3E%20doc%20for%20more%20information.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EUsing%20Shield%3C/strong%3E%20-%20Shield%20is%20a%20component%20which%20sits%20on%20top%20of%20Controller.%20So%20you%20can%20use%20shield%20for%20checking%20something%20before%20passing%20control%20to%20Controller%20like%20checking%20session,%20cheking%20authentication%20data%20etc.%20Read%20%3Ca%20href=%22/tutorial/shield%22%3Eshield%3C/a%3E%20doc%20for%20more%20information.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EUsing%20ExpectBody%3C/strong%3E%20-%20ExpectBody%20is%20a%20decorator%20which%20takes%20value%20as%20parameter%20and%20compare%20against%20incoming%20body%20data%20for%20data%20type.%20It%20also%20removes%20extra%20property%20which%20are%20not%20present%20in%20expect%20body%20value.%20This%20makes%20secure%20to%20store%20data%20in%20nosql%20database.%20Read%20%3Ca%20href=%22/tutorial/decorator/expect-body%22%3EExpectBody%3C/a%3E%20doc%20for%20more%20information.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EUsing%20ExpectQuery%3C/strong%3E%20-%20ExpectQuery%20is%20similar%20to%20ExpectBody%20but%20it%20works%20for%20query%20string%20data.%20It%20does%20similar%20things%20as%20ExpectBody.%20Read%20%3Ca%20href=%22/tutorial/decorator/expect-query%22%3EExpectQuery%3C/a%3E%20doc%20for%20more%20information.%3C/p%3E%3C/li%3E%0A%3C/ol%3E`;
  title="Validation";
  keywords="validation, expect-body, expect-query, Shivneri, crystal";
  description="How to validate data in Shivneri using different components & decorators.";
}
</script>
