
import React, { Component } from "react";
import API from "../utils/API";
import SearchCard from "../components/SearchCard";
import Jumbotron from "../components/Jumbotron";
import SearchResultsWrapper from "../components/SearchResultsWrapper";
let query;


class Saved extends Component {
    
      state = {
        books: [],
        search: query,
        title: "",
        authors: [],
        description: "",
        image: "",
        link: "",
        saved: true
      };
    
      // loads saved books on page load
      componentDidMount() {
        this.loadBooks();
     
      }

      // delete book function
      deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };
  
      // function to load saved books
      loadBooks = () => {
        API.getBooksSaved()
          .then(res =>
            // sets state to saved books 
            this.setState({
              books: res.data,
              search: query,
              title: "",
              authors: "",
              discription: "",
              image: "",
              link: ""
           
            })
          )
          .catch(err => console.log(err));
        console.log(this.state.books);
      };

    render() {
        return (
            <div>
              <Jumbotron />
              <SearchResultsWrapper>
          <h4 className="text-light">Saved Books</h4>
            {this.state.books.map(book => (
              <SearchCard
                key={book._id}
                id={book._id}
                title={book.title}
                author={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
                saved={book.saved}
                deleteBook={this.deleteBook}
                
              />
            ))}
             </SearchResultsWrapper>
          </div>
        )
    }
}

export default Saved;