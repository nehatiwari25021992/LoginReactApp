import React, {PureComponent} from 'react';

class Header extends PureComponent{
    constructor(){
      super()
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
                      <a className="nav-link">Home </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Galary</a>
                    </li>
                  </ul>
                  <div className="form-inline my-2 my-lg-0">
                   <label className="welcome">Welcome : {this.props.username}</label> 
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                  </div>
                </div>
              </nav>
            </>
        )
    }
}

export default Header;