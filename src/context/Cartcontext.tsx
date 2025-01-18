import { useState, useEffect, useContext, createContext, ReactNode } from "react";
import { auth } from "../firebase/firebase"; // Make sure auth is imported
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
    restCart: () => void;
    subtotal: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<TProductWithCount[]>(() => {
        try {
            const userId = auth.currentUser?.uid;
            if (userId) {
                const storedCart = localStorage.getItem(`cart_${userId}`);
                return storedCart ? JSON.parse(storedCart) : [];
            }
            return [];
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
        const userId = auth.currentUser?.uid;
        if (userId) {
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
        }
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

    const restCart = () => {
        setCart([]);
    };

    const getProductQuantity = (id: string): number => {
        return cart.find((item) => item.id === id)?.count || 0;
    };

    // Listen for authentication state changes and update the cart accordingly
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // Fetch the cart for the logged-in user
                const storedCart = localStorage.getItem(`cart_${user.uid}`);
                if (storedCart) {
                    setCart(JSON.parse(storedCart));
                }
            } else {
                // Reset the cart when the user logs out
                setCart([]);
            }
        });

        return () => unsubscribe();
    }, []);

    // Sync cart with localStorage when the cart changes
    useEffect(() => {
        const userId = auth.currentUser?.uid;
        if (userId) {
            localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
        }
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                deleteProduct,
                incrementCount,
                decrementCount,
                subtotal,
                getProductQuantity,
                restCart,
            }}
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
