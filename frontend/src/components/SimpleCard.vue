<template>
  <div class="grid-stack-item ui-resizable-autohide" :gs-x="x" :gs-y="y" :gs-w="width" :gs-h="height">
    <div class="grid-stack-item-content">
      <h2>Product list</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleCard',
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      default: 1
    },
    height: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 0;
}


</style>