import React from "react";
import InputMask from "react-input-mask";

import truck from "../../imgs/truck.svg"
import "./frete.css"


function Frete(){

    return <div className="frete">
        <p><img src={truck} alt="frete truck" /><b> Frete Grátis</b> a partir de 300,00R$</p> 
        <InputMask mask="99999-999" placeholder="Digite seu Cep"  id="cep" name="cep" className="cep"/>
        <input type="button" value="Calcular" id="subCep" />
        <button className="maisProdutos">Comprar</button>
    </div>
}

export default Frete