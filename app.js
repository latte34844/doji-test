const express = require('express');
const app = express();
const doji = require('./doji');

const PORT = 3000;
const HOST = '0.0.0.0';
app.get('/doji/:type', doji.getDoji);

app.listen(PORT,HOST);
console.log(`Server is running on http://${HOST}:${PORT}`);