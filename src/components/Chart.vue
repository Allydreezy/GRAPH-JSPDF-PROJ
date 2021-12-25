<template>
  <div id="main">
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  name: 'Chart',
  props: ['option'],
  methods: {
    async initEChart() {
      var myChart = charts.init(document.getElementById('main'));
      // Draw the chart
      myChart.setOption(this.option);
    },
  },
  mounted() {
    this.initEChart();
  },
});
</script>
