<template>
  <!-- <Canvas @ready="clickBtn"></Canvas>
  <v-btn id="btn">Click</v-btn> -->
  <main-page></main-page>
</template>

<script>
// import Canvas from "./components/canvas/Canvas.vue";
import MainPage from "./components/canvas/MainPage.vue";

export default {
  name: "App",
  components: {
    // Canvas,
    MainPage,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    clickBtn(a) {
      console.log(a.container);
      console.log(a.net);
      console.log(a.nodes);
      console.log(a.edges);
    },
  },
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
