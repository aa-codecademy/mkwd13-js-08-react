import "./Button.css";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

function Button({ text, style, disabled }: ButtonProps) {
  return (
    <button className="Button" style={style} disabled={disabled || false}>
      {text}
    </button>
  );
}

export default Button;
