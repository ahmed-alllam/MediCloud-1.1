const express = require('express');
const path = require('path');
app = express();
app.use(express.static(path.join(__dirname, 'dist')));
const port = process.env.PORT || 443;

app.enable('trust proxy')
app.use((req, res, next) => {
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
})

app.listen(port);