import "./Button.css";

interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  onBtnClick: () => void;
}

function Button({ text, style, disabled, onBtnClick }: ButtonProps) {
  return (
    <button
      className="Button"
      disabled={disabled}
      style={style}
      onClick={onBtnClick}
    >
      {text}
    </button>
  );
}
export default Button;
