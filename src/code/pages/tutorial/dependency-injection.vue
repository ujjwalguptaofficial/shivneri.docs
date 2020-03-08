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
  tutorialContent = `%3Cp%3EShivneri%20provides%20%22Assign%22%20And%20%22Singleton%22%20decorator%20for%20dependency%20Injection.%20%3C/p%3E%0A%3Ch2%20id=%22assign%22%3EAssign%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AAssign%20can%20be%20used%20in%20controller%20and%20all%20type%20of%20component.%3C/p%3E%0A%3Cp%3Ee.g%20-%20%3C/p%3E%0A%3Cp%3ETo%20inject%20%22hello%20world%22%20to%20a%20variable%20value%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20UserController%20extends%20Controller%20%7B%0A%20%20%20%20service:%20UserService;%0A%0A%20%20%20%20@Worker()%0A%20%20%20%20index(@Assign('hello%20world')%20value)%20%7B%0A%20%20%20%20%20%20%20%20console.log(value)%20//%20hello%20world%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cdiv%20class=%22top-border%22%20style=%22margin:%2025px%200;%22%3E%3C/div%3E%0A%3Ch2%20id=%22singleton%22%3ESingleton%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0ASingleton%20creates%20a%20single%20object%20&amp;%20maintain%20this%20across%20whole%20application.%3C/p%3E%0A%3Cp%3Ee.g%20-%3C/p%3E%0A%3Cp%3ETo%20inject%20a%20service%20in%20a%20controller%20constructor%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20UserController%20extends%20Controller%20%7B%0A%20%20%20%20service:%20UserService;%0A%0A%20%20%20%20constructor(@Singleton(UserService)%20service)%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20this.service%20=%20service;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E`;
  title="Dependency Injection";
  keywords="dependency injection, assign, singleton, Shivneri, crystal js";
  description="Dependency injection in crystal";
}
</script>
