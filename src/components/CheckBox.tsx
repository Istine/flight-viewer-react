import { GoCheck } from "react-icons/go";

interface ICheckBox {
  text: string;
  value: boolean;
  handler: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: { [key: string]: string | number };
}

const CheckBox: React.FC<ICheckBox> = ({ text, value, handler, style }) => {
  return (
    <div onClick={handler} className="form-control" style={style}>
      <div
        className="check-box"
        style={{ backgroundColor: value ? "#1b0e37" : "white" }}
      >
        {value && (
          <GoCheck className="check-icon" color={value ? "white" : "#1b0e37"} />
        )}
      </div>
      <span>{text}</span>
    </div>
  );
};

export default CheckBox;
