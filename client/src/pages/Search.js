import React, { Component } from "react";
import API from "../utils/API";
import SearchCard from "../components/SearchCard";
import SearchButton from "../components/SearchButton";
import SearchBar from "../components/SearchBar";
import Nav from "../components/Nav";

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
    link: "",
    saved: Boolean
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
          link: "",
          saved: Boolean
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
    query = e.target.value;
    console.log(query);
    // e.preventDefault();
    console.log("in here");
    // query = e.target.value;
    console.log("TTTAARRGGEETT =====" + e.target);
    console.log(query);
    this.loadBooks();
    this.loadBooksEvent(e);
  };

  handleInputChange = e => {
    //   console.log(e)
    query = e.target.value;
    this.setState({
      search: query
    });
  };

  saveButtonClick = key => {
      console.log(key)
      console.log(this.state)
    
        console.log("hi")
     if (key === this.state.id) {

    
      this.setState({
        saved: true
      });
      console.log("STATE" + JSON.stringify(this.state))

      API.saveBook({
        title: this.state.title,
        authors: this.state.authors,
        description: this.state.description,
        image: this.state.image,
        link: this.state.link,
        saved: true
      })
    }
      console.log("STATE" + JSON.stringify(this.state))
    
  };

  // handleInputChange = event => {
  //     const { name, value } = event.target;
  //     this.setState({
  //       [name]: value
  //     });
  //   };

  // handleFormSubmit = event => {
  //     event.preventDefault();
  //     if (this.state.title && this.state.author) {
  //       API.saveBook({
  //         title: this.state.title,
  //         author: this.state.author,
  //         synopsis: this.state.synopsis
  //       })
  //         .then(res => this.loadBooks())
  //         .catch(err => console.log(err));
  //     }
  //   };

  render() {
    return (
      <div>
       
        <h1>Search Page</h1>
        <form>
          <SearchBar
            value={this.state.query}
            onChange={this.handleInputChange}
          />
          <SearchButton
            loadBooksEvent={this.loadBooksEvent}
            handleInputClick={this.handleInputClick}
          />
        </form>
        {/* </SearchBar> */}
        {this.state.books.map(book => (
          <SearchCard
            saveButtonClick={this.saveButtonClick}
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.saleInfo.buyLink}
            saved={book.saved}
          />
        ))}
      </div>
    );
  }
}

export default Search;
