import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Criptos from "./pages/Criptos";
import Bitcoin from "./pages/Bitcoin";
import Ethereum from "./pages/Ethereum";
import Dogecoin from "./pages/Dogecoin";
import Classic from "./pages/Classic";
import Mana from "./pages/Mana";
import DAI from "./pages/Dai";
import AboutUs from "./pages/Sobre"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Criptos" element={<Criptos />} />
        <Route path="/Bitcoin" element={<Bitcoin />} />
        <Route path="/Ethereum" element={<Ethereum />} />
        <Route path="/Dogecoin" element={<Dogecoin />} />
        <Route path="/Classic" element={<Classic />} />
        <Route path="/Mana" element={<Mana />} />
        <Route path="/DAI" element={<DAI />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
