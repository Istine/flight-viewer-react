import React from "react";
import logo from "../assets/Flair_Airlines_logo.svg";
import TextField from "../components/TextField";
import { GoMention, GoEyeClosed, GoEye } from "react-icons/go";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";

type UserLogin = {
  email: string;
  password: string;
  check: boolean;
};

const Login: React.FC<{}> = () => {
  const [loginFormState, setLoginFormState] = React.useState<UserLogin>({
    email: "",
    password: "",
    check: false,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormState((prevState: UserLogin) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckbox = (e: React.MouseEvent<HTMLDivElement>) => {
    setLoginFormState((prevState: UserLogin) => ({
      ...prevState,
      check: !prevState.check,
    }));
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <div className="wrapper">
      <div className="container">
        <img src={logo} alt="flair airlines logo" />
        <h3>Hello Again!</h3>
        <p>
          Welcome aboard! Please enter your login details to access the latest
          flight data.
        </p>
        <form>
          <TextField
            type="text"
            name="email"
            handler={handleFormChange}
            value={loginFormState.email}
            placeholder="mike@flysafe.com"
            InputAdornment={<GoMention color="#322a43" />}
          />
          <TextField
            type="password"
            name="password"
            handler={handleFormChange}
            value={loginFormState.password}
            placeholder="password"
            style={{ margin: 0, marginBottom: "5px" }}
            InputAdornment={<GoEye className="go-eye-icon" color="#322a43" />}
          />
          <div
            className="form-control"
            style={{
              backgroundColor: "white",
              height: "auto",
              border: "none",
              margin: 0,
              marginBottom: "1rem",
            }}
          >
            <CheckBox
              text="remember me"
              handler={handleCheckbox}
              style={{
                width: "95px",
                border: "none",
                height: 20,
                overflow: "hidden",
                backgroundColor: "white",
                margin: 0,
              }}
              value={loginFormState.check}
            />
            <span className="forgot-password">forgot password</span>
          </div>
          <Button text="login" handler={onSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Login;
