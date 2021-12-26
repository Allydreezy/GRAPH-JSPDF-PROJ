<template>
  <div class="q-pa-md">
    <table id="produto">
      <thead>
        <tr>
          <th>Marca</th>
          <th>Quantidade em Stock</th>
          <th>Categoria</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dados" :key="item.id">
          <td>{{ item.marca }}</td>
          <td>{{ item.qtdStock }}</td>
          <td>{{ item.categoriaId }}</td>
        </tr>
      </tbody>
    </table>
    <br>
   <q-btn
      color="red"
      text-color="white"
      label="Exportar PDF"
      @click="exportarTabela()"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import JsPDF from 'jspdf';
import AutoTable from 'jspdf-autotable';
import GetDataAPI from '../GetDataAPI.js';

const doc = new JsPDF();
AutoTable(doc, { html: '#produto' });

export default defineComponent({
  name: 'ProductTable',
  data() {
    return {
      dados: [],
      categorias: [],
    };
  },
  setup() {
    function exportarTabela() {
      doc.save('documento.pdf');
    }
    return {
      exportarTabela,
    };
  },
  methods: {
    async getData() {
      const list = await GetDataAPI.getData();
      this.dados = list[0].items;
      this.categorias = list[1].items;
      // console.log(this.dados);
    },
  },
  mounted() {
    this.getData();
  },
});
</script>

<style scoped>
  table {
    border-collapse: collapse;
    width: 100%;
}

th, td {
    padding: 15px;
    text-align: left;
}

tr:nth-child(even) {background-color: #f2f2f2}

th {
    background-color: #0097ce;
    color: white;
}
</style>
