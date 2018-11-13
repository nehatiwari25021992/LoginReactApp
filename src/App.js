import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import Login from './login/login';
import axios from 'axios';

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
            axios({
                method: 'get',
                url: `http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC`,
                headers: {
                    'Authorization': "neha"
                },
            }).then(response => {
                    console.log("response ",response)
                })
    }

    render() {
        return ( <div className = "App bg-info" >
                  <div className="col-md-4"></div>
                  <Login loginNow={this.login}/>
                  <div className="col-md-4"></div>
                </div>
        );
    }
}

export default App;