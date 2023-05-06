export const Guard = (Component: React.FC<any>) => {
  return (props: any) => {
    const isUserLoggedIn = JSON.parse(
      localStorage.getItem("isLoggedIn") as string
    );

    if (!isUserLoggedIn) {
      location.href = "/";
      return <></>;
    }
    return <Component {...props} />;
  };
};

export default Guard;
