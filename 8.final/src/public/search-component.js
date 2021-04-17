const description = {
    data() {
        return {
            search_query: ''
        }
    },
    template: `
        <div class="search">
            <input type="text" v-model="search_query" id="search_query" v-on:input="search">
        </div>
    `,
    methods: {
        search() {
            if (this.search_query == '') {
                global.main.filteredGoods = main.goods;
            }
            else {
                main.filteredGoods = new Map;
                const regexp = new RegExp(this.search_query, 'gi');
                [...global.main.goods].filter(el => regexp.test(el[1].title)).map(el => {
                    global.main.filteredGoods.set(el[1].id, global.main.goods.get(el[1].id));
                });
            }
        }
    }
}

export default {
    description: description
}