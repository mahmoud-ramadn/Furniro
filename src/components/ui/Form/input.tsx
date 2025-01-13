import React from "react";
import { Path, FieldValues, UseFormRegister } from "react-hook-form";
import './style.css'

type InputProps<TFieldValue extends FieldValues> = {
    label: string;
    name: Path<TFieldValue>;
    type?: string;
    register: UseFormRegister<TFieldValue>;
    error?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    formText?: string;
    success?: string;
    disabled?: boolean;
};

const Input = <TFieldValue extends FieldValues>({
    label,
    name,
    type = "text",
    register,
    error,
    onBlur,
    formText,
    success,
    disabled,
}: InputProps<TFieldValue>) => {
    const onblurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if (onBlur) {
            onBlur(e);
            register(name).onBlur(e);
        } else {
            register(name).onBlur(e);
        }
    };

    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input
                id={name}
                type={type}
                {...register(name)}
                className={`form-control ${error ? "is-invalid" : ""} ${success ? "is-valid" : ""}`}
                onBlur={onblurHandler}
                disabled={disabled}
            />
            {error && <div className="invalid-feedback">{error}</div>}
            {success && <div className="valid-feedback">{success}</div>}
            {formText && <small className="form-text text-muted">{formText}</small>}
        </div>
    );
};

export default Input;
