const Ingrediente = require("../Models/IngredienteSchema")

const newIngrediente = (req,res) =>
{
    const ingrediente = new Ingrediente(
        {
            nombre : req.body.name,
            cantidad: req.body.cantidad,
            SKU : req.body.SKU,
            Fecha_vencimiento : req.body.Fecha_vencimiento,
            Fecha_compra : req.body.Fecha_compra,
            precio : req.body.precio,
            tamaño : req.body.tamaño,
           
        }
    );

    try{
        
        sim = ingrediente.save();
        res.status(201).json(sim);
    }catch(error)
    {
        res.send(error)
    }
}



module.exports = {
    newIngrediente,
  };