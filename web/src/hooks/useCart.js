import { useState, useEffect, createContext, useContext, useMemo } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem("cartItems");
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    const addToCart = (product, quantity) => {
        console.log("Adicionando ao carrinho", product, "Quantidade:", quantity);
    
        setCartItems((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
    
            if (existingItem) {
                alert("Este produto já está na sua lista de compras!");
                return prevCart; // Retorna o estado atual sem modificações
            }
    
            return [...prevCart, { ...product, quantity }];
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    // Atualiza o localStorage sempre que o carrinho mudar
    useEffect(() => {
        console.log("Itens no carrinho atualizados:", cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Calcula a quantidade total de itens no carrinho
    const cartCount = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, cartCount, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
