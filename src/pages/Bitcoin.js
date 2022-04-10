import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/Bitcoin";
import Bitcoin from "../assets/logo-bitcoin.png";
import Arrow from "../assets/arrow-up.png";
import { Link } from "react-router-dom";

export default function BitcoinMain() {
 
  return (
    <>
    <div className="dashboard-containerBTC">
    <Navbar/>
      <h1 className="titleCriptos" id="BTC">Bitcoin</h1>
      <div className="containerCriptoETH">
      <img className="criptoETH2" src={Bitcoin} alt="logo-ethereum" />
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
      <h2>La historia de <a href="https://bitcoin.org/es/" target="_blank" rel="noreferrer" className="enlaces">Bitcoin</a></h2>
      <p>Bitcoin nación en 2008 en medio de una crisis económica que atravesaba el mundo. Su creador o creadores, del que no se sabe existencia, apareció al mundo bajo el seudónimo de <span>Satoshi Nakamoto</span> para proteger su identidad y asegurar el anonimato del proyecto. Su intención fue ser una revolución financiera y cambiar el modo en el que conocíamos las finanzas. Logrando su cometido, hoy Bitcoin, es considerado la <span>moneda del futuro.</span></p>
      <p>BTC, como se conoce su abreviatura, usa tecnología peer-to-peer o entre pares para operar sin una autoridad central o bancos, es decir, <span>descentralizada</span>; la gestión de las transacciones y la emisión de bitcoins es llevada a cabo de forma colectiva por la red y los mineros.</p>
      <p>Bitcoin es de código abierto; su diseño es público, nadie es dueño o controla Bitcoin y todo el mundo puede participar. Por medio de sus muchas propiedades únicas, Bitcoin permite usos interesantes no contemplados por ningún sistema de pagos anterior.</p>
      <h3>El White Paper de Bitcoin</h3>
      <p>El White Paper, o <span>Libro Blanco</span> en español, es un documento informativo que promueve o resalta las características de un producto, una solución o un servicio que ofrece u ofrecerá una empresa u organización. Toda criptomoneda seria comienza su camino publicando su white paper, donde explica su origen, su propósito y su road map (hoja de ruta) mostrando su planificación de desarrollo y objetivos a corto y largo plazo. A continuación puedes acceder a leer el de bitcoin, extraído de su website oficial, y así profundizar más en BTC:</p>
      <div className="containerPDF">
      <embed src="https://bitcoin.org/files/bitcoin-paper/bitcoin_es_latam.pdf" type="application/pdf" width="100%" height="100%"></embed>
      </div>      
      <h3>¿Cómo funciona bitcoin?</h3>
      <p>Bitcoin es una moneda virtual o un medio de intercambio electrónico que sirve para adquirir productos y servicios como cualquier otra moneda.</p>
      <p>Para poder hacer un intercambio, cada usuario debe tener una clave criptográfica y el sistema permite descontar la cantidad de bitcoin a quien compra y aumentar la cantidad de bitcoin de la cuenta de quien vende.</p>
      <p><span>No tiene intermediarios</span> al realizar un cobro o pago. Puede contar con varias cuentas y tiene un funcionamiento ininterrumpido las 24 horas.</p>
      <p>Hay que tener en cuenta que la moneda y la clave asociada al código criptográfico deben ser verificadas para su ejecución. Ahí entran los <span>mineros de bitcoin,</span> personas del todo el mundo con equipos especializados para realizar cálculos matemáticos complejos y que aportan a mantener segura la red de bitcoin o blockchain.</p>
      <p>Estos mineros, a cambio de mantener segura la red, reciben un incentivo en bitcoin. El total de bitcoins minados tiene un límite de 21 millones. A la fecha (2022) se han minado unos 18,9 millones (un 90%). Sin embargo, no se espera que la extracción del 10% final se complete hasta febrero de 2140, a tenor de las estimaciones de la red y los cronogramas de las progresivas reducciones a la mitad de las recompensas de bitcoin que habrá para los mineros.</p>
      <h3>La blockchain</h3>
      <p>A menudo se suele hablar del bitcoin como la revolución en el mundo de las finanzas pero pocas veces se habla de la tecnología detrás que puede llegar a revolucionar mucho más de lo que pensamos.</p>
      <p>Descentralización, es quizás la palabra máster, la palabra mágica y la palabra más poderosa ¿Por qué? Porque resulta que si hay algo valioso en todo esto, va más allá del valor del bitcoin, hablo del poder de la información, y la información en manos de muchos. Una tecnología que está cambiando y cambiará los paradigmas que conocemos, tanto en los gobiernos como en el hogar, la música, la identidad digital, salud, economía y muchas áreas más. Para profundizar en el tema, te comparto un video informativo o puedes leer el siguiente artículo de mi autoría, <a href="https://medium.com/@exe-universal/la-disrupci%C3%B3n-del-blockchain-2220a4b9be92" target="_blank" rel="noreferrer">aquí.</a></p>
      <div className="video-container">
      <div className="videos">
      <iframe src="https://www.youtube.com/embed/70asKwy15Ds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <p className="epigrafe">Créditos: Exceltic</p>
      </div>
      <h3>¿Cómo operar con bitcoin?</h3>
      <p>Bitcoin es diferente de lo que ya conoces y usas todos los días. Antes de que empieces a usar Bitcoin, hay algunas pautas con las que es necesario que te familiarices para usarlo de forma segura, además de evitar errores comunes. Explora más de estos tips <a href="https://bitcoin.org/es/debes-saber" target="_blank" rel="noreferrer">aquí.</a></p>
      <p>El primer paso en el mundo cripto es elegir tu billetera virtual o wallet. Puedes usar un monedero Bitcoin en tu vida cotidiana con tu dispositivo móvil o puedes tener un monedero solo para pagos online desde tu ordenador. En cualquier caso, puedes escoger tu monedero en un minuto. Las más usuales son <span>Exodus o Trust Wallet</span> para smartphone o PC, <span>Trezor o Ledger</span> para billeteras físicas (tipo pendrive) o <a href="https://www.bitaddress.org/bitaddress.org-v3.3.0-SHA256-dec17c07685e1870960903d8f58090475b25af946fe95a734f88408cef4aa194.html" target="_blank" rel="noreferrer">bitaddress.org</a> que te genera una dirección bitcoin en segundos sin nada más.</p>
      <p>Lo siguiente es obtener bitcoins. Puedes obtenerlos aceptándolos como pago por bienes y servicios o comprándoselos a un amigo o alguien cercano. También puedes comprarlos directamente desde una casa de cambio (exchange) con tu cuenta bancaria.</p>
      <h3>Usos de Bitcoin</h3>
      <p>Hay un creciente número de servicios y comerciantes aceptando Bitcoin en todo el mundo, incluso cada vez más países lo adoptan como <span>moneda de curso legal.</span> Eso quiere decir que puedes usar Bitcoin para pagarle a tu almacenero local y valorar su experiencia ayudando a que los pequeños negocios ganen más visibilidad.</p>
      <p>Puedes procesar pagos y facturas por si mismo. También puedes utilizar servicios para comerciantes que le permiten ingresar dinero en su moneda local o bitcoin. La mayoría de puntos de venta utilizan una tablet o teléfono móvil para permitir a sus clientes pagar con sus teléfonos móviles.</p>
      <p>Otra opción, cada vez más creciente en Latinoamérica, es usar <span>bitcoin como moneda de ahorro.</span> BTC es una herramienta infalible contra la inflación y la realidad de muchos países latinos. La sugerencia es comprar pequeñas cantidades de bitcoin en casas de cambio como <span>Bitso, Ripio, Buenbit o Binance</span> (por nombrar algunos ejemplos), ir acumulando con el tiempo y <span>holdear</span> (que significa "mantener") y no vender. Las métricas indican que a largo plazo (2-5 años) se gana a la inflación y se obtiene una alta rentabilidad.</p>
      <h3>Evitando estafas</h3>
      <p>Los usuarios de bitcoin, o de cualquier otra criptomoneda, deben estar alerta y tener cuidado con las inversiones que hagan. Si bien bitcoin no es una estafa, muchos usan sus beneficios para bien propio y perjudicar al menos informado. Por eso aquí 5 indicadores para no caer en las trampas más comunes:</p>
      <p><span>1. Si no se le explica a la persona cómo funciona la rentabilidad del ‘negocio’.</span> Todo inversionista tiene derecho a enterarse de manera clara el modelo de rentabilidad del negocio al que le está invirtiendo, si la comprensión de este se torna confuso, enredado, o se le da muchas vueltas para hacerlo entender, es una razón válida para sospechar y evitar ser estafado.</p>
      <p><span>2. Si le conducen a retener el dinero por un tiempo determinado.</span> No es normal si se le indica a la persona que para recibir rendimientos debe retener el dinero o desembolsarlo en fechas específicas.</p>
      <p><span>3. Si no se dispone de un número de teléfono o dirección para contactar al responsable.</span> Las personas que se dedican a la captación ilegal de dinero acostumbran mantenerse en el anonimato, por lo que no suelen dar información para su contacto. Si no es clara la dirección física del centro de operación, no referencian un lugar público, o no ofrecen un número de teléfono, es una alarma y se debe sospechar.</p>
      <p><span>4. Si remuneran a los inversionistas por incluir a más personas en el supuesto ‘negocio’. </span> Esta es una clásica forma de captación ilegal de dinero usada en las estructuras piramidales o llamados esquemas Ponzi. No se aconseja fiar en una propuesta de negocio si como condición para la remuneración se exige la inclusión de personas que ingresen a participar. Además se suelen contradecir, este tipo de gente, al afirmar que su modelo no es un esquema piramidal.</p>
      <p><span>5. Si ofrecen rendimientos fijos por inversión.</span> Típicas promesas como: “le garantizamos el 5% de rendimiento semanal, 150% mensual, y 300% por dos meses” son sumamente sospechosas. Piense en el dicho: “cuando la limosna es grande, hasta el santo desconfía”. En un mercado tan volátil como el de las criptomonedas, asegurar ganancias sin pérdidas es para tener los ojos bien abiertos.</p>
    </seccion>
    <div className="prefooter">
    <Link to="/Criptos" className="back">Volver a Criptos</Link>
    <a href="#BTC"><img src={Arrow} alt="flecha arriba" width="45" style={{"padding": ".5rem", "margin-bottom": "-2.5rem", "filter":"invert(100%)"}}/></a>
    </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}