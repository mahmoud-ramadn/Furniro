import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { TProduct, TProductWithCount } from "../types/products";
import toast from "react-hot-toast";

// Cart context type definition
interface CartContextType {
    cart: TProductWithCount[];
    addToCart: (product: TProduct) => void;
    deleteProduct: (product: TProduct) => void;
    incrementCount: (id: string) => void;
    decrementCount: (id: string) => void;
    getProductQuantity: (id: string) => number;
    restCart:()=>void;
    subtotal: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<TProductWithCount[]>(() => {
        try {
            const storedCart = localStorage.getItem("cart");
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
            console.error("Failed to parse cart from localStorage:", error);
            return [];
        }
    });

    const subtotal = cart.reduce((sum, item) => {
        const price = typeof item.price === "string" ? parseFloat(item.price.replace('$', '')) : item.price;
        return sum + (price || 0) * item.count;
    }, 0);

    const addToCart = (product: TProduct) => {
        const exists = cart.find((item) => item.id === product.id);
        if (exists) {
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, count: item.count + 1 } : item
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, count: 1 }]);
        }
        toast.success("Item added to cart!");
    };

    const deleteProduct = (product: TProduct) => {
        setCart(cart.filter((item) => item.id !== product.id));
        toast.success("Product successfully deleted!");
    };

    const incrementCount = (id: string) => {
        setCart(cart.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item)));
    };

    const decrementCount = (id: string) => {
        const product = cart.find((item) => item.id === id);
        if (product) {
            if (product.count <= 1) {
                deleteProduct(product);
            } else {
                setCart(cart.map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item)));
            }
        }
    };


    const restCart=()=>{
        setCart([])
    }

    const getProductQuantity = (id: string): number => {
        return cart.find((item) => item.id === id)?.count || 0;
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider
            value={{ cart, addToCart, deleteProduct, incrementCount, decrementCount, subtotal, getProductQuantity ,restCart }}
        >
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
