const db = require("../models");
// const bodyParser = require("body-parser")

module.exports = {
  // finds all books in DB
  findAll: function(req, res) {
    db.Book.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // updates to MongoDB
  create: function(req, res) {
    const bookInfo=
    {
      key: req.body.id,
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link,
      saved: true

    }
    db.Book.create(bookInfo)
      .then(bookInfo => {
        res.json(bookInfo)
      })
      .catch(err => res.status(422).json(err));
  },
  // removes book by id
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

