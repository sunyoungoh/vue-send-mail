<template>
  <div>
    <template v-if="$store.state.activeTab == 'none'">
      <v-chip
        v-for="(item, i) in seletedItem"
        :key="i"
        class="my-2 mr-2 px-2"
        color="secondary"
        label
        outlined
        close
        @click:close="removeItem(i)"
      >
        <v-tooltip bottom color="success">
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">
              {{ item.itemId | itemName }}
              {{ item.itemOption | roundBraket }}
            </span>
          </template>
          <span>클릭하면 주문서 페이지로 이동합니다.</span>
        </v-tooltip>
      </v-chip>
    </template>
    <template v-else>
      <v-chip
        class="my-2 mr-2 px-2"
        color="secondary"
        label
        outlined
        @click="$emit('open-detail', order.productOrderId)"
      >
        <v-avatar left class="mr-0">
          <v-icon small>mdi-link-variant</v-icon>
        </v-avatar>
        <v-tooltip bottom color="success">
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">
              {{ order.itemId | itemName }}
              {{ order.itemOption | roundBraket }}
            </span>
          </template>
          <span>클릭하면 주문서 페이지로 이동합니다.</span>
        </v-tooltip>
      </v-chip>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
    },
    seletedItem: {
      type: Array,
    },
  },
  data() {
    return {
      chip: true,
    };
  },
  methods: {
    removeItem(i) {
      this.seletedItem.splice(i, 1);
      this.$emit('update:seletedItem');
    },
  },
  filters: {
    roundBraket(option) {
      return option ? `(${option})` : '';
    },
  },
};
</script>

<style></style>
