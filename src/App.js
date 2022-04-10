import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Criptos from "./pages/Criptos";
import Bitcoin from "./pages/Bitcoin";
import Ethereum from "./pages/Ethereum";
import Dogecoin from "./pages/Dogecoin";
import Classic from "./pages/Classic";
import Mana from "./pages/Mana";
import DAI from "./pages/Dai";
import Ripple from "./pages/Ripple";
import Litecoin from "./pages/Litecoin";
import Binance from "./pages/Binance";
import Cardano from "./pages/Cardano";
import Polkadot from "./pages/Polkadot";
import UBI from "./pages/UBI";
import AboutUs from "./pages/Sobre";
import Enviado from "./pages/Enviado"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Criptos" element={<Criptos />} />
        <Route path="/Bitcoin" element={<Bitcoin />} />
        <Route path="/Ethereum" element={<Ethereum />} />
        <Route path="/Dogecoin" element={<Dogecoin />} />
        <Route path="/Classic" element={<Classic />} />
        <Route path="/Mana" element={<Mana />} />
        <Route path="/DAI" element={<DAI />} />
        <Route path="/Ripple" element={<Ripple />} />
        <Route path="/Litecoin" element={<Litecoin />} />
        <Route path="/Binance" element={<Binance />} />
        <Route path="/Cardano" element={<Cardano />} />
        <Route path="/Polkadot" element={<Polkadot />} />
        <Route path="/UBI" element={<UBI />} />
        <Route path="/Enviado" element={<Enviado />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
