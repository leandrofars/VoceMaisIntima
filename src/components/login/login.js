import React from "react"

import logo from "../../imgs/logo.png"

import "./login.css"

export default function Login (){

    const handleLogin = () => {

    }
    return(
        <div className="login-page">
            <div className="login-wrap">
                <div className="logo-login">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="login-container">
                    <div className="login-modal">
                        <div className="inputs">
                            <input placeholder="login" className="username"></input>
                            <input placeholder="senha" className="password"></input>
                            <div className="submit-button">
                                <button className="submitLogin" onClick={handleLogin}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    ) 
}