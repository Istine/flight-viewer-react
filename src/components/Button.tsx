interface IButton {
  text: string;
  handler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  styles?: { [key: string]: string };
}
const Button: React.FC<IButton> = ({ text, styles, handler }) => {
  return (
    <button onClick={handler} style={styles}>
      {text}
    </button>
  );
};

export default Button;
