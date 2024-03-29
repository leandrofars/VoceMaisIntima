import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { CartContext } from '../../contexts/cartContext';

import sacola from '../../imgs/sacola.svg';
import './produtos.css';
import { Link } from 'react-router-dom';


export default function Produtos(filter) {
  
  const [estoque, setEstoque] = useState([])

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
        <div className="produtos"  key={product._id}>
        <Link to={"produto/"+product._id}>
        <img src={require(`../../${product.imagem}`)} alt="arrival"></img></Link>
          <div className="informações">
          <Link to={"produto/"+product._id}>
            <p className="info">{product.nome}<br/>
            {product.preço}</p></Link>
            <ul className='sizes'>
              {product.PP !== 0 && 
              <li className='sizeIcon' key={"PP"}>PP</li>}
              {product.P !==0 &&
              <li className='sizeIcon' key={"P"}>P</li>}
              {product.M !==0 &&
              <li className='sizeIcon' key={"M"}>M</li>}
              {product.G !==0 &&
              <li className='sizeIcon' key={"G"}>G</li>}
              {product.GG !==0 &&
              <li className='sizeIcon' key={"GG"}>GG</li>}
            </ul>
            <span className="addSacola"><img src={sacola} alt="sacola" onClick={add(product)}/></span>
          </div>
        </div>)
      }
    </div>
  </div>
}
