import React, {Component } from 'react'
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Header from './header'


class Home extends Component{
    constructor(){
        super()
        console.log("Home constructor")
    }

    render(){
        
        if(this.props.name){
            return (
                <h1>Welcome : {this.props.name}</h1>
            )
        }else{
            return (<Redirect to="/"/>)
        }
    }
}

export default Home;