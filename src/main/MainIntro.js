import React, { Component } from 'react';
import img from './images/mainimg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';

class Header extends Component{
  render(){
    return(
      <div className="Main_section">
        <div className="Main_intro">
        <div className="Main_text">
          <h3 className="Intro_Title">발표 스크립트 번역</h3>
          <p className="Intro_Exp">더 이상 어색한 g 번역은 그만!<br/>인공지능 기반 네이티브 번역을 제공합니다.<br/>
          플루언트는 한/중/일/영/스어 번역을 제공하고 있습니다.</p>
        </div>
        <section className="Main_img">
          <img src={img}/>
        </section>
        </div>
        <div className="Main_intro">
        <div className="Main_text">
          <h3 className="Intro_Title">발표 예상시간 측정</h3>
          <p className="Intro_Exp">정해진 시간 안에 사용자가 발표를 진행할 수 있도록<br/>
          플루언트에서는 발표 예상시간을 측정하여 제공합니다.</p>
          <p className="Intro_Exp">플루언트를 사용해보세요.<br/>모든 것이 계획대로 가능해집니다.</p>
        </div>
        <section className="Main_img">
          <img src={img}/>
        </section>
        </div>
        <div className="Main_intro">
        <div className="Main_text">
          <h3 className="Intro_Title">발표 네이티브 음성 제공</h3>
          <p className="Intro_Exp">스크립트와 발표 자료만 완벽하면 될까요?<br/>
          외국어 발표에서 가장 중요한 것은 전달입니다.<br/>사용자가 효과적인 전달을 가능하게 하도록<br/>
          인공지능 기반 네이티브 음성을 제공합니다.</p>
          <p className="Intro_Exp">네이티브 음성으로 자연스러운 발표를 연습해보세요!</p>
        </div>
        <section className="Main_img">
          <img src={img}/>
        </section>
        </div>
      </div>
      
    );
  }
}

export default Header;
