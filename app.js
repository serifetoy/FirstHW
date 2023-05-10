import axios from "axios";

const getData = async function getData(user_id) {
    try {
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

        console.log("USERS UPLOADED", users);
        console.log("POST UPLOADED", posts)
    
    } catch (error) {
        console.log(error);
    }

}


export default getData;