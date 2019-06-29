
import React, { Component } from "react";
import API from "../utils/API";
import SearchCard from "../components/SearchCard";
// import SearchButton from "../components/SearchButton";
// import SearchBar from "../components/SearchBar";
// import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"
let query;

class Saved extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.handleInputClick = this.handleInputClick.bind(this);
    //     // this.loadBooksEvent = this.loadBooksEvent.bind(this);
    //     // this.loadBooks = this.loadBooks.bind(this);
    //   }
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
    
      componentDidMount() {
        this.loadBooks();
        console.log(this.state);
      }
    
      loadBooksEvent = e => {
        console.log("in load books event");
        e.preventDefault();
        this.loadBooks();
      };

      loadBooks = () => {
        API.getBooksSaved()
          .then(res =>
            this.setState({
              books: res.data,
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

    render() {
        return (
            <div>
              <Jumbotron />
            {this.state.books.map(book => (
              <SearchCard
                // saveButtonClick={this.saveButtonClick}
                key={book._id}
                id={book._id}
                title={book.title}
                author={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
                saved={book.saved}
              />
            ))}
          </div>
        )
    }
}

export default Saved;