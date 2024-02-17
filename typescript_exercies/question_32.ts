// question no 32


let current_users: string[] = ["Ahmed", "Owais", "Zir Zia", "Muhammad Qasim", "Ali"];


let new_users: string[] = ["Sohaib", "Sijjil", "Obaid", "Ahmed", "Owais"];

let current_users_lower: string[] = current_users.map(username => username.toLowerCase());

for (let new_user of new_users) 
{
    let new_user_lower: string = new_user.toLowerCase();
    
    if (current_users_lower.indexOf(new_user_lower)) 
    {
        console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
    } 
    else {
        console.log(`Congratulations! The username '${new_user}' is available.`);
    }
}
