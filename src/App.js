import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Login from './login/login';
import axios from 'axios';
import { BrowserRouter as Router, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './dashboard/home';
import Galery from './dashboard/galery';

class App extends Component {
    
   

    constructor(){
        super()
        console.log("constructor")
        this. state = {
            username : "",
            password : "",
            isLoggedIn : false
        }
        this.login = this.login.bind(this);   
    }

    login = () => {
            console.log("LOGIN");
            if(this.state.username != ""){
                axios({
                    method: 'get',
                    url: `http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC`,
                    headers: {
                     //   'Authorization': "neha",
                      //  'Access-Control-Allow-Headers' : 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC'
                    },
                }).then(response => {
                        console.log("response ",response)
                        this.setState({isLoggedIn:true})
                    })
             }
    }

    componentWillUpdate(){
        console.log("componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    updateUsername = (e) => {
        this.setState({username : e.target.value})
    }

    updatePassword = (e) => {
        this.setState({password : e.target.value})
    }

    logout = () => {
        console.log("******************")
        this.setState({isLoggedIn:false})
      }


    render() {
        console.log("*******this.state.isLoggedIn ***********",this.state.isLoggedIn)
        return ( 
            <Router>    
                <div> 
                    <Route path="/" exact strict render={()=>(
                        this.state.isLoggedIn ? ( <Redirect to="/dashboard"/>) :
                        <Login updatePassword={this.updatePassword.bind(this)} 
                        updateUsername={this.updateUsername.bind(this)}  
                        loginNow={this.login} username={this.state.username}
                         password={this.state.password}/>)
                    }/>

                    <Route path="/dashboard" exact strict render={()=>(
                            this.state.isLoggedIn ? (<Home name={this.state.username} logout={this.logout.bind()} />) :
                            <Login updatePassword={this.updatePassword.bind(this)} 
                            updateUsername={this.updateUsername.bind(this)}  
                            loginNow={this.login} username={this.state.username}
                             password={this.state.password}/>)
                    }/>   

                    <Route path="/galery" exact strict render={()=>(
                            this.state.isLoggedIn ? (<Galery name={this.state.username} logout={this.logout.bind()} />) :
                            <Login updatePassword={this.updatePassword.bind(this)} 
                            updateUsername={this.updateUsername.bind(this)}  
                            loginNow={this.login} username={this.state.username}
                             password={this.state.password}/>)
                    }/> 
                </div>            
            </Router>
        );
    }
}

export default App;