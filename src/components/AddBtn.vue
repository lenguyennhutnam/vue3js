<template>
  <v-btn :icon="icon" :device="device" />
</template>

<script>
// import Host from "../assets/network/host.svg";
export default {
  props: {
    icon: String,
    device: {
      required: true,
      String,
    },
  },
  mounted() {
    this.setIcon();
  },
  data() {
    return {
      // icon: "mdi-open-in-new",
      // device: "host",
    };
  },
  methods: {
    setIcon() {
      if (this.device == "Add Host") {
        console.log("node ne");
      }
    },
  },
};
</script>

<style scoped></style>
