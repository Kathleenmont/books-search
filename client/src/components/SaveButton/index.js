import React from "react";
import "./style.css";

function SaveButton ({saveButtonClick, id}) {
 
    return (
        
       
        <button data-id={id} onClick={(key) => {saveButtonClick(key)}} className="btn btn-info save-btn" id="save">Save</button>
        
    )
    
}

export default SaveButton;