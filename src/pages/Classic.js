import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/Classic";
import Classic from "../assets/logo-ethereum-classic.png";
import Arrow from "../assets/arrow-up.png";
import { Link } from "react-router-dom";

export default function ClassicMain() {
 
  return (
    <>
    <div className="dashboard-containerClassic">
    <Navbar/>
      <h1 className="titleCriptos" id="ETC">ETHEREUM CLASSIC</h1>
      <div className="containerCriptoETH">
      <img className="criptoETH2" src={Classic} alt="logo-ethereum" />
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
      <h2>La historia de <a href="https://ethereumclassic.org/" target="_blank" rel="noreferrer">Ethereum Classic</a></h2>
      <p>La criptomoneda Ethereum Classic es un proyecto bastante diferente que no es una copia de otra criptomoneda o un proyecto desarrollado de nuevo. ETC nace después de un evento conflictivo en la blockchain de Ethereum que generó un gran robo de fondos y una agria discusión.</p>
      <p>Es una criptomoneda de código abierta, descentralizada y con capacidad de ejecutar Smart Contracts. La blockchain Ethereum Classic (ETC) tiene su origen en 2016, concretamente nace tras un hackeo en la, actualmente, blockchain de Ethereum (ETH).</p>
      <p>Su principio más fuerte es que <span>el código es la ley</span>, los smart contracts son aplicaciones autónomas autoejecutables, capaces de funcionar por sí solas y según lo programado.</p>
      <p>Antes de Ethereum Classic, las nuevas criptomonedas que se lanzaban o eran una pequeña modificación de Bitcoin o una solución nueva. Ethereum Classic no cumple ninguna de estas dos premisas. Se crea tras que un grupo de usuarios no aceptaran la decisión de la reversión del hackeo sufrido por un smart contract en Ethereum.</p>
      <h3>El origen de Ethereum Classic</h3>
      <p>Para conocer el origen de Ethereum Classic, debemos hablar antes de Ethereum y otros conceptos que pueden resultar nuevos para muchos. Y es que hubo un tiempo en que ETC y ETH fueron exactamente lo mismo, hasta el problema de The <span>Dao</span> o una <span>Organización Autónoma Descentralizada</span>, por sus siglas en inglés.</p>
      <p>Imagínenos una máquina expendedora que no sólo, al insertar dinero, nos da un bocadillo a cambio, sino que también utiliza ese dinero para reordenar automáticamente los productos dentro. Esta máquina también ordena servicios de limpieza y paga el alquiler por sí misma. Además, a medida que invertimos dinero en esa máquina, tanto nosotros como otros usuarios tienen <span>voz y voto</span> en cuanto a qué bocadillos ordenará y con qué frecuencia deberá limpiarse. No tiene administradores, todos esos procesos fueron preescritos en un código. Así es, a grandes rasgos, como funciona una DAO.</p>
      <p>El whitepaper o libro blanco de Ethereum fue presentado a finales de 2013 por un joven y desconocido, en ese momento, Vitalik Buterin. Inicialmente quería que Bitcoin cambiara para soportar Smart Contracts y que tuviera un lenguaje de programación que permitiera crear Dapss (aplicaciones descentralizadas). La comunidad de Bitcoin no aceptó esta propuesta y decidió, sobre esta idea, desarrollar su propio proyecto.</p>
      <p>Nace Ethereum a principios de 2014, cuando Buterin conoce a <span>Charles Hoskinson y Gavin Wood.</span> Ambos ayudan a desarrollar Ethereum, aunque posteriormente dejarían el proyecto para empezar los suyos propios.</p>
      <p>Inicia el funcionamiento de Ethereum en julio de 2015. Poco menos de un año después llega el primer gran problema: The DAO. The DAO era un proyecto de cooperativa descentralizada que buscaba crear una plataforma de financiación colectiva. Este proyecto se basaba en un Smart Contract, el cual tenía un error crítico en el propio código. Un hacker o grupo de hackers detectaron el fallo y lograron sustraer prácticamente la totalidad de los fondos.</p>
      <h3>Violación del principio de no censura</h3>
      <p>Que el Smart Contract de The DAO tuviera un fallo crítico, supuso varios problemas en Ethereum. El primer problema estaba en que se habían <span>robado 12.7 millones de ether</span>, que por aquel entonces tenían un valor de 150 millones de dólares, afectando a 11.000 usuarios.</p>
      <p>El segundo problema era: ¿qué hacemos ahora? La única vía existente era que se habían robado los fondos y mala suerte. Este es el principio que rige en todas las criptomonedas del mercado, el robo se ha dado y no hay reembolso posible. Pero aquí se saltaron el principio de básico de las criptomonedas: lo que ha pasado, ha pasado y no hay marcha atrás.</p>
      <p>Tras mucho debate se decidió que se votara que hacer, si eliminar las transacciones fraudulentas o que todo siguiera. De los 82.054.716 ether existentes (por cada ether = 1 voto), solo 4.542.416 votaron, lo cual supuso el 5.5% de la red. Los 577.899 ether restantes se opusieron a esta actualización.</p>
      <p>Así que este es el origen de la aparición de Ethereum Classic. Dentro de la blockchain ETC el suceso de The DAO no se ha revertido.</p>
      <h3>Un hack ingenioso</h3>
      <p>Imagina que vas al cajero a sacar dinero, como has hecho tantas veces. Tienes 10.000 pesos de saldo y decides retirar 1.000 para realizar una compra cualquiera. En vez de terminar, le dices al cajero que quieres seguir realizando otras operaciones y consultas el saldo.</p>
      <p>Pese tener 1.000 en tu mano, el cajero te muestra en pantalla que sigues teniendo $ 10.000. Repites la operación para ver si ha sido una simple casualidad o no se ha refrescado el saldo. Vuelves a mirar el saldo y sigue apareciendo el saldo inicial.</p>
      <p>Así que sin retirar la tarjeta, porque se rompería la magia, sigues sacando 1.000 hasta que el cajero se queda vacío. Tú sigues teniendo $ 10.000 en tu cuenta, pero has sacado, pongamos, que $ 30.000.</p>
      <p>The DAO tenía una vulnerabilidad en el smart contract que precisamente permitía esta acción. Engañaba al smart contrat para la retirada de los fondos por encima de la asignación sobre la que tenía derecho.</p>
      <h3>El código es ley</h3>
      <p>Uno de los principios por los que se desarrolló Ethereum Classic es el concepto de <span>The code is law</span> o <span>«el código es ley»</span>. Esto quiere decir que lo que sucede, ha sucedido y no hay vuelta atrás. Da igual si es por un problema en el código, un error por parte de los usuarios o cualquier otro incidente. Por esto mismo muchos se opusieron que se borrara The DAO y se restauraran los fondos.</p>
      <h3>¿Cómo funciona ETC?</h3>
      <p>Tanto Ethereum y Bitcoin se basan en el consenso de <span>prueba de trabajo</span> (los tradicionales mineros criptos), al igual que en Ethereum Classic. Mientras que Ethereum tiene previsto pasar al consenso de prueba de participación (eliminar a los mineros), ETC no tiene previsto el cambio. Destacar que los desarrolladores de ETC trabajan de manera constante en mejoras.</p>
      <p>Desde marzo de 2021 la cantidad de ETC liberados por bloque es de 3.2 ETC (recompensa que recibe el minero), ajustando a la baja para reducir la inflación. Podemos realizar minería de ETC con los mismos sistemas que ETH.</p>
      <p>Esta criptomoneda tiene un suministro limitado a 210.7 millones de ETC. Actualmente en circulación hay algo más de 130 millones de ETC en la red. Posteriormente, cuando se llegue al bloque 15 millones generados en ETC, se dará otro <span>halving</span> (reducir la recompensa de los mineros). En este caso por cada bloque minado se pasará a obtener 2.56 ETC, algo que se daría en abril de 2022.</p>
      <p>ETC puede conseguirse fácilmente en el exchange Binance.</p>
    </seccion>
    <div className="prefooter">
    <Link to="/Criptos" className="back">Volver a Criptos</Link>
    <a href="#ETC"><img src={Arrow} alt="flecha arriba" width="45" style={{"padding": ".5rem", "margin-bottom": "-2.5rem", "filter":"invert(100%)"}}/></a>
    </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}