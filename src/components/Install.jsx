import React, { Component } from "react";
import "./Install.css";
export default class Install extends Component{
     render(){
         return(
          <div className="row w-75">
            <div className="col-md-8 auto">
            <div className="install-dialog">
            <span className="prompt">INSTALL NUTRIO</span><hr />
            <div className="d-flex justify-content-between">
            <button className=" btn add-button">Sure!</button>
            <button className="btn btn-light cancel">Nope</button>
            </div>
          </div>
            </div>
          </div>
         );
     }
}