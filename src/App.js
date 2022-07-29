import React from 'react';
import { useState } from 'react';

import Produtos from './components/produtos/produtos';
import Filterbar from './components/filterbar/filterbar';
import Carrinho from './components/carrinho/carrinho';
import { CartProvider } from './contexts/cartContext';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css"

import logo from "./imgs/logo.png"
import menu from "./imgs/menu.svg"
import close from "./imgs/close.svg"
import slogan from "./imgs/slogan.gif"
import whatsapp from "./imgs/zapIcon.svg"
import instagram from "./imgs/instagram.svg"
import email from "./imgs/email.svg"


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
            <img src={logo} alt="logo" onClick={homepage}/>
        </div>
    </header>
    <CartProvider>
    <nav>
        <div className="menuMobile">
            <img src={menu} className="open" alt="menu"/>
            <img src={close}className="close" alt="close"/>
        </div>
    <Carrinho />    
    </nav>
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
    <footer>
        <div className="entrarEmContato">
            <div className="contato">
                Contatos:
            </div>
            <div className="formasDeContato">
                <div className="zapzap">
                  <img src={whatsapp} alt="whatsaap"/>
                  {/*eslint-disable-next-line*/}
                  <a href="tel:+55-48-99859-0767"></a>(48)9 9859-0767
                </div>
                <div className="instagram">
                   <img src={instagram} alt="ícone instagram"/>
                   @vocemaisintima
                </div>
                <div className="email">
                    <img src={email} alt="email"/>
                    vocemaisintimaonline@gmail.com
                </div>
            </div>
        </div>
    </footer>
  </div> 
  );
}

export default App;
