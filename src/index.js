import { createApp } from 'vue';

import normalize from 'normalize.css/normalize.css';
import App from './components/App.vue';
import Clause from './components/Clause.vue';
import Result from './components/Result.vue';

const myApp = createApp(App);
myApp.component('clause', Clause);
myApp.component('result', Result);

myApp.mount(document.body);
