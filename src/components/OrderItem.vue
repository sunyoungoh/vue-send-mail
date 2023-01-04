<template>
  <div class="order-item">
    <Transition>
      <v-card
        class="mb-6 mx-auto"
        v-show="show"
        max-width="500"
        elevation="7"
        :loading="loading"
      >
        <v-card-title class="text-body-1 py-3 px-4 font-weight-bold">
          주문서
        </v-card-title>
        <v-divider></v-divider>
        <div class="pa-4 text-body-2">
          <div class="order-info">
            <p>
              🔖 주문번호 :
              {{ order.orderId }}
            </p>
            <p>
              ⏰ 결제일시 :
              {{ order.paymentDate | timeFormat }}
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
          <EmailInputField
            v-model="email"
            class="mt-3"
            :loading="emailLoading"
          />
          <v-textarea
            v-model="comment"
            v-show="toggle"
            name="comment"
            label="코멘트"
            auto-grow
            rows="1"
            clearable
          ></v-textarea>
        </div>
        <v-card-actions class="pb-4 px-4">
          <v-spacer></v-spacer>
          <v-btn
            color="green"
            width="100"
            elevation="0"
            text
            @click="toggle = !toggle"
          >
            <span v-if="!toggle"> 코멘트 추가 </span>
            <span v-else>코멘트 삭제 </span>
          </v-btn>
          <v-btn color="green" width="100" elevation="0" dark @click="sendMail">
            메일 보내기
          </v-btn>
        </v-card-actions>
      </v-card>
    </Transition>
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
import { getOrdererId } from '@/api/order';

export default {
  components: {
    OrderChip,
    EmailInputField,
    SnackBar,
  },
  async mounted() {
    if (this.order.shippingMemo) {
      this.email = extractEmail(this.order.shippingMemo);
    }
    // 배포시 503 에러로 주석처리
    else {
      this.email = '이메일 가져오는 중 ...';
      this.emailLoading = true;
      const { data } = await getOrdererId(this.order.items[0].productOrderId);
      this.email = `${data.ordererId}@naver.com`;
      this.emailLoading = false;
    }
  },
  data() {
    return {
      emailLoading: false,
      loading: false,
      toggle: false,
      show: true,
      sendResult: '',
      dispatchResult: '',
      email: '',
      comment: '',
    };
  },
  props: {
    order: {
      type: Object,
    },
  },
  computed: {
    mailData() {
      const comment = this.toggle ? this.comment.replaceAll('\n', '<br/>') : '';
      return {
        store: '영로그',
        items: this.order.items,
        toEmail: this.email,
        comment: comment,
      };
    },
  },
  methods: {
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
          this.$emit('remove-item');
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
        }, 2000);
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
