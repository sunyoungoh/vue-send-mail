import Vue from 'vue';
import Vuex from 'vuex';
import { sendMail } from '@/api/mail';
import { getOrders, getOrderDetail, dispatchOrder } from '@/api/order';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeTab: 'newOrder',
  },
  mutations: {
    setActiveTab(state, activeTab) {
      state.activeTab = activeTab;
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
    async dispatchOrder(context, orderItems) {
      let dispatchResult = '';
      try {
        //  샹품이 하나일 때
        if (orderItems.length == 1) {
          let { status } = await dispatchOrder(orderItems[0].productOrderId);
          dispatchResult = status == 200 ? 'success' : 'error';
        } else {
          // 상품이 여러개일때
          let dispatchResults = await Promise.all(
            orderItems.map(async item => {
              let { status } = await dispatchOrder(item.productOrderId);
              return status;
            }),
          );
          dispatchResult = dispatchResults.every(val => val == 200)
            ? 'success'
            : 'error';
        }
      } catch (error) {
        dispatchResult = 'error';
      }
      return dispatchResult;
    },
    async getOrderDetail(context, orderId) {
      const { data } = await getOrderDetail([orderId]);
      return data;
    },
    async getOrders(context, orderId) {
      const { data } = await getOrders(orderId);
      const { productOrderIds } = data;
      const orderDetail = await getOrderDetail(productOrderIds);
      return orderDetail.data;
    },
  },
});
