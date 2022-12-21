import Vue from 'vue';
import Vuex from 'vuex';
import { sendMail } from '@/api/mail';
import { getOrders, getOrderDetail, dispatchOrder } from '@/api/order';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orderType: 'single',
  },
  mutations: {
    setOrderType(state, orderType) {
      state.orderType = orderType;
    },
  },
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
    async getOrderDetail(context, orderId) {
      const { data } = await getOrderDetail(orderId);
      let options = data.productOption;
      options = Array.isArray(options) ? options.join() : options;
      const orderDetail = [
        {
          itemId: data.productId,
          itemOption: options,
        },
      ];
      return orderDetail;
    },
    async getOrders(context, orderId) {
      const { data } = await getOrders(orderId);
      const productOrderIds = data.productOrderIds;
      let orderDetail = '';
      orderDetail = await Promise.all(
        productOrderIds.map(async orderId => {
          return getOrderDetail(orderId);
        }),
      );
      orderDetail = orderDetail.map(item => {
        let options = item.data.productOption;
        options = Array.isArray(item.data.productOption)
          ? options.join()
          : options;
        return {
          orderId: data.productOrderId,
          itemId: item.data.productId,
          itemOption: options,
        };
      });
      return orderDetail;
    },
  },
});
