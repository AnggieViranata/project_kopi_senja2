// Inisialisasi Alpine.js
document.addEventListener('alpine:init', () => {
  // Data produk
  Alpine.data('products', () => ({
    items: [
      { id: 1, name: 'Coffe Torrado', img: 'coffe_torrado_1.jpeg', price: 20000 },
      { id: 2, name: 'Classic Coffee', img: 'classic_coffe_2.jpeg', price: 25000 },
      { id: 3, name: 'Excellence', img: 'excellence_3.jpeg', price: 30000 },
      { id: 4, name: 'Toraja Coffee', img: 'toraja_coffees_4.jpeg', price: 35000 },
      { id: 5, name: 'Coffee Beans', img: 'coffee_beans_5.jpeg', price: 40000 },
    ]
  }));

  // Store untuk keranjang belanja
  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,

    add(newItem) {
      const cartItem = this.items.find(item => item.id === newItem.id);

      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        cartItem.quantity++;
        cartItem.total = cartItem.price * cartItem.quantity;
        this.quantity++;
        this.total += cartItem.price;
      }
    },

    remove(id) {
      const cartItem = this.items.find(item => item.id === id);
      if (!cartItem) return;

      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        cartItem.total = cartItem.price * cartItem.quantity;
        this.quantity--;
        this.total -= cartItem.price;
      } else {
        this.items = this.items.filter(item => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    }
  });
});

// Fungsi konversi ke format Rupiah
function rupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);
}
