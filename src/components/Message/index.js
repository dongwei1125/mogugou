import Vue from 'vue'
import main from './main.vue'

const MessageConstructor = Vue.extend(main)
const Message = function (options) {
  if (typeof options === 'string') {
    options = {
      message: options,
    }
  }

  const instance = new MessageConstructor({
    data: options,
  })

  instance.$mount()

  document.body.appendChild(instance.$el)
}

export default {
  install() {
    Vue.prototype.$message = Message
  },
}
