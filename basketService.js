function basketService (store) {

    this.addToBasket = function (item) {
        store.add(item);
        return item;
    };

    this.addBatchToBasket = function (items) {
        items.forEach(function (item) {
            store.add(item);
        });

        return items;
    };

    this.clearBasket = function () {
        this.store.length = 0;
    };

}