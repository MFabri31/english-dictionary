import Logo from "../assets/icons/icon-dictionary-2.png";

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-center py-5 curved">
      <img src={Logo} alt="icon dictionary" width="60px" />
      <h1 className="display-4 m-0">English Dictionary</h1>
    </header>
  );
};

export default Header;
