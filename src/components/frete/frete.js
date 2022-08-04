import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import axios from "axios";

import truck from "../../imgs/truck.svg"
import "./frete.css"

function Frete(){

    const [cep,setCep]=useState(null)
    const [validCep,setValidCep]=useState("")

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
    //integar código com api do google maps para cálculo de distâncias e com base nisso, gerar um valor do frete
    const fetchCep = async () =>{
        let cepFormatted = cep.replace("-","")
        let url = `https://viacep.com.br/ws/${cepFormatted}/json/`
        axios.get(url)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return <div className="frete">
        <p><img src={truck} alt="frete truck" /><b> Frete Grátis</b> a partir de 300,00R$</p> 
        <InputMask mask="99999-999"  maskChar='' placeholder="Digite seu Cep"  id="cep" name="cep" className="cep" value={cep} onChange={handleCepInput}/>
        <button type="button" id="subCep" onClick={()=>{if(validCep){fetchCep()}}}>Calcular</button>
        {validCep===false&&
        <p className="smallAdivise">Cep inválido</p>}
        <p>Entregas apenas na <strong> Grande Florianópolis!</strong></p>
        <button className="maisProdutos">Comprar</button>
    </div>
}

export default Frete