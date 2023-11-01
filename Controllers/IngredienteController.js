const Ingrediente = require("../Models/IngredienteSchema")

const newIngrediente = async (req,res) =>
{
    const ingrediente = new Ingrediente(
        {
            nombre : req.body.nombre,
            cantidad: req.body.cantidad,
            SKU : req.body.SKU,
            Fecha_vencimiento : req.body.Fecha_vencimiento,
            Fecha_compra : req.body.Fecha_compra,
            precio : req.body.precio,
            tamaño : req.body.tamaño,
           
        }
    );

    try{
        
       const sim = await ingrediente.save();
        res.status(201).json(sim);
    }catch(error)
    {
        res.send(error)
    }
}


const deleteIngrediente = async (req,res) =>
{
    const ingredienteSKUToDelete = req.params.SKU; // Suponiendo que deseas eliminar la pizza por su nombre

    try {
      const deletedIngrediente = await Ingrediente.findOneAndDelete({ SKU: ingredienteSKUToDelete });
  
      if (!deletedIngrediente) {
        // Si no se encuentra la pizza con el nombre proporcionado
        return res.status(404).json({ error: "Ingrediente no encontrado" });
      }
  
      res.status(200).json({ message: "Ingrediente eliminado con éxito" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el ingrediente" });
    }
}
const getIngredienteBySKU = async (req, res) => {
    const ingredienteSKU = req.params.SKU; // Suponiendo que deseas buscar la pizza por su nombre
  
    try {
      const ingrediente = await Ingrediente.findOne({ SKU: ingredienteSKU });
  
      if (!ingrediente) {
        // Si no se encuentra la pizza con el nombre proporcionado
        return res.status(404).json({ error: "Ingrediente no encontrado" });
      }
  
      res.status(200).json(ingrediente);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el ingrediente" });
    }
  }
  const updateIngredienteBySKU = async (req, res) => {
    const ingredienteSKU = req.params.SKU; // Suponiendo que deseas actualizar la pizza por su SKU
  
    // Datos actualizados de la pizza que se envían en el cuerpo de la solicitud
    const updatedData = {
      nombre: req.body.nombre,
      cantidad: req.body.cantidad,
      SKU: req.body.SKU,
      Fecha_vencimiento : req.body.Fecha_vencimiento,
      Fecha_compra : req.body.Fecha_compra,
      precio: req.body.precio,
      tamaño: req.body.tamaño,
    };
  
    try {
      const updatedIngrediente = await Ingrediente.findOneAndUpdate(
        { SKU: ingredienteSKU }, // Buscar por SKU en lugar de nombre
        updatedData,
        { new: true }
      );
  
      if (!updatedIngrediente) {
        // Si no se encuentra la pizza con el SKU proporcionado
        return res.status(404).json({ error: "Ingrediente no encontrado" });
      }
  
      res.status(200).json(updatedIngrediente);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el ingrediente" });
    }
  };


module.exports = {
    newIngrediente,
    deleteIngrediente,
    getIngredienteBySKU,
    updateIngredienteBySKU,
  };