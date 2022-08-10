const express = require('express');
const path = require('path');
app = express();

app.enable('trust proxy')
app.use((req, res, next) => {
    console.log(req.secure)
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
        return res.redirect(`https://${req.get('host')}${req.url}`);
    }
    next();
})
app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 443;

console.log(`Listening on port ${port}`);

app.listen(port);