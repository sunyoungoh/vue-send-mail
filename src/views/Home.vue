<template>
  <div class="home">
    <div class="logo py-9 ma-auto text-center primary">
      <v-icon size="28" color="white"> mdi-email </v-icon>
      <h2 class="logo-text white--text">SENDMAIL</h2>
    </div>
    <div class="tabs-container">
      <v-tabs
        v-model="tab"
        :ripple="false"
        background-color="transparent"
        color="primary"
        height="56"
        centered
      >
        <v-tab
          active-class="font-weight-bold"
          v-for="(item, i) in items"
          :key="i"
          :ripple="false"
          @click="$store.commit('setOrderType', item.value)"
        >
          {{ item.text }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <OrderMailForm />
        </v-tab-item>
        <v-tab-item>
          <OrderMailForm />
        </v-tab-item>
        <v-tab-item>
          <SelectFileMailForm />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import SelectFileMailForm from '@/components/SelectFileMailForm.vue';
import OrderMailForm from '@/components/OrderMailForm.vue';

export default {
  name: 'Home',
  components: {
    SelectFileMailForm,
    OrderMailForm,
  },
  data() {
    return {
      tab: null,
      items: [
        { value: 'single', text: '스토어 개별배송' },
        { value: 'multiple', text: '스토어 묶음배송' },
        { value: 'none', text: '메일만 발송' },
      ],
    };
  },
};
</script>
