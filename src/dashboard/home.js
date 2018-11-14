import React, {Component } from 'react'
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Header from './header'


class Home extends Component{



    constructor(){
        super();
        console.log("Home constructor")
        this.state = {
            name : ''
        }
    }

    componentWillReceiveProps(){
        console.log("state 1111",this.state);
        this.setState({name:this.props.name});
        console.log("state 1111222",this.state);
    }

    render(){        
        if(this.props.name != ""){
            return (
                <>
                    <Header username={this.props.name}/>
                    <h1>{this.props.name}</h1>
                </>
            )
        }else{
            return (<Redirect to="/"/>)
        }
    }
}

export default Home;