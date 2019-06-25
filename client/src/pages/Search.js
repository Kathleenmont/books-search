import React, { Component } from "react";
import API from "../utils/API";
import SearchCard from "../components/SearchCard"
// import { Link } from "react-router-dom";

class Search extends Component {
    state = {
        books: [],
        title: "",
        authors: [],
        description: "",
        image: "",
        link: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks("pride prejudice") 
        .then(res => 
            this.setState({ books: res.data.items, title: "", title: "", authors: "", discription: "", image: "", link: ""})
        )
        .catch(err => console.log(err));
        console.log(this.state.books)
    }

    loadBooksEvent = (e) => {
        e.preventDefault();
        this.loadBooks();
    }


    render() {
        return (
            <div>
                <h1>Search Page</h1>
                <button onClick={this.loadBooksEvent}></button>
                {this.state.books.map(book => (
                  <SearchCard 
                  id={book.id}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  link={book.saleInfo.buyLink}
                  />
                ))}
                
            </div>
        )
    }
}

export default Search;