import React from "react";
import "./style.css";
import ViewButton from "../ViewButton";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DeleteButton from "../DeleteButton";
// import SaveButton from "../SaveButton";

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
            {/* <SaveButton data-id={props.id} key={props.key} SaveButtonClick={props.SaveButtonClick}/> */}
            {props.viewable ? <ViewButton link={props.link}/> : <DeleteButton id={props.id} data-id={props.id} deleteBook={props.deleteBook}/>}
          </div>
          </div>
      </span>
    </div>
  );
};

export default SearchCard;
