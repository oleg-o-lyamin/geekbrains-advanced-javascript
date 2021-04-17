const description = {
    data() {
        return {
            goods: new Map,
            cart: new Map,
            value: 0,
            filteredGoods: new Map,
            connectionError: false
        }
    },
    methods: {
        addToCart(id) {
            this.cart.set(id, (this.cart.get(id) || 0) + 1);
            this.value += this.goods.get(id).price;
            this.updateCartFile();
        },
        getGood(id) {
            return this.goods.get(id);
        },
        removeFromCart(id, all = false) {
            let quantity = this.cart.get(id);

            if (!all) {
                (quantity == 1) ? this.cart.delete(id) : this.cart.set(id, quantity - 1);
                this.value -= this.goods.get(id).price;
            }
            else {
                this.cart.delete(id);
                this.value -= this.goods.get(id).price * quantity;
            }

            this.updateCartFile();
        },
        updateCartFile() {
            fetch('/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify([...this.cart].map(x => { return { id: x[0], quantity: x[1] } }))
            }).catch(err => {
                console.log(err);
                this.connectionError = true;
            });
        }
    },
    mounted() {
        fetch('/goods')
            .then(response => response.json())
            .then(data => {
                data.forEach(element => this.goods.set(element.id, element));
                this.filteredGoods = this.goods;
            })
            .catch(err => {
                console.log(err);
                this.connectionError = true;
            });

        fetch('/cart')
            .then(response => response.json())
            .then(data => {
                data.forEach(element => {
                    this.cart.set(element.id, element.quantity);
                    this.value += this.goods.get(element.id).price * element.quantity;
                });
            })
            .catch(err => {
                console.log(err);
                this.connectionError = true;
            });
    }
}

export default {
    description: description
}