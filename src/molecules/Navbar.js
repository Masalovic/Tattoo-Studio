import '../styles/Home.scss';
import Icons from '../atoms/Icons';


const Navbar = () => {
  return (
    <div id="nav-container">
      {/* <section className="seperator-wrapper">
        <div className="seperator gradient"></div>
      </section> */}
      <div className="sidebar">
        <a href="#Home" className="menu-item">
          <i className="fa-solid fa-house"></i>Pocetna
        </a>
        <a href="#About" className="menu-item">
          <i className="fa-solid fa-address-card"></i>O nama
        </a>
        <a href="#Portfolio" className="menu-item">
          <i className="fa-solid fa-camera"></i>Portfolio
        </a>
        <a href="#Contact" className="menu-item">
          <i className="fa-solid fa-phone"></i>Kontakt
        </a>
        <Icons />
      </div>
    </div>
  );
};

export default Navbar;
