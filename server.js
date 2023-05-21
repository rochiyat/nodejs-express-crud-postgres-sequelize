const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./app/models');

const app = express();

let corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions));

// parser requests of content-type - application/json
app.use(express.json());

// parser requests of content-type - application/x-www-form-urlencoder
app.use(express.urlencoded({ extended: true }));

// connection to db
db.sequelize.sync().then(() => {
    console.log("sync db");
})
.catch((err) => {
    console.log(`Failed sync to db ${err.message}`);
})

// example root
app.get('/api/', (req, res) => {
    res.json({ message: 'Welcome to my API example' })
});

require('./app/routes/posting.route')(app);

// set port
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server Running in PORT ${PORT}`);
})
