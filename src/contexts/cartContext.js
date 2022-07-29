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
    const newProduct= (param,product) =>{
        let quantidade = 0
        let newCart;
        let copy = cloneDeep(product)
        copy["quantidade"]= quantidade+1
        setCart(old=>{
            newCart={
                ...old,
                [copy._id+param]:copy
            }
             //evita que o carrinho se perca ao dar reload na página
            window.localStorage.setItem('cart',JSON.stringify(newCart))
            toast.success("Adicionado ao carrinho")
            return newCart
        })
    }

    //adiciona produto ao carrinho, verifica se ele já não existe e incrementa a quantidade.
    const addToCart = product => {
        setCart(old => {
            let quantidade = 0;
            var newCart;
            switch(true) {
                case old[product._id+"-5"]==undefined:
                  newCart =newProduct("-5",product)
                  break;
                case old[product._id+"-4"]==undefined:
                  newCart =newProduct("-4",product)
                  break;
                case old[product._id+"-3"]==undefined:
                    newCart =newProduct("-3",product)
                  break;
                case old[product._id+"-2"]==undefined:
                    newProduct("-2",product)
                break;
                case old[product._id]==undefined:
                    newProduct("-1",product)
                break;
                default:
                    product["quantidade"]= quantidade+1
                    newCart = {
                        ...old,
                        [product._id]:product}
                    toast.success("Adicionado ao carrinho")
            }
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