<template>
  <div class="mt-6 d-flex justify-space-between">
    <v-btn
      :disabled="!valid || loading"
      :loading="loading"
      width="250"
      color="green white--text"
      elevation="0"
      x-large
      @click="sendMail"
    >
      메일 보내기
      <template v-slot:loader>
        <span>{{ loadingText }}</span>
      </template>
    </v-btn>
    <v-btn color="grey" width="110" x-large @click="resetForm" outlined>
      모두 지우기
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: '',
    },
    orderId: {
      type: String,
      default: '',
    },
    orderDetail: {
      type: [Object, Array],
      require: true,
    },
    comment: {
      type: String,
      default: '',
    },
    valid: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      loading: false,
      loadingText: '',
    };
  },
  computed: {
    mailData() {
      return {
        store: '영로그',
        items: this.orderDetail,
        toEmail: this.email,
        comment: this.comment.replaceAll('\n', '<br/>'),
      };
    },
  },
  methods: {
    async sendMail() {
      this.$emit('update:sendResult', '');
      this.$emit('validate-form');
      if (!this.orderDetail[0]) {
        this.$emit('update:errorMsg');
      }
      if (this.email && !!this.orderDetail[0]) {
        this.loading = true;
        this.loadingText = '메일 발송 중...';
        const sendResult = await this.$store.dispatch(
          'sendMail',
          this.mailData,
        );
        this.$emit('update:sendResult', sendResult);
        if (this.orderId && sendResult == 'success') {
          const dispatchResult = await this.dispatchOrder();
          this.$emit('update:dispatchResult', dispatchResult);
        }
        this.loading = false;
      }
    },
    async dispatchOrder() {
      this.loadingText = '송장 등록 중...';
      let result = '';
      if (this.$store.state.orderType == 'single') {
        result = await this.$store.dispatch('dispatchOrder', this.orderId);
      } else if (this.$store.state.orderType == 'multiple') {
        result = await Promise.all(
          this.orderDetail.map(async item => {
            return this.$store.dispatch('dispatchOrder', item.orderId);
          }),
        );
        result = result.every(val => val == 'success') ? 'success' : 'error';
      }
      return result;
    },
    resetForm() {
      this.$emit('reset-form');
    },
  },
};
</script>

<style scoped></style>
