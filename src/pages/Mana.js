import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../Mana";
import Mana from "../assets/logo-mana.png";

export default function Decentraland() {
 
  return (
    <>
    <div className="dashboard-container">
    <Navbar/>
      <h1 className="titleCriptos">DECENTRALAND</h1>
      <div className="containerCriptoETH">
      <img className="criptoETH2" src={Mana} alt="logo-ethereum" />
      </div>
      <div className="containerChart">
    <Api/>
      </div>
      <div className="containerText">
    <seccion className="infoCriptos">
      <h2>La historia de Mana</h2>
      <p>Ethereum es una plataforma digital que adopta la tecnología de cadena de bloques (blockchain) y expande su uso a una gran variedad de aplicaciones. Ether, su criptomoneda nativa, es la segunda más grande del mercado.</p>
      <p>La plataforma Ethereum fue creada en 2015 por el programador Vitalik Buterin, de origen ruso-canadiense, con la perspectiva de crear un instrumento para aplicaciones descentralizadas y colaborativas. Ether (ETH), su criptomoneda nativa, es un token que puede ser utilizado en transacciones que usen este software. Como bitcoin, ether existe como parte de un sistema financiero autónomo de pares, libre de intervención gubernamental. También como bitcoin, el valor de ether se disparó en un corto periodo de tiempo.</p>
      <h3>¿Cómo funciona ether?</h3>
      <p>Ether, como otras criptomonedas, utiliza un libro digital compartido donde se registran todas las transacciones. Es de acceso público, completamente transparente y muy difícil de modificar a posteriori.</p>
      <p>Este ‘libro contable digital’ se denomina blockchain o cadena de bloques, y se construye a través del proceso de minería de datos.</p>
      <p>Los mineros son los responsables de verificar grupos de transacciones de ether para formar "bloques" y codificarlos resolviendo complejos algoritmos. Estos algoritmos pueden ser a su vez más o menos difíciles, como forma de mantener cierta constancia en el tiempo de procesamiento de los bloques (alrededor de uno cada 14 segundos).</p>
      <p>Esta modalidad actual de Ethereum, en la que trabaja con mineros, se denomina <span>PoW (Proof of Work) o prueba de trabajo</span>. Pronto migrará a otra modalidad llamada <span>PoS (Proof of Stake) o Prueba de Participación.</span></p>
      <p>Los nuevos bloques se enlazan entonces a la cadena de bloques anterior y el minero en cuestión recibe una recompensa, es decir, un número fijo de tokens de ether. Normalmente son 5 unidades de ether, aunque esta cifra puede verse reducida si la criptomoneda continúa subiendo.</p>
      <h3>¿Cómo operar con ether?</h3>
      <p>Para empezar a operar esta cripto debemos tener una billetera virtual o wallet para usarla en un exchange o casa de cambio. En las casas de cambio, cambiamos (valga la redundancia) nuestra moneda local por X cantidad de Ethereum o cualquier otra cripto. Los exchanges ya te proporcionan una wallet al crearte una cuenta. Algunos exchanges de ejemplo para empezar a operar fácilmente son: <span>Bitso, Buenbit, Ripio, Lemon Cash, Binance</span> por nombrar algunos que operan en Argentina con moneda local o en el resto de Latinoamérica.</p>
      <p>Lo normal es buscar estos exchanges en la Play Store si tienes Android o la App Store si tienes iOS, bajar su aplicación y seguir los pasos para dar de alta tu cuenta. Luego es muy sencillo pasar dinero desde nuestro banco o Mercado Pago y comprar nuestras primeras criptos.</p>
      <h3>Usos de Ethereum</h3>
      <p>El blockchain de Ethereum es muy similar al de bitcoin, pero su lenguaje de programación le permite a los desarrolladores crear software a través del cual gestionar las transacciones y automatizar ciertos resultados. Este software se conoce como <span>contrato inteligente o smart contracts.</span></p>
      <p>Si un contrato tradicional describe los términos de una relación, un contrato inteligente se asegura de que esos términos se cumplan escribiéndolos en código. Son programas que automáticamente ejecutan el contrato una vez que las condiciones predefinidas se cumplen, eliminando el retraso y el coste que existe al ejecutar un acuerdo de manera manual.</p>
      <p>Por poner un ejemplo sencillo, un usuario de Ethereum podría crear un contrato inteligente para enviar una cantidad establecida de ether a un amigo en una fecha determinada. Escribirían este código en la cadena de bloques y cuando el contrato se complete (es decir, cuando llegue la fecha acordada) los ether se enviarán automáticamente.</p>
      <p>Esta idea básica puede aplicarse a configuraciones más complejas, siendo su potencial probablemente ilimitado, con proyectos que ya han logrado un notable progreso en sectores como seguros, inmobiliarias, servicios financieros, servicios legales y microfinanciación.</p>
      <p>Los contratos inteligentes también poseen varios beneficios adicionales:</p>
      <span><li>Eliminan la figura del intermediario, ofreciendo al usuario control total y minimizando los costes extra</li>
      <li>Se registran, encriptan y duplican en la cadena de bloques pública, donde todos los usuarios pueden ver la actividad del mercado</li>
      <li>Eliminan el tiempo y el esfuerzo requerido en procesos manuales</li></span>
      <p>Por supuesto, los contratos inteligentes son todavía un sistema muy nuevo con muchos detalles por pulir. El código se traduce literalmente, por lo que cualquier error durante la creación del contrato podría provocar resultados no deseados que no pueden modificarse.</p>
    </seccion>
    </div>
    <Footer/>
    </div>
    </>
  );
}