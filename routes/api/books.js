const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// matches with "api/search"
router.route("/")
// console.log("in route api/books")
  
  .post(booksController.create)
  .get(booksController.findAll);


// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);


module.exports = router;