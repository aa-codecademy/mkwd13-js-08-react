import type { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  style?: React.CSSProperties;
  onBtnClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}

const Button = ({ style, onBtnClick, disabled, children }: ButtonProps) => {
  return (
    <button
      style={style}
      className="Button"
      onClick={onBtnClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
