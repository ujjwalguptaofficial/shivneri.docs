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
  tutorialContent = `%3Cp%3EShield%20is%20security%20layer%20on%20top%20of%20Controller%20which%20means%20it%20is%20called%20before%20a%20controller%20is%20called.%20It%20controls%20whether%20a%20request%20should%20be%20allowed%20to%20enter%20inside%20the%20Controller%20or%20not.%20It%20can%20also%20be%20used%20for%20doing%20some%20task%20&amp;%20pass%20data%20to%20controller/worker.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Consider%20a%20case%20-%20where%20a%20controller%20%22Admin%22%20is%20only%20allowed%20if%20the%20request%20is%20authenticated.%20You%20can%20create%20a%20shield%20which%20will%20check%20for%20the%20conditions%20and%20if%20it%20does%20not%20satisfy%20the%20conditions,%20you%20can%20return%20a%20result%20from%20shield%20which%20will%20stop%20executing%20controller%20and%20result%20from%20shield%20is%20retturned%20as%20response.%20%3C/p%3E%0A%3Cp%3EThere%20can%20be%20multiple%20shield%20for%20a%20controller%20&amp;%20every%20shield%20is%20executed%20in%20the%20same%20order%20as%20they%20are%20defined.%3C/p%3E%0A%3Cp%3EA%20shield%20has%20following%20member%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EQuery%20string%20data%20-%20%3Ccode%3Equery%3C/code%3E%3C/li%3E%0A%3Cli%3ERoute%20parameter%20-%20%20%3Ccode%3Eparam%3C/code%3E%3C/li%3E%0A%3Cli%3EData%20from%20other%20components%20-%20%20%3Ccode%3Edata%3C/code%3E%3C/li%3E%0A%3Cli%3ELogger%20-%20%3Ccode%3Elogger%3C/code%3E%3C/li%3E%0A%3Cli%3ECookie%20-%20%3Ccode%3Ecookie%3C/code%3E%3C/li%3E%0A%3Cli%3ESession%20-%20%3Ccode%3Esession%3C/code%3E%3C/li%3E%0A%3Cli%3ERequest%20-%20%3Ccode%3Erequest%3C/code%3E%3C/li%3E%0A%3Cli%3EResponse%20-%20%3Ccode%3Eresponse%3C/code%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22creatingshield%22%3ECreating%20shield%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AShield%20is%20a%20class%20which%20inherits%20the%20class%20%22Shield%22%20from%20Shivneri.%3C/p%3E%0A%3Ch2%20id=%22example%22%3EExample%3C/h2%3E%0A%3Cpre%3E%3Ccode%3Eclass%20ExampleShield%20&lt;%20Shivneri::Shield%0A%0A%20%20%20%20def%20protect%0A%20%20%20%20%20%20%20%20if%20(some%20condition)%20#%20block%20request%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20text_result(%22This%20request%20is%20blocked%20by%20wall%22);%0A%20%20%20%20%20%20%20%20end%0A%20%20%20%20end%0A%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20you%20have%20defined%20the%20shield%20but%20in%20order%20to%20use%20this%20shield,%20you%20need%20to%20assign%20it%20to%20some%20controller.%3C/p%3E%0A%3Cpre%3E%3Ccode%3E@%5BShields(%22ExampleShield%22)%5D%20%0Aclass%20UserController%20&lt;%20Shivneri::Controller%0A%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3ENote:-%3C/strong%3E%20A%20shield%20can%20be%20assigned%20to%20multiple%20controller.%3C/p%3E`;
  title="Shield";
  keywords="shield, component, modular, Shivneri, crystal";
  description="Description about Shield component & how to use";
}
</script>
