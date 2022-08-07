import React from "react"

import logo from "../../imgs/logo.png"

import "./login.css"

export default function Login (){
    return(
        <div className="login-page">
            <div className="login-wrap">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="login-container">
                    <div className="login-modal">
                        <div className="inputs">
                            <input placeholder="login" className="username"></input>
                            <input placeholder="senha" className="password"></input>
                            <div className="submit-button">
                                <button className="submitLogin">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    ) 
}