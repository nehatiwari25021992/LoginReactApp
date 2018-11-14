import React, {PureComponent} from 'react';
import { BrowserRouter as Router, Redirect, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Header extends PureComponent{
    constructor(props){
      super(props)
        console.log("Header constructor")
    }
  

    render(){
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand"><img src=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                 data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                          <NavLink className="nav-link" to='/dashboard' exact activeStyle={
                                    { color:'green' }
                                  }>Home
                          </NavLink>
                     
                    </li>
                    <li className="nav-item">
                          <NavLink className="nav-link" to='/galery' exact activeStyle={
                                    { color:'green' }
                                  }>Galery
                          </NavLink>
                    </li>
                  </ul>
                  <div className="form-inline my-2 my-lg-0">
                   <label className="welcome">Welcome : {this.props.username}</label> 
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.props.logout} >
                      Logout
                    </button>
                  </div>
                </div>
              </nav>
            </>
        )
    }
}

export default Header;