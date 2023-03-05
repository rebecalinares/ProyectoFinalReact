import React, { useState, createContext } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    
    const isInCart = (id) => {
        return carrito.some(x => x.id === id);
    }



    
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = carrito.findIndex(x => x.id === item.id); 
            carrito[pos].quantity += quantity; 
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, {...item, quantity:quantity}]);
        }
    }

    
    const removeItem = (id) => {
        const products = carrito.filter(x => x.id !== id);
        setCarrito([...products]);
    }

    
    const dropCart = () => {
        setCarrito([]);
    }

    
    const totalCart = () => {
        return carrito.reduce((total, item) => total += item.quantity, 0);
    }

    const sumaTotal = () => {
        return carrito.reduce((total, item) => total += item.quantity * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{carrito, addItem, removeItem, dropCart, totalCart, sumaTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;