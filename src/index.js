import { createApp } from 'vue';

import App from './components/App.vue';
import Clause from './components/Clause.vue';

const myApp = createApp(App);
myApp.component('clause', Clause);

myApp.mount(document.body);
