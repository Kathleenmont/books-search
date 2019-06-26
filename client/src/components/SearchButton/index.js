import React from "react";
import "./style.css";

const SearchButton = props => {
 
    return (
        
       
        <button className="btn btn-info" onClick={() => {props.handleInputClick()}}>Search</button>
        
    )
    
}

export default SearchButton;