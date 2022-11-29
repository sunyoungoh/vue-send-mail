<template>
  <div class="form-container">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        ref="email"
        label="이메일"
        hint="아이디만 입력시 자동으로 @naver.com 가 추가됩니다."
        required
        validate-on-blur
        @blur="addNaverDomain"
        @click="resetSendResult"
      ></v-text-field>
      <v-select
        v-model="selectItem"
        :items="items"
        item-text="itemName"
        item-value="itemId"
        :rules="[v => !!v || '상품을 선택해주세요.']"
        label="상품명"
        required
        @change="resetSelectOption"
        @click="resetSendResult"
      ></v-select>
      <v-select
        v-for="(item, i) in options.itemOptions"
        :key="i"
        ref="itemOptions"
        v-model="selectOption[i]"
        :items="item.value"
        :rules="[v => !!v || '옵션을 선택해주세요.']"
        :label="item.label"
        required
        @click="resetSendResult"
      ></v-select>
      <div class="mt-6 d-flex justify-space-between">
        <v-btn
          :disabled="!valid || loading"
          :loading="loading"
          width="160"
          color="black white--text"
          elevation="0"
          x-large
          class="mr-2"
          @click="sendMail"
        >
          메일 보내기
          <template v-slot:loader>
            <span>전송중...</span>
          </template>
        </v-btn>
        <v-btn color="grey" width="160" x-large @click="resetForm" outlined>
          모두 지우기
        </v-btn>
      </div>
    </v-form>
    <ResultAlert v-if="sendResult !== ''" :sendResult="sendResult" />
  </div>
</template>

<script>
import { sendMail } from '@/api/mail';
import ResultAlert from '@/components/ResultAlert';
export default {
  name: 'HelloWorld',
  components: {
    ResultAlert,
  },
  data: () => ({
    loading: false,
    valid: true,
    email: '',
    emailRules: [
      v => !!v || '이메일을 입력해주세요.',
      v => /.+@.+\..+/.test(v) || '이메일 형식으로 입력해주세요',
    ],
    selectItem: null,
    selectOption: [],
    sendResult: '',
    items: [
      {
        itemId: '5033569',
        itemName: '2023 심플 플래너',
        itemOptionLabel: '컬러',
        itemOptions: [
          {
            label: '컬러',
            value: ['라이트', '인디핑크', '스카이블루', '다크'],
          },
        ],
      },
      {
        itemId: '5033568',
        itemName: '2023 모던 플래너',
        itemOptionLabel: '컬러',
        itemOptions: [{ label: '컬러', value: ['화이트', '다크'] }],
      },
      {
        itemId: '5033567',
        itemName: '2023 타임라인 플래너',
        itemOptions: [{ label: '위클리타입', value: ['스케줄', '타임테이블'] }],
      },
      {
        itemId: '5033566',
        itemName: '2023 먼슬리&데일리 플래너',
        itemOptions: [
          { label: '컬러', value: ['화이트', '다크'] },
          { label: '시작요일', value: ['일요일시작', '월요일시작'] },
          { label: '데일리타입', value: ['스케줄', '타임테이블'] },
        ],
      },
      {
        itemId: '5033565',
        itemName: '31DAYS 플래너',
        itemOptions: [
          { label: '컬러', value: ['화이트', '다크'] },
          { label: '데일리타입', value: ['스케줄', '타임테이블'] },
        ],
      },
      {
        itemId: '5033562',
        itemName: '3년 5년 일기',
        itemOptions: [
          { label: '연도', value: ['3년', '5년'] },
          { label: '컬러', value: ['화이트', '다크'] },
        ],
      },
      {
        itemId: '5033564',
        itemName: '세로형 인덱스 노트',
        itemOptions: [{ label: '컬러', value: ['화이트', '다크'] }],
      },
      {
        itemId: '5033563',
        itemName: '가로형 인덱스 노트',
        itemOptions: [{ label: '컬러', value: ['화이트', '다크'] }],
      },
      {
        itemId: '5033560',
        itemName: '독서노트',
        itemOptions: [{ label: '컬러', value: ['화이트', '다크'] }],
      },
      {
        itemId: '5033558',
        itemName: '드라마노트',
        itemOptions: [{ label: '컬러', value: ['화이트', '다크'] }],
      },
      {
        itemId: '5033557',
        itemName: '먼슬리 트래커북',
        itemOptions: [
          { label: '컬러', value: ['차콜', '캔디핑크', '스카이블루'] },
        ],
      },
      {
        itemId: '5033561',
        itemName: '180 베이직 노트',
        itemOption: [''],
      },
      {
        itemId: '5033559',
        itemName: '180 체커보드 노트',
        itemOption: [''],
      },
    ],
  }),
  computed: {
    options() {
      const itemOptions = this.selectItem
        ? this.items.filter(item => item.itemId == this.selectItem)[0]
        : [{ itemOption: '', itemOptionLabel: '상품옵션' }];
      return itemOptions;
    },
  },
  methods: {
    makeOptionStr() {
      return this.selectOption !== '' ? this.selectOption.join() : '';
    },
    async sendMail() {
      this.sendResult = '';
      this.$refs.form.validate();
      if (!!this.email && !!this.selectItem) {
        this.loading = true;
        const optionStr = this.makeOptionStr();
        try {
          const sendResult = await sendMail({
            itemId: this.selectItem,
            itemOptionName: optionStr,
            toEmail: this.email,
          });
          if (sendResult.status == 200) {
            this.sendResult = 'success';
          }
        } catch (error) {
          console.log(error);
          if (error.response.status == 400) this.sendResult = 'error';
        } finally {
          this.loading = false;
        }
      }
    },
    addNaverDomain() {
      if (!!this.email && this.email.indexOf('@') == -1) {
        this.email = `${this.email}@naver.com`;
        this.$refs.email.resetValidation();
      }
    },
    resetSelectOption() {
      if (this.$refs.itemOptions) {
        for (let i = 0; i < this.$refs.itemOptions.length; i++) {
          this.$refs.itemOptions[i].reset();
        }
      }
      this.selectOption = [];
    },
    resetSendResult() {
      this.sendResult = '';
    },
    resetForm() {
      this.resetSendResult();
      this.$refs.form.reset();
    },
  },
};
</script>
<style scoped></style>
