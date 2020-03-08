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
  tutorialContent = `%3Cp%3ESession%20is%20a%20State%20Management%20Technique.%20It%20enables%20you%20to%20store%20and%20retrieve%20values%20for%20a%20user%20as%20the%20user%20navigates%20pages%20in%20a%20Web%20application.%3C/p%3E%0A%3Cp%3ELet's%20see%20how%20we%20can%20use%20session%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20DefaultWorker,%20textResult,%20viewResult%20%7D%20from%20%22Shivneri%22;%0A%0Aexport%20class%20DefaultController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@DefaultWorker()%0A%20%20%20%20async%20default()%20%7B%0A%20%20%20%20%20%20%20%20//%20check%20if%20session%20exist%0A%20%20%20%20%20%20%20%20const%20isSessionExist%20=%20await%20this.session.isExist('userId');%0A%0A%20%20%20%20%20%20%20%20//%20add%20value%20to%20session%0A%20%20%20%20%20%20%20%20await%20this.session.set('userId',%2045);%0A%0A%20%20%20%20%20%20%20%20//%20get%20session%20value%0A%20%20%20%20%20%20%20%20const%20userIdFromSession%20=%20await%20this.session.get('userId');%0A%0A%20%20%20%20%20%20%20%20//%20remove%20session%0A%20%20%20%20%20%20%20%20await%20this.session.remove('session_name');%0A%0A%20%20%20%20%20%20%20%20//%20set%20multiple%20session%20at%20a%20time%0A%20%20%20%20%20%20%20%20await%20this.session.setMany(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20'user_id'%20:%201,%0A%20%20%20%20%20%20%20%20%20%20%20%20'name'%20:%20'ujjwal%20gupta'%0A%20%20%20%20%20%20%20%20%7D)%0A%0A%20%20%20%20%20%20%20%20return%20textResult('Welcome%20to%20Shivneri');%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EBy%20default%20Shivneri%20stores%20all%20your%20session%20data%20in%20memory%20which%20means%20data%20will%20be%20lost%20when%20crystal%20process%20is%20stopped%20or%20restarted.%20%3C/p%3E%0A%3Cp%3EIf%20you%20want%20to%20preserve%20your%20session%20values,%20then%20you%20need%20to%20store%20your%20value%20in%20a%20database%20or%20use%20any%20tools%20or%20service.%20You%20can%20customize%20the%20session%20store%20by%20creating%20a%20%3Ca%20href=%22/tutorial/session-provider%22%3Esession%20provider%3C/a%3E.%3C/p%3E%0A%3Cp%3EYou%20should%20take%20a%20look%20at%20our%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/Shivneri-examples/tree/master/authentication%22%3Eauthentication%3C/a%3E%20example.%20In%20this%20example%20-%20a%20login%20page%20is%20shown%20to%20user%20and%20when%20user%20logs%20in%20-%20session%20is%20created.%20Login%20method%20is%20present%20in%20%22default%20controller%22.%3C/p%3E`;
  title="Session";
  keywords="session, uses, example, Shivneri, crystal";
  description="Using session in Shivneri";
}
</script>
