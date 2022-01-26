import { Link } from "react-router-dom";

function Home() {
  return (
    
      <div>
        <h1>Esta es la home</h1>
        <Link to="/Bitcoin"><h2>Saber de Bitcoin.</h2></Link>
        <Link to="/Ethereum"><h2>Saber de Ethereum.</h2></Link>
      </div>
  );
}

export default Home;