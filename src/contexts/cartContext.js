import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

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
            if (old[product._id] !== undefined){
                var newCart = {...old}
            toast.error("Já está no carrinho")
            }else{
            product["quantidade"]= quantidade+1
            var newCart = {
                ...old,
                [product._id]:product}
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