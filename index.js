const express = require('express');
const usersRoute = require('./app/routes/usersRoutes');


const app = express();
const port = 3001;


app.use('/users', usersRoute )


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})




















