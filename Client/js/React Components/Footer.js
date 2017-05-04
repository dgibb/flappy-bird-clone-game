import React from "react";
import {Link} from "react-router-dom";

export class Footer extends React.Component{
  render(){
    return(
      <div id="footer">
      <p>a</p>
      <div className='links'>
        <a href="http://www.github.com/dgibb"><img src="/Client/img/GitHub.png" height="30px"/></a>
        <a href="http://www.github.com/dgibb"><img src="/Client/img/Gmail.png" height="30px"/></a>
        <a href="http://www.LinkedIn.com/dgibb"><img src="/Client/img/LinkedIn.png" height="30px"/></a>
      </div>
      </div>
    );
  }
}
