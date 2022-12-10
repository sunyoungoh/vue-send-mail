import Vue from 'vue';
import Vuex from 'vuex';
import { sendMail } from '@/api/mail';
import { dispatchOrder } from '@/api/order';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    async sendMail(context, mailData) {
      let sendResult = '';
      try {
        await sendMail(mailData);
        sendResult = 'success';
      } catch (error) {
        sendResult = 'error';
      }
      return sendResult;
    },
    async dispatchOrder(context, orderId) {
      let dispatchResult = '';
      try {
        await dispatchOrder(orderId);
        dispatchResult = 'success';
      } catch (error) {
        dispatchResult = 'error';
      }
      return dispatchResult;
    },
  },
});
