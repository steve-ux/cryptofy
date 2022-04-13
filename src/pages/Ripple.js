import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/Ripple";
import Ripple from "../assets/logo-xrp.png";
import Arrow from "../assets/arrow-up.png";
import Example from "../assets/RIPPLE-IMG.jpg";
import { Link } from "react-router-dom";

export default function RippleMain() {
 
  return (
    <>
    <div className="dashboard-containerXRP">
    <Navbar/>
      <h1 className="titleCriptos" id="XRP">RIPPLE XRP</h1>
      <div className="containerCriptoETH">
      <img className="criptoXRP" src={Ripple} alt="logo-ripple" />
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
      <h2>La historia de <a href="https://ripple.com/" target="_blank" rel="noreferrer">Ripple</a></h2>
      <p>XRP es un token usado para representar la transferencia de valor a través de la Red Ripple. El propósito principal de XRP es ser un mediador en el cambio de monedas tanto para criptomonedas como para fiat. La mejor manera de describir XRP es un <span>'Joker'</span>. No el espeluznante enemigo de Batman, sino como el naipe comodín que puede ser cualquier otro naipe. Si deseas cambiar dólares por euros, puede ser dólar con dólares y euro con euros para minimizar la comisión. Y donde los <span>costos de transacción en Ripple son de $0.00001</span>, sí, es la cantidad correcta de ceros. La única razón por la que no es gratis es para prevenir ataques DDos.</p>
      <p>Después de cada transacción la cantidad de $0.00001 'desaparece' de la plataforma y no puede ser <span>repuesta</span>. Así que, con cada transacción el mundo se vuelve $0.00001 más pobre. Está diseñado para prevenir ataques de spammers.</p>
      <p>Ripple nació en 2004, al menos su proyecto base. Pero la verdadera historia comienza en 2013, cuando Jed McCaleb y Chris Larsen, invitaron a un grupo de inversores de primer nivel mundial a invertir en <span>Ripple Labs</span>.</p>
      <p>Chris Larsen es un inversor ángel, ejecutivo de negocios y un activista de la privacidad considerado como la persona más rica en criptomonedas. Es más conocido por cofundar varias empresas en el campo de los servicios financieros en línea, comenzando en 1996 con una plataforma para préstamos hipotecarios en línea, E-loan.</p>
      <p>Jed McCaleb es un conocido programador y empresario. Fue cofundador de varias empresas de criptografía, entre ellas Ripple, Stellar, eDonkey, Overnet, así como el exchange <span>Mt. Gox</span> (vendió su parte y la plataforma fue recodificada mucho antes del infame hackeo), que en su momento de mayor auge se encargaba de más del 70% de todas las transacciones de Bitcoin en todo el mundo.</p>
      <h3>Algoritmo de consenso del protocolo Ripple (Rpca)</h3>
      <p>A diferencia de Bitcoin o Ethereum, Ripple <span>no tiene una red Blockchain</span>. Una criptomoneda sin una Blockchain puede sonar bastante extraño - si no tiene una Blockchain, ¿cómo verifica las transacciones y se asegura de que todo está bien? Para ello, Ripple cuenta con su propia tecnología patentada: <span>el algoritmo de consenso del protocolo Ripple (RPCA)</span>.</p>
      <img src={Example} alt="ripple en concenso" width="250vw" style={{"float": "left", "padding": ".5rem", "border-radius": "2rem"}}/>
      <p>La palabra 'consenso' en el nombre significa que si cada nodo está de acuerdo con todos los demás, no hay ningún problema.</p>
      <p>Imaginemos, hay una antigua arena con cien ancianos sabios y una ciudad necesita el acuerdo de todos ellos para tomar una decisión. Si todo el mundo está de acuerdo, se puede empezar una guerra, poner fin a una guerra, aumentar los impuestos, proclamar los juegos olímpicos y todo tipo de cosas interesantes. Pero si uno de ellos no lo hace, no pasará nada hasta que averigüemos cuál es su problema.</p>      
      <p>El RPCA fue un protocolo diseñado por David Schwartz, Noah Youngs y Arthur Britto en 2014. La función de RPCA es ofrecer a la red RippleNet y a XRP un protocolo con una cierta capacidad de Tolerancia a <span>Fallos Bizantinos</span> (BFT, un sistema informático tolerante a faltas).</p>
      <p>Para lograr esto, RPCA funciona en una serie de rondas que pasamos a describir:</p>
      <span><li>Inicialmente, cada servidor toma todas las transacciones como válidas antes comenzar con el proceso de consenso.</li>
      <li>Seguidamente, cada servidor reúne una serie de transacciones candidatas de todos los servidores y vota sobre la veracidad de las mismas.</li>
      <li>Las transacciones que reciben más de un el porcentaje mínimo de votos de “SÍ” se transfiere al siguiente punto. Mientras que las transacciones que no reciben suficientes votos se descartan o se incluirán en el conjunto de candidatos para el comienzo del proceso de consenso en la próxima ronda.</li>
      <li>La ronda de consenso requiere un porcentaje mínimo del 80% del acuerdo de los servidores sobre una transacción. Todas las transacciones que cumplen con este requisito se aplican al libro mayor.</li></span>
      <h3>¿Qué es RippleNet?</h3>
      <p>RippleNet es una red de proveedores de pagos institucionales como bancos y empresas de servicios monetarios que utilizan soluciones desarrolladas por Ripple para proporcionar una experiencia sin complicaciones para <span>enviar dinero a nivel mundial</span>.</p>
      <p>Demos un ejemplo: Primero, el Sr. Jones vive en Nueva York y tiene una caja de chocolate que no necesita. Está muy interesado en ver un partido de béisbol, pero no tiene boleto. En segundo lugar, la Sra. Smith vive en Los Ángeles y tiene un artículo coleccionable raro que le gustaría regalar por una caja de chocolate. Por último, tenemos al Sr. Brown, que vive en Alaska y busca mucho un raro artículo coleccionable, y el tiene un boleto para un partido de béisbol en Nueva York.</p>
      <p>En nuestro sistema actual, estas personas probablemente nunca se encontrarían y permanecerían con sus objetos de valor <span>"no valiosos"</span>.</p>
      <p>Además, la plataforma permite realizar pagos en cualquier divisa incluyendo Bitcoin y tener una comisión mínima de transacción interna.</p>
      <p>Pero en el mundo Ripple podrían decir: <span>"Hey, tengo chocolate, quiero béisbol"</span> y el sistema buscará la combinación más corta y barata para hacerlo posible.</p>
      <h3>Usos de Ripple</h3>
      <p>RippleLabs ha realizado alianzas con varios de los principales bancos más importantes a nivel mundial. Entre ellos se encuentran <span>BBVA, Santander, Axis Bank, Yes Bank, Westpac, Union Credit, NBAD, UBS e Itaú</span>. También podemos reseñar la asociación que posee con el Banco Federal de la India, que es uno de los más grandes de este país asiático, y también un importante centro financiero. Todos estos bancos han decidido emplear la tecnología de Ripple para efectuar pagos transfronterizos. Donde pueden relacionar al mercado de remesas que manejan.</p>
      <p>Otra alianza importante de Ripple es con el <span>Grupo Financiero SBI de Japón</span>, con el cual ha implementado una aplicación de pagos denominada MoneyTap. La cual ya se encuentra autorizada por los reguladores financieros japoneses para su uso. De la misma forma, la red de bancos de <span>Reisebank</span> de Alemania, inició pruebas a la aplicación de la red RippleNet. Con la que se pueden efectuar transferencias entre los bancos de la propia red y otros ubicados en el extranjero. Dichas pruebas han generado un grado de aceptación bastante razonable, ya que permiten realizar las transferencias en un tiempo promedio bastante corto (4 segundos aproximadamente).</p>
      <p>Por otra parte, la criptomoneda XRP es la única, por ahora, compatible dentro de la red de pagos universal Corda Settler, desarrollada por la empresa R3. A su vez, esta red es la misma que está siendo explorada por la empresa <span>SWIFT</span>, el mismo sistema que utilizan los bancos actualmente para realizar envíos transfronterizos.</p>
      <p>Entonces, podemos darnos cuenta de la aceptación en el mercado financiero que ha tenido esta criptomoneda y sus múltiples aplicaciones.</p>
      <h3>¿Es buena inversión XRP?</h3>
      <p>Descargo de responsabilidad: no existe tal cosa como una inversión 100% segura, y cada decisión tiene sus riesgos. En cualquier caso, eres tu quien debe decidir. Sin embargo, a continuación, se presentan algunas <span>ventajas y desventajas</span> que pueden ayudarte.</p>
      <p><span>Pros:</span></p>
      <p><span>1.</span> Como se ha destacado anteriormente, Ripple es una organización oficial con la confianza de muchos bancos - no se trata de una nueva red Blockchain de una empresa desconocida.</p>
      <p><span>2.</span> Sin inflación. Todas las monedas XRP se extrajeron en un principio y ya existen.</p>
      <p><span>3.</span> Cuantos más bancos lo utilicen como plataforma de transacciones, mayor será el valor del XRP. Si un día, todos los bancos deciden empezar a utilizarlo como una moneda bancaria unificada en lugar de procesar los cambios en divisas FIAT, hará una buena fortuna para todos los que invirtieron en Ripple tempranamente.</p>
      <p><span>Contras:</span></p>
      <p><span>1.</span> Está muy centralizado. La idea de las criptomonedas es evitar el control centralizado. Como cada moneda de XRP ya está minada, los desarrolladores de Ripple pueden decidir cuándo y cuánto liberar, o no liberar. Por lo tanto, es básicamente como invertir en un banco.</p>
      <p><span>2.</span> Además de la centralización, hoy en día es casi como un monopolio ya que Ripple Labs posee el 61 por ciento de las monedas.</p>
      <p><span>3.</span> Es código abierto - una decisión muy inteligente, pero una vez que el código es accesible para todos hay una buena posibilidad de que mucha gente intente piratearlo. Algunos de ellos incluso podrían tener éxito.</p>
      <p>Ripple, al ser una de las primeras criptos que surgieron en el boom inicial, hoy en día puede conseguirse casi en cualquier exchange de renombre.</p>
    </seccion>
    <div className="prefooter">
    <Link to="/Criptos" className="back">VOLVER A CRIPTOS</Link>
    <a href="#XRP"><img src={Arrow} alt="flecha arriba" width="45" style={{"padding": ".5rem", "margin-bottom": "-2.5rem", "filter":"invert(100%)"}}/></a>
    </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}
