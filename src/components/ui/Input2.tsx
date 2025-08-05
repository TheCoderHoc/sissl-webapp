import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`border px-4 py-2 outline-none ${className}`} // merge with default styles
    />
  );
};

export default Input;
