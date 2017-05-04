import React from "react";
import {Link} from "react-router-dom";
import {Footer} from "./React Components/Footer";
import {Header} from "./React Components/Header";
import {game} from "./game";
import {bird} from "./bird";
import {canvas} from "./canvas";
import {input} from "./input";
import {pipes} from "./pipes";



export class Layout extends React.Component{
  componentDidMount() {
    window.onkeydown=input.keyDown;
    window.onload=game.init;
  }

  render(){
    return(
      <div className="content">

      <Header />

      <div id="middle-content">
      		<canvas id="flappy-screen" />
      </div>

      <Footer />

      </div>
    );
  }
}
