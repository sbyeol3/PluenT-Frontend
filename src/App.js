import React, { Component }  from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import './App.css';
import { signIn } from './Auth';
import Main from './main/Main';
import Translation from './translation/Translation';
import Practice from './practice/Practice';
import Lecture from './lecture/Lecture';
import Home from './main/Home';
import Header from './main/Header';
import Footer from './main/Footer'
import LoadingIndicator from './LoadingIndicator';
import { ACCESS_TOKEN } from './constants';

// 출처 : https://woolbro.tistory.com/48?category=818994
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: null,
            isAuth: false,
            isLoading: false
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh() {
        this.setState({
            isAuth : true,
        });
    }

    loadCurrentUser(){
        this.setState({
            isLoading: true
        });
        /*getCurrentUser()  ----> 백엔드에서 현재 로그인 유저 가져오기
        //.then(response => {
            this.setState({
                currentUser: response,
                isAuth: false,
                isLoading: false
            });
        }).catch(error => {
            this.setState({
                isLoading: false
            });
        });*/
    }

    componentDidMount(){
        this.loadCurrentUser();
    }

    // 로그아웃
    handleLogout(redirectTo="/", notificationType="success", description="Logout Success"){
        localStorage.removeItem(ACCESS_TOKEN);

        this.setState({
            currentUser: null,
            isAuth: false
        });

        this.props.history.push(redirectTo);
        // notification[notificationType]({
        //     message:'Pluent App',
        //     description:description,
        // });
    }

    handleLogin(){
        Notification.success({
            message:'Pluent App',
            description:"succeessful login",
        });
        this.loadCurrentUser();
        this.props.history.push("/");
    }

  render() {
      
      if(this.state.isLoading === true){
          //return <LoadingIndicator/>
      }
    //   if(!this.state.isAuth){
    //     console.log(this.state.isAuth);
    //       return (<Home/>);
    //   }

      //else {
        return (
            <div className="App">
                <Header/>
                <Route exact path="/" component={Main}/>
                <Route exact path="/translation" component={Translation}/>
                <Route exact path="/practice" component={Practice}/>
                <Route exact path="/lecture" component={Lecture}/>
                <Footer/>
            </div>
        );
      //}

}
}
// <Route path="/about" component={About}/>
export default App;
