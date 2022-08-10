const express = require('express');
const path = require('path');
app = express();

app.enable('trust proxy')
app.use((req, res, next) => {
    console.log("is secure? " + req.secure)
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
})
app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 443;


app.listen(port);