import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import useCounter from "../hooks/counter";
import { TProduct } from "../types/products";

// Cart context type definition
interface CartContextType {
    cart: TProduct[];
    addToCart: (product: TProduct) => void;
    deleteProduct: (product: TProduct) => void;
    subtotal: number;
    count: number;
}

interface CartProviderProps {
    children: ReactNode;
}

// Create CartContext with type safety
export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<TProduct[]>(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    console.log(cart);

    const { count } = useCounter();

    const subtotal = cart
        .map(item => {
            const priceString = typeof item.price === "string" ? item.price : String(item.price);
            return parseFloat(priceString.replace('$', '')); // Removing '$' if it's a string
        })
        .reduce((sum, price) => sum + price, 0);

    const addToCart = (product: TProduct) => {
        const exists = cart.some((item) => item.id === product.id);
        if (exists) {
            console.warn(`Product with ID ${product.id} is already in the cart.`);
            return;
        }
        const updatedCart = [...cart, product];
        setCart(updatedCart);

        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const deleteProduct = (product: TProduct) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteProduct, subtotal, count }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart context
export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider.");
    }
    return context;
};
