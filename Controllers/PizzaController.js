const Pizza = require("../Models/PizzaSchema")

const newPizza = (req,res) =>
{
    const pizza = new Pizza(
        {
            nombre : req.body.name,
            precio : req.body.precio,
            SKU : req.body.SKU,
            tamaño : req.body.tamaño,
            Ingredientes : req.body.Ingredientes,
        }
    );

    try{
        
        sim = pizza.save();
        res.status(201).json(sim);
    }catch(error)
    {
        res.send(error)
    }
}

module.exports = {
    newPizza,
  };