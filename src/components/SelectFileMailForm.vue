<template>
  <div class="form-container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-btn
        class="mt-1 mb-2"
        color="primary"
        block
        large
        elevation="0"
        @click="dialog = true"
      >
        상품 추가하기
      </v-btn>
      <p class="error--text text-center text-caption">{{ errorMsg }}</p>
      <SelectFileDialog
        :dialog="dialog"
        @update:seletedItem="addSelectedItem"
        @update:dialog="val => (dialog = val)"
      />
      <OrderChip v-if="selectedItem" :order-detail="selectedItem" />
      <EmailInputField
        v-model="email"
        :valid="valid"
        @click="resetSendResult"
      />
      <v-textarea
        v-model="comment"
        name="comment"
        label="코멘트"
        auto-grow
        rows="1"
        clearable
      ></v-textarea>
      <SendBtns
        :email="email"
        :order-detail="selectedItem"
        :comment="comment"
        :valid="valid"
        @update:sendResult="val => (sendResult = val)"
        @update:errorMsg="setErrorMsg"
        @validate-form="validateForm"
        @reset-form="resetForm"
      />
    </v-form>
    <ResultAlert class="pt-6" v-if="sendResult !== ''" :result="sendResult" />
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
    email: '',
    selectedItem: [],
    comment: '',
    sendResult: '',
    errorMsg: '',
    items: itemList,
    valid: true,
    dialog: false,
  }),
  methods: {
    setErrorMsg() {
      this.errorMsg = '상품을 추가해주세요';
    },
    resetErrorMsg() {
      this.errorMsg = '';
    },
    addSelectedItem(item) {
      this.selectedItem.push(item);
      this.resetErrorMsg();
    },
    removeSelectedItem(i) {
      this.selectedItem = this.selectedItem.splice(i, 1);
    },
    validateForm() {
      this.$refs.form.validate();
    },
    resetSendResult() {
      this.sendResult = '';
    },
    resetForm() {
      this.resetErrorMsg();
      this.resetSendResult();
      this.selectedItem = [];
      this.email = '';
      this.comment = '';
      this.$refs.form.reset();
    },
  },
};
</script>
<style scoped></style>
