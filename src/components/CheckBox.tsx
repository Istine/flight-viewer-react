import { GoCheck } from "react-icons/go";

interface ICheckBox {
  text: string;
  value: boolean;
}

const CheckBox: React.FC<ICheckBox> = ({ text, value }) => {
  return (
    <>
      <div
        className="check-box"
        style={{ backgroundColor: value ? "#1b0e37" : "white" }}
      >
        {value && (
          <GoCheck className="check-icon" color={value ? "white" : "#1b0e37"} />
        )}
      </div>
      <span>{text}</span>
    </>
  );
};

export default CheckBox;
