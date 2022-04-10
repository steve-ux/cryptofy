import NavBar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";

function Enviado() {
  return (
    <>
      <NavBar />
      <br />
      <div>
        <h3 className="titleEnviado">
          ¡Tu mensaje fue enviado! A la brevedad responderé tu mensaje.{" "}
          <span style={{ color: "white", "-webkit-text-stroke": "0px" }}>
            #ToTheMoon
          </span>{" "}
          🚀
        </h3>
      </div>
      <Footer />
    </>
  );
}

export default Enviado;
