import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Translation.css';
import { Jumbotron } from 'reactstrap';
import TransLeft from './TransLeft';
import TransRight from './TransRight';

class Translation extends Component{
  state= {
    input:"",
  }
  render(){
    return(
      <Jumbotron className="Translation">
        <TransLeft/>
        <TransRight/>
      </Jumbotron>
    );
  }
}

export default Translation;