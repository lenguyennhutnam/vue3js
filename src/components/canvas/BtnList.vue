<template>
  <div>
    <add-btn ref="host" id="host" @click="activeHost"></add-btn>
    <add-btn ref="switch" id="switch" @click="acitveSwitch"></add-btn>
    <add-btn ref="edge" id="edge" @click="acitveEdge"></add-btn>
  </div>
</template>

<script>
import AddBtn from "./AddBtn.vue";
export default {
  name: "ButtonList",
  components: {
    AddBtn,
  },
  data() {
    return {
      name: "ButtonList",
    };
  },
  methods: {
    acitveBtn(ref) {
      let lastState = ref.isActive;
      this.$refs.switch.isActive = false;
      this.$refs.host.isActive = false;
      this.$refs.edge.isActive = false;
      ref.isActive = lastState;
      this.eventBus.emit(
        `add${ref.id.charAt(0).toUpperCase() + ref.id.slice(1)}`
      );
    },
    activeHost() {
      this.acitveBtn(this.$refs.host);
    },
    acitveSwitch() {
      this.acitveBtn(this.$refs.switch);
    },
    acitveEdge() {
      this.acitveBtn(this.$refs.edge);
    },
  },
};
</script>

<style scoped></style>
