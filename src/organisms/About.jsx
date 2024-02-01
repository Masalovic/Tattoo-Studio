import "../styles/About.scss";
import jQuery from "jquery";

import aboutImage1 from "../assets/1.jpg";
import aboutImage2 from "../assets/2.jpg";
import aboutImage3 from "../assets/3.jpg";
import aboutImage4 from "../assets/4.jpg";

const About = () => {
  jQuery(document).ready(function () {
    var sm = 480;

    function resizeThis() {
      var imgH = jQuery(".middle img").width();
      if (jQuery(window).width() >= sm) {
        jQuery(".left, .right, .section").css("height", imgH);
      } else {
        jQuery(".left, .right, .section").css("height", "auto");
      }
    }

    resizeThis();

    jQuery(window).resize(function () {
      resizeThis();
    });

    jQuery(window).scroll(function () {
      jQuery(".section").each(function () {
        var elementPos = jQuery(this).offset().top;
        var scrollPos = jQuery(window).scrollTop();

        var sectionH = jQuery(this).height();
        var h = jQuery(window).height();
        var sectionVert = h / 2 - sectionH / 4;

        if (
          elementPos - sectionVert <= scrollPos &&
          elementPos - sectionVert + sectionH > scrollPos
        ) {
          jQuery(this).addClass("animate");
        } else {
          jQuery(this).removeClass("animate");
        }
      });
    });

    jQuery(".btn-primary").click(function () {
      alert("I lied");
    });
  });

  jQuery(function () {
    jQuery('a[href*="#"]:not([href="#"])').click(function () {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = jQuery(this.hash);
        target = target.length
          ? target
          : jQuery("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          jQuery("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  return (
    <div className="about">
      <div className="section animate">
        <div className="middle">
          <img src={aboutImage1} alt="" />
        </div>
        <div className="left title">
          <div className="content">
            <h2>
              1. Higijena u industriji tetovaža: Osiguravanje vaše sigurnosti i
              zadovoljstva
            </h2>
            <p>
              Kada je u pitanju tetoviranje, higijena je najvažnija. U tattoo
              studiju Rakac dajemo prioritet vašoj bezbednosti i zadovoljstvu,
              održavanjem najviših standarda čistoće. Naši licencirani umetnici
              se pridržavaju strogih higijenskih protokola, uključujući upotrebu
              sterilnih igala za jednokratnu upotrebu, kapi za mastilo za
              jednokratnu upotrebu i dezinfikovani radni prostor.
            </p>
          </div>
        </div>
        <div className="right tiles">
          <img src={aboutImage1} alt="" />
          <img src={aboutImage1} alt="" />
          <img src={aboutImage1} alt="" />
          <img src={aboutImage1} alt="" />
        </div>
      </div>

      <div className="section">
        <div className="middle">
          <img src={aboutImage2} alt="" />
        </div>
        <div className="right title">
          <div className="content">
            <h2>
              2. Odabir najbolje tetovaže za vas: Personalizovano iskustvo
            </h2>
            <p>
              Pronalaženje savršene tetovaže je putovanje samoizražavanja. Mi
              razumemo značaj odabira tetovaže koja vam odgovara i zbog toga,
              naši iskusni umetnici nude personalizovane konsultacije, pomažući
              vam da istražite opcije dizajna, stilove i položaje. Od
              simboličkih značenja do estetskih preferencija, vodimo vas kroz
              proces odabira, osiguravajući da vaša tetovaža odražava vašu
              individualnost.
            </p>
          </div>
        </div>

        <div className="left tiles">
          <img src={aboutImage2} alt="" />
          <img src={aboutImage2} alt="" />
          <img src={aboutImage2} alt="" />
          <img src={aboutImage2} alt="" />
        </div>
      </div>

      <div className="section">
        <div className="middle">
          <img src={aboutImage3} alt="" />
        </div>
        <div className="left title">
          <div className="content">
            <h2>3. Umetnost skiciranja tetovaža: Od koncepta do kože</h2>
            <p>
              Skiciranje tetovaža je mesto gde se mašta susreće sa stvarnošću.
              Naši vešti umetnici oživljavaju vaše ideje kroz pedantno
              skiciranje, obezbeđujući da se vaša vizija pretoči na vašu kožu.
              Bez obzira da li imate dizajn na umu ili tražite inspiraciju, naši
              umetnici blisko sarađuju sa vama, kombinujući kreativnost i
              stručnost da bi napravili jedinstvenu i personalizovanu skicu
              tetovaže.
            </p>
          </div>
        </div>

        <div className="right tiles">
          <img src={aboutImage3} alt="" />
          <img src={aboutImage3} alt="" />
          <img src={aboutImage3} alt="" />
          <img src={aboutImage3} alt="" />
        </div>
      </div>

      <div className="section">
        <div className="middle">
          <img src={aboutImage4} alt="" />
        </div>
        <div className="right title">
          <div className="content">
            <h2>4. Održavanje tetovaža: Briga o vašem remek-delu</h2>
            <p>
              Čestitamo na novoj tetovaži! Hajde sada da pričamo o održavanju.
              Odgovarajuća nega je ključna za očuvanje živahnosti i dugovečnosti
              vašeg mastila. U našem studiju pružamo detaljna uputstva za negu
              kako bismo osigurali da vaša tetovaža zaceli besprekorno. Od
              početnog previjanja do rutina hidratacije, naše smernice će vam
              pomoći da ponosno pokažete svoju tetovažu godinama koje dolaze.
            </p>
          </div>
        </div>

        <div className="left tiles">
          <img src={aboutImage4} alt="" />
          <img src={aboutImage4} alt="" />
          <img src={aboutImage4} alt="" />
          <img src={aboutImage4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
