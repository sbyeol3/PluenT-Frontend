import React, { Component } from 'react';
import Logo from './images/logo.svg'
import {Link, withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

class Header extends Component{
  render(){
    return(
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/">
        <img className="logo" src={Logo}/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/translation">스크립트 번역<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/practice">발표연습</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/lecture">강의보기</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">나의발표관리</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://10.83.32.215:9080/plt/login">로그인</a>
          </li>
        </ul>
      </div>
    </nav>
    );
  }
}

export default withRouter(Header);
