import React from "react";
import logo from "../assets/Flair_Airlines_logo.svg";
import TextField from "../components/TextField";
import { GoMention, GoEyeClosed, GoEye } from "react-icons/go";
import Button from "../components/Button";

type UserLogin = {
  email: string;
  password: string;
};

const Login: React.FC<{}> = () => {
  const [loginFormState, setLoginFormState] = React.useState<UserLogin>({
    email: "",
    password: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormState((prevState: UserLogin) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
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
            margin: 0,
            marginBottom: "1rem",
          }}
        >
          <span className="forgot-password">Remember me</span>
          <span className="forgot-password">forgot password</span>
        </div>
        <Button text="login" handler={onSubmit} />
      </form>
    </div>
  );
};

export default Login;
