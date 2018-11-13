<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Navbar/>
    <Content/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Content from "./components/Content/Content.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Content
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
