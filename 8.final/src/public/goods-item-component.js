const description = {
    props: ['good'],
    template: `
        <div class="goods-item">
            <div class="image">
                <img :src="good.img">
            </div>
            <div>
                <h3>{{ good.title }}</h3>
                <p>&#x0024;{{ good.price }}</p>
                <button v-on:click='addToCart(good.id)'>+</button>
            </div>
        </div>
    `,
    methods: {
        addToCart(id) {
            global.main.addToCart(id);
        }
    }
}

export default {
    description: description
}