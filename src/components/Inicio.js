import { Link } from "react-router-dom";
import Videoloop from "../assets/tech-video.mp4";
import Navbar from "./Navigator/Navbar";
import Footer from "./Footer";

function Inicio() {
  return (
    <>
    <div className="inicio">
      <video className="video" autoPlay loop muted>
      <source src={Videoloop} type="video/mp4" />
      </video>
      <Navbar/>
      <div className="containerElements">
      <span className="spanHome">
      <h1 className="titleInicio">CRIPTOFY</h1>
      </span>
      <p className="parrafoHome">
          TU PORTAL CRIPTO. COTIZACIONES, HISTORIA Y MUCHO MÁS.
        </p>
        
        <div className="containerBtn">
            <Link to="/Criptos"><button className="glow-on-hover" type="button">LETS GO!</button></Link>
        </div>
        </div>
    </div>
        <Footer/>
    </>
  );
}

export default Inicio;
