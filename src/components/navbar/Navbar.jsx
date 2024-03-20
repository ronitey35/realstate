import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Booking .Com</span>
        </a>
        <a href="/">Home</a>
        <a href="/aboutus">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        <a href="/SignIn">SignIn</a>
        <a href="/SignUp" className="yellow">
          SignUp
        </a>
        <div className="menuIcon">
          <img onClick={() => setOpen(!open)} src="/menu.png" alt="" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/aboutus">About Us</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="/">SignIn</a>
          <a href="/aboutus">SignUp</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
