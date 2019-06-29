import React from "react";
import "./style.css";



function SearchBar ({handleInputChange, value}) {
    
  
    return (
        <div className="jumbotron bg-white search-div">
            <h3>Book Search</h3>
           
                <input className="form-control search-bar" value={value} onChange={(event) => handleInputChange(event)} placeholder="Book Title" ></input>
   
        </div>
    )
  
}

export default SearchBar;