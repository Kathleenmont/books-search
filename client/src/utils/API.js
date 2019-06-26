import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

const APIKEY = ":keyes&key=AIzaSyB3gUc9O6Z0fR929v3f2B3ahDTY5hYqG74";

// GET "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey"

export default {
    getBooks: function(query) {
        return axios.get(BASEURL + query + APIKEY);
      }  


};



