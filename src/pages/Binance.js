import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/Binance";
import Binance from "../assets/logo-binance.png";
import Arrow from "../assets/arrow-up.png";
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
      <p>La historia de Binance Coin (BNB) se remonta a 2017, momento en que la empresa optó por una ICO para recaudar fondos con los que financiar su desarrollo. Siendo precisos, esta campaña abarcó desde el 26 de junio hasta el 3 de julio con la venta de 100 millones de tokens, equivalente al 50% del suministro total. El precio era de 1 ETH por 2.700 BNB o 1 BTC por 20.000 BNB, en torno a los <span>11 centavos de dólar</span> en ese momento.</p>
      <p>En un principio, se trataba de un token estándar ERC-20, es decir, operaba desplegado en la red blockchain de Ethereum. Sin embargo, entre los planes de la plataforma se barajaba contar con su propio blockchain, la <span>Binance Chain</span>, y así fue.</p>
      <p>La plataforma Binance fue lanzada al público en el momento ideal, es decir, durante el boom de las criptomonedas en verano de 2017, fiebre que continuaría hasta finales de ese mismo año. En ese momento, la demanda de activos digitales por parte de los usuarios era enorme y las plataformas dedicadas a la negociación de criptomonedas no daban abasto con la llegada de nuevos clientes.</p>
      <p>Los inversores se percataron rápidamente de que Binance era una plataforma muy cómoda, intuitiva, visualmente agradable, fácil de usar y con unas comisiones por transacción muy bajas, un 0.1%. Adicionalmente, poseer tokens BNB reducía aún más los costes por transacción, lo que impulsó a la empresa a los primeros puestos, desbancando a sus competidores.</p>
      <h3>Usos de BNB</h3>
      <p>El token salió al mercado el 25 de julio de 2017 a unos 11 centavos de dólar, y ya se negociaba por encima de un dólar desde el 14 de agosto, superando los 10$ el 27 de diciembre de 2017. Por lo tanto, el valor unitario de cada token BNB se multiplicó por 100 en apenas 5 meses. Dos semanas después, alcanzó un máximo de casi 25$ USD, el 12 de enero de 2018.</p>
      <p>Durante los meses siguientes el precio del token se mantuvo estable, hasta alcanzar posteriormente un máximo de casi 40$ el 28 de junio de 2019, superando finalmente los 50$ el 2 de febrero de 2021 y los 100$ el 9 de febrero.</p>
      <p>El token BNB otorga una gran ventaja con comisiones reducidas al operar en Binance. Esto es probablemente lo que permitió que dicha moneda ganara popularidad rápidamente y se revalorizara de tal manera. Un descuento en comisiones que se reduce anualmente a la mitad.</p>
      <p>BNB es el motor del Ecosistema Binance y la moneda nativa de Binance Chain y Binance Smart Chain. BNB presenta diversos casos de uso:</p>
      <span><li>Medio de pago de las comisiones de trading en el exchange de Binance</li>
      <li>Medio de pago de las comisiones de trading en Binance DEX (Exchange Descentralizado)</li>
      <li>Medio de pago de las comisiones por transacción en Binance Chain</li>
      <li>Medio de pago para compras de bienes y servicios tanto en internet como en tiendas (por ejemplo, utilizando Binance Card o Binance Pay)</li>
      <li>Reservas de hoteles, vuelos y muchas cosas más en Travala.com</li>
      <li>Utility token comunitario del ecosistema Binance Smart Chain (como por ejemplo juegos y DApps)</li>
      <li>Participación en ventas de tokens llevadas a cabo en Binance Launchpad</li>
      <li>Realizar donativos en Binance Charity</li>
      <li>Aportar liquidez en Binance Liquid Swap</li></span>
      <p>Hasta principios de 2021, Binance DEX no fue acogido masivamente por la comunidad entusiasta de las criptomonedas, ya que algunos usuarios se mostraban reticentes a la naturaleza excesivamente centralizada de esta plataforma. Sin embargo, dado el astronómico incremento de las comisiones por transacción en la red Ethereum durante 2021, la plataforma descentralizada de Binance está comenzando a ganar popularidad y esto se ha notado en el precio del token de BNB, que se ha disparado a lo largo del pasado año 2021.</p>
      <h3>Quema de tokens</h3>
      <p>Binance se ha comprometido a asignar un 25% de sus beneficios para recomprar tokens BNB a precio de mercado trimestralmente y quemarlos, es decir, destruirlos para reducir el suministro total disponible. Como resultado, aumenta la escasez de dicha moneda, lo cual redunda en un repunte de su precio.</p>
      <p>La plataforma se compromete a <span>quemar tokens</span> hasta que el suministro total alcance los 100 millones de tokens, es decir, la mitad del suministro máximo inicial. Hacia principios de 2021, la plataforma había quemado en torno al 30% de los tokens, de modo que aún quedan bastantes tokens por eliminar del suministro.</p>
      <p>Pese al poco tiempo que ha transcurrido desde que Binance se lanzó al público, ya cuenta con un pasado bastante rico, y en la actualidad, es indiscutiblemente es una de las mejores plataformas para negociar con criptomonedas. De hecho, ha logrado tal hegemonía gracias a la utilidad brindada por su token BNB y a la excelente gestión de la empresa.</p>
      <p>En vista del desarrollo de la industria de las criptomonedas y la creciente popularidad de Binance, podemos estar seguros de que el historial de la plataforma seguirá incluyendo nuevos hitos en el futuro, y que el equipo directivo seguirá innovando para ofrecer a sus clientes nuevas funciones relacionadas con criptomonedas.</p>
    </seccion>
    <div className="prefooter">
    <Link to="/Criptos" className="back">Volver a Criptos</Link>
    <a href="#BNB"><img src={Arrow} alt="flecha arriba" width="45" style={{"padding": ".5rem", "margin-bottom": "-2.5rem", "filter":"invert(100%)"}}/></a>
    </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}
