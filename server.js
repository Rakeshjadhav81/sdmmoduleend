const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile("/index.html", { root: __dirname });
})
app.get('/schedule', (req, res) => {
    res.sendFile("./index1.html", { root: __dirname });
})
app.listen(3000);
console.log("server running on port number 3000");