function basketService (store) {

    this.addToBasket = function (item) {
        store.add(item);
        return item;
    };

}