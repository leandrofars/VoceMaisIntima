import React, { } from "react";

import './filterbar.css'

export default function Filterbar (setFilter){
    return(
        <ul className="filterbar">
        <li className="filters" onClick={()=>setFilter.setFilter("/conjuntos")}>Conjuntos</li>
        <li className="filters" onClick={()=>setFilter.setFilter("/biquinis")}>Biquínis</li>
        <li className="filters" onClick={()=>setFilter.setFilter("/calcinhas")}>Calcinhas</li>
        <li className="filters" onClick={()=>setFilter.setFilter("/sutias")}>Sutiãs</li> 
        <li className="filters" onClick={()=>setFilter.setFilter("/babydolls")}>Babydolls</li>
        </ul>
    )
}