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
      <v-alert
        v-if="shippingMemo"
        border="left"
        colored-border
        color="primary"
        elevation="2"
        class="text-subtitle-2 mb-6"
      >
        ✍🏻
        {{ shippingMemo }}
      </v-alert>
      <EmailInputField v-model="email" :valid="valid" @click="resetResults" />
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
        :order-id="orderId"
        :order-detail="orderDetail"
        :comment="comment"
        :valid="valid"
        @update:sendResult="val => (sendResult = val)"
        @update:dispatchResult="val => (dispatchResult = val)"
        @update:errorMsg="setErrorMsg"
        @validate-form="validateForm"
        @reset-form="resetForm"
      />
    </v-form>
    <ResultAlert class="pt-6" v-if="sendResult !== ''" :result="sendResult" />
    <ResultAlert v-if="dispatchResult !== ''" :result="dispatchResult">
      <template #success>
        송장을 <strong>성공적</strong>으로 등록했습니다.
      </template>
      <template #error> 송장 등록을 <strong>실패</strong>하였습니다. </template>
    </ResultAlert>
  </div>
</template>

<script>
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
  data: () => ({
    email: '',
    orderId: '',
    orderDetail: [],
    comment: '',
    sendResult: '',
    dispatchResult: '',
    valid: true,
    loading: false,
    errorMsg: '',
    shippingMemo: '',
  }),
  computed: {
    label() {
      return this.orderType == 'single' ? '상품주문번호' : '주문번호';
    },
    shippingMemoEmail() {
      const reg = /\S+@+\S+\.+\S{3}/;
      const email = this.orderDetail[0].shippingMemo.match(reg)[0];
      return email;
    },
  },
  methods: {
    setErrorMsg() {
      this.errorMsg = `${this.label}를 조회해주세요.`;
    },
    resetErrorMsg() {
      this.$refs.orderId.resetValidation();
      this.errorMsg = '';
    },
    async getOrderInfo() {
      this.resetResults();
      if (!this.orderId) {
        this.setErrorMsg();
      } else {
        this.loading = true;
        try {
          if (this.$store.state.orderType == 'single') {
            this.orderDetail = await this.$store.dispatch(
              'getOrderDetail',
              this.orderId,
            );
          } else {
            this.orderDetail = await this.$store.dispatch(
              'getOrders',
              this.orderId,
            );
          }
          // 배송메모에 이메일이 있을시 email 자동 추가
          if (this.orderDetail[0]?.shippingMemo) {
            this.shippingMemo = this.orderDetail[0]?.shippingMemo;
            this.email = this.shippingMemoEmail;
          }
          this.resetErrorMsg();
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
    resetResults() {
      this.sendResult = '';
      this.dispatchResult = '';
    },
    resetForm() {
      this.resetErrorMsg();
      this.resetResults();
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
