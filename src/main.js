import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json'
// vee-validate 基本設定
defineRule('email', email)
defineRule('required', required)
defineRule('min', min)

// Activate the locale
configure({
  generateMessage: localize({ zh_TW: zhTw }),
  validateOnInput: true // 調整為輸入字元立即進行驗證
})
setLocale('zh_TW')
// import 全域第三方套件
const app = createApp(App).use(router)

app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
