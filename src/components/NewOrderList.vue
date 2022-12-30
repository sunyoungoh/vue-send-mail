<template>
  <v-container class="pt-8 px-4">
    <div v-if="orderList" class="pb-4">
      <div v-for="(order, i) in orderList" :key="i">
        <OrderItem :order="order" />
      </div>
    </div>
    <div v-else>
      <h3 class="text-center mt-16 grey--text text--darken-3">
        신규 주문이 없습니다.
      </h3>
    </div>
  </v-container>
</template>

<script>
import OrderItem from '@/components/OrderItem';
import { getNewOrders, getOrderDetail } from '@/api/order';

export default {
  components: { OrderItem },
  mounted() {
    this.fetchNewOrder();
  },
  data() {
    return {
      orderList: [],
    };
  },
  methods: {
    async fetchNewOrder() {
      // 신규주문 리스트 가져오기 (결제완료, 배송지변경 상태만)
      const { data } = await getNewOrders();
      const newOrder = data;
      if (newOrder.length) {
        // 상품 주문번호 맵 생성
        const productOrderIds = newOrder.map(item => item.productOrderId);

        // 상품 주문 상세내역 조회
        let orderList = await getOrderDetail(productOrderIds);
        orderList = orderList.data;

        // 주문번호를 키값으로 객체 생성
        var groupedObj = orderList.reduce((obj, order) => {
          obj[order.orderId] = obj[order.orderId] || [];
          obj[order.orderId].push(order);
          return obj;
        }, {});

        // 배열로 변환
        var groupedArr = Object.keys(groupedObj).map(function (key) {
          return { orderId: key, orderInfo: groupedObj[key] };
        });

        // 주문번호로 묶은 oderList 생성
        const uniOrderList = groupedArr.map(order => {
          let items = [];
          order.orderInfo.map(item => items.push(item.items));
          return {
            orderId: order.orderId,
            paymentDate: order.orderInfo[0].paymentDate,
            items: items,
            ordererId: order.orderInfo[0].ordererId,
            ordererName: order.orderInfo[0].ordererName,
            shippingMemo: order.orderInfo[0].shippingMemo,
          };
        });

        this.orderList = uniOrderList;
      }
    },
  },
};
</script>

<style></style>
