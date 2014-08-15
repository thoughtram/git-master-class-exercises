function catalogService (db) {
    this.getProduct = function(productId) {
        return db.find(productId);
    };
}