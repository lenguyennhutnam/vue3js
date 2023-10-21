<template>
  <v-btn
    color="background"
    :id="id"
    :class="id"
    :icon="icon"
    :active="isActive"
    @click="clickBtn"
  />
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      String,
    },
  },
  mounted() {
    this.setIcon();
  },
  data() {
    return {
      icon: null,
      images: {
        host: "mdi-laptop",
        switch: "mdi-switch",
        edge: "mdi-link-variant",
      },
      isActive: false,
    };
  },
  methods: {
    setIcon() {
      this.icon = this.images[this.id];
    },
    clickBtn() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
/* .addBtn {
  margin-right: 10px;
  background-color: #ccc;
} */
/* .addBtn:focus {
  background-color: rgb(135, 135, 146);
} */
</style>
