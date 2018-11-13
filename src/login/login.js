import React from 'react';

const Login = (props) => {
    return (
        <div className="container col-md-4">
        <div className = "card " >
            <div className = "card-header " >
                   <h1> Login</h1>
            </div> 
            <div className = "card-body" >
                <div>
                    <label className="col-md-6" >User Name :</label>
                    <input className="col-md-6" type="text"/>
                </div>
                <div>
                    <label className="col-md-6" >Password :</label>
                    <input className="col-md-6" type="password"/>
                </div>

            </div>  
            <div className = "card-footer" >
                <button className="btn btn-success" onClick={props.loginNow}>Login</button>
            </div> 
        </div > 
    </div>
    )
}

export default Login;