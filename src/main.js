import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue/es';
import 'ant-design-vue/dist/antd.less';
import '@/style/reset.less'

const app = createApp(App)
app.use(Antd)
app.mount('#app')

