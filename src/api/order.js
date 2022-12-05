import { instance } from './index';

const getOrderDetail = orderId => {
  return instance.get(`/naver/${orderId}`);
};
const dispatchProductOrder = orderId => {
  return instance.post(`/naver/${orderId}`);
};

export { getOrderDetail, dispatchProductOrder };
