import React from "react";
import "./style.css";



const SearchBar = (props) =>  {
    // render() {
    return (
        <div className="jumbotron">
            <h3>Book Search</h3>
           
                <input className="form-control search-bar" value={props.value} onChange={() => {props.handleInputChange()}} default="Book-Name" ></input>
                {props.children}
            
        </div>
    )
    // }
}

export default SearchBar;