# FirstHW
# getData

This JavaScript module retrieves user data and posts from the JSONPlaceholder API based on a specified user ID.

## Usage

1. To use this module, make sure you have the `axios` library installed in your project. If you haven't already installed it, you can do so by running the following command:

npm install axios

2. Copy the contents of the `app.js` file into a relevant part of your project.

3. You can now use the `getData` function to fetch the data. Here's an example usage:



```javascript
import getData from './app.js';

async function main() {
  try {
    await getData(1);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
```



In the above example, the `getData` function is called with the user ID `1`. The retrieved user data and posts are logged to the console.


## Important Notes

- The `getData` function is defined as an async function and is exported as the default export.
- The function takes a single parameter of type `Number`, representing the user ID.
- The function makes HTTP requests to the JSONPlaceholder API using the `axios` library.
- User data and posts are fetched and logged to the console.


