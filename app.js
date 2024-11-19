const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    const id = req.query.id;
    const username = req.query.username;

    res.send(`User id: ${id}. Username: ${username}`);
});

app.get("/product/:id", (req, res) => {

    //User supplied request parameter
    const product_id = req.params.id;
    
    //Product array or object
    const products = [
        {"id": 1, "name": "Product A"},
        {"id": 2, "name": "Product B"},
        {"id": 3, "name": "Product C"},
    ];

    //Mapping functio to find product by id
    const product = products.find(products => product.id === parseInt(product_id));

    //Use dot notation to access product fields and display
    res.send(`Product ID: ${product.id}. Name: ${product.name}`);
});

app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
});