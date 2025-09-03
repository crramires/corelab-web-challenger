import React from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
};
