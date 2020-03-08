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
  tutorialContent = `%3Cp%3EController%20is%20like%20a%20section%20or%20area%20where%20different%20resource%20&amp;%20services%20are%20available.%3C/p%3E%0A%3Cp%3Ee.g%20-%20A%20Fort%20may%20have%20sections%20-%20WeaponSection,%20LibrarySection,%20MeetingSection%20etc.%20%3C/p%3E%0A%3Cp%3ENow%20consider%20a%20real%20world%20application%20created%20for%20university%20may%20have%20sections%20-%20StudentSection,%20TeacherSection,%20LibrarySection%20etc.%3C/p%3E%0A%3Cp%3EA%20controller%20has%20following%20members%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EQuery%20string%20data%20-%20%3Ccode%3Equery%3C/code%3E%3C/li%3E%0A%3Cli%3EPost%20data%20-%20%3Ccode%3Epost%3C/code%3E%3C/li%3E%0A%3Cli%3ERoute%20parameter%20-%20%20%3Ccode%3Eparam%3C/code%3E%3C/li%3E%0A%3Cli%3EData%20from%20other%20components%20-%20%20%3Ccode%3Edata%3C/code%3E%3C/li%3E%0A%3Cli%3ELogger%20-%20%3Ccode%3Elogger%3C/code%3E%3C/li%3E%0A%3Cli%3ECookie%20-%20%3Ccode%3Ecookie%3C/code%3E%3C/li%3E%0A%3Cli%3ESession%20-%20%3Ccode%3Esession%3C/code%3E%3C/li%3E%0A%3Cli%3ERequest%20-%20%3Ccode%3Erequest%3C/code%3E%3C/li%3E%0A%3Cli%3EResponse%20-%20%3Ccode%3Eresponse%3C/code%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22creatingcontroller%22%3ECreating%20controller%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AController%20is%20a%20class%20which%20inherits%20the%20class%20%22Controller%22%20from%20Shivneri.%3C/p%3E%0A%3Ch2%20id=%22example%22%3EExample%3C/h2%3E%0A%3Cpre%3E%3Ccode%3Eclass%20UserController%20&lt;%20Shivneri::Controller%20%0A%0A%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20order%20to%20make%20this%20controller%20active,%20you%20need%20to%20assign%20it%20to%20routes.%3C/p%3E%0A%3Cpre%3E%3Ccode%3EShivneri.routes%20=%20%5B%7B%0A%20%20%20%20controller:%20UserController,%0A%20%20%20%20path:%20%20%20%20%20%20%20%22/user%22,%0A%7D%5D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20code%20we%20are%20adding%20our%20controller%20into%20routes%20array%20along%20%20with%20a%20path.%20The%20path%20is%20used%20to%20associate%20the%20controller%20with%20a%20top%20level%20route.%3C/p%3E%0A%3Cp%3Ee.g%20-%20Consider%20your%20website%20is%20abc.com%20,%20so%20when%20user%20hits%20the%20url%20-%20%22abc.com/user%22%20then%20the%20controller%20-%20'UserController'%20will%20be%20called.%20%3C/p%3E`;
  title="Controller";
  keywords="controller, section, Shivneri, crystal";
  description="Description about controller in Shivneri";
}
</script>
