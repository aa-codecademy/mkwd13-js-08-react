import "./Button.css";

interface ButtonsProps {
  text: string;
  style?: React.CSSProperties;
  onBtnClick: () => void;
}

function Button({ text, style, onBtnClick }: ButtonsProps) {
  return (
    <button className="Button" style={style} onClick={onBtnClick}>
      {text}
    </button>
  );
}

export default Button;
