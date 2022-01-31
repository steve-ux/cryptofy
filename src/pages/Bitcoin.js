import { Link } from "react-router-dom";

function Bitcoin() {
    return (
      
        <div>
          <h1 className="titleBitcoin">Info y precio de Bitcoin en tiempo real</h1>
          <section>
            <p>Bitcoin es una criptomoneda y un sistema de pago sin banco central o administrador único. En principio, los usuarios de bitcoin pueden transferir dinero entre sí a través de una red entre iguales usando software libre y de código abierto.</p>
          </section>
          <Link to="/"><h2>Home.</h2></Link>
        </div>
    );
  }
  
  export default Bitcoin;