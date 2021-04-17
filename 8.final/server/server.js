const fs = require('fs');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const { json } = require('body-parser');

app.listen(3000, () => {
    console.log("Server is listening on port 3000.")
});

app.use(express.static('../dist/public'));

app.get('/goods', (req, res) => {
    fs.readFile("goods.json", "utf-8", (err, data) => {
        if (!err) {
            res.setHeader("Content-Type", "Application/json")
            res.end(data);
        } else {
            console.log(err);
            //res.end(JSON.stringify(err));
            res.sendStatus(500);
        }
    });
});

app.post('/cart', bodyParser.json(), (req, res) => {
    fs.readFile("cart.json", "utf-8", (err, data) => {
        if (!err) {
            fs.writeFile('cart.json', JSON.stringify(req.body), (err) => {
                if (err) {
                    console.log(err);
                    res.end(JSON.stringify(err));
                }
            });
            res.end();
        } else {
            console.log(err);
            res.end(JSON.stringify(err));
        }
    });
});

app.get('/cart', (req, res) => {
    fs.readFile("cart.json", "utf-8", (err, data) => {
        if (!err) {
            res.setHeader("Content-Type", "Application/json")
            res.end(data);
        } else {
            console.log(err);
            res.end(JSON.strinfigy(err));
        }
    });
});