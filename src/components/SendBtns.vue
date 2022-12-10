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
    orderType: {
      type: String,
      default: '',
    },
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
      if (this.email && this.orderDetail) {
        this.loading = true;
        this.loadingText = '발송 중...';
        const sendResult = await this.$store.dispatch(
          'sendMail',
          this.mailData,
        );
        if (this.orderId && sendResult == 'success') {
          this.loadingText = '송장 등록 중...';
          let dispatchResult = '';
          dispatchResult = await this.$store.dispatch(
            'dispatchOrder',
            this.orderId,
          );
          if (this.orderType == 'multiple') {
            dispatchResult = await Promise.all(
              this.orderDetail.map(async item => {
                return this.$store.dispatch('dispatchOrder', item.orderId);
              }),
            );
          }
          if (dispatchResult == 'success') {
            this.$emit('update:sendResult', 'success');
          } else {
            this.$emit('update:sendResult', 'error');
          }
        }
        this.loading = false;
      }
    },
    resetForm() {
      this.$emit('reset-form');
      this.$emit('update:valid', true);
    },
  },
};
</script>

<style></style>
