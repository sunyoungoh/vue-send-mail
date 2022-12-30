<template>
  <v-text-field
    :value="value"
    ref="email"
    :rules="emailRules"
    label="이메일"
    hint="아이디만 입력시 자동으로 @naver.com 가 추가됩니다."
    required
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
  },
  data: () => ({
    emailRules: [
      v => !!v || '이메일을 입력해주세요.',
      v => /\S+@+\S+\.+[a-zA-Z]{2,3}/.test(v) || '이메일 형식으로 입력해주세요',
    ],
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
