import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/Litecoin";
import Litecoin from "../assets/logo-ltc.png";
import Arrow from "../assets/arrow-up.png";
import { Link } from "react-router-dom";

export default function LitecoinMain() {
 
  return (
    <>
    <div className="dashboard-containerLTC">
    <Navbar/>
      <h1 className="titleCriptos" id="LTC">LITECOIN</h1>
      <div className="containerCriptoETH">
      <img className="criptoLTC" src={Litecoin} alt="logo-litecoin" />
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
      <h2>La historia de <a href="https://litecoin.org/" target="_blank" rel="noreferrer">Litecoin</a></h2>
      <p>Litecoin es una de las criptomonedas más antiguas en existencia siendo lanzada en octubre de 2011. Fue desarrollada por <span>Charlie Lee</span>, quien continúa involucrado con la criptomoneda hasta el día de hoy. Lee dejó su trabajo en Google para dedicarse íntegramente al desarrollo de su cripto y para conseguir sus objetivos se asoció con <span>Xinxi Wang y Franklyn Richards</span>.</p>
      <p>Litecoin es una bifurcación o <span>“fork”</span> de Bitcoin por lo tanto comparte muchas de sus características pero se beneficia de un tiempo de generación de bloques más corta que rodea los 2,5 minutos, permitiendo que las transacciones se aprueben más rápido. LTC, como se conoce su abreviatura, es una red de pago global de código abierto que está completamente descentralizada sin ninguna autoridad central. Las matemáticas aseguran la red y permiten a las personas controlar sus propias finanzas.</p>
      <p>Litecoin también tiene comisiones de transacción más bajas que Bitcoin y puede ser usada como una moneda digital en la web para pagar productos y servicios o para jugar en cripto casinos. El valor de Litecoin ha aumentado significativamente, manteniéndose dentro de las 10 criptomonedas con <span>mayor capitalización de mercado</span>.</p>
      <p>Parte de la popularidad de Litecoin que empezó durante el 2017 se atribuye a la adopción de un número de nuevas características como <span>Segregated Witness</span> (Segwit) y a la <span>Lightning Network</span>, tecnología que aporta a la escalabilidad de la criptomoneda.</p>
      <p>Con un importante apoyo de la industria, volumen comercial y liquidez, Litecoin es un medio de comercio comprobado que complementa a Bitcoin.</p>
      <h3>¿Qué es Litecoin?</h3>
      <p>Litecoin se definía así mismo como un <span>clon de Bitcoin</span> creado directamente a partir de su código fuente. Además declaraba que se habían efectuado ciertas mejoras y se modificaron algunas de las variables para la nueva red y criptomoneda. Así el bloque génesis de esta criptomoneda se creó el 13 de octubre de 2011, ese día oficialmente empezó a funcionar esta nueva criptomoneda.</p>
      <p> El lanzamiento de su primera versión iba acompañado del siguiente mensaje:</p>
      <p style={{"font-style": "italic", "color": "white"}}>"Queremos crear una moneda similar a Bitcoin, una moneda que sea la plata del oro del Bitcoin. Varias monedas alternativas vinieron y ya se han marchado, algunas trajeron innovación pero todas tuvieron problemas. Por eso queremos las mejores características que ofrecen tanto Bitcoin como estas otras monedas y crear una moneda con todos los beneficios de ellas pero sin apenas ninguno de sus problemas."</p>
      <p>Lee, Wang y Richards pretenden solventar las carencias que Bitcoin tenía según ellos:</p>
      <span><li>Fallo en la recepción de algunas transacciones.</li>
      <li>Alto coste de hardware y energía para el minado.</li>
      <li>Altas comisiones para transacciones.</li>
      <li>Escalabilidad.</li></span>
      <p>El éxito del proyecto llevó a que dos años después, en noviembre de 2013, alcanzará una capitalización de mercado de 1.000 millones de dólares USD.</p>
      <h3>Características de LTC</h3>
      <p>Es <span>deflacionaria</span>, dispone de un límite de <span>84 millones de monedas disponibles</span>, lo que le da mayor poder adquisitivo con el tiempo, pudiendose adquirir más bienes y servicios por un menor coste. Su mecanismo de consenso se basa en la <span>prueba de trabajo (PoW)</span>, por lo que necesita de mineros, y la función hash que utiliza es <span>Scrypt</span>. Este algoritmo resulta bastante más ligero que <span>SHA-256</span> (el de bitcoin) pero sin dejar de lado la seguridad. Siendo desarrollo de código abierto para toda la comunidad.</p>
      <p>Litecoin es una criptomoneda cuya generación de bloques toma dos minutos y medio, por lo tanto la red Litecoin es <span>cuatro veces más rápida</span> que Bitcoin. Además el peso medio de los bloques es de 65KB, por lo tanto su blockchain es muy <span>ligera</span>.</p>
      <p>Al igual que Bitcoin, Litecoin recurre al halving para controlar su emisión y la recompensa de bloque para los mineros. A diferencia de Bitcoin, en LTC <span>el halving sucede cada 840.000 bloques</span> (en Bitcoin cada 210.000). El último halving en Litecoin sucedió el 5 de agosto de 2019. El evento llevó las recompensas de bloques de 25 LTC a 12,5 y el próximo halving será el 6 de agosto de 2023.</p>
      <p>Igual que todas las criptomonedas actuales, Litecoin sufre en cuanto a la validación de las transacciones, un reto que debe afrontar para poder competir a un alto nivel. Bitcoin permite verificar 7 transacciones por segundo, Ethereum permite validar 15 transacciones por segundo, VISA permite validar una 56.000 transacciones por segundo mientras que Litecoin, solo soporta validar <span>56 transacciones por segundo</span>. Estadísticamente es más fuerte que Bitcoin y otras criptomonedas, como Ethereum.</p>
      <p>Debido a que todas las criptomonedas están en una fase muy primaria, se trabaja en mejorar la <span>escalabilidad</span>. El objetivo es rivalizar y superar a otras soluciones de pago, como es el caso de VISA, que por su número de transacciones por segundo, es infinitamente superior a lo que admite cualquier blockchain actualmente. Este es un problema que se está afrontando y que se solucionará de forma definitiva en los próximos años. Aunque en la actualidad ya podemos usar opciones como <span>Lightning Network</span> que permite hacer transacciones de forma instantánea y ser la solución buscada.</p>
      <h3>Minería</h3>
      <p>Al igual que Bitcoin, Litecoin hace uso del sistema Proof of Work o prueba de trabajo, pero se diferencia en el hardware necesario para el minado de esta criptomoneda. En un principio, debido a la poca competencia inicial en Bitcoin era posible minar bloques usando el poder de los <span>CPU</span> de nuestros computadores personales. Pero a medida que el precio de Bitcoin subía, también lo hizo la competencia por conseguir minar un bloque. De este modo, pasó a utilizarse hardware más potente, como las GPU, e incluso se desarrolló hardware a medida: los <span>ASIC</span>.</p>
      <p>Litecoin de momento se puede minar con procesador (CPU) y con tarjeta gráfica <span>(GPU)</span>, aunque también existen ASIC específicos para esta criptomoneda. La dificultad, que se basa en la potencia de la red, aún no es muy elevada y se puede obtener una cantidad de token relativamente decente como recompensa.</p>
      <p><span>Buda, Bitso, Ripio o Binance</span> son algunos de los exchanges que disponen de esta cripto en su catálogo para acceder a comprarla en simples pasos.</p>
    </seccion>
    <div className="prefooter">
    <Link to="/Criptos" className="back">Volver a Criptos</Link>
    <a href="#LTC"><img src={Arrow} alt="flecha arriba" width="45" style={{"padding": ".5rem", "margin-bottom": "-2.5rem"}}/></a>
    </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}
