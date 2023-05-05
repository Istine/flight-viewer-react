import { useNavigate } from "react-router-dom";

export const Guard = (Component: React.FC<any>) => {
  return (props: any) => {
    const navigate = useNavigate();
    const isUserLoggedIn = JSON.parse(
      localStorage.getItem("isLoggedIn") as string
    );

    if (!isUserLoggedIn) {
      navigate("/");
      return <></>;
    }
    return <Component {...props} />;
  };
};

export default Guard;
