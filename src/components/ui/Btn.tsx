import React from "react";

interface TBtn {
    children?: React.ReactNode;
    className?: string; 
    type?: "button" | "submit" | "reset"; 
    onClick?: () => void; 
    disabled?: boolean; 
}

function Btn({ children, className = "", type = "button", onClick, disabled }: TBtn) {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Btn;
