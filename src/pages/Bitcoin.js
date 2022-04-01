import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/Bitcoin";
import Bitcoin from "../assets/logo-bitcoin.png";

export default function BitcoinMain() {
 
  return (
    <>
    <div className="dashboard-containerBTC">
    <Navbar/>
      <h1 className="titleCriptos">Bitcoin</h1>
      <div className="containerCriptoETH">
      <img className="criptoETH2" src={Bitcoin} alt="logo-ethereum" />
      </div>
      <div className="containerChart">
    <Api/>
      </div>
      <div className="containerText">
    <seccion className="infoCriptos">
      <h2>La historia de <a href="https://bitcoin.org/es/" target="_blank" rel="noreferrer">Bitcoin</a></h2>
      <p>Bitcoin nación en 2008 en medio de una crisis económica que atravesaba el mundo. Su creador o creadores, del que no se sabe existencia, apareció al mundo bajo el seudónimo de Satoshi Nakamoto para proteger su identidad y asegurar el anonimato del proyecto. Su intención fue ser una revolución financiera y cambiar el modo en el que conocíamos las finanzas. Logrando su cometido, hoy Bitcoin, es considerado la moneda del futuro.</p>
      <p>BTC, como se conoce su abreviatura, usa tecnología peer-to-peer o entre pares para operar sin una autoridad central o bancos; la gestión de las transacciones y la emisión de bitcoins es llevada a cabo de forma colectiva por la red.</p>
      <p>Bitcoin es de código abierto; su diseño es público, nadie es dueño o controla Bitcoin y todo el mundo puede participar. Por medio de sus muchas propiedades únicas, Bitcoin permite usos interesantes no contemplados por ningún sistema de pagos anterior.</p>
      <h3>¿Cómo funciona bitcoin?</h3>
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