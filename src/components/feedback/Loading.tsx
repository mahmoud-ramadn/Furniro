import HomeSkeleton from "../skeleteon/HomeSkeleton";
import ShopeSkeleton from "../skeleteon/ShopeSkeleton";
import CartSkeleton from "../skeleteon/CartSkeleton";
import SingleProductSkeleton from "./SingleProductSkeleton";
import AppImg from "../ui/AppImg";

const skeletonsTypes = {
    Home: HomeSkeleton,
    Shope:ShopeSkeleton,
    Cart :CartSkeleton,
    SingleProduct:SingleProductSkeleton
};
type LoadingProps = {
    children?: React.ReactNode;
    loading?: boolean;
    error?: boolean | undefined;
    type?: keyof typeof skeletonsTypes;
};
const Loading = ({ children, loading, error, type }: LoadingProps) => {
    const Component = type ? skeletonsTypes[type] : null;
    if (loading) {
        return (
            <div
                className="   min-h-screen pb-4"
                role="status"
                aria-busy="true"
                aria-live="polite"
            >
                {Component ? <Component /> : <div className=" min-h-screen flex items-center justify-center">
                    <AppImg className=" w-full" src="/images/logo.svg"   alt='logo' />
                    
                    </div>}
            </div>
        );
    }

    if (error) {
        return (
            <div
                className="text-3xl font-bold text-danger-500 text-center"
                role="alert"
            >
                Something went wrong.
            </div>
        );
    }

    return <div>{children}</div>;
};

export default Loading;
