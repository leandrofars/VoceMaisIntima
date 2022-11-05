import React from 'react';

import logo from "../../imgs/logo.png"
import mobileLogo from "../../imgs/logoMobile.png"

import './header.css'

export default function Header(setFilter){

    function homepage(){
        setFilter.setFilter("/")
      }
    
    return <header>
        <div className="logo">
            <img src={logo} alt="logo" className="logoImgPC" onClick={homepage}/>
            <img src={mobileLogo} alt="logo" className="logoImgMobile" onClick={homepage}/>
        </div>
    </header>
}