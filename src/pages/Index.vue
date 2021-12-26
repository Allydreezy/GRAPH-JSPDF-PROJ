<template>
    <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 100%">
      <q-page>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="dashboard" label="Dashboard" />
          <q-tab name="table" label="Tabela de Produtos" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="dashboard">
            <div class="text-h6 text-center">Dashboard</div>
            <Dashboard />
          </q-tab-panel>

          <q-tab-panel name="table">
            <div class="text-h6 text-center">Tabela de Produtos</div>
            <ProductTable />
          </q-tab-panel>
        </q-tab-panels>
      </q-page>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import ProductTable from 'components/ProductTable.vue';
import Dashboard from 'components/Dashboard.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    ProductTable,
    Dashboard,
  },
  setup() {
    return {
      tab: ref('dashboard'),
    };
  },
});
</script>
