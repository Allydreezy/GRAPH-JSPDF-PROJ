<template>
  <div style="max-width: 300px;">
        <q-list dense bordered padding class="rounded-bordered">
            <q-item v-for="item in items" :key="item.id">
                <q-item-section>
                    <DashListItem
                      :title="item.titulo"
                      :description="item.descricao"
                      :value="item.quantidade" />
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import DashListItem from './DashListItem.vue';

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
  {
    id: 3,
    titulo: 'Calças vendidas',
    descricao: 'vendas avalidadas nos últimos meses',
    quantidade: 9800000,
  },
  {
    id: 4,
    titulo: 'Sapatos vendidos',
    descricao: 'vendas avalidadas nos últimos meses',
    quantidade: 20,
  },
];

export default defineComponent({
  name: 'DashList',
  components: {
    DashListItem,
  },
  data() {
    return {
      items: itemsList,
    };
  },
});
</script>
