import axios from "axios";

// Function to retrieve user data and posts
const getData = async function getData(user_id) {
    try {
         // Fetch user data and posts based on the specified user ID
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

         // Log the retrieved user data and posts to the console
        console.log("USERS UPLOADED", users);
        console.log("POST UPLOADED", posts)
    
    } catch (error) {
        // Log any errors that occur during the data retrieval process
        console.log(error);
    }

}

// Export the getData function as the default export
export default getData;
