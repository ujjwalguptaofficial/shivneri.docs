<template src="../views/index.html"></template>

<style scoped>
@import url("~/styles/index.css");
</style>
<style>
.logo {
  visibility: hidden;
}
.v-toolbar {
  background-color: black !important;
}

.application--wrap {
  background: black;
}
</style>

<script>
export default {
  head() {
    return {
      title: `Component based MVC web framework for crystal lang`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "keywords",
          name: "keywords",
          content:
            "crystal lang, component based, framework, web development, software development"
        }
      ]
    };
  }
};
</script>

