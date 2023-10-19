<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <p>Button 傳來的 Message： {{ msg }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    // 監聽事件
    this.eventBus.on("click-send-msg", (msgData) => (this.msg = msgData));
  },
  // Vue 3 不建議用 beforeDestory
  beforeUnmount() {
    // 銷毁監聽
    this.eventBus.off("click-send-msg");
  },
};
</script>

<style></style>
