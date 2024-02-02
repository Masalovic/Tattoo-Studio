import "../styles/Home.scss";
import Icons from "../atoms/Icons";

const Navbar = () => {
  return (
    <div id="nav-container">
      {/* <section className="seperator-wrapper">
        <div className="seperator gradient"></div>
      </section> */}
      <div className="sidebar">
        <a href="#home" className="menu-item">
          <i className="fa-solid fa-house"></i>Početna
        </a>
        <a href="#about" className="menu-item">
          <i className="fa-solid fa-address-card"></i>O nama
        </a>
        <a href="#portfolio" className="menu-item">
          <i className="fa-solid fa-camera"></i>Portfolio
        </a>
        <a href="#contact" className="menu-item">
          <i className="fa-solid fa-phone"></i>Kontakt
        </a>
        <Icons />
      </div>
    </div>
  );
};

export default Navbar;
