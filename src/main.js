import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/index.css';

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//layouts
import DefaultLayout from '@/components/layouts/DefaultLayout';
import EmptyLayout from '@/components/layouts/EmptyLayout';

library.add(faBars, faX);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('default-layout', DefaultLayout)
    .component('empty-layout', EmptyLayout)
    .use(router)
    .mount('#app')

    
