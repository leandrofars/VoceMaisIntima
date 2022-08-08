import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import logo from "../../imgs/logo.png"
import "./login.css"

export default function Login (){

    const [user, setUser]=useState(null)
    const [password, setPassword]=useState(null)
    const [error, setError] = useState(false)

    useEffect(()=>{
        let token = window.localStorage.getItem("token")
        if(token){
            navigate('/admin')
        }
        //eslint-disable-next-line
    },[])

    let navigate= useNavigate()

    const handleUserInput = e => {
        setUser(e.target.value)
    }

    const handlePasswordInput = e => {
        setPassword(e.target.value)
    }

    const handleKeyDown = e => {
        if (e.key=="Enter"){
            handleLogin()
        }
    }

    const handleLogin = () => {
        let url = `http://localhost:5000/signin`
        axios.post(url,{
            email:user,
            password:password
        })
        .then(res=>{
            console.log("sucesso")
            localStorage.setItem("token",res.data.token)
            navigate('/admin')
        })
        .catch(err=>{
            console.log(err)
            setError(true)
        })
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
                            <input placeholder="login" className="username" value={user} onChange={handleUserInput} onKeyDown={handleKeyDown}></input>
                            <input placeholder="senha" className="password" value={password} onChange={handlePasswordInput} onKeyDown={handleKeyDown}></input>
                            {error &&
                            <p className="errorMsg"><strong>Usuário ou senha incorretos</strong></p>}
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