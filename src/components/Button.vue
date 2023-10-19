<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-icon icon="$account" />
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    sendMessage() {
      this.eventBus.emit("click-send-msg", this.message);
    },
  },
};
</script>

<style></style>
