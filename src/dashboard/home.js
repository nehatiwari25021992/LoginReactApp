import React, {Component } from 'react'
import {Redirect} from 'react-router-dom';
import Header from './header';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name 
        }
    }

    componentWillReceiveProps(){
        this.setState({name:this.props.name});
    }

    

    render(){        
        if(this.state.name != ""){
            return (
                <div className="App bg-info">
                    <Header username={this.props.name} logout={this.props.logout}/>
                        hi!!!!!!!!!
                </div>
            )
        }else{
            return (<Redirect to="/"/>)
        }
    }
}

export default Home;