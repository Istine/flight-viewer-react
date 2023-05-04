interface ITextField {
  name: string;
  type: string;
  value: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: { [key: string]: string | number };
  InputAdornment?: React.ReactNode;
}

const TextField: React.FC<ITextField> = (props) => {
  const { InputAdornment, handler, style, ...rest } = props;
  return (
    <div className="form-control" style={style}>
      <input {...rest} onChange={handler} />
      {InputAdornment && InputAdornment}
    </div>
  );
};

export default TextField;
