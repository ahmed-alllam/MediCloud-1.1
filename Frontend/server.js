const express = require('express');
const path = require('path');
app = express();
app.use(express.static(path.join(__dirname, 'dist')));
const port = process.env.PORT || 443;

app.listen(port);