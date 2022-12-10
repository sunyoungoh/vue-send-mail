import { instance } from './index';

const getOrders = orderId => {
  return instance.get(`/naver/orders/${orderId}`);
};

const getOrderDetail = orderId => {
  return instance.get(`/naver/detail/${orderId}`);
};
const dispatchOrder = orderId => {
  return instance.post(`/naver/${orderId}`);
};

export { getOrders, getOrderDetail, dispatchOrder };
