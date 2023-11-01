const Menu = require("../Models/MenuSchema")

const newMenu = (req,res) =>
{
    const menu = new Menu(
        {
            nombre : req.body.name,
            precio : req.body.precio,
            SKU : req.body.SKU,
            combo : req.body.combo,
        }
    );

    try{
        
        sim = menu.save();
        res.status(201).json(sim);
    }catch(error)
    {
        res.send(error)
    }
}

module.exports = {
    newMenu,
  };