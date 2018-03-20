<template>
  <div class="container" style="margin-top: 20px;">

    <div class="form-group">
      <label>Name</label>
      <input type="text" v-model="newItem.name" class="form-control">
    </div>
    <div class="form-group">
      <label>Price</label>
      <input type="text" v-model="newItem.price" class="form-control">
    </div>
    <button @click="add" class="btn btn-primary">Add</button>

    <input type="text" v-model="searchText">

    <ul>
      <li v-for="item in filteredItems" :key="item.id">
        <button @click="remove(item)" class="btn btn-danger">&times;</button>
        {{ item.name }}: Rp{{ item.price }}
      </li>
    </ul>

    <button @click="refresh">Refresh</button>

    <ul>
      <li v-for="order in orders" :key="order.id">
        {{ order.code }}
        Rp{{ order.grand_total }}
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data() {
    return {
      searchText: '',
      newItem: {
        name: '',
        price: '',
      },
      items: [
        { id: 1, name: 'Jagung', price: 1232 },
        { id: 2, name: 'Durian', price: 10293 },
        { id: 3, name: 'Apple', price: 4334 },
        { id: 4, name: 'Anggur', price: 5454 },
        { id: 5, name: 'Pisang', price: 232 },
        { id: 6, name: 'Mangga', price: 544 }
      ],
      orders: []
    }
  },

  mounted() {
    this.refresh()
  },

  computed: {
    filteredItems() {
      return this.items.filter(item => {
        return item.name.includes(this.searchText)
      })
    }
  },

  methods: {

    refresh() {
      const url = 'https://gist.githubusercontent.com/mul14/e3fa87daa39e6d5ef2b48754130f48f7/raw/0615de7f41a31355ff46a3fdb2d4dc55c192b773/orders.json'

      axios.get(url).then(res => {
        this.orders = res.data.orders
      })
    },

    add () {
      this.items.push({
        name: this.newItem.name,
        price: this.newItem.price,
      })
      this.newItem.name = ''
      this.newItem.price = ''
    },

    remove(x) {
      const index = this.items.indexOf(x)
      this.items.splice(index, 1)
    }
  }
}
</script>
