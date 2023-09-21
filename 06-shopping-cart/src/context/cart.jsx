/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        //Check if the product is already in the cart
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            //una forma seria el structured clone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity +=1
            return setCart(newCart)
        }

        //si el producto no esta en el carrito
        setCart(prevState => ([...prevState, {...product, quantity: 1}]) )
    }

    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}