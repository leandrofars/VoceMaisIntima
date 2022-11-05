import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';

import { CartProvider } from '../../contexts/cartContext';
import Header from '../header/header'
//import Filterbar from './components/filterbar/filterbar';
import Carrinho from '../carrinho/carrinho';



export default function PaginaDeProduto() {

    const { id } = useParams();

    const [produto,setProduto] = useState(null)

    useEffect(()=>{
        let url = "http://localhost:5000/produto/"+id;
        console.log(url)
        axios.get(url)
        .then(res=>{
          setProduto(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
      },[])

    return <div className="pagina-de-produto">
        <Header />
        <CartProvider>
        <Carrinho />
        </CartProvider>
        </div>
    
}