import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import useCounter from "../hooks/counter";

interface TItem {
    id: string;
    title: string;
    price: string | number; // Allow price to be either a string or a number
    image: string;
    description: string;
}

interface CartContextType {
    cart: TItem[];
    addToCart: (product: TItem) => void;
    deleteProduct: (product: TItem) => void;
    subtotal: number;
    count: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<TItem[]>(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const { count } = useCounter();

    // Convert price to a string (if it's a number) and then parse it as a float
    const subtotal = cart
        .map(item => {
            const priceString = typeof item.price === "string" ? item.price : String(item.price);
            return parseFloat(priceString.replace('$', '')); // Remove '$' and convert to number
        })
        .reduce((sum, price) => sum + price, 0); // Sum up all prices

    const addToCart = (product: TItem) => {
        const exists = cart.some((item) => item.id === product.id);
        if (exists) {
            console.warn(`Product with ID ${product.id} is already in the cart.`);
            return;
        }
        const updatedCart = [...cart, product];
        setCart(updatedCart);

        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const deleteProduct = (product: TItem) => {
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

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider.");
    }
    return context;
};
