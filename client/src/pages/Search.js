import React, { Component } from "react";
import API from "../utils/API";
import SearchCard from "../components/SearchCard";
import SearchButton from "../components/SearchButton";
import SearchBar from "../components/SearchBar";
import Jumbotron from "../components/Jumbotron";
import SearchResultsWrapper from "../components/SearchResultsWrapper";

// import { Link } from "react-router-dom";
let query;
// let saved;

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
    // saved: this.saved
  };

  componentDidMount() {
    this.loadBooks();
    console.log(this.state);
  }

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
          // saved: this.saved
        })
      )

      .catch(err => console.log(err));
    console.log(this.state.books);
  };

  loadBooksEvent = e => {
    console.log("in load books event");
    e.preventDefault();
    this.loadBooks();
  };

  handleInputClick = e => {
    e.preventDefault();
    // query = e.target.value;
    console.log(query);

    console.log("in here");
    // query = e.target.value;
    console.log("TTTAARRGGEETT =====" + e.target);
    console.log(query);
    // this.loadBooks();
    this.loadBooksEvent(e);
  };

  handleInputChange = e => {
    query = e.target.value;
    console.log(query);
    this.setState({
      search: query
    });
  };

  saveButtonClick = key => {
    console.log(key);
    console.log(this.state);
    let i;
    for (i = 0; i < this.state.books.length; i++) {
      if (key === this.state.books[i].id) {
        console.log("SAVED this passed in" +this.state.books[i].volumeInfo.title);
        // this.setState({
        //   saved: true
        // });
        // console.log("STATE" + JSON.stringify(this.state))
        const newBook=
        {
          title: this.state.books[i].volumeInfo.title,
          authors: this.state.books[i].volumeInfo.authors,
          description: this.state.books[i].volumeInfo.description,
          image: this.state.books[i].volumeInfo.imageLinks.thumbnail,
          link: this.state.books[i].volumeInfo.infoLink,
          saved: true
        }
        console.log(newBook);
        API.saveBook({
          id: this.state.books[i].id,
          title: this.state.books[i].volumeInfo.title,
          authors: this.state.books[i].volumeInfo.authors,
          description: this.state.books[i].volumeInfo.description,
          image: this.state.books[i].volumeInfo.imageLinks.thumbnail,
          link: this.state.books[i].volumeInfo.infoLink,
          saved: true
        })
          // .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }
    }
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <h1>Search Page</h1>
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
        {/* </SearchBar> */}
        <SearchResultsWrapper>
          {this.state.books.map(book => (
            <SearchCard
              saveButtonClick={this.saveButtonClick}
              key={book.id}
              id={book.id}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.thumbnail}
              link={book.volumeInfo.infoLink}
              saved={book.saved}
            />
          ))}
        </SearchResultsWrapper>
      </div>
    );
  }
}

export default Search;
