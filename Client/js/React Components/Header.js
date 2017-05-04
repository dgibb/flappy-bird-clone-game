import React from "react";

export class Header extends React.Component{
  render(){
    return(
      <div id="header-container"className="container-fluid flex-fixed-item">
        <div className="col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
        <div id="header" className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
            <div id="name">
              <a>David Gibb</a>
            </div>
            <div id="header-links">
              <a>Flappy</a>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
        </div>
    );
  }
}
