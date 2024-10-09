const authorModel = require("../models/authors-model");

module.exports.getAuthors = async (req, res) => {
  const author = await authorModel.find();
  res.status(200).json(author);
};

module.exports.setAuthors = async (req, res) => {
  if (!req.body.email && !req.body.biography && !req.body.personalUrlSite) {
    return res.status(400).json({ message: "Merci d entrer un utilisateur" });
  }
  try {
    const author = await authorModel.create({
      email: req.body.email,
      biography: req.body.biography,
      personalUrlSite: req.body.personalUrlSite,
    });
    res.status(200).json(author);
  }
  catch(err) {
    return res.status(500).json({message:"l'enregistrement n'a pas eu lieu"})
  }
  console.log(err);
};


module.exports.editAuthors = async (req, res) => {
  const author = await authorModel.findById(req.params.id);
  if (!author) {
    res.status(400).json({ message: "cet auteur n'existe pas " });
  }
  try {
    const updateAuthor = await authorModel.findByIdAndUpdate(author, req.body, {
      new: true,
    }); 
    res.status(200).json(updateAuthor);
  }
  catch {
    return res.status(500).json({ message: "La modification n'a pas eu lieu "})
  }
}
  

module.exports.deleteAuthors = async (req, res) => {
  const author = await authorModel.findById(req.params.id);
  if (!author) {
    res.status(400).json({ message: "cet auteur n'existe pas " });
  }
  await author.deleteOne();
  res.status(200).json("l'auteur N°" + req.params.id + "a été supprime de la base de données");
};
