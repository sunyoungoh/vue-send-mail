<template>
  <div class="form-container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="order-id-wrap">
        <v-text-field
          v-model="orderId"
          ref="orderId"
          label="주문번호"
          :error-messages="orderIdErrorMsg"
          @click="
            {
              orderIdErrorMsg = '';
              getOrderLoading = false;
            }
          "
        ></v-text-field>
        <v-btn
          width="80"
          :disabled="!orderIdValid || getOrderLoading"
          :loading="getOrderLoading"
          color="success white--text"
          elevation="0"
          class="ml-4"
          @click="getOrderDetail"
          >조회하기
          <template v-slot:loader>
            <span>조회중...</span>
          </template>
        </v-btn>
      </div>
      <v-select
        v-model="selectItem"
        :items="items"
        item-text="itemName"
        item-value="itemId"
        :rules="[v => !!v || '상품을 선택해주세요.']"
        label="상품명"
        required
        :readonly="isOrderData"
        @change="resetSelectOption"
        @click="resetSendResult"
      ></v-select>
      <v-select
        v-for="(item, i) in options.itemOptions"
        :key="i"
        ref="itemOptions"
        v-model="selectOption[i]"
        :items="item.value"
        :rules="[v => !!v || '옵션을 선택해주세요.']"
        :label="item.label"
        :readonly="isOrderData"
        required
        @click="resetSendResult"
      ></v-select>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        ref="email"
        label="이메일"
        hint="아이디만 입력시 자동으로 @naver.com 가 추가됩니다."
        required
        validate-on-blur
        @blur="addNaverDomain"
        @click="resetSendResult"
      ></v-text-field>
      <div class="mt-6 d-flex justify-space-between">
        <v-btn
          :disabled="!valid || loading"
          :loading="loading"
          width="160"
          color="black white--text"
          elevation="0"
          x-large
          class="mr-2"
          @click="sendMail"
        >
          메일 보내기
          <template v-slot:loader>
            <span>전송중...</span>
          </template>
        </v-btn>
        <v-btn color="grey" width="160" x-large @click="resetForm" outlined>
          모두 지우기
        </v-btn>
      </div>
    </v-form>
    <ResultAlert v-if="sendResult !== ''" :sendResult="sendResult" />
  </div>
</template>

<script>
import { itemList } from '@/utils/getItemList';
import { sendMail } from '@/api/mail';
import { getOrderDetail, dispatchProductOrder } from '@/api/order';
import ResultAlert from '@/components/ResultAlert';

export default {
  name: 'MailForm',
  components: {
    ResultAlert,
  },
  data: () => ({
    loading: false,
    valid: true,
    orderId: '',
    orderIdErrorMsg: '',
    orderIdValid: true,
    getOrderLoading: false,
    isOrderData: false,
    email: '',
    emailRules: [
      v => !!v || '이메일을 입력해주세요.',
      v => /.+@.+\..+/.test(v) || '이메일 형식으로 입력해주세요',
    ],
    selectItem: '',
    selectOption: [],
    sendResult: '',
    items: itemList,
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
    makeOptionStr() {
      return this.selectOption !== '' ? this.selectOption.join() : '';
    },
    async getOrderDetail() {
      if (this.orderId) {
        this.getOrderLoading = true;
        try {
          const { data } = await getOrderDetail(this.orderId);
          this.isOrderData = true;
          this.selectItem = data.itemNo;
          this.selectOption = data.option;
        } catch (error) {
          if (error.response.status == 400)
            this.orderIdErrorMsg = error.response.data;
        } finally {
          this.getOrderLoading = false;
        }
      }
    },
    async sendMail() {
      this.sendResult = '';
      this.$refs.form.validate();
      if (!!this.email && !!this.selectItem) {
        this.loading = true;
        const optionStr = this.makeOptionStr();
        try {
          const sendResult = await sendMail({
            itemId: this.selectItem,
            itemOptionName: optionStr,
            toEmail: this.email,
          });
          if (sendResult.status == 200) {
            // 상품 주문번호가 있으면 송장등록까지
            if (this.orderId) {
              try {
                console.log({
                  itemId: this.selectItem,
                  itemOptionName: optionStr,
                  toEmail: this.email,
                });
                await dispatchProductOrder(this.orderId);
              } catch (error) {
                this.sendResult = 'error';
              }
            }
            this.sendResult = 'success';
          }
        } catch (error) {
          this.sendResult = 'error';
        } finally {
          this.loading = false;
        }
      }
    },
    addNaverDomain() {
      if (!!this.email && this.email.indexOf('@') == -1) {
        this.email = `${this.email}@naver.com`;
        this.$refs.email.resetValidation();
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
    resetSendResult() {
      this.sendResult = '';
    },
    resetForm() {
      this.resetSendResult();
      this.isOrderData = false;
      this.$refs.form.reset();
    },
  },
};
</script>
<style scoped></style>
