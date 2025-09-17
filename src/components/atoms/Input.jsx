import React from "react";

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon, // icon kiri
  rightIcon: RightIcon, // icon kanan
  onRightIconClick, // event click untuk icon kanan
}) => {
  return (
    <div className="relative w-full">
      {/* Icon kiri */}
      {Icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 pointer-events-none">
          <Icon />
        </span>
      )}

      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full ${Icon ? "pl-10" : "pl-3"} ${RightIcon ? "pr-10" : "pr-3"} py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />

      {/* Icon kanan */}
      {RightIcon && (
        <button type="button" onClick={onRightIconClick} className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600">
          <RightIcon />
        </button>
      )}
    </div>
  );
};

export default Input;
