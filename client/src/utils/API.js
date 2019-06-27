import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

const APIKEY = ":keyes&key=AIzaSyB3gUc9O6Z0fR929v3f2B3ahDTY5hYqG74";

// GET "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey"

export default {
  getBooks: function(query) {
    return axios.get(BASEURL + query + APIKEY);
    //  return axios.get("/api/books");
  },

  getSavedBooks: function() {
    return axios.post();
  },

  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },

  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData)
    return axios.post("/api/books", bookData);
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
 
};
