import axios from 'axios';

 class UserService {

  getUser() {
    // Axios call to get data from API //http://localhost:3000/api/bills
   const userPromise = axios.get('https://my-json-server.typicode.com/kiranrkkulkarni/billing/product/')
    .then(res => res.data)
    .catch(err => console.log("Error:", err.res))
    return userPromise;
    
 
  }

}

export default UserService