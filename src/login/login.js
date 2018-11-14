import React from 'react';

const Login = (props) => {
    return (
        <div className = "App bg-info login" >
                    <div className="col-md-4"></div>
                    <div className="container col-md-4">
                    <div className = "card " >
                        <div className = "card-header " >
                            <h1> Login</h1>
                        </div> 
                        <div className = "card-body" >
                            <div>
                                <label className="col-md-6" >User Name :</label>
                                <input className="col-md-6" type="text" value={props.username} onChange={props.updateUsername}/>
                            </div>
                            <div>
                                <label className="col-md-6" >Password :</label>
                                <input className="col-md-6" type="password" value={props.password} onChange={props.updatePassword}/>
                            </div>

                        </div>  
                        <div className = "card-footer" >
                            <button className="btn btn-success" onClick={props.loginNow}>Login</button>
                        </div> 
                    </div > 
                </div>
                <div className="col-md-4"></div>
        </div> 
    )
}

export default Login;