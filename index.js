const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use(require('./routes/index'));
app.use(require('./routes/url'));

app.use((req,res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next()
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
