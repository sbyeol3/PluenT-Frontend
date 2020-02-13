import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Slide from './Slide';
import Footer from './Footer';
import MainIntro from './MainIntro';
import mainbanner from './images/mainbanner.png'
import './Main.css';
import { Jumbotron } from 'reactstrap';

function Main() {
  return (
    <div className="Main">
      <div className="Main_slide">
        <Slide />
      </div>
      <Jumbotron className="Main_function">
        <h2 id="Pluent Function">PluenT 주요 기능</h2>
        <MainIntro/>
      </Jumbotron>
    </div>
  );
}

export default Main;
