import React, { useState } from "react";
import aboutImage from "../assets/15.jpg";
import "../styles/Home.scss";
import Navbar from "../molecules/Navbar";
import MobileNav from "../atoms/MobileNav";

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    const expandInfo = document.getElementById("more-info-js");
    const mainHeadings = document.getElementById("main-headings-js");

    if (!expanded) {
      mainHeadings.style.transform = "scale(0.7)";
      expandInfo.style.height = "350px";
    } else {
      mainHeadings.style.transform = "scale(1)";
      expandInfo.style.height = "0";
    }

    setExpanded(!expanded);
  };

  return (
    <div>
      <Navbar />
      <MobileNav />
      <div className="container">
        <div className="container-inner">
          <div className="main-content">
            <div className="main-headings" id="main-headings-js">
              <p id="by-line">
                Dobrodošli u Tattoo Studio Rakac - Mesto na kom se umetnost
                sreće sa kožom!
              </p>

              <div className="heading">
                <h3 id="heading1">Otkrijte</h3>
                <h3 id="heading2">Umetnost,</h3>
                <h1 id="heading3">Tetoviranja</h1>
              </div>

              <div className="short-bio">
                <p>
                  U našem studiju težimo stvaranju jedinstvenog i smislenog
                  iskustva za sve naše klijente. Naši talentovani umetnici
                  specijalizovani su za različite stilove, od tradicionalnih do
                  modernih, osiguravajući da vaša vizija oživi.
                </p>
              </div>

              <a href="#readless" className="link" onClick={toggleExpand}>
                {expanded ? "Read Less" : "Read More"}
              </a>
            </div>

            <div className="more-info " id="more-info-js">
              <h4>Dobrodošli!</h4>
              <p>
                Uronite u svet mastila i kreativnosti. Naš studio je više od
                mesta za tetoviranje; to je iskustvo. Od konsultacija do
                finalnog mastila, mi dajemo prioritet zadovoljstvu i
                profesionalnosti.
              </p>

              <p>
                Naši umetnici su vešti u različitim stilovima tetovaža,
                uključujući tribale, old school, fine line i mnoge druge. Bilo
                da je u pitanju tvoja prva tetovaža ili dodatak postojećoj
                kolekciji, mi smo tu da pomognemo i budemo uz tebe, od početka
                do kraja puta.
              </p>
            </div>
          </div>

          <div className="image-wrapper">
            <div className="image-container">
              <img className="image" src={aboutImage} alt="Tattoo Studio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
