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
  tutorialContent = `%3Cp%3EWall%20is%20security%20layer%20on%20top%20of%20your%20app%20&amp;%20called%20very%20first%20as%20soon%20as%20http%20request%20is%20accepted.%20It%20controls%20whether%20a%20request%20should%20be%20allowed%20to%20enter%20inside%20the%20app.%20It%20can%20also%20be%20used%20to%20do%20some%20task%20and%20pass%20data%20inside%20app.%3C/p%3E%0A%3Cp%3EThere%20can%20be%20multiple%20wall%20for%20an%20app%20-%3C/p%3E%0A%3Cp%3EWall%20has%20two%20lifecycle%20hook%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3Eentered%3C/strong%3E%20-%20called%20when%20a%20request%20has%20entered%20inside%20the%20Shivneri%20(app).%20If%20this%20events%20returns%20nil%20means%20request%20is%20allowed%20to%20enter%20otherwise%20rejects%20with%20the%20result%20returned.%3C/p%3E%0A%3Cp%3EIf%20there%20are%20multiple%20walls%20then%20%22entered%22%20is%20called%20in%20order%20as%20they%20are%20defined.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3Efinished%3C/strong%3E%20-%20called%20when%20a%20controller%20is%20executed%20&amp;%20response%20is%20about%20to%20be%20sent.%20This%20is%20an%20optional%20event%20&amp;%20Result%20returned%20from%20this%20event%20is%20ignored.%3C/p%3E%0A%3Cp%3EIf%20there%20are%20multiple%20walls%20then%20%22finished%22%20is%20called%20in%20reverse%20order%20as%20they%20are%20defined.%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3EA%20wall%20has%20access%20to%20following%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EQuery%20string%20data%20-%20%3Ccode%3Equery%3C/code%3E%3C/li%3E%0A%3Cli%3EData%20from%20other%20components%20-%20%20%3Ccode%3Edata%3C/code%3E%3C/li%3E%0A%3Cli%3ELogger%20-%20%3Ccode%3Elogger%3C/code%3E%3C/li%3E%0A%3Cli%3ECookie%20-%20%3Ccode%3Ecookie%3C/code%3E%3C/li%3E%0A%3Cli%3ESession%20-%20%3Ccode%3Esession%3C/code%3E%3C/li%3E%0A%3Cli%3ERequest%20-%20%3Ccode%3Erequest%3C/code%3E%3C/li%3E%0A%3Cli%3EResponse%20-%20%3Ccode%3Eresponse%3C/code%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22creatingwall%22%3ECreating%20wall%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AWall%20is%20a%20class%20which%20inherits%20the%20class%20%22Wall%22%20from%20Shivneri.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eclass%20AppWall%20&lt;%20Wall%0A%20%20%20%20def%20entered%0A%20%20%20%20%20%20%20%20if%20(some%20condition)%20#%20block%20request%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20text_result(%22This%20request%20is%20blocked%20by%20wall%22);%0A%20%20%20%20%20%20%20%20end%0A%20%20%20%20end%0A%0A%20%20%20%20def%20finished%0A%20%20%20%20%20%20%20%20#%20this%20events%20can%20be%20used%20to%20set%20headers%20or%20log%20datas%20etc%0A%20%20%20%20%20%20%20%20logger.debug(%22request%20finished%22);%0A%20%20%20%20end%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20you%20have%20defined%20the%20wall%20but%20in%20order%20to%20use%20this%20wall,%20you%20need%20to%20add%20it%20to%20Shivneri.%3C/p%3E%0A%3Cpre%3E%3Ccode%3EShivneri.walls%20=%20%5BAppWall%5D%0A%3C/code%3E%3C/pre%3E`;
  title="Wall";
  keywords="wall, component, options, Shivneri, crystal";
  description="Description about wall components & its uses";
}
</script>
