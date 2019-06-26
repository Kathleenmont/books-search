const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: Array, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    saved: { type: Boolean, required: true, default: false }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;



  