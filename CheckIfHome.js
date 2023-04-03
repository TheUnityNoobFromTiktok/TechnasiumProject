let users = [
    {user: "name1", athome: false},
    {user: "name2", athome: false},
    {user: "name3", athome: false},
    {user: "name4", athome: true},
]

users.every((currentValue) => currentValue == true)

async function userleft(name) {
    let usr = users.find((element) => element.user == name);
    if (usr) {
        usr.athome = false;
    } else {
        users.push({user: name, athome: false}); 
        console.log("false: ", name)
    }; // if user in database; set athome false, if not; add to database + athome false
    if (users.every((element) => !element.athome)) {
        console.log("All users have left")
    }; // if every user left; send all users left

}

users.forEach(element => {
    userleft(element.user)
});
console.log("ran")
