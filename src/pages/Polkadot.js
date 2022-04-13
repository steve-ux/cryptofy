import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/Polkadot";
import Polkadot from "../assets/logo-dot.png";
import Arrow from "../assets/arrow-up.png";
import { Link } from "react-router-dom";

export default function PolkadotMain() {
 
  return (
    <>
    <div className="dashboard-containerDOT">
    <Navbar/>
      <h1 className="titleCriptos" id="DOT">POLKADOT</h1>
      <div className="containerCriptoETH">
      <img className="criptoDOT" src={Polkadot} alt="logo-polkadot" />
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
      <h2>La historia de <a href="https://polkadot.network/es/" target="_blank" rel="noreferrer">Polkadot</a></h2>
      <p>El origen de este proyecto nos lleva a conocer a una de las principales figuras del mundo cripto, <span>Gavin Wood</span>. Wood es un conocido desarrollador de tecnología blockchain que formó parte del equipo de desarrollo de Ethereum. De hecho, Wood tuvo el cargo de desarrollador principal de Ethereum, estando al mismo nivel que Vitalik Buterin. Una situación que denota su conocimiento y trabajo dentro de este proyecto.</p>
      <p>Es gracias al trabajo de Wood, que Ethereum cuenta con el poderoso lenguaje de programación <span>Solidity</span>, el cual fue creado por su persona. Sin embargo, el 11 de enero 2016, Wood decidió que era momento de partir y comenzar su propio proyecto, abandonando el proyecto Ethereum.</p>
      <p>En ese momento, la idea de Wood era comenzar un proyecto blockchain capaz de superar las debilidades de Ethereum. En especial, su escalabilidad y habilitar nuevas estructuras de funcionamiento <span>cross-chain</span> o entre cadenas. Así, para junio de 2016, Wood ya había comenzado a trabajar en este nuevo proyecto, y en octubre de 2016, presentó al mundo la primera versión del <a href="https://polkadot.network/PolkaDotPaper.pdf" target="_blank" rel="noreferrer">whitepaper</a> de Polkadot.</p>
      <p>Desde ese momento, el desarrollo de Polkadot comenzaría su camino, hasta reunir una mayor cantidad de atención sobre el mismo. Algo que, de hecho, se puede ver claramente en la actualidad. Y es que, Polkadot es uno de los proyectos blockchain de mayor crecimiento durante 2020 y 2021.</p>
      <p>Este nuevo proyecto de tecnología blockchain busca destronar a Ethereum con una red mucho más escalable y eficiente. A la vez que brinda la posibilidad de interconectar distintas blockchain y convertirse en un <span>hub</span> de desarrollo cross-chain sin paralelo.</p>
      <h3>Financiación del proyecto</h3>
      <p>Gavin Wood, comenzó este proyecto contando inicialmente con el apoyo económico de su empresa <span>Parity</span> y la <span>Web3 Foundation</span>, que también ayudó a crear. Si bien, Parity y Web3 Foundation son referentes dentro del mundo Ethereum, su participación en la financiación de Polkadot es vital.</p>
      <p>Sin embargo, los recursos de ambas empresas eran limitados debido a que estaban centradas en Ethereum. Esto llevó a la realización de una <span>Oferta Inicial de Monedas (ICO)</span> que se realizó desde el 15 hasta el 27 de octubre de 2017. El éxito de la ICO fue extraordinario, logrando recaudar 143 millones de dólares para el desarrollo de este proyecto.</p>
      <p>Sin embargo, poco tiempo después, este éxito se vería puesto en grave riesgo. Un <span>hackeo</span> haría que Parity perdiera más de 90 millones de dólares dentro de la red de Ethereum. Con sus ingresos severamente disminuidos, se replanteo la ruta de trabajo y Gavin Wood dejó en claro que el trabajo de Polkadot seguiría. Esto gracias a que había dinero suficiente para que el proyecto tuviera éxito y se respetarán las condiciones de la ICO.</p>
      <h3>Polkadot, una propuesta distinta</h3>
      <p>Polkadot comenzó su camino en la mente de Gavin Wood como una red capaz de ofrecer las mismas capacidades de Ethereum, superando al mismo tiempo sus debilidades, y ofreciendo una serie de características únicas. Para lograr esto, Polkadot ideó desde sus bases toda una nueva serie de tecnología y protocolos de consenso pensados para tal fin.</p>
      <p>En primer lugar, Polkadot se diseñó teniendo en mente un funcionamiento de redes heterogéneas, que podían interconectarse. De esta forma, Polkadot podría cumplir con dos funciones bien definidas:</p>
      <p><span>1. Como una cadena de transmisión y procesamiento de datos.</span> Una funcionalidad que le permite recibir información de otras cadenas, procesar dicha información y enviarla de vuelta a la cadena de origen. Esta primera opción, permite que Polkadot se convierta en una capa de escalabilidad para cualquier otra blockchain que lo necesite.</p>
      <p><span>2. Funcionamiento independiente creando sus propias cadenas.</span> Es decir, crear cadenas con sus propias capacidades, como el caso de compatibilidad para ejecutar smart contracts o tokens. Esto permite el funcionamiento nativo de aplicaciones descentralizadas (DApps) y token sobre la red que pueden aprovechar al máximo el potencial de la red.</p>
      <p>La idea con todo esto, es que Polkadot pueda convertirse en una opción de escalabilidad para redes como Ethereum u otras criptomonedas. Además, también podría servir para interconectar distintos ecosistemas en distintas blockchain todo ello sobre una misma red. Este último caso, por ejemplo; se puede ver con el proyecto DeFi, <span>Equilibrium</span> que hace vida en el proyecto y cripto <span>EOS</span>.</p>
      <h3>Relay Chain y Parachains</h3>
      <p>Polkadot puede brindar una mejor seguridad, mejor escalabilidad mediante <span>sharding</span> y una ejecución paralela dentro de la red, lo que incrementa el rendimiento general de la misma. En este punto, es importante destacar la aplicación del sharding dentro de Polkadot. Recordemos que esta técnica informática divide la cadena principal y la red, en varias <span>subcadenas y subredes</span> adjuntas a la misma. De esta forma, cada subcadena tiene su propio historial blockchain, nodos, y toda la infraestructura necesaria para su funcionamiento.</p>
      <p> Las subcadenas en Polkadot reciben el nombre de <span>parachain</span>, las cuales pueden verse como una sidechain o cadena secundaria, donde se ejecuta una instancia blockchain propia. Es decir, una parachain tiene una blockchain o historial propio, que sostiene su propia existencia de tokens, smart contracts, y nodos. Así, esta parachain tiene su propia capacidad y poder de cálculo propio para atender sus necesidades.</p>
      <p>Por otro lado, la <span>Relay Chain</span>, es la cadena principal de Polkadot, y esta existe bajo la unión del historial de todas las parachains que se ejecutan en paralelo dentro de la red Polkadot. Esta organización hace posible que Polkadot pueda ejecutar en paralelo smart contracts, y adicionalmente, permite una escalabilidad superior a las blockchain actuales.</p>
      <p>Adicionalmente, esta funcionalidad segmentada también permite la existencia de los <span>Bridges o Puentes</span>, con los cuales las parachains pueden abrir comunicación con otras blockchain (como Ethereum, EOS, Cardano o Bitcoin) y servir de enlace con las mismas. Como las parachains pueden comunicarse entre sí, esto permite también que distintos Bridges apuntando a otras cadenas puedan comunicarse, sirviendo de canales cross-chain para realizar operaciones entre los mismos. En resumen, con Polkadot y sus Bridges, es posible interconectar Bitcoin y Ethereum (u otras blockchains) a gran velocidad, con costos altamente reducidos sin renunciar a la seguridad en ningún momento.</p>
      <p>Entender a fondo Polkadot y su funcionamiento puede resultar algo complejo, es por ello que el siguiente video viene a ilustrar ciertos conceptos:</p>
      <div className="video-container">
      <div className="videos">
      <iframe src="https://www.youtube.com/embed/Gw3kbl6qbAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <p className="epigrafe">Créditos: Bolsa para principiantes</p>
      </div>
      <h3>¿Cómo obtener DOT?</h3>
      <p>En este punto, no queda duda que Polkadot se perfila como uno de los grandes proyectos blockchain de la comunidad. Además, la aceptación y perspectiva de futuro del proyecto son gigantescas para su token DOT. Y es que este token ha pasado al <span>top 10°</span> lo que lo hace uno de los tokens más importante y con mayor capitalización de mercado de todo el criptomundo. Y eso es algo que ha logrado en poco tiempo de operación.</p>
      <p>Al estar en el top 10 de criptomonedas, es sencillo comprar esta cripto. Buenbit o Binance son algunas de las opciones.</p>
    </seccion>
    <div className="prefooter">
    <Link to="/Criptos" className="back">Volver a Criptos</Link>
    <a href="#DOT"><img src={Arrow} alt="flecha arriba" width="45" style={{"padding": ".5rem", "margin-bottom": "-2.5rem", "filter":"invert(100%)"}}/></a>
    </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}
