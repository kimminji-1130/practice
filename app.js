const express = require('express');
const app = express();

const PORT = 8080;
app.listen(PORT, function() {
    console.log('Server Start');
    console.log(hi1111);
    console.log('Listening on port: ', PORT);
});