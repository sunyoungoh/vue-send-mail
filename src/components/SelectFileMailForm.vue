<template>
  <div class="form-container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-btn
        class="mt-1 mb-4"
        color="primary"
        block
        large
        elevation="0"
        @click="dialog = true"
      >
        상품 추가하기
      </v-btn>
      <SelectFileDialog
        :dialog="dialog"
        @update:seletedItem="addSelectedItem"
        @update:dialog="val => (dialog = val)"
      />
      <OrderChip v-if="selectedItem" :order-detail="selectedItem" />
      <EmailInputField v-model="email" @click="resetSendResult" />
      <v-textarea
        v-model="comment"
        name="comment"
        label="코멘트"
        rows="3"
        clearable
      ></v-textarea>
      <SendBtns
        :email="email"
        :order-detail="selectedItem"
        :comment="comment"
        :valid="valid"
        @update:sendResult="val => (sendResult = val)"
        @validate-form="validateForm"
        @reset-form="resetForm"
      />
    </v-form>
    <ResultAlert v-if="sendResult !== ''" :sendResult="sendResult" />
  </div>
</template>

<script>
import { itemList } from '@/utils/itemList';
import EmailInputField from '@/components/EmailInputField';
import SelectFileDialog from '@/components/SelectFileDialog';
import OrderChip from '@/components/OrderChip';
import SendBtns from '@/components/SendBtns';
import ResultAlert from '@/components/ResultAlert';

export default {
  name: 'MailForm',
  components: {
    SelectFileDialog,
    EmailInputField,
    OrderChip,
    SendBtns,
    ResultAlert,
  },
  data: () => ({
    dialog: false,
    valid: true,
    email: '',
    items: itemList,
    selectedItem: [],
    comment: '',
    sendResult: '',
  }),
  methods: {
    addSelectedItem(item) {
      this.selectedItem.push(item);
    },
    removeSelectedItem(i) {
      console.log('removeItem', this.selectedItem.splice(i, 1));
      this.selectedItem = this.selectedItem.splice(i, 1);
    },
    validateForm() {
      this.$refs.form.validate();
    },
    resetSendResult() {
      this.sendResult = '';
    },
    resetForm() {
      this.resetSendResult();
      this.valid = true;
      this.selectedItem = [];
      this.email = '';
      this.comment = '';
      this.$refs.form.reset();
    },
  },
};
</script>
<style scoped></style>
