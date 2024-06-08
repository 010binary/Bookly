import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  color?: {
    backgroundColor?: string;
    textColor?: string;
  };
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, color }) => {
  const defaultColor = {
    backgroundColor: "#495AF3",
    textColor: "white",
  };

  const buttonColor = color ? { ...defaultColor, ...color } : defaultColor;

  return (
    <button
      style={{
        backgroundColor: buttonColor.backgroundColor,
        color: buttonColor.textColor,
      }}
      className="px-4 py-4 font-bold w-full"
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
