<template>
  <div class="canvasbox">
    <button-list ref="btnList" />
    <div id="canvas"></div>
  </div>
</template>

<script>
import ButtonList from "./BtnList.vue";
import { option } from "@/components/canvas/builder/option";

export default {
  components: { ButtonList },
  name: "CanVas",
  data() {
    return {
      data: null,
      nodes: null,
      edges: null,
      container: null,
      network: null,
      adding: null,
      itemList: {
        Host: 0,
        Switch: 0,
      },
    };
  },
  mounted() {
    this.init();
  },

  // =================================================================

  methods: {
    init() {
      this.nodes = new this.vis.DataSet([
        { id: 1, label: "Host 1", group: "Host" },
        { id: 2, label: "Switch 1", group: "Switch" },
        { id: 3, label: "Host 2", group: "Host" },
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

      this.network = new this.vis.Network(this.container, this.data, option);

      // =================================================================

      this.network.on("selectNode	", () => {
        console.log("Node");
      });

      this.eventBus.on("addHost", () => {
        this.adding = "Host";
        this.network.once("click", this.addItem);
      });
      this.eventBus.on("addSwitch", () => {
        this.adding = "Switch";
        this.network.once("click", this.addItem);
      });
      this.eventBus.on("addEdge", () => {
        this.adding = "Edge";
        this.network.once("click", this.addItem);
      });
    },
    addItem(e) {
      let clickX = e.pointer.canvas.x;
      let clickY = e.pointer.canvas.y;
      let idToRef = {
        Host: this.$refs.btnList.$refs.host,
        Switch: this.$refs.btnList.$refs.switch,
        Edge: this.$refs.btnList.$refs.edge,
      };
      let nodeType = this.adding;
      if (idToRef[nodeType].isActive) {
        // Define new node
        let newnode = {
          id: this.nodes.length + 1,
          label: `${nodeType} ` + `${++this.itemList[nodeType]}`,
          group: nodeType,
          x: clickX,
          y: clickY,
        };

        // Off clicked button
        idToRef[nodeType].isActive = false;

        // Add node to canvas
        this.nodes.add(newnode);
      }
    },
  },
};
</script>

<style scoped>
#canvas {
  display: block;
  width: 1000px;
  height: 600px;
  background-color: #ccc;
}
</style>
ButtonList
