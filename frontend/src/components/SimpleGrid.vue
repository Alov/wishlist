<template>
  <div>
    <p>{{info}}</p>
    <button type="button" @click="addNewWidget">Add Widget</button> {{ info }}

    <div class="grid-stack custom-grid" >
<!--      <SimpleCard x="0" :y="0" :width="2" :height="10"/>-->
<!--      <SimpleCard x="2" :y="0" :width="2" :height="10"/>-->
<!--      <SimpleCard v-for="item in items" :x="item.x" :y="item.y" :width="item.width" :height="item.height"/>-->
<!--      <SimpleCard v-for="item in items" :x="item.x" :y="item.y" :width="item.width" :height="item.height"/>-->
    </div>
  </div>
</template>

<script>
import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import SimpleCard from "./SimpleCard.vue";
import axios from "axios";

export default {
  name: 'SimpleGrid',
  components: {
    SimpleCard,
    GridStack
  },

  data() {
    return {
      count: 0,
      info: "",
      grid: null, // DO NOT use ref(null) as proxies GS will break all logic when comparing structures... see https://github.com/gridstack/gridstack.js/issues/2115
      items: []
    }
  },

  methods: {
    loadWidgets() {
      let url = "/api/widgets/";
      axios.get(url)
          .then(res => {
            // debugger
            res.data.forEach(i => {
              this.items.push(i)
            })
          })
          .catch(() => console.log("error"))
    },
    addNewWidget() {
      const node = this.items[this.count] || {
        x: Math.round(12 * Math.random()),
        y: Math.round(5 * Math.random()),
        w: Math.round(1 + 3 * Math.random()),
        h: Math.round(1 + 3 * Math.random()),
      };
      node.id = node.content = String(this.count++);
      this.grid.addWidget(node);
    }
  },

  beforeMount() {
    this.loadWidgets();
  },

  mounted() {
    this.grid = GridStack.init({ // DO NOT use grid.value = GridStack.init(), see above
      margin: "1em",
      float: true,
      cellHeight: "50px",
      minRow: 1,
    });



    this.grid.on("dragstop", function (event, element) {
      const node = element.gridstackNode;
      this.info = `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`;
    });

    this.items.forEach(node => {
      this.grid.addWidget(node);
    })
  }
}

</script>

<style scoped>
</style>