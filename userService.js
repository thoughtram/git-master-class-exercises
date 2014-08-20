function userService (db) {

    this.addUser = function (user) {
        // not implemented
    };

    this.getUser = function (id) {
        return db.users.get(id);
    };
}