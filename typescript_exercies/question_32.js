// question no 32
var current_users = ["Ahmed", "Owais", "Zir Zia", "Muhammad Qasim", "Ali"];
var new_users = ["Sohaib", "Sijjil", "Obaid", "Ahmed", "Owais"];
var current_users_lower = current_users.map(function (username) { return username.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var new_user_lower = new_user.toLowerCase();
    if (current_users_lower.indexOf(new_user_lower)) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
}
