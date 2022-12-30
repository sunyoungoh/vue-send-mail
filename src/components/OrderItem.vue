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
          <p v-if="order.shippingMemo">
            ✍🏻 배송메모 :
            <span class="yellow font-weight-medium">
              {{ order.shippingMemo }}
            </span>
          </p>
        </div>
        <OrderChip
          v-for="(item, i) in order.items"
          :key="i"
          :order="item"
          @click.native="openOrderDetail(item.productOrderId)"
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
import { openWindow, extractEmail } from '@/utils/utils';

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
      this.email = this.shippingMemo ? extractEmail(this.shippingMemo) : '';
    },
    openOrderDetail(id) {
      openWindow(id);
    },
    async sendMail() {
      if (this.email) {
        this.loading = true;
        this.sendResult = await this.$store.dispatch('sendMail', this.mailData);
        // 메일 전송 성공하면 송장 등록
        if (this.sendResult == 'success') {
          await this.dispatchOrder();
        }
        this.loading = false;
      }
    },
    async dispatchOrder() {
      this.dispatchResult = await this.$store.dispatch(
        'dispatchOrder',
        this.order.items,
      );
      this.loading = false;
      if (this.dispatchResult == 'success') {
        setTimeout(() => {
          this.show = false;
        }, 3000);
      }
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
  },
};
</script>
<style scoped>
.v-input {
  font-size: 14px !important;
}
</style>
