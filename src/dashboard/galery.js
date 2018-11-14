import React, {Component} from 'react';
import Header from './header';
import {Redirect} from 'react-router-dom';

class Galery extends Component{

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
        if(this.state.name !== ""){
            return (
                <div className="App bg-info">
                    <Header username={this.props.name}/>
                       galery!!!!!!!!!
                </div>
            )
        }else{
            return (<Redirect to="/"/>)
        }
    }
}

export default Galery;