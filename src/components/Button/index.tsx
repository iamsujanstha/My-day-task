import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "@/components/Button/style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "danger";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
  return (
    <ButtonContainer>
      <button className={`button ${variant}`} {...props}>
        {children}
      </button>
    </ButtonContainer>
  );
};

export default Button;
