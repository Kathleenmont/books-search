import React, { Component } from "react";
import API from "../utils/API";
import SearchCard from "../components/SearchCard";
import SearchButton from "../components/SearchButton";
import SearchBar from "../components/SearchBar";
import Jumbotron from "../components/Jumbotron";
import SearchResultsWrapper from "../components/SearchResultsWrapper";
let query;


class Search extends Component {
  constructor(props) {
    super(props);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.loadBooksEvent = this.loadBooksEvent.bind(this);
    this.loadBooks = this.loadBooks.bind(this);
  }
  state = {
    books: [],
    search: query,
    title: "",
    authors: [],
    description: "",
    image: "",
    link: ""
  };

  // load inital books to page
  componentDidMount() {
    this.loadBooks();
  
  }
  // get books and set state books to book array
  loadBooks = () => {
    API.getBooks(query)
      .then(res =>
        this.setState({
          books: res.data.items,
          search: query,
          title: "",
          authors: "",
          discription: "",
          image: "",
          link: ""
        })
      )

      .catch(err => console.log(err));
  
  };

  // on click event for loading books
  loadBooksEvent = e => {
    console.log("in load books event");
    e.preventDefault();
    this.loadBooks();
  };

  // click event for submit button
  handleInputClick = e => {
    e.preventDefault();
    this.loadBooksEvent(e);
  };

  // OnChange event for search input 
  handleInputChange = e => {
    // set query to the search value
    query = e.target.value;
    //  update query in state
    this.setState({
      search: query
    });
  };

  // function for saving a book
  saveButtonClick = key => {
    let i;
    // for loop to find book with the book id clicked. 
    for (i = 0; i < this.state.books.length; i++) {
      if (key === this.state.books[i].id) {
        // make an object
        const newBook=
        {
          title: this.state.books[i].volumeInfo.title,
          authors: this.state.books[i].volumeInfo.authors,
          description: this.state.books[i].volumeInfo.description,
          image: this.state.books[i].volumeInfo.imageLinks.thumbnail,
          link: this.state.books[i].volumeInfo.infoLink,
          saved: true
        }
        // pass the data to searver side/mongo and update
        API.saveBook({
          id: this.state.books[i].id,
          title: this.state.books[i].volumeInfo.title,
          authors: this.state.books[i].volumeInfo.authors,
          description: this.state.books[i].volumeInfo.description,
          image: this.state.books[i].volumeInfo.imageLinks.thumbnail,
          link: this.state.books[i].volumeInfo.infoLink,
          saved: true
        })
          .catch(err => console.log(err));
      }
    }
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <form>
          <SearchBar
            value={this.state.query}
            handleInputChange={this.handleInputChange}
          />
          <SearchButton
            loadBooksEvent={this.loadBooksEvent}
            handleInputClick={this.handleInputClick}
          />
        </form>
        <SearchResultsWrapper>
          <h4 className="text-light">Search Page</h4>
          {this.state.books.map(book => (
            <SearchCard
              saveButtonClick={this.saveButtonClick}
              deleteBook={this.deleteBook}
              key={book.id}
              id={book.id}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.thumbnail}
              link={book.volumeInfo.infoLink}
              saved={book.saved}
              viewable
            />
          ))}
        </SearchResultsWrapper>
      </div>
    );
  }
}

export default Search;
