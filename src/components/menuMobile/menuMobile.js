import React from "react";
import { useState } from "react";

import menu from "../../imgs/menu.svg"
import close from "../../imgs/close.svg"
import sacola from "../../imgs/sacola.svg"
import "./menuMobile.css"

export default function MenuMobile(setFilter) {

    const [displayMenu, setDisplayMenu] = useState(false)

    return <nav>
    <div className="menuMobile">
        {!displayMenu?
        <img src={menu} className="open" alt="menu" onClick={()=>setDisplayMenu(!displayMenu)}/>:
        <div className="menu-opened">
            <img src={close}className="close" alt="close" onClick={()=>setDisplayMenu(!displayMenu)}/>
            <div className="categorias">
                <div className="category">
                    <div className="categorys-mobile" onClick={()=>setFilter.setFilter("/conjuntos")}>Conjuntos</div>
                    <div className="categorys-mobile" onClick={()=>setFilter.setFilter("/biquinis")}>Biquínis</div>
                    <div className="categorys-mobile" onClick={()=>setFilter.setFilter("/calcinhas")}>Calcinhas</div>
                    <div className="categorys-mobile" onClick={()=>setFilter.setFilter("/sutias")}>Sutiãs</div>
                    <div className="categorys-mobile" onClick={()=>setFilter.setFilter("/babydolls")}>Babydolls</div>
                </div>
            </div>
        </div>}
    </div>
    </nav>
}