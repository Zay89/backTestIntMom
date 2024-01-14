const axios = require('axios');

let usersIdCounter = 0;

exports.fetchUsers = async (limit) => {
    try {
        let users = [];
        for(let i = 0; i <= limit; i++) {
            const response = await axios.get(`https://randomuser.me/api/?seed=${usersIdCounter}results=1`);
            users.push(respose.data.results[0]);
    } return users; 
        }
         catch (error) {
        console.error(error);
        throw error;
    }
}