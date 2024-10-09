
const creatorModel = require("../models/creators-model");

module.exports.getCreators = async (req, res) => {
  const creator = await creatorModel.find();
  res.status(200).json(creator);
};

module.exports.setCreators = async (req, res) => {
  if (!req.body.email || !req.body.pseudo || !req.body.password) {
    return res.status(400).json({ message: "Merci d entrer un utilisateur" });
  }
  try {
    const creator = await creatorModel.create({
      email: req.body.email,
      pseudo: req.body.pseudo,
      password: req.body.password,
    });
    res.status(200).json(creator);
  }
  catch(err) {
    return res.status(500).json({message:"l'enregistrement n'a pas eu lieu"})
  }
};

module.exports.editCreators = async (req, res) => {
  const creator = await creatorModel.findById(req.params.id);
  if (!creator) {
    res.status(400).json({ message: "cet utilisateur n'existe pas " });
  }
  try {
    const updateCreator = await creatorModel.findByIdAndUpdate(creator, req.body, {
      new: true,
    }); 
    res.status(200).json(updateCreator);
  }
  catch {
    return res.status(500).json({ message: "La modification n'a pas eu lieu "})
  }
}
  

module.exports.deleteCreators = async (req, res) => {
  const creator = await authorsModel.findById(req.params.id);
  if (!creator) {
    res.status(400).json({ message: "cet utilisateur n'existe pas " });
  }
  await creator.deleteOne();
  res.status(200).json("l'utilisateur N°" + req.params.id + "a été supprime de la base de données");
};
