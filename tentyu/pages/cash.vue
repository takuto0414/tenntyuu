<template>
  
<div>
  <div>{{ cardErrorMessage }}</div>
  <div id="card-element"></div>
  <v-button @click="submit">SUBMIT</v-button></div>
</template>
<script>
export default {
  data() {
    return {
      cardErrorMessage: ''
    }
  },
  mounted() {
    const elements = this.$stripe.import().elements()
    const card = elements.create('card')
    card.mount('#card-element')
    card.on('change', this.showCardError)
  },
  methods: {
    showCardError(event) {
      if (event.error) {
        this.cardErrorMessage = event.error.message
      } else {
        this.cardErrorMessage = ''
      }
    },
    submit() {
      // TODO 以下を参考にしつつ、paymentの実行をします
      // https://stripe.com/docs/payments/accept-a-payment
    }
  }
}
</script>