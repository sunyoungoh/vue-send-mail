<template>
  <div class="form-container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <div class="order-id-wrap">
        <v-text-field
          v-model="orderId"
          ref="orderId"
          :label="label"
          :rules="[v => !!v || `${this.label}를 조회해주세요.`]"
          :error-messages="errorMsg"
          required
          validate-on-blur
          @click="resetErrorMsg"
        >
        </v-text-field>
        <v-btn
          width="80"
          :disabled="loading"
          :loading="loading"
          color="primary white--text"
          elevation="0"
          class="ml-4 mb-2"
          @click="getOrderInfo"
          >조회하기
          <template v-slot:loader>
            <span>조회중...</span>
          </template>
        </v-btn>
      </div>
      <OrderChip v-if="orderDetail" :order-detail="orderDetail" />
      <EmailInputField v-model="email" />
      <v-textarea
        v-model="comment"
        name="comment"
        label="코멘트"
        rows="3"
        clearable
      ></v-textarea>
      <SendBtns
        :order-type="orderType"
        :email="email"
        :order-id="orderId"
        :order-detail="orderDetail"
        :comment="comment"
        :valid="valid"
        @update:sendResult="val => (sendResult = val)"
        @update:valid="val => (valid = val)"
        @validate-form="validateForm"
        @reset-form="resetForm"
      />
    </v-form>
    <ResultAlert v-if="sendResult !== ''" :send-result="sendResult" />
  </div>
</template>

<script>
import { getOrders, getOrderDetail } from '@/api/order';
import EmailInputField from '@/components/EmailInputField';
import OrderChip from '@/components/OrderChip';
import ResultAlert from '@/components/ResultAlert';
import SendBtns from '@/components/SendBtns';

export default {
  name: 'OrderMailForm',
  components: {
    EmailInputField,
    OrderChip,
    SendBtns,
    ResultAlert,
  },
  props: {
    orderType: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    email: '',
    orderId: '',
    orderDetail: [],
    comment: '',
    sendResult: '',
    valid: true,
    loading: false,
    errorMsg: '',
  }),
  computed: {
    label() {
      return this.orderType == 'single' ? '상품주문번호' : '주문번호';
    },
  },
  methods: {
    resetErrorMsg() {
      this.errorMsg = '';
      this.$refs.orderId.reset();
    },
    convertArrToStr(options) {
      return Array.isArray(options) ? options.join() : options;
    },
    async getOrderInfo() {
      this.resetSendResult();
      if (!this.orderId) {
        this.errorMsg = `${this.label}를 조회해주세요.`;
      } else {
        this.loading = true;
        try {
          if (this.orderType == 'single') {
            const { data } = await getOrderDetail(this.orderId);
            this.orderDetail = [
              {
                itemId: data.productId,
                itemOptionName: this.convertArrToStr(data.productOption),
              },
            ];
          } else {
            const { data } = await getOrders(this.orderId);
            const productOrderIds = data.productOrderIds;
            this.orderDetail = await Promise.all(
              productOrderIds.map(async orderId => {
                return getOrderDetail(orderId);
              }),
            );
            this.orderDetail = this.orderDetail.map(item => {
              return {
                orderId: data.productOrderId,
                itemId: item.data.productId,
                itemOptionName: this.convertArrToStr(item.data.productOption),
              };
            });
          }
        } catch (error) {
          if (error.response.status == 400) {
            this.errorMsg = error.response.data;
            this.orderDetail = [];
          }
        } finally {
          this.loading = false;
        }
      }
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
      this.valid = true;
      this.orderId = '';
      this.orderDetail = [];
      this.email = '';
      this.comment = '';
      this.$refs.form.reset();
    },
  },
};
</script>
<style scoped></style>
