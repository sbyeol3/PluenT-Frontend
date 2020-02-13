import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Translation.css';
import TransRight from "./TransRight";
import axios from "axios";
import { Jumbotron } from 'reactstrap';

const  client_id = 'k4axr5p2si';
const client_secret = 'bzHQd76nYQLSpmh13vtrgriCUEiGC8YrUvThXNAf';
const TransURL = 'https://naveropenapi.apigw.ntruss.com/nmt/v1/translation';

class TransApi extends Component{
  state= {
    inputTitle:"",
    query:"",
    translatedText:"",
    sourceLanguage:"ko",
    targetLangauage:"en",
  }


  _callTranslationApi = async (input, langauage) => {
    
    var form =  { source: this.state.sourceLanguage, target: this.state.targetLangauage, text: this.state.query }
    var headers = { 'X-NCP-APIGW-API-KEY-ID': client_id, 'X-NCP-APIGW-API-KEY': client_secret }
    // const { data } = await axios.get(options, function(error, response, body) {
    // //if (!error && response.statusCode == 200) {
    // //       res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
    // //       res.end(body);
    // //     } else {
    // //       res.status(response.statusCode).end();
    // //       console.log('error = ' + response.statusCode);
    // }
    // //return data;
  };

}

export default TransApi;