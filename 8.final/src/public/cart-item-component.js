const description = {
    props: ['quantity', 'id'],
    data() {
        return {
            item: {}
        }
    },
    template: `
        <div class="cart-item">
            <span>{{ getGood() }}</span>
            <div class="wrapper">
                <button v-on:click="removeFromCart">X</button>
                <button v-on:click="subtractFromCart">-</button>
                <img :src="item.img">
                <div class="cart-item-price-info">
                    <div>&#x0024;{{ getValue() }}</div>
                    <div>{{ quantity }} шт. по &#x0024;{{ item.price }}</div>
                </div>
            </div>
        </div>
    `,
    methods: {
        getGood() {
            this.item = global.main.getGood(this.id);
            return this.item.title;
        },
        removeFromCart(id) {
            global.main.removeFromCart(this.id, true);
        },
        subtractFromCart() {
            global.main.removeFromCart(this.id);
        },
        getValue() {
            return this.quantity * this.item.price;
        }
    }
}

export default {
    description: description
}