import React from "react";
import "./style.css";

function SearchButton ({handleInputClick}) {
 
    return (
        
       
        <button className="btn btn-dark search-btn" onClick={(e) => {handleInputClick(e)}}>Search</button>
        
    )
    
}

export default SearchButton;