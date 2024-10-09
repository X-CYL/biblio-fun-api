const formatModel = require("../models/formats-model");

module.exports.getFormats = async (req, res) => {
  const format = await formatModel.find();
  res.status(200).json(format);
};

module.exports.setFormats = async (req, res) => {
  if (!req.body.format) {
    return res.status(400).json({ message: "Merci d entrer un nouveau format" });
  }
  try {
    const author = await formatModel.create({
      format: req.body.format,
    });
    res.status(200).json(format);
  }
  catch(err) {
    return res.status(500).json({message:"l'enregistrement n'a pas eu lieu"})
  }
};

module.exports.editFormats = async (req, res) => {
  const format = await formatModel.findById(req.params.id);
  if (!format) {
    res.status(400).json({ message: "ce format n'existe pas " });
  }
  try {
    const updateFormat = await authorModel.findByIdAndUpdate(format, req.body, {
      new: true,
    }); 
    res.status(200).json(updateFormat);
  }
  catch {
    return res.status(500).json({ message: "La modification n'a pas eu lieu "})
  }
};

module.exports.deleteFormats = async (req, res) => {
  const format = await formatModel.findById(req.params.id);
  if (!format) {
    res.status(400).json({ message: "ce format n'existe pas " });
  }
  await format.deleteOne();
  res.status(200).json("le format N°" + req.params.id + "a été supprime de la base de données");
};
