<template>
  <div id="mynetwork9"></div>
  <div class="menu" id="divHoverNode" style="display: none"></div>

  <!-- <img :src="logo" alt="" srcset="" /> -->
</template>

<script>
import vis from "vis-network/dist/vis-network.min.js";
import "vis-network/dist/dist/vis-network.min.css";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      data: null,
      nodes: null,
      edges: null,
      container: null, //容器
      options: {},
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //自定义一个边框宽为2，边框颜色为红色的节点

      // 创建节点数据数组
      this.nodes = [
        {
          id: 1,
          label: "雪糕",
          image: this.IceCream,
        },
        { id: 2, label: "Elbow" },
        { id: 3, label: "Cola" },
        { id: 4, label: "Pearl" },
        { id: 5, label: "IceCream" },
      ];
      // 创建边数据数组
      //from 代表节点开始连接的位置，to 代表节点结束的位置。他对应了上面节点
      //数据的id
      this.edges = new vis.DataSet([
        {
          from: 1,
          to: 3,
          arrows: "to",
        },
        { from: 1, to: 2, label: "指向2" },
        { from: 2, to: 4, label: "指向4" },
        { from: 2, to: 5, arrows: "to", label: "指向5" },
        {
          from: 3,
          to: 3,
          arrows: { to: { scaleFactor: 10 } },
          label: "指向本身",
        },
      ]);

      this.container = document.getElementById("mynetwork9");

      // 将数据赋值给vis 数据格式化器
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
      // 初始化关系图
      var network = new vis.Network(this.container, this.data, this.options);

      console.log(network);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mynetwork9 {
  width: 600px;
  height: 400px;
  border: 1px solid lightgray;
}

.menu {
  position: absolute;
}
</style>
