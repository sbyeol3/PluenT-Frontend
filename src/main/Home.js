import React, { Component } from 'react';
import Main from './Main';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from '../App';
const serverUrl = 'http://10.83.32.215:9080/plt/login'
class Home extends Component {
	state = {
		id: "",
		pw: "",
		isAuth: false,
	}
		
	handleIdChange = event => {
    this.setState({ id: event.target.value });
	};
	
	handlePwChange = event => {
    this.setState({ pw: event.target.value });
	};
	
	handleSubmit = event => {
    event.preventDefault();  //axios-jsonp
    const { id, pw } = this.state;
		console.log("submit")
    this._callServerAuth();
	};
	
	_callServerAuth = () => {

		axios.post(serverUrl, {
			user_id: "test",
			password: "1234",
		})
		.then((response)=>{
			this.setState({isAuth:true})
			this.props.stateRefresh();
		
		})
		.catch( response => { console.log(response) } );
	}

	// _isAuthTrue = () => {
	// 	const {isAuth} = this.state;
	// 	if(isAuth){
	// 		return(
	// 			<App isAuth={this.state.isAuth}/>
	// 		);
	// 	}
	// }

//<form action={serverUrl} method="post">
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
			<table id="loginform">
				<tr>
					<td>ID : </td>
					<td><input type="text" id="user_id" name="user_id" onChange={this.handleIdChange} required/></td>
				</tr>
				
				<tr><td>password : </td>
					<td><input type="password" id="password" name="password" onChange={this.handlePwChange}  required/></td>
				</tr>
				
				<tr><td rowspan="2">
						<input type="submit" value="로그인"  />
					</td>
				</tr>
			</table>
		</form>
			</div>
		);
	}
}
export default Home;