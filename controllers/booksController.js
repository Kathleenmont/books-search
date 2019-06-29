const db = require("../models");

const bodyParser = require("body-parser")

module.exports = {
  findAll: function(req, res) {
  
    db.Book.find(req.query)
   
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log("inside boodksCONTROLER")
    console.log(req.body)
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
    // console.log(dbBooks)
      // .log(dbBooks)
      .then(bookInfo => {
        // console.log.log("book created")
        res.json(bookInfo)
      })

      .catch(err => res.status(422).json(err));
  },
  // create: function(req, res) {
  //   console.log("inside boodksCONTROLER")
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

