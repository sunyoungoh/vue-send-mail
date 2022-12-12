<template>
  <v-form ref="dialogForm" v-model="valid" lazy-validation>
    <v-dialog v-model="dialog" persistent max-width="400px">
      <v-card>
        <v-card-title class="pb-5">상품 추가하기</v-card-title>
        <v-card-text>
          <v-select
            v-model="selectItem"
            ref="selectItem"
            :items="items"
            item-text="itemName"
            item-value="itemId"
            :rules="[v => !!v || '상품을 선택해주세요.']"
            label="상품명"
            required
            @change="resetSelectOption"
          ></v-select>
          <v-select
            v-for="(item, i) in options.itemOptions"
            :key="i"
            ref="itemOptions"
            v-model="selectOption[i]"
            :items="item.value"
            :rules="[v => !!v || '옵션을 선택해주세요.']"
            :label="item.label"
            required
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="closeDialog"> 닫기 </v-btn>
          <v-btn color="green darken-1" text @click="addItem"> 추가하기 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
import { itemList } from '@/utils/itemList';

export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    items: itemList,
    selectItem: '',
    selectOption: [],
    valid: true,
  }),
  computed: {
    options() {
      const itemOptions = this.selectItem
        ? this.items.filter(item => item.itemId == this.selectItem)[0]
        : [{ itemOption: '', itemOptionLabel: '상품옵션' }];
      return itemOptions;
    },
  },
  methods: {
    resetSelectBox() {
      this.selectItem = '';
      this.selectOption = [];
      this.$refs.selectItem.resetValidation();
    },
    closeDialog() {
      this.resetSelectBox();
      this.$emit('update:dialog', false);
    },
    addItem() {
      this.$refs.dialogForm.validate();
      if (!!this.selectItem && !!this.selectOption[0]) {
        this.$emit('update:seletedItem', {
          itemId: this.selectItem,
          itemOptionName: this.selectOption.join(','),
        });
        this.resetSelectBox();
        this.$emit('update:dialog', false);
      }
    },
    resetSelectOption() {
      if (this.$refs.itemOptions) {
        for (let i = 0; i < this.$refs.itemOptions.length; i++) {
          this.$refs.itemOptions[i].reset();
        }
      }
      this.selectOption = [];
    },
  },
};
</script>

<style></style>
