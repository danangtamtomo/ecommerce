var app = new Vue({
  el: '#app',
  data: {
    items: '',
    carts: []
  },
  methods: {
    getItems: function () {
      axios.get(`http://localhost:3000/items`)
        .then(function (res) {
          app.items = res.data
        })
    },
    addToCart: function (itemCode, qty, price) {
      let item = {itemCode: itemCode, qty: qty, price: price}
      app.carts.push(item)
    }
  }
})

app.getItems()
