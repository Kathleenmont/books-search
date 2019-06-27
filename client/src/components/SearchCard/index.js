import React from "react";
import "./style.css";

const SearchCard = props => {

  return (
    <div className="container bg-light">
      <span href={props.link}>
        <div className="row row">
          <div className="col-sm-3">
            <div className="card card-1">
              <div className="card-img text-center">
                <img
                  alt={props.name}
                  src={props.image}
                  weight="200"
                  className="image"
                />
              </div>
            </div>
          </div>
        
      
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body" >
                <div className="card-header text-center">
                <p className="card-title">{props.title}</p>
                <p className="card-text">{props.author}</p>
                </div>
              
            
            <p className="card-text">{props.description}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-1">
            <button data-id={props.id} onClick={() => {props.saveButtonClick(props.id)}} className="btn btn-info save-btn">Save</button>
          </div>
          </div>
      </span>
    </div>
  );
};

export default SearchCard;
