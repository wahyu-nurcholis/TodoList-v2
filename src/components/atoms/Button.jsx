import React from "react";

const Button = ({ children, className = "", ...rest }) => (
  <button {...rest} className={`px-3 py-2 font-medium transition-all rounded-4xl ${className}`}>
    {children}
  </button>
);

export default Button;
