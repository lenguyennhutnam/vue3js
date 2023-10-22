import Host from "@/assets/network/host.svg";
import Switch from "@/assets/network/switch.svg";

const color = {
  host: {
    highlight: {
      border: "orange",
      background: "#0000",
    },
  },
  switch: {
    highlight: {
      border: "blue",
      background: "#0000",
    },
  },
};

export const option = {
  manipulation: {
    enabled: false,
    addEdge: function (edgeData, callback) {
      callback(edgeData);
      console.log("haha");
    },
  },
  physics: {
    enabled: false,
  },
  nodes: {
    size: 30,
    imagePadding: 5,
    borderWidth: 0.000001,
    borderWidthSelected: 2,
    color: {
      background: "#0000",
      hover: {
        background: "#0000",
      },
      highlight: {
        border: "orange",
        background: "#0000",
      },
    },
    shapeProperties: {
      useBorderWithImage: true,
    },
  },
  edges: {
    smooth: true,
    color: "green",
  },
  groups: {
    Host: {
      title: "Host",
      shape: "image",
      image: Host,
      color: color.host,
    },
    Switch: {
      title: "Switch",
      shape: "image",
      image: Switch,
      color: color.switch,
    },
  },
  interaction: {
    hover: true,
    hoverConnectedEdges: true,
  },
};
