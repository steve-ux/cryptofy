import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/Mana";
import Mana from "../assets/logo-mana.png";
import Arrow from "../assets/arrow-up.png";
import { Link } from "react-router-dom";
import Metaverso from "../assets/metaverso.webp";

export default function Decentraland() {
  return (
    <>
      <div className="dashboard-containerMana">
        <Navbar />
        <h1 className="titleCriptos" id="MANA">
          DECENTRALAND
        </h1>
        <div className="containerCriptoETH">
          <img className="criptoETH2" src={Mana} alt="logo-ethereum" />
        </div>
        <div className="containerChart">
          <Api />
          <p className="epigrafe">Fuente: Coingecko</p>
          <p className="epigrafe">*El precio se actualiza cada 60 segundos.</p>
          <p className="epigrafe">
            *El gráfico muestra un período de 24 horas.
          </p>
          <p className="epigrafe">
            *Las barras de la base muestran el market cap de las últimas 24
            horas.
          </p>
        </div>
        <div className="containerText">
          <seccion className="infoCriptos">
            <h2>
              La historia de{" "}
              <a
                href="https://decentraland.org/"
                target="_blank"
                rel="noreferrer"
              >
                Decentraland
              </a>
            </h2>
            <p>
              Decentraland (MANA) es una plataforma blockchain y metaverso
              basada en Ethereum, que permite adquirir terrenos virtuales y
              participar en una comunidad virtual única, que busca crear una
              experiencia virtual única 3D.
            </p>
            <p>
              Decentraland, o Decentralandia en su traducción al español, es un
              mundo virtual abierto en el que sus usuarios puedan operar tal
              cual lo hacen en el mundo físico. Esto significa que son capaces
              de socializar, explorar y comerciar en este entorno virtual.
              Incluso comprar propiedades con formato de NFT (token no
              fungible).
            </p>
            <p>
              La creación de Decentraland corrió a cargo de los{" "}
              <span>argentinos Esteban Ordano y Ariel Meilich</span> en 2015 y
              necesitó de dos años de desarrollo. Fue así como en 2017 se
              realizó una <span>Oferta Inicial de Monedas (ICO)</span> con la
              que se logró recaudar una financiación inicial de 86.206 ethers
              (unos 26 millones de dólares en ese momento) a cambio de tokens
              MANA, el token principal de Decentraland.
            </p>
            <p>
              Para nuestros amigos de poca lectura, a continuación un video
              explicativo introductorio:
            </p>

            <div className="video-container">
              <div className="videos">
                <iframe
                  src="https://www.youtube.com/embed/OYUwCtWdfAc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="epigrafe">Créditos: bit2me</p>
            </div>

            <h3>El metaverso</h3>
            <p>
              El término metaverso poco a poco se convierte en un latiguillo
              común entre las grandes empresas de tecnología. El caso más
              conocido es el del creador de Facebook, Mark Zuckerberg, quien
              recientemente cambió el nombre de su conglomerado de tecnología y
              redes sociales Facebook, Inc por el de Meta Platforms, Inc., con
              la intención manifiesta de impulsar a la compañía en esa
              dirección.
            </p>
            <p>
              ¿Pero qué es el metaverso? La mención más temprana se encuentra en
              el best-seller de ciencia ficción publicado en 1992,{" "}
              <span>"Snow crash"</span>y hace referencia a un mundo virtual
              potenciado por la realidad aumentada.
            </p>
            <img
              src={Metaverso}
              alt="El metaverso"
              width="280vw"
              style={{ float: "left", padding: ".5rem", "border-radius": "2rem" }}
            />
            <p>
              Pese a que el vínculo con la ciencia ficción le otorga un halo de
              misterio al metaverso, lo cierto es que ya existen varias
              experiencias de este concepto que promete revolucionar Internet.
              Decentraland ha sido pionera en esta tecnología de la que hoy
              muchas empresas quieren participar. Recientemente recibió una
              millonaria inversión de <span>JP Morgan,</span> uno de los bancos
              más importantes del mundo, y se convirtió en el primer banco en
              ingresar al metaverso. Más precisamente, al "metaverso argentino"
              de Decentraland.
            </p>
            <p>
              El banco, considerado el más grande de Estados Unidos, abrió un
              salón bautizado <span>"Onyx Lounge",</span> en el distrito
              Metajuku, una versión virtual del distrito comercial Harajuku de
              Tokio, y cuenta con una imagen digital del director ejecutivo de
              la entidad financiera, Jamie Dimon, además de un tigre que
              deambula por el primer piso.
            </p>
            <p>
              El proyecto Decentraland (MANA) es la demostración más clara de
              que el mundo de la tecnología blockchain ha evolucionado mucho en
              los últimos años. Una evolución que ha llevado esta tecnología al
              mundo de los juegos, los mundos virtuales y más allá.
            </p>
            <h3>¿Cómo operar con Mana?</h3>
            <p>
              Para empezar a operar esta cripto debemos tener una billetera
              virtual o wallet o ir a una casa de cambio y empezar a operar.{" "}
              <span>Bitso o Binance</span> cuenta con este token donde se puede
              invertir desde 100 pesos argentinos. Con el token MANA podemos
              ingresar al metaverso y empezar a adquirir terrenos o productos
              NFT.
            </p>
            <p>
              Para ingresar al metaverso deberemos contar con una wallet
              especial, que se conecte a la web 3.0, y la wallet por excelencia
              en estos casos es <span>Metamask</span>, una wallet que se
              complementa a nuestro navegador (como Chrome) e interactúa con la
              blockchain. Entrando a la web de{" "}
              <a
                href="https://decentraland.org/"
                target="_blank"
                rel="noreferrer"
              >
                Decentraland
              </a>
              , vinculamos nuestra wallet de Meta y ya podemos empezar a
              personalizar nuestro avatar y pasear por distintos escenarios.
              Adquirir tierras o NFT's dependerá de cuánto capital dispongamos.
            </p>
          </seccion>
          <div className="prefooter">
            <Link to="/Criptos" className="back">
              Volver a Criptos
            </Link>
            <a href="#MANA">
              <img
                src={Arrow}
                alt="flecha arriba"
                width="45"
                style={{ padding: ".5rem", "margin-bottom": "-2.5rem", "filter":"invert(100%)" }}
              />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
