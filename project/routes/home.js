const express = require('express');
const router = express.Router();
const { readPizza, updatePizza  } = require('../models/home');

const linksForHome = 
[ {url: 'itsligo.ie' , text : 'IT Sligo Home Page'},
{ url: 'irishtimes.ie', text : 'The Irish Times'}];

router.get('/',  (req, res) => {

    var message = "";
     
    if (req.signedCookies.tracking){
        var dateLastVisit = req.signedCookies.tracking;
        var message = "Welcome back :" + dateLastVisit
    }

    var currentDate = new Date();
    res.cookie('tracking',currentDate.toDateString(), {signed : true});
    res.render('home', {'message': message, links : linksForHome});
    
});




router.get('/about',  (req, res) => {
    res.render('about');
    
});

router.get('/contact',  (req, res) => {
    res.render('contact');
});

router.get('/menu', async (req, res) => {
        const datapizza = await readPizza();
        res.render('menu', {PizzaList : datapizza},)
    });
router.post('/menu', async (req, res) => {
    console.log(req.body);
    await updatePizza(req.body);
    res.redirect('/menu');
})

router.get('/shopping', async (req,res) => {
        const datapizza = await readPizza();
        res.render('shopping', {ShoppingList : datapizza},)
})


module.exports = router;