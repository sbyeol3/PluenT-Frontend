import React from 'react'
import './Practice.css';
import Practice from './Practice';

class Upload extends React.Component {
  state = {
    isUploaded: false,
  }

  render(){
  return(
    <div>
      <input type="file" name="docx" onChange={this.setFile.bind(this)}/>
      <input type="button" onClick={this.postFile} value="업로드" />
    </div>
  );}
  
  postFile(event) {   
    // backend 로 보내기
    
  }
  
  setFile(event) {
    this.setState({isUploaded:true});
    console.log(event.target.files);
  }
}

export default Upload;