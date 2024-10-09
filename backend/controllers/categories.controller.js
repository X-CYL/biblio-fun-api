const categoriesModel = require("../models/categories-model");

module.exports.getCategories = async (req, res) => {
  const category = await categoriesModel.find();
  res.status(200).json(category);
};

module.exports.setCategories = async (req, res) => {
  if (!req.body.category) {
    return res.status(400).json({ message: "Merci d entrer une categorie" });
  }
  try {
    const category = await categoriesModel.create({
      category: req.body.category,
    });
    res.status(200).json(category);
  }
  catch(err) {
    return res.status(500).json({message:"l'enregistrement de la categorie n'a pas eu lieu"})
  }
};

module.exports.editCategory = async (req, res) => {
  const category = await categoriesModel.findById(req.params.id);
  if (!category) {
    res.status(400).json({ message: "cette categorie n'existe pas " });
  }
  try {
    const updateCategory = await categoriesModel.findByIdAndUpdate(category, req.body, {
      new: true,
    }); 
    res.status(200).json(updateCategory);
  }
  catch {
    return res.status(500).json({ message: "La modification n'a pas eu lieu "})
  }
};

module.exports.deleteCategory = async (req, res) => {
  const category = await categoriesModel.findById(req.params.id);
  if (!category) {
    res.status(400).json({ message: "cette categorie n'existe pas " });
  }
  await category.deleteOne();
  res.status(200).json("la categorie N°" + req.params.id + "a été supprimee de la base de données");
};
