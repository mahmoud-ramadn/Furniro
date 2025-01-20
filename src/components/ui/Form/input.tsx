import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface InputFieldProps<TFieldValue extends FieldValues> {
  label: string;
  type?: string;
  name: Path<TFieldValue>; 
  register: UseFormRegister<TFieldValue>;
  placeholder?: string;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputField = <TFieldValue extends FieldValues>({
  label,
  type = 'text',
  name,
  placeholder = '',
  error,
  onBlur,
  register,
}: InputFieldProps<TFieldValue>) => {
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className="md:h-[121px] flex flex-col justify-between">
      <label
        htmlFor={String(name)}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={String(name)}
        type={type}
        placeholder={placeholder}
        {...register(name)} 
        onBlur={(e) => {
          handleBlur(e);
          register(name).onBlur?.(e);
        }}
        className={`h-[75px] w-full rounded-xl border-[1px] pl-3 placeholder:text-text-links placeholder:text-base ${error ? 'border-danger-500' : ' border-secondary-500'}`}
      />
      {error && <p className="mt-2 text-sm text-danger-500">{error}</p>}
    </div>
  );
};

export default InputField;
