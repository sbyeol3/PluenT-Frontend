import React, { Component }  from 'react';
import banner1 from './images/banner1.svg';
import unknown from './images/unknown.svg';
import LectForm from './LectForm';
import './Lecture.css';

class Lecture extends Component{
  constructor(props) {
    super(props);
    this.state = {
        // lectureData: [
        //     {name: "김지영",content1:"N사 사내강사 출강 다수", price: "5회 200,000원"},
        //     {name: "Betty", content1:"A대 취업전문교육 강사",price: "010-0000-0002"},

        // ]
    };
}

  render(){
    return(
      <div className="Lecture">
        <img src={banner1} alt='lecture banner'/>
        <div className="OnlineLecture">
        <h3>영어발표 어렵지 않아요.</h3>
        {/* <ul>{this.state.lectureData.map((lecture, i) => {
          return (<LectForm title={teacher.name} image={unknown} content1={teacher.content1} price={teacher.price} key={i}/>);})}
        </ul> */}
        </div>

        <div className="OfflineLecture">
        <h3>약점을 확실하게 잡아주니까.</h3>
        </div>
      </div>
    );
  }
}

export default Lecture;