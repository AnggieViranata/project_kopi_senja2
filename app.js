  document.addEventListener('alpine:init', () => {
        Alpine.data('products', () => ({

            items: [

                {id: 1, name: 'coffe_torrado_1', img: 'coffe_torrado_1.jpeg', price: 20000},

                {id: 2, name: 'classic_coffe_2', img: 'classic_coffe_2.jpeg', price: 25000},

                {id: 3, name: 'excellence_3', img: 'excellence_3.jpeg', price: 30000},

                {id: 4, name: 'toraja_coffees_4', img: 'toraja_coffees_4.jpeg', price: 35000},

                {id: 5, name: 'coffee_beans_5', img: 'coffee_beans_5.jpeg', price: 40000},
            ],
        }))




Alpine.store('cart', {
   items: [],
   total: 0,
   quantity: 0,
 add(newItem) {

    this.items.push(newItem);
    this.quantity++;
    this.total += newItem.price;
    console.log(this.items);
    },
});


    });



    // konversi ke rupiah

    const rupiah = (Number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }) .format(Number);
    }
