import "../styles/Home.scss";
import Logo from "./Logo";

const Icons = () => {
  return (
    <ul className="icons" id="icons">
      <li>
        <a href="#facebook">
          <i className="fab fa-facebook-f icon"></i>{" "}
        </a>
      </li>
      <li>
        <a href="#twitter">
          <i className="fab fa-twitter icon"></i>
        </a>
      </li>
      <li>
        <a href="#linkedin">
          <i className="fab fa-linkedin-in icon"></i>
        </a>
      </li>
      <li>
        <a href="#instagram">
          <i className="fab fa-instagram icon"></i>
        </a>
      </li>
      <Logo />
    </ul>
    // <ul>
    //   <li>
    //     <a href="#">
    //       <i className="fab fa-edge"></i>
    //     </a>
    //   </li>
    //   <li>
    //     <a href="#">
    //       <i className="fab fa-firefox"></i>
    //     </a>
    //   </li>
    //   <li>
    //     <a href="#">
    //       <i className="fab fa-chrome"></i>
    //     </a>
    //   </li>
    //   <li>
    //     <a href="#">
    //       <i className="fab fa-opera"></i>
    //     </a>
    //   </li>
    // </ul>
  );
};

export default Icons;
