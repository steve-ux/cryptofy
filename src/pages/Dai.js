import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/Dai";
import Dai from "../assets/logo-dai.png";
import Arrow from "../assets/arrow-up.png";
import { Link } from "react-router-dom";

export default function DaiMain() {
 
  return (
    <>
    <div className="dashboard-containerDai">
    <Navbar/>
      <h1 className="titleCriptos" id="DAI">DAI</h1>
      <div className="containerCriptoETH">
      <img className="criptoETH2" src={Dai} alt="logo-ethereum" />
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
      <h2>La historia de DAI</h2>
      <p>La criptomoneda DAI (DAI) es un token ERC-20 (blockchain de Ethereum) que ha sido diseñado para funcionar como una <span>stablecoin o moneda estable</span> cuyo valor está anclado 1:1 con respecto al dólar estadounidense. Fue la primera en su tipo, antes de que surgieran proyectos similares. Dicha moneda es emitida de forma descentralizada gracias a la colaterización de garantías que sirven para garantizar su emisión en todo momento. </p>
      <p>Es decir, <span>1 DAI = 1 $ USD</span>, y gracias a esto, DAI se ha convertido en uno de los proyectos de mayor relevancia en el mundo cripto, y muy en en especial, del mundo de las finanzas descentralizadas (DeFi).</p>
      <p>La moneda y todo el protocolo que sustenta su funcionamiento, fue diseñado por <a href="https://makerdao.com/es/" taget="_blank" rel="noreferrer">MakerDAO</a>, uno de los proyectos con más trayectoria en el ecosistema. De hecho, MakerDAO es un proyecto que ha demostrado una transparencia, calidad técnica y económica sin igual. Todo esto ha hecho que se convierta en la moneda estable, o stablecoin, que no necesita aportar un colateral en dinero fíat (o dinero billete), haciendo que este sea una de los tokens preferidos del mundo DeFi.</p>
      <h3>El origen de DAI</h3>
      <p>Los orígenes de DAI comienzan con la creación de MakerDAO en 2014. Desde ese entonces, el proyecto apuntaba a la creación de una DAO con el fin de sostener una moneda estable dentro de Ethereum. La idea era algo totalmente nueva, nunca se había construido algo como esto y sus desarrolladores se dieron el tiempo suficiente para diseñar una propuesta clara de cómo hacerlo sin fallar.</p>
      <p>Todo ese análisis previo hizo que en diciembre de 2017 todo ese esfuerzo viera la luz con la creación y puesta en marcha de la <span>primera versión de DAI</span> (conocida ahora como SAI). Con ello, se convertía en la primera estructura de una stablecoin altamente descentralizada. Su control era regido por smart contracts o contratos inteligentes y no por fíat en una cuenta de banco. Además, todas sus variables eran decididas por una DAO, en la cual podían participar los tenedores de tokens Maker (MKR).</p>
      <p>El nacimiento de DAI dio un impulso enorme al ecosistema DeFi, el cual apenas llevaba algunos meses de nacimiento y era la demostración de que algo grande estaba por venir.  Desde entonces, este ha sido uno de los proyectos de stablecoin más llamativos del criptomundo. Su <span>transparencia</span>, su amplia <span>aceptación</span> y la enorme <span>flexibilidad</span> de su funcionamiento, lo han convertido en un modelo de desarrollo dentro del mundo cripto.</p>
      <h3>Objetivos de DAI</h3>
      <p>Podemos decir que el principal objetivo fue el de crear un medio seguro para almacenar valor. Como bien sabemos, monedas como BTC y ETH, sufren de una marcada <span>volatilidad</span> dado el periodo de crecimiento del sector en el que nos encontramos. Esta volatilidad no es problema en sistemas económicos que buscan generar ganancias aprovechándose de esta característica. Pero en casos de uso como plataformas de préstamos, de ahorro o envíos de dinero, esta volatilidad es contraproducente y hasta indeseada.</p>
      <p>Ante esta situación DAI plantea una solución. Gracias a un sistema de garantía colateral, es posible generar DAI con un <span>valor 1:1</span> con respecto al dólar usando criptomonedas altamente volátiles. De esta forma, las monedas generadas se puede utilizar para realizar operaciones de valor fijo y estable en otras plataformas, con la seguridad de que dichas monedas están garantizadas por un depósito.</p>
      <p>Así, sin importar si el valor de las criptomonedas sube o baja, el valor generado siempre será el mismo, y en el peor de los casos, hay garantías para evitar la pérdida de valor.</p>
      <h3>Venciendo la inflación</h3>
      <p>Desde su creación, las criptomonedas han tenido diferentes aplicaciones, y su tecnología detrás (la blockchain) llegó para quedarse. Bajo este contexto, los latinoamericanos captaron la importancia de la criptomoneda en una etapa temprana. Muchas personas, actualmente utilizan a DAI, la cual tiene muchos usos gracias a su versatilidad, pero destaca su capacidad de proteger los ahorros y <span>combatir la inflación.</span></p>
      <p>Para los latinoamericanos, la verdadera moneda de refugio es el dólar estadounidense. Sin embargo, no siempre es fácil comprar, aquí es donde entra en juego DAI. En los últimos años, esta cripto y otras <span>"cripto-dólares"</span> (USDC, TUSD, BUSD, USDP, etc) que carecen de la volatilidad del Bitcoin han estado ganando terreno en América Latina, especialmente en Brasil, Colombia, Venezuela y Argentina.</p>
      <p>El impulso de Dai se estaba acumulando constantemente en Argentina antes de la pandemia del coronavirus, que envió a la economía y a la moneda a una caída libre. A principios de 2020, solo un exchange en la región ofrecía Dai; hoy hay al menos seis. Dai ha ganado una tracción increíble, lo cual es un logro notable, dado que apenas se conocía en el país hace dos años.</p>
      <p>Especialmente en Argentina, donde a mediados de agosto, la tasa de inflación de 12 meses en el país era superior al 40%. Dai se ha convertido en un depósito de valor popular, al menos para las personas. Dai todavía no se usa mucho para las compras diarias, como los comestibles porque aún falta más adopcion. Pero las personas están almacenando sus <span>ahorros en Dai</span> y luego están convirtiendo su Dai a su moneda local cuando lo necesitan.</p>
      <p>Dai puede comprarse en varios exchanges (Binance, Ripio, Buenbit, Bitso), sin límite de compra o generarse a partir de varias formas de garantía criptográfica por cualquier persona, y luego guardarse o transferirse fácilmente a cualquier parte del mundo.</p>
      <p>Por su naturaleza descentralizada, es <span>resistente a la censura</span> ya que ninguna entidad tiene control total sobre la red. Esta cualidad es muy valorada por quienes deben mandar remesas a otros países, o estructurar pagos diferidos.</p>
      <p>En esencia, las Dai están respaldadas en ETH y así obtienen una estabilidad que el resto de otros cripto activos no tiene. Es así como Dai no pierde valor y resiste mejor la fluctuación severa del mercado.</p>
    </seccion>
    <div className="prefooter">
    <Link to="/Criptos" className="back">Volver a Criptos</Link>
    <a href="#DAI"><img src={Arrow} alt="flecha arriba" width="45" style={{"padding": ".5rem", "margin-bottom": "-2.5rem", "filter":"invert(100%)"}}/></a>
    </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}