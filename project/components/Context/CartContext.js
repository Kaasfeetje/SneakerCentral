import React, { useState } from "react";

export const CartContext = React.createContext({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    changeAmount: () => {},
});

const CartContextComponent = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, { product, amount: 1 }]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((c) => c.product._id !== id));
    };

    const changeAmount = (id, newAmount) => {
        setCart(
            cart.map((c) => {
                if (c.product._id === id) {
                    c.amount = newAmount;
                }
                return c;
            })
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, changeAmount }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextComponent;
