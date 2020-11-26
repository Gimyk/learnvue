<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  default() {
    return {};
  },
  mounted() {
    setTimeout(() => {
      this.$router.push("/about");
      console.log("routing");
    }, 2000);
  },
};
</script>
