import { Link } from "react-router-dom";
import Videoloop from "../assets/tech-video.mp4";
import LogoLinkedIn from "../assets/LinkedIn Yellow.png";
import LogoInstagram from "../assets/Instagram Yellow.png";
import LogoGitHub from "../assets/GitHub Yellow.png";

function Inicio() {
  return (
    <div className="inicio">
      <video className="video" autoPlay loop muted>
      <source src={Videoloop} type="video/mp4" />
      </video>
        <h1 className="titleInicio">PORTAL CRIPTO</h1>
        <div className="containerBtn">
        <button className="btnInicio">
          <Link to="/Bitcoin">
            <h2 className="textBtn">VER CRIPTOS</h2>
          </Link>
        </button>
        </div>        
        <div className="containerFooter">
            <a href="https://www.linkedin.com/in/estebanok/" target="_blank"><img src={LogoLinkedIn} width="60" alt="Logo LinkedIn"/></a>
            <a href="https://www.instagram.com/esteban_instaok/" target="_blank"><img src={LogoInstagram} width="60" alt="Logo Instagram"/></a>
            <a href="https://github.com/steve-ux" target="_blank"><img src={LogoGitHub} width="60" alt="Logo GitHub"/></a>
        </div>
    </div>
  );
}

export default Inicio;
