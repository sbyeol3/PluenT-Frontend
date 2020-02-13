import React, { Component }  from 'react';
import Upload from './Upload';
import Webcam from "react-webcam";
import './Practice.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'reactstrap';

class Practice extends Component{
  state= {
    isUploaded : false,
  }

  _setUploaded= (e) =>{
    this.setState({isUploaded:true});
  }

  render(){
    // if(Upload.state.isUploaded === true){
    //   this.setState({isUploaded:true})
    // }
    return (
      <div className="Practice">
        <Jumbotron>
          <Upload/>
        </Jumbotron>

      </div>
    );
  }
}

export default Practice;