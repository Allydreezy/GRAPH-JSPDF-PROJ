<template>
    <div>
      <q-page class="flex flex-start">
        <!---
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        >
        -->
        <DashList />
      </q-page>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import DashList from 'components/DashList.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    DashList,
  },
});
</script>
