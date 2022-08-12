import React from 'react';
import { useState } from 'react';

import Footer from './components/footer/footer'
import Produtos from './components/produtos/produtos';
import Filterbar from './components/filterbar/filterbar';
import Carrinho from './components/carrinho/carrinho';
import MenuMobile from './components/menuMobile/menuMobile'
import { CartProvider } from './contexts/cartContext';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css"

import logo from "./imgs/logo.png"
import slogan from "./imgs/slogan.gif"
import mobileLogo from "./imgs/logoMobile.png"

function App() {

  const [filter,setFilter]= useState("/")
  function homepage(){
    setFilter("/")
  }

  return (
   <div>
     <ToastContainer position="top-left"
        autoClose={1000}
        transition={Zoom}
        icon="🛍️"
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}/>
    <header>
        <div className="logo">
            <img src={logo} alt="logo" className="logoImgPC" onClick={homepage}/>
            <img src={mobileLogo} alt="logo" className="logoImgMobile" onClick={homepage}/>
        </div>
    </header>
    <CartProvider>
    <MenuMobile setFilter={setFilter}/>
    <Carrinho />    
    <main>
        <div className="destaque">
            <div className="imagens">
                <img src={slogan} alt="fotoChique"/>
            </div>
        </div>
        <Filterbar
        setFilter={setFilter}
        ></Filterbar>
        <Produtos
        filter={filter}
        ></Produtos>
    </main>
    </CartProvider>
    <Footer/>
  </div> 
  );
}

export default App;
