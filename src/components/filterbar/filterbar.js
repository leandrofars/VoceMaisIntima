import React, { useEffect, useState } from "react";
import axios from "axios";

import './filterbar.css'

export default function Filterbar (setFilter){

    const [categorias,setCategorias]=useState([])


    useEffect(()=>{
        let url = "http://localhost:5000/categorias"
        axios.get(url)
        .then(res=>{
          setCategorias(res.data[0].categorias)
        })
        .catch(err=>{
          console.log(err)
        })
      },[])

    return( categorias && <ul className="filterbar">
        {categorias.map(categorie => {
            return<li className="filters" onClick={()=>setFilter.setFilter(`/${categorie}`)}>{categorie}</li>  
        })}
        </ul>
    )
}