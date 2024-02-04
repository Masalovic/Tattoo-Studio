import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <h2 className="contact-heading">KONTAKTIRAJTE NAS</h2>
      <div className="contact-container">
        <div className="contact-content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="text-one">Nemanjina 22</div>
              <div className="text-two">Beograd 11000</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="text-one">+381 644444444</div>
              <div className="text-two">+381 644444444</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="text-one">tattoo.rakac@gmail.com</div>
              <div className="text-two">info.rakac@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <input type="text" placeholder="Enter your message" />
              </div>
              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-banner">
        <p>COPYRIGHT © 2024 IZRADA SAJTA VORTEX-MK | SVA PRAVA ZADRŽANA</p>
      </div>
    </div>
  );
};

export default Contact;
