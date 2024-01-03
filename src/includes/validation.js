import { Form as VeeForm, Field as VeeField } from 'vee-validate'

export default {
  install(app) {
    app.component('WeeForm', VeeForm)
    app.component('VeeField', VeeField)
  }
}
