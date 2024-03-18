import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Booking .Com</span>
        </a>
        <a href="/">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        <a href="/SignIn">SignIn</a>
        <a href="/SignUp" className="yellow">
          SignUp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
