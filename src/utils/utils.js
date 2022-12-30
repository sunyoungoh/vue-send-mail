export const openWindow = id => {
  window.open(
    `https://sell.smartstore.naver.com/o/v3/manage/order/popup/${id}/productOrderDetail`,
    '_blank',
  );
};

export const extractEmail = memo => {
  const reg = /\S+@+\S+\.+\S{3}/;
  const email = memo.match(reg)[0];
  return email;
};
