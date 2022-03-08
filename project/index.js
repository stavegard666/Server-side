const express = require('express')
const cookieParser = require('cookie-parser');
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(cookieParser("test"));

const home = require('./routes/home')
const staff = require('./routes/staff')
const { newsMiddleware } = require('./lib/middleware');



// set up handlebars view engine
var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
 
app.use(newsMiddleware);
app.use('/staff', staff)
app.use('/', home)
app.use(express.urlencoded({ extended: true }))

// custom 404 page
app.use( (req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});






app.listen(port, () => console.log(`Example appes listening on port ${port}!`))

