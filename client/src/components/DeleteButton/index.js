import React from "react";
import "./style.css";

function DeleteButton ({id, deleteBook}) {
 
    return (
        
       
        <button data-id={id} onClick={() => {deleteBook(id)}} className="btn delete-button" >Delete</button>
        
    )
    
}

export default DeleteButton;