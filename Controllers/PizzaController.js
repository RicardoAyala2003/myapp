const Pizza = require("../Models/PizzaSchema")

const newPizza = async (req,res) =>
{
    const pizza = new Pizza(
        {
            nombre : req.body.nombre,
            precio : req.body.precio,
            SKU : req.body.SKU,
            tamaño : req.body.tamaño,
            Ingredientes : req.body.Ingredientes,
        }
    );

    try{
        
        const sim = await pizza.save();
        res.status(201).json(sim);
    }catch(error)
    {
        res.send(error)
    }
}

const deletePizza = async (req,res) =>
{
    const pizzaSKUToDelete = req.params.SKU; // Suponiendo que deseas eliminar la pizza por su nombre

    try {
      const deletedPizza = await Pizza.findOneAndDelete({ SKU: pizzaSKUToDelete });
  
      if (!deletedPizza) {
        // Si no se encuentra la pizza con el nombre proporcionado
        return res.status(404).json({ error: "Pizza no encontrada" });
      }
  
      res.status(200).json({ message: "Pizza eliminada con éxito" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la pizza" });
    }
}
const getPizzaBySKU = async (req, res) => {
    const pizzaSKU = req.params.SKU; // Suponiendo que deseas buscar la pizza por su nombre
  
    try {
      const pizza = await Pizza.findOne({ SKU: pizzaSKU });
  
      if (!pizza) {
        // Si no se encuentra la pizza con el nombre proporcionado
        return res.status(404).json({ error: "Pizza no encontrada" });
      }
  
      res.status(200).json(pizza);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener la pizza" });
    }
  }
  const updatePizzaBySKU = async (req, res) => {
    const pizzaSKU = req.params.SKU; // Suponiendo que deseas actualizar la pizza por su SKU
  
    // Datos actualizados de la pizza que se envían en el cuerpo de la solicitud
    const updatedData = {
      nombre: req.body.nombre,
      precio: req.body.precio,
      tamaño: req.body.tamaño,
      Ingredientes: req.body.Ingredientes,
    };
  
    try {
      const updatedPizza = await Pizza.findOneAndUpdate(
        { SKU: pizzaSKU }, // Buscar por SKU en lugar de nombre
        updatedData,
        { new: true }
      );
  
      if (!updatedPizza) {
        // Si no se encuentra la pizza con el SKU proporcionado
        return res.status(404).json({ error: "Pizza no encontraddaadaa" });
      }
  
      res.status(200).json(updatedPizza);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar la pizza" });
    }
  };
  
module.exports = {
    newPizza,
    deletePizza,
    getPizzaBySKU,
    updatePizzaBySKU,
  };