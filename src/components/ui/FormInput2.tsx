import Input from "./Input2";

interface TextInputProps {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
}

const TextInput = ({
  label,
  type,
  name,
  value,
  change,
  placeholder = "Enter Value",
  className = "",
  inputClassName = '',
  labelClassName = '',
}: TextInputProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className={`block text-[15px] tracking-wide font-[300]   mb-1 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <Input
        name={name}
        value={type === "file" ? undefined : value}
        type={type}
        placeholder={placeholder}
        onChange={change}
        className={`${className} ${inputClassName}`}
      />
    </div>
  );
};

export default TextInput;
