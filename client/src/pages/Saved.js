import React, { Component } from "react";
// import API from "../utils/API";
// import { Link } from "react-router-dom";

class Saved extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
        discription: "",
        image: "",
        link: ""
    };


    render() {
        return (
            <h1>Saved Page</h1>
        )
    }
}

export default Saved;