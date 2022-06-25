const express = require("express");

const app = express();
app.use(express.static('public'));
//--------------------------------------PAGES-----------------------------------------
app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/homepage.html')
})
app.get('/about', (req, res, next) =>
    res.sendFile(__dirname + '/views/about.html')
)
app.get('/work', (req, res, next) =>
    res.sendFile(__dirname + '/views/work.html')
)
app.get('/photo-gallery', (req, res, next) =>
    res.sendFile(__dirname + '/views/gallery.html')
)
// -----------------------------------CSS---------------------------------------------------
app.get('/galleryStylesheets', (req, res, next) =>
    res.sendFile(__dirname + '/public/stylesheets/gallery.css')
)
app.get('/workStylesheets', (req, res, next) =>
    res.sendFile(__dirname + '/public/stylesheets/work.css')
)
app.get('/homeStylesheets', (req, res, next) =>
    res.sendFile(__dirname + '/public/stylesheets/homepage.css')
)
app.get('/aboutStylesheets', (req, res, next) =>
    res.sendFile(__dirname + '/public/stylesheets/about.css')
)
// -----------------------------------IMG-------------------------------------------------
app.get('/pizza', (req, res, next) =>
    res.sendFile(__dirname + '/public/img/pizza.png')
)
app.get('/pizza1', (req, res, next) =>
    res.sendFile(__dirname + '/public/img/pizza1.jpeg')
)
app.get('/pizza2', (req, res, next) =>
    res.sendFile(__dirname + '/public/img/pizza2.jpeg')
)
app.get('/pizza3', (req, res, next) =>
    res.sendFile(__dirname + '/public/img/pizza3.jpeg')
)
app.get('/pizza4', (req, res, next) =>
    res.sendFile(__dirname + '/public/img/pizza4.jpeg')
)
app.get('/pizza5', (req, res, next) =>
    res.sendFile(__dirname + '/public/img/pizza5.jpeg')
)
app.get('/pizza6', (req, res, next) =>
    res.sendFile(__dirname + '/public/img/pizza6.jpeg')
)
app.get('/resto1', (req, res, next) =>
    res.sendFile(__dirname + '/public/img/resto1.jpg')
)
app.get('/resto2', (req, res, next) =>
    res.sendFile(__dirname + '/public/img/resto2.jpg')
)
app.get('/resto3', (req, res, next) =>
    res.sendFile(__dirname + '/public/img/resto3.jpg')
)

// ---------------------------------------------------------------------------------------
app.listen(3000, function () {
    console.log('listening on port 3000')
})