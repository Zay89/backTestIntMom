const axios = require('axios');

exports.getUsers = async (req, res) => {
    const limit = req.query.limit || 10;

    try {
        const response = await axios.get(`https://randomuser.me/api/?results=${limit}`);
        res.json(response.data.results);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'error fetching users'});
    }
};





