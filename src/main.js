import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'vant';
import { Popup } from 'vant';
import { Icon } from 'vant';
import { Badge } from 'vant';
import { Search } from 'vant';
import { Toast } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Cell, CellGroup } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import { Tab, Tabs } from 'vant';
import { Slider } from 'vant';
import { Uploader } from 'vant';
import { Empty } from 'vant';

import 'vant/lib/index.css';

Vue.use(Empty);
Vue.use(Uploader);
Vue.use(Slider);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.use(CellGroup)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Toast);
Vue.use(Search);
Vue.use(Badge);
Vue.use(Icon)
Vue.use(Button);
Vue.use(Popup)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
