
import app from './app.js';
import goods_item_component from './goods-item-component.js';
import cart_item_component from './cart-item-component.js';
import search_component from './search-component';

const vApp = Vue.createApp(app.description);

vApp.component('goods-item', goods_item_component.description);

vApp.component('cart-item', cart_item_component.description);

vApp.component('search', search_component.description);

global.main = vApp.mount('#main');