import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/Binance";
import Binance from "../assets/logo-binance.png";
import Arrow from "../assets/arrow-up.png";
import NFT from "../assets/Art-NFT.jpeg";
import { Link } from "react-router-dom";

export default function BinanceMain() {
 
  return (
    <>
    <div className="dashboard-containerBNB">
    <Navbar/>
      <h1 className="titleCriptos" id="BNB">BINANCE BNB</h1>
      <div className="containerCriptoETH">
      <img className="criptoBNB" src={Binance} alt="logo-binance" />
      </div>
      <div className="containerChart">
    <Api/>
    <p className="epigrafe">Fuente: Coingecko</p>
    <p className="epigrafe">*El precio se actualiza cada 60 segundos.</p>
    <p className="epigrafe">*El gráfico muestra un período de 24 horas.</p>
    <p className="epigrafe">*Las barras de la base muestran el market cap de las últimas 24 horas.</p>
      </div>
      <div className="containerText">
    <seccion className="infoCriptos">
      <h2>La historia de <a href="https://www.binance.com/es/bnb" target="_blank" rel="noreferrer">Binance</a></h2>
      <p>Ethereum es una plataforma digital que adopta la tecnología de cadena de bloques (blockchain) y expande su uso a una gran variedad de aplicaciones. Ether, su criptomoneda nativa, es la segunda más grande del mercado.</p>
      <p>La plataforma Ethereum fue creada en 2015 por el programador <span>Vitalik Buterin,</span> de origen ruso-canadiense, con la perspectiva de crear un instrumento para aplicaciones descentralizadas y colaborativas. Ether (ETH), su criptomoneda nativa, es un token que puede ser utilizado en transacciones que usen este software. Como bitcoin, ether existe como parte de un sistema financiero autónomo de pares, libre de intervención gubernamental. También como bitcoin, el valor de ether se disparó en un corto periodo de tiempo y fluctúa constantemente.</p>
      <h3>¿Cómo funciona BNB?</h3>
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
      <h3>Los NFT</h3>
      <p>Para entender el concepto de los <span>NFT (Non Fungible Token o Tokens No Fungibles)</span>, primero tenemos que saber y entender que en nuestro sistema jurídico, existen bienes fungibles y bienes no fungibles. Los bienes fungibles son los que pueden intercambiarse, teniendo un valor en función de su número, medida o peso. Y los bienes no fungibles son los que no son sustituibles.</p>
      <p>Un ejemplo de bienes fungibles es el dinero. Si tienes un billete de 20 euros, este es un bien fungible, ya que lo puedes intercambiar sin problemas por otro billete de 20 euros, no pierde valor y es exactamente igual. Además, este billete se consume cuando lo utilizas.</p>
      <p>Y por otra parte, un ejemplo de bien no fungible sería una obra de arte. Si tienes un cuadro en casa, este no se consume al utilizarse y tampoco puede ser sustituido por otro cuadro. Una obra de arte no es equivalente a otra, y por lo tanto, no se pueden simplemente intercambiar como pasa con un billete de 20 euros.</p>
      <p>Por lo tanto, puedes pensar en un NFT como una gran obra de arte, como la Gioconda de Da Vinci. Solo hay una y está en una galería de arte concreta. Si la quieres, solo puedes comprar la original en el caso de que estuviera a la venta. También podrías hacerte con una copia, pero tendría otro valor, ya que no sería la original. Pues eso exactamente es lo que hace el NFT, pero de <span>forma digital.</span></p>
      <p>los NFT suelen estar adjuntos a algunas obras o ilustraciones digitales. Su precio, es realmente el que la gente le quiera dar, y ahora que están en un pico de popularidad, podemos encontrarnos con que hay gente que paga 260.000 euros por el dibujo de una roca adjunto a un NFT.</p>
      <img src={NFT} alt="arte digital" width="280vw" style={{"float": "left", "padding": ".5rem"}}/>
      <p>Los NFT funcionan a través de la tecnología <span>blockchain o de cadena de bloques de Ethereum</span> (normalmente). Es la misma tecnología de las criptomonedas, que funcionan mediante una red de ordenadores descentralizada, con bloques o nodos enlazados y asegurados usando criptografía. Cada bloque enlaza a un bloque previo, así como una fecha y datos de transacciones, y por diseño son resistentes a la modificación de datos.</p>
      <p>A los NFT, se les asigna una especie de certificado digital de autenticidad, una serie de metadatos que no se van a poder modificar. En estos metadatos se garantiza su autenticidad, se registra el valor de partida y todas las adquisiciones o transacciones que se hayan hecho, y también a su autor.</p>
      <p>Esto quiere decir que si compras un contenido digital tokenizado con NFT, en todo momento siempre habrá constancia del primer valor que tenía, y de por cuánto lo has comprado. Es como cuando compras un cuadro y se lleva un registro de por dónde se mueve.</p>
      <div className="videos">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0KrdRZVr-q4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p className="epigrafe">Créditos: Fazt</p>
      </div>
      <h3>¿Comprarías un NFT?</h3>
      <p>Si los NFT no se pueden comprar y vender tan fácil como los Bitcoin, entonces, ¿por qué la gente los compra y se gasta tanto dinero en ellos? Pues es sencillo, <span>porque creen que su valor va aumentar con el tiempo,</span> y luego podrán venderlo por más dinero. Nadie se gasta 260.000 euros por el dibujo de una roca o el gif de un gatito porque le gusten los dibujos de rocas o gatitos, ya que los puede tener gratis, sino por el valor que tiene este dibujo concreto al ser un NFT.</p>
      <p>La idea, por lo tanto, es que si me compro un NFT por 100.000 euros, en un futuro pueda revenderlo por más dinero. Es un activo único, lo que en teoría le debería dar un valor mayor al no existir otro igual.</p>
    </seccion>
    <div className="prefooter">
    <Link to="/Criptos" className="back">Volver a Criptos</Link>
    <a href="#BNB"><img src={Arrow} alt="flecha arriba" width="45" style={{"padding": ".5rem", "margin-bottom": "-2.5rem"}}/></a>
    </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}
