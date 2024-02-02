import { React, useState } from "react";
import "../styles/Home.scss";
import Logo from "./Logo";

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleNavLinkClick = () => {
    closeMenu();
  };

  const menuItems = [
    { id: "home", label: "Početna" },
    { id: "about", label: "O nama" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Kontakt" },
  ];

  return (
    <div className="mobile-nav">
      <nav role="navigation">
        <div id="menuToggle" onClick={toggleMenu}>
          <input type="checkbox" checked={menuOpen} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={handleNavLinkClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Logo />
    </div>
  );
};

export default MobileNav;
