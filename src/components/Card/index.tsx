import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Card: React.FC<CardProps> = ({ title, children, style }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", margin: "8px 0", ...style }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};
