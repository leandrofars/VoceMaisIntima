import React, { useState, useContext } from "react"
import { CartContext } from "../../contexts/cartContext"
import Frete from "../frete/frete"

import close from "../../imgs/close.svg"
import sacola from "../../imgs/sacola.svg"
import trash from "../../imgs/trash.svg"
import plus from "../../imgs/plus.svg"
import dash from "../../imgs/dash.svg"
import './carrinho.css'

export default function Carrinho() {

    const [showCar, setShowcar] = useState(false)

    const cart = useContext(CartContext)
    const productsReadable = Object.entries(cart.cart)

    const remove = id => () => {
        cart.removeFromCart(id)
    }
    const less = id => () => {
        cart.lessQuantity(id)
    }
    const more = id => () => {
        cart.moreQuantity(id)
    }
    const handleSizeChange = (id, e) => {
        cart.selectSize(id, e.target.value)
    }
    console.log(cart.cart)

    return (<div className="menu">
        {!showCar ?
            <div className="sacola" onClick={() => setShowcar(true)}>
                Carrinho<img src={sacola} alt="sacola" />
            </div> :
            <div className="title">
                <img src={close} className="closeCarrinho" onClick={() => setShowcar(false)} alt="carSelect"></img>
                <p className="carrinho">Carrinho de compras</p>
                <div className="item">
                    {Object.keys(cart.cart).length > 0 &&
                        productsReadable.map(element =>
                            <div className="information" key={element[1].id_}>
                                <img src={require(`../../${element[1].imagem}`)} className="img-carrinho" alt="imagem do produto" />
                                <div className="writtenInfo">
                                    <p className="item-title">{element[1].nome}</p>
                                    <p className="valor">{element[1].preço}</p>
                                    <div className="select">
                                    <select className="sizeSelect" onChange={e=>handleSizeChange(element[0],e)} value={element[1].choosenSize}>
                                        <option className='sizeIcon' style={{display:"none"}}></option>
                                        {element[1].PP !== 0 &&
                                            <option className='sizeIcon'>PP</option>}
                                        {element[1].P !== 0 &&
                                            <option className='sizeIcon'>P</option>}
                                        {element[1].M !== 0 &&
                                            <option className='sizeIcon'>M</option>}
                                        {element[1].G !== 0 &&
                                            <option className='sizeIcon'>G</option>}
                                        {element[1].GG !== 0 &&
                                            <option className='sizeIcon'>GG</option>}
                                    </select>
                                    </div>
                                    <div className="quantidade">
                                        <img src={dash} className="less" alt="menos" onClick={less(element[0])} />
                                        <input className="quantity" type="number" /*onChange={}*/ value={element[1].quantidade} />
                                        <img src={plus} className="more" alt="mais" onClick={more(element[0])} />
                                    </div>
                                </div>
                                <div className="trash" onClick={remove(element[0])}>
                                    <img src={trash} alt="lixeiro" />
                                </div>
                            </div>)
                    }
                </div>
                {Object.keys(cart.cart).length > 0 && <Frete />}


            </div>}

    </div>)
}


