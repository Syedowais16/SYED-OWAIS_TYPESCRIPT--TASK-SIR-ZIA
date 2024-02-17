//  QUESTION NO 30

let usernames: string[] = ["owais", "ahmed", "sir zia", "ali", "admin"];

for (let username of usernames) 
{
    if (username === 'admin') 
    {
        console.log("Hello admin, would you like to see a status report?");
    } else 
    {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
