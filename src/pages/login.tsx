import React from "react";
import logo from "../assets/Flair_Airlines_logo.svg";
import TextField from "../components/TextField";
import { GoMention, GoEyeClosed, GoEye } from "react-icons/go";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import { validateLogin, waitFor } from "../utils";

type UserLogin = {
  email: string;
  password: string;
  check: boolean;
  showPassword: boolean;
};

const Login: React.FC<{}> = () => {
  const [loginFormState, setLoginFormState] = React.useState<UserLogin>({
    email: "",
    password: "",
    check: false,
    showPassword: false,
  });

  const [loginErrorState, setLoginErrorState] = React.useState("");

  const [isLoading, setLoading] = React.useState(false);

  const buttonText = isLoading ? "logging in..." : "login";

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

  const togglePasswordVisibilty = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    setLoginFormState((prevState: UserLogin) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password } = loginFormState;
    const [isValid, error] = validateLogin({ email, password });
    if (!isValid) {
      setLoginErrorState(error as string);
      return;
    } else {
      setLoading(true);
      await waitFor(1);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <img src={logo} alt="flair airlines logo" />
          <h3>Hello Again!</h3>
          <p>
            Welcome aboard! Please enter your login details to access the latest
            flight data.
          </p>
          <span className="login-form-error">{loginErrorState}</span>

          <form>
            <TextField
              type="email"
              name="email"
              id="email"
              handler={handleFormChange}
              value={loginFormState.email}
              placeholder="mike@flysafe.com"
              required={true}
              InputAdornment={<GoMention color="#322a43" />}
            />
            <TextField
              type={loginFormState.showPassword ? "text" : "password"}
              name="password"
              id="password"
              required={true}
              handler={handleFormChange}
              value={loginFormState.password}
              placeholder="password"
              style={{ margin: 0, marginBottom: "5px" }}
              InputAdornment={
                loginFormState.showPassword ? (
                  <GoEye
                    onClick={togglePasswordVisibilty}
                    className="go-eye-icon"
                    color="#322a43"
                  />
                ) : (
                  <GoEyeClosed
                    onClick={togglePasswordVisibilty}
                    className="go-eye-icon"
                    color="#322a43"
                  />
                )
              }
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
              <div
                className="form-control check-container"
                onClick={handleCheckbox}
                style={{
                  width: "95px",
                  border: "none",
                  height: 20,
                  overflow: "hidden",
                  backgroundColor: "white",
                  margin: 0,
                }}
              >
                <CheckBox text="remember me" value={loginFormState.check} />
              </div>
              <span className="forgot-password">forgot password</span>
            </div>
            <Button
              text={buttonText}
              handler={onSubmit}
              styles={{ backgroundColor: isLoading ? "#57457d" : "" }}
            />
          </form>
        </div>
        <footer>
          <a href="#">Read the Docs</a>
        </footer>
      </div>
    </>
  );
};

export default Login;
