import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";

import truck from "../../imgs/truck.svg"
import "./frete.css"

function Frete(){

    const [cep,setCep]=useState(null)
    const [validCep,setValidCep]=useState("")
    console.log(cep)

    useEffect(()=>{
        const pattern = new RegExp(
            "[0-9]{5}-[0-9]{3}"
         );
        if(pattern.test(cep)){
            setValidCep(true)
        }else if(cep===""||cep===null){
            setValidCep("")
        }else{
            setValidCep(false)
        }
    },[cep])
        
    const handleCepInput = e =>{
        setCep(e.target.value)
    }

    return <div className="frete">
        <p><img src={truck} alt="frete truck" /><b> Frete Grátis</b> a partir de 300,00R$</p> 
        <InputMask mask="99999-999"  maskChar='' placeholder="Digite seu Cep"  id="cep" name="cep" className="cep" value={cep} onChange={handleCepInput}/>
        <button type="button" id="subCep">Calcular</button>
        {validCep===false&&
        <p className="smallAdivise">Cep inválido</p>}
        <p>Entregas apenas na <strong> Grande Florianópolis!</strong></p>
        <button className="maisProdutos">Comprar</button>
    </div>
}

export default Frete