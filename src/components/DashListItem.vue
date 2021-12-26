<template>
    <q-card class="my-card">
        <q-card-section class="cabecalho">
            <strong>{{ title }}</strong>
            <div>{{ description }}</div>
        </q-card-section>

        <q-separator />

        <q-card-section>
            <div class="text-h4 text-center">{{ valor }} {{ unidade }}</div>
        </q-card-section>

    </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DashListItem',
  props: {
    title: String,
    description: String,
    value: Number,
  },
  data() {
    return {
      unidade: '',
      valor: 0,
    };
  },
  methods: {
    async init() {
      this.valor = this.value;
      if (this.value < 1000) {
        this.unidade = '';
      }
      if (this.value >= 1000 && this.value < 1000000) {
        this.valor /= 1000;
        this.unidade = 'K';
      }
      if (this.value >= 1000000) {
        this.valor /= 1000000;
        this.unidade = 'M';
      }
    },
  },
  mounted() {
    this.init();
  },
});
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 320px;
}
</style>
