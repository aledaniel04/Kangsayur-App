import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Cargar los productos del carrito desde localStorage al iniciar
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const addToCart = (product, quantity) => {
        setCartItems((prevItems) => {
            const updatedItems = [
                ...prevItems,
                { ...product, quantity },
            ];
            localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Guardar en localStorage
            return updatedItems;
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter(item => item.id !== productId);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Actualizar localStorage
            return updatedItems;
        });
    };

    // Sincronizar el estado del carrito con localStorage al cambiar
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar el contexto
export const useCart = () => {
    return useContext(CartContext);
};
