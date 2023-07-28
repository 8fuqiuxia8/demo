/**
 * 状态管理
 */
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { getRouter } from './router'

createApp(App)
	// 使用pinia代替vuex缓存
	.use(Antd)
	.use(ElementPlus)
	.use(createPinia().use(piniaPluginPersist))
	.use(getRouter())
	.mount('#app')
