import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.filter('itemName', itemId => {
  if (typeof itemId == 'string') {
    itemId = Number(itemId);
  }
  switch (itemId) {
    case 6175018692:
      return '2023 심플 플래너';
    case 6173761992:
      return '2023 모던 플래너';
    case 7551229680:
      return '2023 타임라인 플래너';
    case 6230373650:
      return '2023 먼슬리&데일리 플래너';
    case 6183672844:
      return '31DAYS 플래너';
    case 6339448390:
      return '3년 5년 다이어리';
    case 6668700804:
      return '세로형 인덱스 노트';
    case 6711856094:
      return '가로형 인덱스 노트';
    case 6907619722:
      return '독서노트';
    case 7118280906:
      return '드라마노트';
    case 6390846551:
      return '먼슬리 트래커북';
    case 6293308097:
      return '180 베이직 노트';
    case 6498685859:
      return '180 체커보드 노트';
    case 7674508068:
      return '레시피북';
    default:
      return '';
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
