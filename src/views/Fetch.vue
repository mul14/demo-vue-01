<template>
  <div>
    <button @click="reload">Click to load data from a URL</button>
    <ul>
      <li v-for="order in orders" :key="order.id">
        Customer ID: {{ order.customer_id }} <br>
        Transaction code: {{ order.code }} <br>
        Grand total: {{ order.grand_total }} <br>
      </li>
    </ul>
  </div>
</template>

<script>
  const axios = require("axios")

  export default {

    data() {
      return {
        orders: []
      }
    },

    mounted() {
      // this.refresh()
    },

    methods: {
      reload() {
        const url = 'https://gist.githubusercontent.com/mul14/e3fa87daa39e6d5ef2b48754130f48f7/raw/0615de7f41a31355ff46a3fdb2d4dc55c192b773/orders.json'

        axios.get(url).then(res => {
          this.orders = res.data.orders
        })
      },
    }
  }
</script>
