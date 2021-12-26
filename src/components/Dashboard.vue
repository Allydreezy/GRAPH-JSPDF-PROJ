<template>
  <div class="q-pa-md q-gutter-y-md" style="max-width:100%;">
    <div class="row">
      <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
        <DashListItem
          :title="items[0].titulo"
          :description="items[0].descricao"
          :value="items[0].quantidade"
        />
      </div>
      <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
        <DashListItem
          :title="items[1].titulo"
          :description="items[1].descricao"
          :value="items[1].quantidade"
        />
      </div>
      <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
        <DashListItem
          :title="items[1].titulo"
          :description="items[1].descricao"
          :value="items[1].quantidade"
        />
      </div>
      </div>
      <br>
      <div class="row">
      <div class="col-5 offset-1">
        <Chart :option="chartData2" id="main1"/>
      </div>
      <div class="col-5 offset-1">
        <Chart :option="chartData1" id="main2" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import DashListItem from 'components/DashListItem.vue';
import Chart from 'components/Chart.vue';

const itemsList = [
  {
    id: 1,
    titulo: 'Vestidos vendidos',
    descricao: 'vendas avalidadas nos últimos meses',
    quantidade: 19800,
  },
  {
    id: 2,
    titulo: 'Calçados vendidos',
    descricao: 'vendas avalidadas nos últimos meses',
    quantidade: 200,
  },
];

const option1 = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
    },
  ],
};

const option2 = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
};

export default defineComponent({
  name: 'Dashboard',
  components: {
    DashListItem,
    Chart,
  },
  data() {
    return {
      items: itemsList,
      chartData1: option1,
      chartData2: option2,
    };
  },
});
</script>
