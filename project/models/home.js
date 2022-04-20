const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    name: String,
    Ingredients: String,
    Prix: Number,
    image: String,
    number: Number,
})


const Pizza = mongoose.model('pizzas', PizzaSchema)

readPizza = async (options={}) =>
  {
    if (Object.entries(options).length == 0)

       return Pizza.find().lean();
        
   else if (options.name)
   
       return Pizza.findOne(options).lean();
   
   else
       return undefined;
   
}

updatePizza = async (data) => {
    var id = data._id;
    console.log(id);
    console.table(data)
    await Pizza.findByIdAndUpdate({_id: id}, {...data})
}



exports.readPizza = readPizza;
exports.updatePizza = updatePizza;
