function basketService (store) {

    this.addToBasket = function (item) {
        store.add(item);
        return item;
    };

    this.clearBasket = function () {
        this.store.length = 0;
    };

}