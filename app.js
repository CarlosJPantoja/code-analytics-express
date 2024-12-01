const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});

app.get('/', (req, res) => {
    res.send('Started Working, Express!');
});