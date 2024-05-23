const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());


app.get('/api/get-env', (req, res) => {
 const number = process.env.number
 if (number) {
     res.status(200).json({ number: number});
 }
 else {
     res.status(404).json({err: "Not Found"})
 }
});

module.exports = app;
