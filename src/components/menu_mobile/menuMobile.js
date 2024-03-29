import React from "react";
import { useState } from "react";

import menu from "../../imgs/menu.svg"
import close from "../../imgs/close.svg"
import "./menuMobile.css"

export default function MenuMobile(setFilter) {

    const [displayMenu, setDisplayMenu] = useState(false)

    const isIos = () => {
        let  iosSys = [
          'iPad Simulator',
          'iPhone Simulator',
          'iPod Simulator',
          'iPad',
          'iPhone',
          'iPod'
        ].includes(navigator.platform)
        return iosSys
    }
    const block_overflow = () => {
        document.body.style.overflow = 'hidden';
        if(isIos){
          document.body.style.position = 'fixed';
          document.body.style.width = '100%';
        }
      }
      const unlock_overflow = () => {
        document.body.style.overflow= 'visible';
        if (isIos) {
          document.body.style.position = '';
          document.body.style.width = '';
        }
      }

    return <nav>
    <div className="menuMobile">
        {!displayMenu?
        <img src={menu} className="open" alt="menu" onClick={()=>{setDisplayMenu(!displayMenu) ; block_overflow()}}/>:
        <div className="menu-opened">
            <img src={close}className="close" alt="close" onClick={()=>{setDisplayMenu(!displayMenu) ; unlock_overflow()}}/>
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