<template>
  <v-text-field
    :value="value"
    ref="email"
    :rules="emailRules"
    label="이메일"
    hint="아이디만 입력시 자동으로 @naver.com 가 추가됩니다."
    required
    :loading="loading"
    @click="reset"
    @input="$emit('input', $event)"
    @blur="addNaverDomain"
  ></v-text-field>
</template>

<script>
export default {
  name: 'EmailInputField',
  props: {
    value: {
      type: String,
    },
    loading: {
      type: Boolean,
    },
  },
  data: () => ({
    emailRules: [v => !!v || '이메일을 입력해주세요.'],
  }),

  methods: {
    reset() {
      this.$refs.email.resetValidation();
      this.$emit('resetSendResult');
    },
    addNaverDomain(e) {
      let email = e.target.value;
      if (!!email && email.indexOf('@') == -1) {
        email = `${email}@naver.com`;
        this.$refs.email.resetValidation();
      }
      this.$emit('input', email);
    },
  },
};
</script>

<style></style>
