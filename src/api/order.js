import { instance } from './index';

const getNewOrders = () => {
  return instance.get(`/naver/orders`);
};

const getOrders = orderId => {
  return instance.get(`/naver/orders/${orderId}`);
};

const getOrderDetail = productOrderId => {
  return instance.get(`/naver/detail`, {
    params: { productOrderId: productOrderId },
  });
};

const dispatchOrder = orderId => {
  return instance.post(`/naver/${orderId}`);
};

export { getNewOrders, getOrders, getOrderDetail, dispatchOrder };
