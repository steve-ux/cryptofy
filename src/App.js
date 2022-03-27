import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Criptos from "./pages/Criptos";
import Bitcoin from "./pages/Bitcoin";
import Ethereum from "./pages/Ethereum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Criptos" element={<Criptos />} />
        <Route path="/Bitcoin" element={<Bitcoin />} />
        <Route path="/Ethereum" element={<Ethereum />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
