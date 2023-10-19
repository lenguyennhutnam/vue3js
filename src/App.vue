<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
  <button-list /> -->
  <!-- <CanvasTq></CanvasTq> -->

  <CanVas></CanVas>
</template>

<script>
// import CanvasTq from "./components/CanvasTq.vue";
import CanVas from "./components/canvas/CanVas.vue";
// import AddBtn from "./components/AddBtn.vue";
// import Message from "./components/Message.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // CanvasTq,
    CanVas,
    // AddBtn,
    // Message,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
