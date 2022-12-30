<template>
  <div class="order-item">
    <v-card class="mb-6 mx-auto" v-show="show" max-width="500" elevation="7">
      <v-card-title class="text-body-1 py-3 px-4 font-weight-bold">
        주문서
      </v-card-title>
      <v-divider></v-divider>
      <div class="pa-4 text-body-2">
        <div class="orderInfo">
          <p>
            🔖 주문번호 :
            <span class="font-weight-medium"> {{ order.orderId }}</span>
          </p>
          <p>
            ⏰ 결제일시 :
            <span class="font-weight-medium">{{
              order.paymentDate | timeFormat
            }}</span>
          </p>
          <p>
            👩🏻‍💻 구매자 :
            <span class="text-no-wrap yellow font-weight-medium">
              {{ order.ordererName }}
              ({{ order.ordererId }})
            </span>
          </p>
          <p v-if="shippingMemo">
            ✍🏻 배송메모 :
            <span class="yellow font-weight-medium">
              {{ shippingMemo }}
            </span>
          </p>
        </div>
        <OrderChip
          v-for="(item, i) in order.items"
          :key="i"
          :order="item"
          @click.native="openOrderDetail(i)"
        />
        <EmailInputField v-model="email" class="mt-3" />
      </div>
      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        top
        color="green"
        height="5"
      ></v-progress-linear>
      <v-card-actions class="pb-4 px-4">
        <v-spacer></v-spacer>
        <v-btn color="green" width="100" elevation="0" dark @click="sendMail">
          메일 보내기
        </v-btn>
      </v-card-actions>
    </v-card>
    <SnackBar :result="sendResult" />
    <SnackBar :result="dispatchResult">
      <template #success>
        송장을 <strong>성공적</strong>으로 등록했습니다.
      </template>
      <template #error> 송장 등록을 <strong>실패</strong>하였습니다. </template>
    </SnackBar>
  </div>
</template>

<script>
import SnackBar from '@/components/SnackBar';
import OrderChip from '@/components/OrderChip';
import EmailInputField from '@/components/EmailInputField';

export default {
  components: { OrderChip, EmailInputField, SnackBar },
  mounted() {
    this.setEmail();
  },
  data() {
    return {
      loading: false,
      show: true,
      sendResult: '',
      dispatchResult: '',
      email: '',
    };
  },
  props: {
    order: {
      type: Object,
    },
  },
  computed: {
    shippingMemo() {
      return this.order.shippingMemo;
    },
    mailData() {
      return {
        store: '영로그',
        items: this.order.items,
        toEmail: this.email,
      };
    },
  },
  methods: {
    setEmail() {
      this.email = this.shippingMemo
        ? this.extractEmail(this.shippingMemo)
        : '';
    },
    extractEmail(memo) {
      const reg = /\S+@+\S+\.+\S{3}/;
      const email = memo.match(reg)[0];
      return email;
    },
    openOrderDetail(index) {
      console.log(this.order.items[index].productOrderId);
      window.open(
        `https://sell.smartstore.naver.com/o/v3/manage/order/popup/${this.order.items[index].productOrderId}/productOrderDetail`,
        '_blank',
      );
    },
    async sendMail() {
      if (this.mailData.toEmail) {
        this.loading = true;
        const sendResult = await this.$store.dispatch(
          'sendMail',
          this.mailData,
        );
        console.log('sendResult', sendResult);
        if (sendResult == 'success') {
          this.sendResult = 'success';
          const dispatchResult = await this.dispatchOrder();
          this.dispatchResult = dispatchResult;
          setTimeout(() => {
            this.show = false;
          }, 3000);
        } else {
          this.sendResult = 'error';
          this.loading = false;
        }
      }
    },
    async dispatchOrder() {
      let result = '';
      if (this.order.items.length == 1) {
        result = await this.$store.dispatch(
          'dispatchOrder',
          this.order.items[0].productOrderId,
        );
      } else {
        result = await Promise.all(
          this.order.items.map(async item => {
            return this.$store.dispatch('dispatchOrder', item.productOrderId);
          }),
        );
        result = result.every(val => val == 'success') ? 'success' : 'error';
      }
      this.loading = false;
      return result;
    },
  },
  filters: {
    timeFormat(value) {
      const date = new Date(value);
      return date.toLocaleString('ja-JP', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hourCycle: 'h23',
        hour: '2-digit',
        minute: '2-digit',
      });
    },
    orderStatus(code) {
      switch (code) {
        case 'AYMENT_WAITING':
          return '결제대기';
        case 'PAYED':
          return '결제완료';
        case 'DELIVERING':
          return '배송중';
        case 'DELIVERED':
          return '배송완료';
        case 'PURCHASE_DECIDED':
          return '결제대기';
        case 'EXCHANGED':
          return '교환';
        case 'CANCELED':
          return '취소';
        case 'RETURNED':
          return '반품';
        case 'CANCELED_BY_NOPAYMENT':
          return '미결제취소';
        case 'DELIVERY_ADDRESS_CHANGED':
          return '주소변경';
      }
    },
  },
};
</script>
<style scoped>
.v-input {
  font-size: 14px !important;
}
</style>
