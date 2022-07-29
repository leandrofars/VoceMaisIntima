import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import { CartContext } from '../../contexts/cartContext';

import sacola from '../../imgs/sacola.svg'
import './produtos.css'


export default function Produtos(filter) {
  
const [estoque, setEstoque] = useState([])
//const [choosedSize, setChoosedSize]= useState(false)
const cart = useContext(CartContext)

const add = product => () => {
  cart.addToCart(product)
}

  useEffect(()=>{
    let url = "http://localhost:5000"+filter.filter;
    console.log(url)
    axios.get(url)
    .then(res=>{
      console.log(res)
      setEstoque(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[filter])
  return <div className="products">
    <div className="containerProdutos">
      {
        estoque.map(product=>
        <div className="produtos" >
          <img src={require(`../../${product.imagem}`)} alt="arrival"/>
          <div className="informações">
            <a className="info" href={window.location.pathname}>{product.nome}<br/>
            <div>{product.preço}</div></a>
            <ul className='sizes'>
              {product.PP !== 0 && 
              <li className='sizeIcon'>PP</li>}
              {product.P !==0 &&
              <li className='sizeIcon'>P</li>}
              {product.M !==0 &&
              <li className='sizeIcon'>M</li>}
              {product.G !==0 &&
              <li className='sizeIcon'>G</li>}
              {product.GG !==0 &&
              <li className='sizeIcon'>GG</li>}
            </ul>
            <span className="addSacola" key={product._id}><img src={sacola} alt="sacola" onClick={add(product)}/></span>
          </div>
        </div>)
      }
    </div>
  </div>
}
