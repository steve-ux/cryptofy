import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import "../form.scss";

function Sobre() {
  return (
    <div className="containerSobre">
      <Navbar />
      <div className="containerText">
      <seccion className="infoCriptos">
      <h2>CRIPTOFY</h2>
      <p>
        Criptofy nace simplemente de la necesidad de informar y sin ánimo de lucro. Creemos que la
        información es vital para comprender mejor el mundo donde vivimos y que
        no debe negarse a ningún ciudadano del mundo. Tal como es la blockchain,
        un sistema descentralizado, abierto, democrático y transparente, somos discípulos de estos principios. La información de todos, en las manos de todos.
      </p>
      <p>
        
        En las criptomonedas pasa algo particular, trae mucho dinero y con ello
        los ambiciosos. Hay un sinnúmero de estafas o negocios fraudulentos
        donde se han visto envueltas las criptos, más allá de que los culpables
        están bien marcados y con el tiempo responden ante la justicia, hay una
        contraparte, y es la del individuo desinformado, el que perdió. No lo culpo, la mayoría
        de estas estafas o esquemas Ponzi ocurren en LatinoÁmerica, donde la
        realidad social y económica de muchos no es la que desearían tener, y al
        aparecer negocios que prometen ganancias exorbitantes en poco tiempo,
        caemos por no pensarlo dos veces.
      </p>
      <p>
        
        En nuestra web vas a encontrar información suficiente para introducirte
        al mundo blockchain y las cryptocurrencies. La información proporcionada
        es una recopilación propia de diferentes fuentes, oficiales y no
        oficiales pero chequeada, filtrada y traducida a un lenguaje de fácil
        comprensión. Pronto se agregarán más criptomonedas.
      </p>
      <p>El siguiente formulario está pensado para que puedas dejar tus sugerencias sobre el sitio, cambios, aportes, quejas o simplemente consultar si un negocio es o no fraudulento. En la sección de <Link to="/Bitcoin">Bitcoin</Link> podrás ver unos tips para estar alerta y detectar tempranamente estafas.</p>
      <h3>Contacto</h3>
      <Form/>
      <br/>
      <p><span>Descargo de responsabilidad.</span> La información proporcionada en este sitio web es meramente informativa, no constituye asesoramiento sobre inversiones, asesoramiento financiero, asesoramiento comercial ni ningún otro tipo de asesoramiento y no debes tratar el contenido del sitio web como tal. Criptofy no te recomienda que compres ni vendas criptomonedas sin informarte primero. Actúa según tu propio juicio y consulta con tu asesor financiero antes de tomar cualquier decisión sobre inversiones.</p>
      </seccion>
      </div>
      <Footer />
    </div>
  );
}

export default Sobre;
