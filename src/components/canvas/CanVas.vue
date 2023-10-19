<template>
  <!-- <v-toolbar>
    <add-btn device="Add Host" :active="true" icon="mdi-laptop"></add-btn>
    <add-btn device="Add Switch" icon="mdi-switch"></add-btn>
    <add-btn device="Add Edges" icon="mdi-link-variant"></add-btn>
  </v-toolbar> -->
  <button-list />
  <div id="canvas"></div>
</template>

<script>
import ButtonList from "./ButtonList.vue";
export default {
  components: { ButtonList },
  name: "CanVas",
  data() {
    return {
      data: null,
      nodes: null,
      edges: null,
      container: null,
      options: null,
      network: null,
      adding: {
        host: false,
        switch: false,
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.nodes = new this.vis.DataSet([
        { id: 1, label: "Earth" },
        { id: 2, label: "Sun" },
        { id: 3, label: "Moon" },
      ]);

      this.container = document.getElementById("canvas");

      this.edges = new this.vis.DataSet([
        { from: 1, to: 2 },
        { from: 2, to: 3 },
      ]);

      this.data = {
        nodes: this.nodes,
        edges: this.edges,
      };

      this.options = {
        nodes: {},
        interaction: {
          hover: true,
          hoverConnectedEdges: true,
        },
      };

      this.network = new this.vis.Network(
        this.container,
        this.data,
        this.options
      );
      this.eventBus.on("click", () => {
        console.log("Da bam nut");
        // this.network.once("click", this.addItem);
        console.log(222);
      });
    },
    // clickNode(property) {
    //   console.log(property);
    // },
    // hoverNode() {
    //   console.log(1);
    // },
    // addItem(e) {
    //   var clickX = e.pointer.canvas.x;
    //   var clickY = e.pointer.canvas.y;

    //   // Add a new node at the clicked coordinates
    //   this.nodes.add({
    //     id: this.nodes.length + 1,
    //     label: "node " + `${this.nodes.length + 1}`,
    //     x: clickX,
    //     y: clickY,
    //   });
    // },
  },
};
</script>

<style scoped>
#canvas {
  display: block;
  width: 500px;
  height: 500px;
  background-color: #ccc;
}
</style>
ButtonList
