import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Translation.css';
import TransApi from './TransApi';
import axios from "axios";
import { Jumbotron } from 'reactstrap';

class TransLeft extends Component{
  state= {
    inputTitle:"",
    query:"",
    sourceLanguage:"ko",
    targetLanguage:"en",
  }
  handleChange = event => { // input의 변화
    this.setState({ query: event.target.value }); // input 들어오면 state 변경
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query,sourceLanguage,targetLanguage } = this.state;
    if (query.length>=10) {
      alert("4000자 미만으로 입력하세요!");
    }
    else if (query.length===0){
      alert("스크립트를 입력하세요!");
    }
  
    // translation api 부르기
    //this._callApi(input, type).then(resultData => {
      //this.setState({ resultData, isLoading: false, preItems:0, items:12});
    //});
  };

  selectsrcChange(e) {
    this.setState({
      sourceLanguage: e.target.value
    })
  }

  selecttrgChange(e) {
    this.setState({
      targetLanguage: e.target.value
    })
  }

  showTarget(sourceLanguage) {
    if (sourceLanguage === 'en') {
      return (
        <select className="selectLang" value={this.state.targetLanguage} onChange={this.selecttrgChange.bind(this)}>
          <option value="ko">한국어</option><option value="ja">일본어</option>
		      <option value="zh-CN">중국어 간체</option><option value="zh-TW">중국어 번체</option><option value="es">스페인어</option></select>
      );
    }
    else if (sourceLanguage === 'ja'){
      return (
        <select className="selectLang" value={this.state.targetLanguage} onChange={this.selecttrgChange.bind(this)}>
          <option value="ko">한국어</option><option value="en">영어</option>
		      <option value="zh-CN">중국어 간체</option><option value="zh-TW">중국어 번체</option></select>
      );
    }
    else if (sourceLanguage === 'zh-CN'){
      return (
        <select className="selectLang" value={this.state.targetLanguage} onChange={this.selecttrgChange.bind(this)}>
          <option value="ko">한국어</option><option value="en">영어</option>
		      <option value="zh-TW">중국어 번체</option><option value="ja">일본어</option></select>
      );
    }
    else if (sourceLanguage === 'zh-TW'){
      return (
        <select className="selectLang" value={this.state.targetLanguage} onChange={this.selecttrgChange.bind(this)}>
          <option value="ko">한국어</option><option value="en">영어</option>
		      <option value="zh-TW">중국어 번체</option><option value="ja">일본어</option></select>
      );
    }
    else if (sourceLanguage === 'es'){
      return (
        <select className="selectLang" value={this.state.targetLanguage} onChange={this.selecttrgChange.bind(this)}>
          <option value="ko">한국어</option></select>
      );
    }
    else {
      return (
        <select className="selectLang" value={this.state.targetLanguage} onChange={this.selecttrgChange.bind(this)}>
          <option value="ko">한국어</option><option value="en">영어</option><option value="zh-CN">중국어 간체</option>
		      <option value="zh-TW">중국어 번체</option><option value="ja">일본어</option><option value="es">스페인어</option></select>
      );
    }
  }

  render(){
    return(
      <div className="trans_left">
        <div className="trans_descriptions">
          <div className="trans_desc">텍스트 붙여넣기<br/>- 번역하고자 하는 스크립트를 붙여넣기 하세요.<br/>- 한 줄 공백을 기준으로 예상 시간이 구분됩니다.</div>
          <div className="trans_desc">텍스트파일 업로드<br/>- 파일 업로드 기능은 텍스트파일만 제공됩니다.<br/>- 한 줄 공백을 기준으로 예상 시간이 구분됩니다.</div>
        </div>
			  번역 전 언어:<select className="selectLang" value={this.state.sourceLanguage} onChange={this.selectsrcChange.bind(this)}>
		      <option value="ko">한국어</option><option value="en">영어</option><option value="ja">일본어</option>
		        <option value="zh-CN">중국어 간체</option><option value="zh-TW">중국어 번체</option><option value="es">스페인어</option></select>
        
			  번역 후 언어: {this.showTarget(this.state.sourceLanguage)}
        <form className="trans_Text" onSubmit={this.handleSubmit}>
          <textarea className="trans_Input"
            onChange={this.handleChange}
            value={this.state.query}
            placeholder="번역하고자 하는 스크립트를 붙여넣기 하세요."/>
          <button className="trans_Button">번역</button> <br />
        </form>
      </div>
    );
  }
}

export default TransLeft;