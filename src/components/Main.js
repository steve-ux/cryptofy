import Bitcoin from "../assets/logo-bitcoin.png";
import Ethereum from "../assets/logo-ethereum.png";
import Dogecoin from "../assets/logo-dogecoin.png";
import Classic from "../assets/logo-ethereum-classic.png";
import Mana from "../assets/logo-mana.png";
import DAI from "../assets/logo-dai.png";
import { Link } from "react-router-dom";
import Navbar from "./Navigator/Navbar";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Navbar/>
    <div className="bodyMain">
    <div className="container">
  <div className="box">
    <span></span>
    <div className="content">
      <img className="criptoBTC" src={Bitcoin} alt="logo-bitcoin" />
      <h2>BITCOIN</h2>
      <p>Nacida en 2008 fue la primer criptomoneda.</p>
      <Link to="/Bitcoin">Ver precios</Link>
    </div>
  </div>
  <div className="box">
    <span></span>
    <div className="content">
    <img className="criptoETH" src={Ethereum} alt="logo-ethereum" />
      <h2>ETHEREUM</h2>
      <p>Es la segunda moneda más fuerte del mercado.</p>
      <Link to="/Ethereum">Ver precios</Link>
    </div>
  </div>
  <div className="box">
    <span></span>
    <div className="content">
    <img className="criptoDoge" src={Dogecoin} alt="logo-dogecoin" />
      <h2>DOGECOIN</h2>
      <p>Empezó como meme, hoy su market cap la ubica en el top 10.</p>
      <Link to="/Dogecoin">Ver precios</Link>
    </div>
  </div>
  <div className="box">
    <span></span>
    <div className="content">
    <img className="criptoETC" src={Classic} alt="logo-ethereum-classic" />
      <h2>ETHEREUM CLASSIC</h2>
      <p>Ethereum original, luego tuvo una bifurcación.</p>
      <Link to="/Classic">Ver precios</Link>
    </div>
  </div>
  <div className="box">
    <span></span>
    <div className="content">
    <img className="criptoMana" src={Mana} alt="logo-mana" />
      <h2>MANA</h2>
      <p>Pionera en el metaverso, la cripto de Decentraland proyecta futuro.</p>
      <Link to="/Mana">Ver precios</Link>
    </div>
  </div>
  <div className="box">
    <span></span>
    <div className="content">
    <img className="criptoDai" src={DAI} alt="logo-dai" />
      <h2>DAI</h2>
      <p>Atada al precio del dólar, es la inversión perfecta para quien no busca riesgos.</p>
      <Link to="/DAI">Ver precios</Link>
    </div>
  </div>
</div>
</div>
<Footer/>
    </>
  );
}

export default Main;
