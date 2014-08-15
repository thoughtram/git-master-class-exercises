function catalogService (db) {
    this.getProduct = function(productId) {
        return db.find(productId);
    };

    this.getProducts = function(productIds) {
        return db.findBatch(productIds);
    };

    this.deleteProduct = function(productId) {
        db.delete(productId);
    };
}