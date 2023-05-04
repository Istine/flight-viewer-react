import React from "react";

interface ITextField {
  name: string;
  type: string;
  value: string;
  id?: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: { [key: string]: string | number };
  InputAdornment?: React.ReactNode;
  required?: boolean;
}

const TextField: React.FC<ITextField> = (props) => {
  const { InputAdornment, handler, style, ...rest } = props;
  const [focus, setFocus] = React.useState({});

  return (
    <div className="form-control" style={{ ...style, ...focus }}>
      <input
        autoComplete="off"
        onFocus={() => {
          setFocus({ border: "1.4px solid #2d175c" });
        }}
        onBlur={() => {
          setFocus({});
        }}
        {...rest}
        onChange={handler}
      />
      {InputAdornment && InputAdornment}
    </div>
  );
};

export default TextField;
