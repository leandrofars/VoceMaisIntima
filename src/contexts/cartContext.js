import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import cloneDeep from 'lodash/cloneDeep';

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cart,setCart] = useState({})

    useEffect(()=>{
        const cartLocal = window.localStorage.getItem('cart')
        if(cartLocal){
            setCart(JSON.parse(cartLocal))
        }
    },[])
    //adiciona produto ao carrinho, verifica se ele já não existe e incrementa a quantidade.
    const addToCart = product => {
        setCart(old => {
            let quantidade = 0;
            var newCart;
            if (old[product._id+"-5"] !== undefined){
                newCart={...old}
                toast.success("Produto já adicionado ao carrinho")
            }else if (old[product._id+"-4"] !== undefined){
                let copy=cloneDeep(product)
                copy["quantidade"]= quantidade+1
                newCart={
                    ...old,
                    [copy._id+"-5"]:copy
                }
                toast.success("Adicionado ao carrinho")
            }else if (old[product._id+"-3"] !== undefined){
                let copy=cloneDeep(product)
                copy["quantidade"]= quantidade+1
                newCart={
                    ...old,
                    [copy._id+"-4"]:copy
                }
                toast.success("Adicionado ao carrinho")
            }else if (old[product._id+"-2"] !== undefined){
                let copy=cloneDeep(product)
                copy["quantidade"]= quantidade+1
                newCart={
                    ...old,
                    [copy._id+"-3"]:copy
                }
                toast.success("Adicionado ao carrinho")
            }else if (old[product._id+"-1"] !== undefined){
                let copy=cloneDeep(product)
                copy["quantidade"]= quantidade+1
                newCart={
                    ...old,
                    [copy._id+"-2"]:copy
                }
                toast.success("Adicionado ao carrinho")
            }else{
            product["quantidade"]= quantidade+1
            newCart = {
                ...old,
                [product._id+"-1"]:product}
            toast.success("Adicionado ao carrinho")
            }
            //evita que o carrinho se perca ao dar reload na página
            window.localStorage.setItem('cart',JSON.stringify(newCart))
            return newCart
            
        })
    }
    //remove produto do carrinho
    const removeFromCart = id => {
        setCart(old=>{
        delete old[id]
        var newCart = {...old}
        window.localStorage.setItem('cart',JSON.stringify(newCart))
        return newCart
        })
        toast.error("Excluído do carrinho")

    }

    const moreQuantity = id => {
        setCart(old=>{
            old[id].quantidade++
            var newCart= {...old}
            window.localStorage.setItem('cart',JSON.stringify(newCart))
            return newCart
        })
    }

    const lessQuantity = id =>{
        setCart(old=>{
            old[id].quantidade--
            var newCart= {...old}
            window.localStorage.setItem('cart',JSON.stringify(newCart))
            return newCart
        })

    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, moreQuantity,lessQuantity}}>
        {children}
        </CartContext.Provider>
    )

}