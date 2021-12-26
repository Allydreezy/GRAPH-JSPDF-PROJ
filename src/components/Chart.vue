<template>
  <div class="chart" :id="id">
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  name: 'Chart',
  props: ['option', 'id'],
  methods: {
    async initEChart() {
      const myChart = echarts.init(document.getElementById(this.id));
      // Draw the chart
      myChart.setOption(this.option);
    },
  },
  mounted() {
    this.initEChart();
  },
});
</script>

<style scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>
