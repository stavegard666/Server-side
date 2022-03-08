const express = require('express');

const router = express.Router();


var data = {"foil" : { "name": "foil",
        "dob": "01/01/1978",
        "imageurl": "/images/sample.png",
        "About": "Seller in our restaurant since 15 years",
        "hobbies": ["Jokes", "Gags", "Talk"]},

"kevin" :  { "name": "kevin",
        "dob": "03/05/1995",
        "imageurl": "/images/tele.jpg",
        "About": "pizza maker since 20 years",
        "hobbies": ["Cook", "Talk", "Stand up"]},
        
// Dylan

"Dylan" : { "name": "Dylan",
        "imageurl": "/images/wow.png",
         "dob": "01/01/1998",
        "About": "Seller in our restaurant since 2 years",
        "hobbies": ["Jokes"]} }




router.post('/addnew', (req, res) => {
    console.log("Data sent via post");
    var fname = req.body.firstname;
    var sname = req.body.surname;
    console.log('Date entered ' + fname + ' ' + sname);

    res.render('personform')
})



router.get('/:name', (req, res) => {
    var name = req.params.name;
    if (data[name] == null) {  
        res.type('text/plain');
        res.status(404);
        res.send('404 - Not Found');
    }
    else
    {
        res.render('person', { person: data[name] })
    }
    
})




router.get('/', (req, res) =>
    res.render('listing', { personlist: data }))

module.exports = router;