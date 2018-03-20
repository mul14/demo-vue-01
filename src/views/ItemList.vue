<template>
  <div>
    <h1>Items</h1>

    <div>
      <label>Name</label>
      <input type="text" v-model="newItem.name">
    </div>

    <div>
      <label>Price</label>
      Rp<input type="text" v-model="newItem.price">
    </div>

    <div>
      <button @click="addToBottom">Add to bottom</button>
      <button @click="addToTop">Add to top</button>
      <button @click="clearList">Clear list</button>
    </div>

    <div>
      <input type="text" v-model="searchText" placeholder="Type to search">
    </div>

    <div>
      Sort by:
      <label><input type="radio" v-model="sortBy" value="name"> Name</label>
      <label><input type="radio" v-model="sortBy" value="price"> Price</label>
    </div>

    <div>
      Sort order:
      <label><input type="radio" v-model="sortOrder" value="asc"> Ascending</label>
      <label><input type="radio" v-model="sortOrder" value="desc"> Descending</label>
    </div>

    <ul>
      <li v-for="item in filteredItems" :key="item.id">

        <button @click="remove(item)">&times;</button>

        {{ item.name }} - Rp{{ item.price }}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {

    data() {
      return {
        searchText: '',

        sortBy: 'name',
        sortOrder: 'asc',

        newItem: {
          name: '',
          price: '',
        },

        items: [
          { name: 'Jagung', price: 12000 },
          { name: 'Pepaya', price: 14000 },
          { name: 'Apel', price: 10000 },
          { name: 'Sawi', price: 400 },
          { name: 'Mangga', price: 24000 },
          { name: 'Anggur', price: 50000 },
          { name: 'Manggis', price: 42000 },
          { name: 'Soto', price: 32000 },
          { name: 'Pisang', price: 12500 },
        ]
      }
    },

    computed: {
      filteredItems() {
        let result = []

        result = this.items.filter((item) => item.name.toLowerCase().includes(this.searchText.toLowerCase()))

        result.sort((a, b) => {
          if (a[this.sortBy] < b[this.sortBy]) {
            return this.sortOrder === 'asc' ? -1 : 1
          }
          if (a[this.sortBy] > b[this.sortBy]) {
            return this.sortOrder === 'asc' ? 1 : -1
          }
          return 0
        })

        return result
      }
    },

    methods: {

      addToBottom() {
        this.items.push({
          name: this.newItem.name,
          price: this.newItem.price,
        })

        this.resetForm()
      },

      addToTop() {
        this.items.unshift({
          name: this.newItem.name,
          price: this.newItem.price,
        })

        this.resetForm()
      },

      resetForm() {
        this.newItem.name = ''
        this.newItem.price = ''
      },

      remove(item) {
        const index = this.items.indexOf(item)
        this.items.splice(index, 1)
      },

      clearList() {
        this.items = []
      },

    }
  }
</script>
