import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      fa,
      mdi,
    },
  },
});

createApp(App).use(store).use(router).use(vuetify).mount('#app')