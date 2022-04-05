import Bitcoin from "../assets/logo-bitcoin.png";
import Ethereum from "../assets/logo-ethereum.png";
import Dogecoin from "../assets/logo-dogecoin.png";
import Classic from "../assets/logo-ethereum-classic.png";
import Mana from "../assets/logo-mana.png";
import DAI from "../assets/logo-dai.png";
import Binance from "../assets/logo-binance.png";
import Cardano from "../assets/logo-ada.png";
import Litecoin from "../assets/logo-ltc.png";
import Polkadot from "../assets/logo-dot.png";
import Ripple from "../assets/logo-xrp.png";
import UBI from "../assets/logo-ubi.png";
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
      <p>Empezó como meme, hoy su market cap la ubica entre las primeras.</p>
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
  <div className="box">
    <span></span>
    <div className="content">
    <img className="criptoXRP2" src={Ripple} alt="logo-ripple" />
      <h2>RIPPLE</h2>
      <p>Plataforma y moneda diseñada para permitir transacciones rápidas y baratas.</p>
      <Link to="/Ripple">Ver precios</Link>
    </div>
  </div>
  <div className="box">
    <span></span>
    <div className="content">
    <img className="criptoLTC2" src={Litecoin} alt="logo-litecoin" />
      <h2>LITECOIN</h2>
      <p> La tercera criptomoneda del criptomundo y una variación de Bitcoin.</p>
      <Link to="/Litecoin">Ver precios</Link>
    </div>
  </div>
  <div className="box">
    <span></span>
    <div className="content">
    <img className="criptoADA2" src={Cardano} alt="logo-cardano" />
      <h2>CARDANO</h2>
      <p>Fundada en 2015 por el cofundador de Ethereum, Charles Hoskinson.</p>
      <Link to="/Cardano">Ver precios</Link>
    </div>
  </div>
  <div className="box">
    <span></span>
    <div className="content">
    <img className="criptoDOT2" src={Polkadot} alt="logo-polkadot" />
      <h2>POLKADOT</h2>
      <p>Facilita las transacciones autenticadas de una blockchain a otra.</p>
      <Link to="/Polkadot">Ver precios</Link>
    </div>
  </div>
  <div className="box">
    <span></span>
    <div className="content">
    <img className="criptoBNB2" src={Binance} alt="logo-binance" />
      <h2>BINANCE</h2>
      <p>La criptomoneda del exchange más popular a nivel mundial.</p>
      <Link to="/Binance">Ver precios</Link>
    </div>
  </div>
  <div className="box">
    <span></span>
    <div className="content">
    <img className="criptoUBI2" src={UBI} alt="logo-universal-basic-income" />
      <h2>UBI</h2>
      <p>El primer token creado para una renta básica universal.</p>
      <Link to="/UBI">Ver precios</Link>
    </div>
  </div>
</div>
</div>
<Footer/>
    </>
  );
}

export default Main;
