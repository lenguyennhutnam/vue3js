<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
  <button-list /> -->
  <!-- <CanvasTq></CanvasTq> -->
  <!-- <CanVas></CanVas> -->
  <Button></Button>
  <Message></Message>
</template>

<script>
// import ButtonList from "./components/ButtonList.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// import CanvasTq from "./components/CanvasTq.vue";
// import CanVas from "./components/canvas/CanVas.vue";
import Button from "./components/button/Button.vue";
import Message from "./components/Message.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // ButtonList,
    // CanvasTq,
    // CanVas,
    Button,
    Message,
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
