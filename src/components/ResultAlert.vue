<template>
  <v-alert :type="result" text class="my-4">
    <span v-if="result == 'success'">
      <slot name="success">
        메일을 <strong>성공적</strong>으로 보냈습니다.
      </slot>
    </span>
    <span v-else>
      <slot name="error"> 메일 전송을 <strong>실패</strong>하였습니다. </slot>
    </span>
  </v-alert>
</template>

<script>
export default {
  props: {
    result: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
