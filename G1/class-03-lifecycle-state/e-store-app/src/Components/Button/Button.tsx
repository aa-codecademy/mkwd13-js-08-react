import "./Button.css";

interface ButtonProps {
  text: string;
  style?: React.CSSProperties;
  onButtonClick: () => void;
}

function Button({ text, style, onButtonClick }: ButtonProps) {
  return (
    <button className="Button" style={style} onClick={onButtonClick}>
      {text}
    </button>
  );
}

export default Button;
