function userService(db) {

    this.createNewUser = function () {
        var user = new User({ name: 'new user' });
        db.insert(user);
        return user;
    };

}