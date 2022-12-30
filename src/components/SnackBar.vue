<template>
  <v-snackbar
    class="mb-6"
    :value="result !== '' ? true : false"
    :color="color"
    timeout="2000"
    bottom
    elevation="24"
  >
    <span v-if="result == 'success'">
      <slot name="success">
        메일을 <strong>성공적</strong>으로 보냈습니다.
      </slot>
    </span>
    <span v-else>
      <slot name="error"> 메일 전송을 <strong>실패</strong>하였습니다. </slot>
    </span>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    result: {
      type: String,
      default: '',
    },
  },
  computed: {
    color() {
      return this.result == 'success' ? 'green' : 'error';
    },
  },
};
</script>

<style></style>
