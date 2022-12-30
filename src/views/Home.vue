<template>
  <div class="home">
    <div class="logo py-4 ma-auto text-center green">
      <h3 class="logo-text white--text">Smart Store</h3>
    </div>
    <div class="tabs-container">
      <v-tabs
        v-model="tab"
        :ripple="false"
        background-color="transparent"
        color="green"
        height="50"
        grow
        show-arrows
      >
        <v-tab
          active-class="font-weight-bold"
          v-for="(item, i) in items"
          :key="i"
          :ripple="false"
          @click="$store.commit('setactiveTab', item.value)"
        >
          {{ item.text }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <NewOrderList />
        </v-tab-item>
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
import NewOrderList from '@/components/NewOrderList';

export default {
  name: 'Home',
  components: {
    SelectFileMailForm,
    OrderMailForm,
    NewOrderList,
  },
  data() {
    return {
      tab: null,
      items: [
        { value: 'newOrder', text: '신규주문' },
        { value: 'single', text: '스토어 개별배송' },
        { value: 'multiple', text: '스토어 묶음배송' },
        { value: 'none', text: '메일만 발송' },
      ],
    };
  },
};
</script>
