<template>
  <!-- <v-toolbar>
    <add-btn device="Add Host" :active="true" icon="mdi-laptop"></add-btn>
    <add-btn device="Add Switch" icon="mdi-switch"></add-btn>
    <add-btn device="Add Edges" icon="mdi-link-variant"></add-btn>
  </v-toolbar> -->
  <div>
    <v-btn id="add-host" class="btn" @click="addHost">Add Host</v-btn>
  </div>
</template>

<script>
// import AddBtn from "../AddBtn.vue";
export default {
  name: "ButtonList",
  components: {
    // AddBtn,
  },
  data() {
    return {
      name: "NamButton",
      isAdd: {
        Host: false,
        Switch: false,
      },
    };
  },
  methods: {
    addHost(e) {
      console.log(e);
      this.eventBus.emit("addHost");
      console.log("addhost from btn");
    },
  },
};
</script>

<style scoped>
/* .btn{

} */
#add-host:focus {
  color: red;
}
</style>
