import HomeSkeleton from "../skeleteon/HomeSkeleton";
import ShopeSkeleton from "../skeleteon/ShopeSkeleton";

const skeletonsTypes = {
    Home: HomeSkeleton,
    Shope:ShopeSkeleton,
};

type LoadingProps = {
    children: React.ReactNode;
    loading: boolean;
    error: boolean | undefined;
    type?: keyof typeof skeletonsTypes;
};

const Loading = ({ children, loading, error, type }: LoadingProps) => {
    const Component = type ? skeletonsTypes[type] : null;

    if (!loading) {
        return (
            <div
                className=" bg-primary-500  pb-4"
                role="status"
                aria-busy="true"
                aria-live="polite"
            >
                {Component ? <Component /> : "Loading..."}
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
