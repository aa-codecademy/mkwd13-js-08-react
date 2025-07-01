import type { ReactNode } from "react";
import "./Button.css";

interface ButtonProps {
  style?: React.CSSProperties;
  disabled?: boolean;
  onBtnClick: () => void;
  children: ReactNode;
}

function Button({ style, disabled, children, onBtnClick }: ButtonProps) {
  return (
    <button
      className="Button"
      disabled={disabled}
      style={style}
      onClick={onBtnClick}
    >
      {children}
    </button>
  );
}
export default Button;
