const Docs: React.FC<{
  goTo: (
    url: string
  ) => (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}> = ({ goTo }) => {
  return (
    <div className="docs">
      <h1>Hi, Welcome</h1>
      <p>This is the documentation for the flights data app</p>
      <p>The login details are:</p>
      <span>email: admin@mail.com</span>
      <span>password: admin</span>
      <button onClick={goTo("/")}>Back to Login</button>
    </div>
  );
};

export default Docs;
