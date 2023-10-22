<template>
  <div id="canvas-box">
    <btn-list ref="btnList" />
    <canvas-box id="canvas" ref="canvas" @ready="init"></canvas-box>
  </div>
</template>

<script>
import CanvasBox from "@/components/canvas/CanvasBox.vue";
import BtnList from "@/components/canvas/BtnList.vue";

export default {
  name: "MainPage",
  components: {
    CanvasBox,
    BtnList,
  },
  data() {
    return {
      canvasBox: null,
    };
  },
  mounted() {
    this.init();
    this.canvas = this.$refs.canvas;
    this.network = this.canvas.network;
  },
  methods: {
    init() {
      this.eventBus.on("addHost", () => {
        this.canvas.adding = "Host";
        this.canvas.network.once("click", this.addItem);
      });
      this.eventBus.on("addSwitch", () => {
        this.canvas.adding = "Switch";
        this.canvas.network.once("click", this.addItem);
      });
      this.eventBus.on("addEdge", this.addEdge);
    },
    addItem(e) {
      let clickX = e.pointer.canvas.x;
      let clickY = e.pointer.canvas.y;
      let idToRef = {
        Host: this.$refs.btnList.$refs.host,
        Switch: this.$refs.btnList.$refs.switch,
      };
      let nodeType = this.$refs.canvas.adding;
      if (idToRef[nodeType].isActive) {
        // Define new node
        let newnode = {
          id: this.$refs.canvas.nodes.length + 1,
          label: `${nodeType} ` + `${++this.$refs.canvas.itemList[nodeType]}`,
          group: nodeType,
          x: clickX,
          y: clickY,
        };

        // Off clicked button
        idToRef[nodeType].isActive = false;

        // Add node to $refs.canvas
        this.$refs.canvas.nodes.add(newnode);
      }
    },

    addEdge() {
      this.network.addEdgeMode();
      // let options = this.canvas.options;
      // console.log(options);
      // options.physics.enabled = !options.physics.enabled;
      // this.canvas.network.setOptions(options);
      console.log(this.eventBus);

      // newNet.addEdgeMode();
      // this.options.physics.enabled = true;

      // this.network.setOptions(this.options);
      // this.network.manipulation.guiEnabled =
      //   !this.network.manipulation.guiEnabled;
      // this.network = new this.vis.Network(
      //   this.container,
      //   this.data,
      //   this.options
      // );
      // this.network.main = "sdsd";
      // net.addEdgeMode();
    },
  },
};

// import MainPage from "./MainPage.vue";

// var network = vas.network;
</script>

<style>
#canvas {
  display: block;
  width: 1000px;
  height: 600px;
  background-color: #ccc;
}
#canvas-box {
  display: flex;
  flex-direction: row;
}
</style>
