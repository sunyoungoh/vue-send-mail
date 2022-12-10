<template>
  <v-text-field
    v-model="email"
    ref="email"
    :rules="emailRules"
    label="이메일"
    hint="아이디만 입력시 자동으로 @naver.com 가 추가됩니다."
    required
    validate-on-blur
    @click="$emit('resetSendResult')"
    @blur="addNaverDomain"
  ></v-text-field>
</template>

<script>
export default {
  name: 'EmailInputField',
  data: () => ({
    email: '',
    emailRules: [
      v => !!v || '이메일을 입력해주세요.',
      v => /.+@.+\..+/.test(v) || '이메일 형식으로 입력해주세요',
    ],
  }),
  methods: {
    addNaverDomain() {
      if (!!this.email && this.email.indexOf('@') == -1) {
        this.email = `${this.email}@naver.com`;
        this.$refs.email.resetValidation();
      }
      this.$emit('input', this.email);
    },
  },
};
</script>

<style></style>
