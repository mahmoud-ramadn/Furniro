import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { TProduct ,TProductWithCount } from "../types/products";

// Cart context type definition
interface CartContextType {
    cart: TProductWithCount[];
    addToCart: (product: TProduct) => void;
    deleteProduct: (product: TProduct) => void;
    incrementCount: (id: string) => void;
    decrementCount: (id: string) => void;
    getProductQuantity:(id:string)=>void;
    
    subtotal: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<TProductWithCount[]>(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const subtotal = cart.reduce((sum, item) => {
        const price = typeof item.price === "string" ? parseFloat(item.price.replace('$', '')) : item.price;
        return sum + price * item.count; 
    }, 0);

    const addToCart = (product: TProduct) => {
        const exists = cart.find((item) => item.id === product.id);
        if (exists) {
            // If product exists, increment its count
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, count: item.count + 1 } : item
            );
            setCart(updatedCart);
        } else {
            // Add new product with count 1
            const updatedCart = [...cart, { ...product, count: 1 }];
            setCart(updatedCart);
        }
    };

    const deleteProduct = (product: TProduct) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
    };

    const incrementCount = (id: string) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        );
        setCart(updatedCart);
    };


    const getProductQuantity = (id: string) => {
        return cart.find((item) => item.id === id)?.count;
    };

    const decrementCount = (id: string) => {
        const updatedCart = cart.map((item) =>
            item.id === id
                ? { ...item, count: Math.max(item.count - 1, 1) } 
                : item
        );
        setCart(updatedCart);
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteProduct, incrementCount, decrementCount, subtotal,
        getProductQuantity }}>
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
