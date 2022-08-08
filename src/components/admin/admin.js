import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"



export default function Admin(){

    const [loggedIn, setLoggedIn] = useState(false)
    let navigate= useNavigate()

    let url = `http://localhost:5000/admin`
    axios.get(url, {headers: {
        Authorization: 'Bearer '+window.localStorage.getItem("token")
      }
    })
    .then(res=>{
        setLoggedIn(true)
    })
    .catch(err=>{
        navigate("/login")
    })

    return(
        loggedIn&& <p>Hello World</p>
    )
    
}