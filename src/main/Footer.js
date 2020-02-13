import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Jumbotron } from 'reactstrap';

class Footer extends Component{
  render(){
    return(
      <footer>
        <ul>GotGam, Inc.
          <li>회사소개</li>
          <li>채용공고</li>
          <li>회사소개</li>
        </ul>
        <p>© 2020 GotGam, Inc. (주)곶감 | 서울특별시 서대문구 이화여대길51 | 개인정보 취급방침 | 이용 약관
        <br/>대표자: 장성원 | 사업자등록번호: 1886-1886 | 통신판매업신고번호: 2020-서울서대문구-1886</p>
      </footer>
    );
  }
}

export default Footer;
