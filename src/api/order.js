import { instance } from './index';

const getNewOrders = () => {
  return instance.get(`/naver/orders/new`);
};

const getOrders = orderId => {
  return instance.get(`/naver/orders/${orderId}`);
};

const getOrderDetail = productOrderId => {
  return instance.get(`/naver/orders/detail`, {
    params: { productOrderId: productOrderId },
  });
};

const getOrdererId = productOrderId => {
  return instance.get(`/naver/orderer/${productOrderId}`);
};

const dispatchOrder = orderId => {
  return instance.post(`/naver/dispatch/${orderId}`);
};

export { getNewOrders, getOrders, getOrderDetail, getOrdererId, dispatchOrder };
