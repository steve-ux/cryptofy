import { Link } from "react-router-dom";
import Videoloop from "../assets/tech-video.mp4";
import Navbar from "./Navigator/Navbar";
import Footer from "./Footer";

function Inicio() {
  return (
    <div className="inicio">
      <video className="video" autoPlay loop muted>
      <source src={Videoloop} type="video/mp4" />
      </video>
      <Navbar/>
      <div className="containerElements">
      <span className="spanHome">
      <h1 className="titleInicio">PORTAL CRIPTO</h1>
      </span>
      <p className="parrafoHome">
          SUMERGITE AL MUNDO CRIPTO.
        </p>
        
        <div className="containerBtn">
        <button className="btnInicio">
            <Link to="/Criptos"><h2 className="textBtn">LETS GO!</h2></Link>
        </button>
        </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Inicio;
