import "../styles/Portfolio.scss";
import gallery1 from "../assets/tattoo1.jpg";
import gallery2 from "../assets/tattoo2.jpg";
import gallery3 from "../assets/tattoo3.jpg";
import gallery4 from "../assets/tattoo4.jpg";
import gallery5 from "../assets/tattoo5.jpg";
import gallery6 from "../assets/tattoo6.jpg";
import gallery7 from "../assets/tattoo7.jpg";
import gallery8 from "../assets/tattoo8.jpg";
import gallery9 from "../assets/tattoo9.jpg";
import gallery10 from "../assets/tattoo10.jpg";
import gallery11 from "../assets/tattoo11.jpg";
import gallery12 from "../assets/tattoo12.jpg";

const MobilePortfolio = () => {
  return (
    <div className="gallery-slider">
      <img
        src={gallery3}
        alt="Portrait by Jessica Felicio"
        className="gallery__image"
      />

      <img
        src={gallery6}
        alt="Portrait by Oladimeji Odunsi"
        className="gallery__image"
      />
      <img
        src={gallery12}
        alt="Portrait by Alex Perez"
        className="gallery__image"
      />
      <img
        src={gallery4}
        alt="Portrait by Hikiapp"
        className="gallery__image"
      />
      <img
        src={gallery5}
        alt="Portrait by Ivana Cajina"
        className="gallery__image"
      />
      <img
        src={gallery2}
        alt="Portrait by Jeffery Erhunse"
        className="gallery__image"
      />
      <img
        src={gallery7}
        alt="Portrait by Mari Lezhava"
        className="gallery__image"
      />
      <img
        src={gallery8}
        alt="Portrait by Ethan Haddox"
        className="gallery__image"
      />
      <img
        src={gallery9}
        alt="Portrait by Amir Geshani"
        className="gallery__image"
      />

      <img
        src={gallery10}
        alt="Portrait by Tyler Nix"
        className="gallery__image"
      />

      <img
        src={gallery11}
        alt="Portrait by Jasmin Chew"
        className="gallery__image"
      />

      <img
        src={gallery1}
        alt="Portrait by Dima DallAcqua"
        className="gallery__image"
      />
    </div>
  );
};

export default MobilePortfolio;
