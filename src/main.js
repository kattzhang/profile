import Vue from 'vue'
import App from './App'
import 'common/scss/index.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  created() {
    this.paused = false
    this.animationSkipped = false
  },
  render: h => h(App)
})

let styleTagEl = document.getElementById('style-tag')
app.$on('styleAppend', styleText => {
  styleTagEl.textContent += styleText
})

app.$on('styleOverwrite', styleText => {
  styleTagEl.textContent = styleText
})

app.$on('togglePause', function (state) {
  this.paused = state === 1
})

app.$on('skip', function () {
  this.animationSkipped = true
})
