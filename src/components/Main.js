import Bitcoin from "../assets/logo-bitcoin.png";
import Ethereum from "../assets/logo-ethereum.png";
import Dogecoin from "../assets/logo-dogecoin.png";
import Classic from "../assets/logo-ethereum-classic.png";
import Mana from "../assets/logo-mana.png";
import DAI from "../assets/logo-dai.png";
import { Link } from "react-router-dom";
import Navbar from "./Navigator/Navbar";

function Main() {
  return (
    <div className="main">
      <Navbar/>
      <div className="containerMain">
        <h2 className="textMain" id="PortalCripto">
          SELECCIONÁ
        </h2>
        <div className="box">
          <div className="containerCriptos">
            <Link to="/Bitcoin">
              <img className="criptoBTC" src={Bitcoin} alt="logo-bitcoin" />
            </Link>

            <Link to="/Ethereum">
              <img className="criptoETH" src={Ethereum} alt="logo-ethereum" />
            </Link>

            <Link to="/Dogecoin">
              <img className="criptos" src={Dogecoin} alt="logo-dogecoin" />
            </Link>

            <Link to="/Classic">
              <img
                className="criptoETC"
                src={Classic}
                alt="logo-ethereum-classic"
              />
            </Link>

            <Link to="/Mana">
              <img className="criptoMana" src={Mana} alt="logo-mana" />
            </Link>

            <Link to="/DAI">
              <img className="criptos" src={DAI} alt="logo-dai" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
