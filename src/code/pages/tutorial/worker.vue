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
  tutorialContent = `%3Cp%3EWorker%20is%20a%20method%20which%20does%20particular%20task%20and%20return%20the%20final%20result.%20%3C/p%3E%0A%3Cp%3E%3Cbr%3E%0ASince%20a%20worker%20is%20part%20of%20controller,%20it%20have%20the%20access%20to%20all%20the%20things%20which%20a%20controller%20has%20i.e%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EQuery%20string%20data%20-%20%3Ccode%3Equery%3C/code%3E%3C/li%3E%0A%3Cli%3EPost%20data%20-%20%3Ccode%3Epost%3C/code%3E%3C/li%3E%0A%3Cli%3ERoute%20parameter%20-%20%20%3Ccode%3Eparam%3C/code%3E%3C/li%3E%0A%3Cli%3EData%20from%20other%20components%20-%20%20%3Ccode%3Edata%3C/code%3E%3C/li%3E%0A%3Cli%3ELogger%20-%20%3Ccode%3Elogger%3C/code%3E%3C/li%3E%0A%3Cli%3ECookie%20-%20%3Ccode%3Ecookie%3C/code%3E%3C/li%3E%0A%3Cli%3ESession%20-%20%3Ccode%3Esession%3C/code%3E%3C/li%3E%0A%3Cli%3ERequest%20-%20%3Ccode%3Erequest%3C/code%3E%3C/li%3E%0A%3Cli%3EResponse%20-%20%3Ccode%3Eresponse%3C/code%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22creatingworker%22%3ECreating%20worker%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AA%20method%20is%20marked%20as%20Worker%20by%20using%20annoation%20-%20%3Ccode%3EWorker%3C/code%3E%20or%20%3Ccode%3EDefaultWorker%3C/code%3E.%3C/p%3E%0A%3Ch2%20id=%22example%22%3EExample%3C/h2%3E%0A%3Cpre%3E%3Ccode%3Eclass%20UserController%20&lt;%20Shivneri::Controller%20%0A%0A%20%20%20%20@%5BDefaultWorker%5D%0A%20%20%20%20def%20default%0A%20%20%20%20%20%20%20return%20text_result(%22This%20is%20default%20worker%20for%20section%20user%22)%0A%20%20%20%20end%0A%0A%20%20%20%20@%5BWorker%5D%0A%20%20%20%20def%20get_user%0A%20%20%20%20%20%20%20%20return%20text_result(%22This%20is%20a%20worker%20for%20section%20user%22)%0A%20%20%20%20end%0A%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ELets%20consider%20that%20controller%20-%20'UserController'%20is%20associated%20with%20path%20'/user'%20and%20our%20domain%20is%20abc.com.%3C/p%3E%0A%3Cp%3ESo%20what%20these%20annotations%20-%20%3Ccode%3EWorker%3C/code%3E%20and%20%3Ccode%3EDefaultWorker%3C/code%3E%20do%20?%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EWorker%3C/strong%3E%20-%20method%20having%20annotation%20Worker%20is%20marked%20as%20end%20point%20with%20route%20as%20%22/#%7Bmethod%3Cem%3Ename%7D%22%20and%20all%20http%20methods%20(GET,POST%20etc).%20For%20our%20example%20-%20route%20will%20be%20:%20%22/get%3C/em%3Euser%22.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EDefaultWorker%3C/strong%3E%20-%20method%20having%20annotation%20DefaultWorker%20is%20added%20to%20route%20with%20one%20http%20method%20GET%20and%20route%20is%20%22/%22.%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0ASo%20in%20the%20above%20example,%20when%20url%20will%20be%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3Eabc.com/user%20-%20method%20default%20will%20be%20called.%3C/li%3E%0A%3Cli%3Eabc.com/user/get%3Cem%3Euser%20-%20method%20get%3C/em%3Euser%20will%20be%20called.%3C/li%3E%0A%3C/ul%3E`;
  title="Worker";
  keywords="worker, route, controller method, shivneri, crystal";
  description="Description about worker in shivneri";
}
</script>
