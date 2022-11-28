<template>
  <div class="pt-6">
    <v-alert v-model="sendResult" :type="sendResult">
      <span v-if="sendResult == 'success'">
        메일을 <strong>성공적</strong>으로 보냈습니다.
      </span>
      <span v-if="sendResult == 'error'">
        메일 전송을 <strong>실패</strong>하였습니다.
      </span>
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    sendResult: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
