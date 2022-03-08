const express = require('express');
const router = express.Router();

const linksForHome = 
[ {url: 'itsligo.ie' , text : 'IT Sligo Home Page'},
{ url: 'irishtimes.ie', text : 'The Irish Times'}];

const data = [
    {"name": "hawaiian pizza",
            "Ingredients":" Ham, pineapple, mushrooms. 185kcal / large slice / classic crust.",
            "Prix":10.50,
            "image":"/images/hawaiianpng.png",
            "number": 2},
    {"name":"Farmhouse Pizza",
            "Ingredients" : "Ham, onions, mushrooms. 171kcal / large slice / classic crust."            ,
            "Prix" : 10.90,
            "image":"/images/Farmhouse.webp",
            "number": 0},
    {"name":"New Yorker",
            "Ingredients" : "Ham, onions, mushrooms. 171kcal / large slice / classic crust.",
            "Prix" : 11.55,
            "image":"/images/New Yorker.webp",
            "number": 0},
    {"name":"Buffalo Chicken Pizza",
            "Ingredients" : "Chicken breast strips,red peppers topped with mozzarella cheese and drizzled. 180kcal / large / classic crust.",
            "Prix" : 10.90,
            "image":"/images/Buffalo Chicken Pizza.jpg",
            "number": 0},
    {"name":"Meat Xtreme",
            "Ingredients" : "Pepperoni, ham, chorizo, tandoori chicken, pork meatballs, smoky bacon. 234kcal / large slice / classic crust.",
            "Prix" : 12.50,
            "image":"/images/Meat Xtreme.jpg",
            "number": 0},
    {"name":"The Sizzler",
            "Ingredients" : "Sundried tomato and garlic sauce, pepperoni, tandoori chicken, onions, jalapeño peppers, herbs. 212kcal / large slice / classic crust.",
            "Prix" : 10.90,
            "image":"/images/The Sizzler.jpg",
            "number": 0},
    {"name":"Vegi Pizza",
            "Ingredients" : "Onions, mushrooms, green and red peppers. 162kcal / large slice / classic crust.",
            "Prix" : 15.99,
            "image":"/images/Vegi.jpg",
            "number": 0},
    {"name":"Tuna Supreme Pizza",
            "Ingredients" : "Tuna, sweetcorn, onions. 177kcal / large slice / classic crust.",
            "Prix" : 12.99,
            "image":"/images/Tuna.jpg",
            "number": 0}
        ]

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

router.get('/menu',  (req, res) => {
    res.render('menu', {PizzaList : data},)
    });

router.get('/shopping', (req,res) => {
        res.render('shopping', {ShoppingList : data},)
})


module.exports = router;