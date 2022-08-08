import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './admin.css'
export default function Admin(){

    const [loggedIn, setLoggedIn] = useState(false) 
    let navigate = useNavigate()

    useEffect(()=>{
    let url = `http://localhost:5000/admin`
    axios.get(url, {headers: {
        Authorization: 'Bearer '+window.localStorage.getItem("token")
      }
    })
    .then(res=>{
        console.log(res)
        setLoggedIn(true)
    })
    .catch(err=>{
        console.log(err)
    })
    },[])

    const handleLogout = () => {
        window.localStorage.setItem("token","")
        navigate("/login")
    }

    return(loggedIn?<div className="admin-page">
        <p>Hello World</p>
            <div className="logout-submit-button">
                <button className="submit-logout" onClick={handleLogout}>Logout</button>
            </div>
        </div>:<p>Forbidden</p>
    )
    
}