function userService(db, auth) {

    this.createNewUser = function () {

        if (auth.isLoggedIn()) {
            var user = new User({ name: 'new user' });
            db.insert(user);
            return user;
        }

        throw new Error("Login required");
    };

}