const Menu = require("../Models/MenuSchema")

const newMenu = async (req,res) =>
{
    const menu = new Menu(
        {
            nombre : req.body.nombre,
            precio : req.body.precio,
            SKU : req.body.SKU,
            combo : req.body.combo,
        }
    );

    try{
        
       const sim = await menu.save();
        res.status(201).json(sim);
    }catch(error)
    {
        res.send(error)
    }
}

const deleteMenu = async (req,res) =>
{
    const menuSKUToDelete = req.params.SKU; // Suponiendo que deseas eliminar la pizza por su nombre

    try {
      const deletedMenu = await Menu.findOneAndDelete({ SKU: menuSKUToDelete });
  
      if (!deletedMenu) {
        // Si no se encuentra la pizza con el nombre proporcionado
        return res.status(404).json({ error: "Menu no encontrado" });
      }
  
      res.status(200).json({ message: "Menu eliminado con éxito" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el Menu" });
    }
}
const getMenuBySKU = async (req, res) => {
    const menuSKU = req.params.SKU; // Suponiendo que deseas buscar la pizza por su nombre
  
    try {
      const menu = await Menu.findOne({ SKU: menuSKU });
  
      if (!menu) {
        // Si no se encuentra la pizza con el nombre proporcionado
        return res.status(404).json({ error: "Menu no encontrada" });
      }
  
      res.status(200).json(menu);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el menu" });
    }
  }
  const updateMenuBySKU = async (req, res) => {
    const menuSKU = req.params.SKU; // Suponiendo que deseas actualizar la pizza por su SKU
  
    // Datos actualizados de la pizza que se envían en el cuerpo de la solicitud
    const updatedData = {
      nombre: req.body.nombre,
      precio: req.body.precio,
      combo: req.body.combo,
    };
  
    try {
      const updatedMenu = await Menu.findOneAndUpdate(
        { SKU: menuSKU }, // Buscar por SKU en lugar de nombre
        updatedData,
        { new: true }
      );
  
      if (!updatedMenu) {
        // Si no se encuentra la pizza con el SKU proporcionado
        return res.status(404).json({ error: "Menu no encontrado" });
      }
  
      res.status(200).json(updatedPizza);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el menu" });
    }
  };

module.exports = {
    newMenu,
    deleteMenu,
    updateMenuBySKU,
    getMenuBySKU,
  };