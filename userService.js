function userService (db) {
    this.getUser = function (id) {
        return db.users.get(id);
    };

    this.deleteUser = function (id) {
        db.users.delete(id);
    };

    this.findUserByName = function (name) {
        // not implemented
    };
}