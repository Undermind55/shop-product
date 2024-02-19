const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 9000;

// app.use(express.json());
mongoose.connect('mongodb+srv://Antiques3:antiques12345678@antiques.1bswtwv.mongodb.net/')
var Customer = require('./routes/customer/customer.js');


app.use("/customer/", Customer)


app.get('/', (req, res) => {
    res.send('Hello, World!');
  });



  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });