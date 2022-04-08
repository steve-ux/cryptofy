import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/Cardano";
import Cardano from "../assets/logo-ada.png";
import Arrow from "../assets/arrow-up.png";
import { Link } from "react-router-dom";

export default function CardanoMain() {
 
  return (
    <>
    <div className="dashboard-containerADA">
    <Navbar/>
      <h1 className="titleCriptos" id="ADA">ADA CARDANO</h1>
      <div className="containerCriptoETH">
      <img className="criptoETH2" src={Cardano} alt="logo-ada-cardano" />
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
      <h2>La historia de <a href="https://cardano.org/" target="_blank" rel="noreferrer">Cardano</a></h2>
      <p>Cardano es una cadena de bloques, como Ethereum o Bitcoin. Mientras que muchas nuevas blockchains prometen nuevas y emocionantes características, algo que es notable sobre Cardano es el hecho de que realmente no hace nada demasiado diferente a lo que hacen otras blockchains. Lo que ha generado un interés tan masivo en ella y en la moneda ADA recientemente no es tanto lo que hace, sino <span>cómo lo hace</span>.</p>
      <p>A la organización que está detrás de esta tecnología le gusta resaltar que lo que hace se basa en la investigación. Quiere que la gente se dé cuenta de la naturaleza académica de su trabajo, y emite sus informes en documentos revisados por pares, lo que, espera, les animará a hacer uso de ella ellos mismos. </p>
      <p>Cardano existe desde 2017, cuando fue fundada por <span>Charles Hoskinson</span>, que anteriormente había sido cofundador de Ethereum. Este tipo de experiencia terminaría siendo útil en su intento de crear su propia cadena de bloques. La cadena en sí está, en efecto, gestionada por tres empresas distintas:</p>
      <p><span>1. La fundación Cardano.</span> Una organización sin ánimo de lucro que supervisa la cadena de bloques.</p>
      <p><span>2. IOHK.</span> Construyó Cardano y diseñó el algoritmo con el que trabaja, Ouroboros.</p>
      <p><span>3. Emurgo.</span> Promueve la empresa entre empresas y organizaciones.</p>
      <p>Antes del lanzamiento, a principios de 2017, Cardano realizó una <span>Oferta Inicial de Monedas (ICO)</span> con la que recaudó 62,24 millones de dólares. Se pusieron en juego alrededor de 31.000 millones de ADA, de los cuales 26.000 millones se destinaron a los inversores y los 5.000 millones restantes a las personas que trabajaban en la Fundación Cardano, IOHK y Emurgo.</p>
      <p>Cardano se llama así por el matemático renacentista <span>Gerolamo Cardano</span>, y ADA se llama así por <span>Ada Lovelace</span>, que fue posiblemente la primera informática del mundo. También ha habido actualizaciones del sistema, incluyendo una llamada Byron, en honor a Lord Byron, el poeta romántico y padre de Ada Lovelace, otra llamada Shelley, en honor a Percy Bysshe Shelley, contemporáneo de Lord Byron, y otra llamada Voltaire, en honor al escritor y filósofo francés de la Ilustración.</p>
      <h3>DeFi y ADA</h3>
      <p>La idea que subyace a la cadena de bloques de Cardano está relacionada con las <span>finanzas descentralizadas</span>, o DeFi para abreviar. Su objetivo es permitir que las personas que no tienen cuentas bancarias tengan acceso a los servicios financieros, así como permitir que la gente transmita dinero por todo el mundo de forma más barata. Muchas de las transacciones en la cadena de bloques se llevan a cabo mediante contratos inteligentes, que son programas informáticos que se ejecutan por sí mismos cuando se cumplen determinadas condiciones.</p>
      <p>Toda blockchain necesita una criptomoneda, y la de Cardano se llama ADA. Esta moneda permite a las personas que la poseen votar sobre propuestas relativas a la gobernanza de la blockchain. La moneda también puede negociarse en una serie de intercambios. Las personas que poseen ADA pueden gestionar la cadena de bloques, y pueden asignar sus <span>derechos de voto</span> a cambio de más recompensas de monedas ADA.</p>
      <p>Cardano utiliza dos capas. La primera, Cardano <span>Settlement Layer (CSL)</span>, registra las transacciones y transfiere la moneda ADA, mientras que la segunda, <span>Cardano Computational Layer (CCL)</span>, emplea tecnología de contratos inteligentes que los desarrolladores pueden utilizar para mover fondos. También hay tres tipos de usuarios que pueden conectarse a la red. Se trata de los <span>nodos mCore</span>, que participan en el gobierno de la blockchain de Cardano, los <span>nodos de retransmisión</span>, que transfieren datos entre los nodos mCore y la propia Internet, y los <span>nodos edge</span>, que crean transacciones de criptodivisas.</p>
      <h3>Minado de ADA</h3>
      <p>Uno de los aspectos interesantes de ADA es cómo minar ADA. Tradicionalmente, las criptomonedas se han minado utilizando pruebas de trabajo (PoW), lo que significa que la gente tiene que resolver cálculos cada vez más complejos para acceder a ellas. Esto utiliza mucha electricidad, que es muy cara en ciertos países y, a su vez, aumenta las <span>emisiones de carbono.</span></p>
      <p>El <span>Proof-of-stake</span>, usado por ADA, por el contrario, permite a alguien minar en función del número de tokens o monedas que ya posee. Esto lo hace más fácil, más barato y más <span>eco-friendly</span>. </p>
      <p>El algoritmo utilizado para la minería ADA se llama Ouroboros, en honor a la mítica "serpiente que se come su propia cola".  Funciona dividiendo el tiempo en dos medidas, épocas y ranuras. Las épocas son periodos generales, de hasta cinco días de duración, mientras que las franjas horarias consisten en <span>bloques de 20 segundos</span> dentro de esas épocas.</p>
      <p>Cada ranura tiene un responsable, seleccionado al azar, que introduce bloques en la cadena de bloques de Cardano. Cada vez que finaliza una época, los líderes de la época anterior votan sobre quién debe ser el líder de la siguiente. Hay dos tipos de bloques utilizados en la cadena Cardano. Estos son:</p>
      <p><span>1. Bloques principales.</span> Contiene los datos de todas las transacciones, las propuestas de actualización del software y las votaciones sobre estas propuestas.</p>
      <p><span>2. Bloques génesis.</span> Estos tienen una lista de los líderes de la ranura para la época y una serie de bloques principales.</p>
      <p>Los jefes de bloque son recompensados por sus esfuerzos, obteniendo una parte de las comisiones de las transacciones que se realizan. Éstas se pagan en ADA. Sólo los nodos mCore pueden convertirse en líderes de bloque, y el pago sirve de incentivo para que la gente se conecte a los nodos mCore y participe en el trabajo de los bloques.</p>
      <p>Actualmente hay 32.130 millones de ADA en circulación, lo que representa alrededor del 71% de la oferta total de <span>45.000 millones</span>.</p>
      <p>Puedes conseguir la moneda ADA inscribiéndote para ser un mNode en la blockchain de Cardano y luego sirviendo como líder de ranura. También puedes comerciar con ella y comprarla en los exchanges. <span>Buenbit, Bitso o Ripio</span> son algunas opciones que operan esta cripto en pesos argentinos.</p>
    </seccion>
    <div className="prefooter">
    <Link to="/Criptos" className="back">Volver a Criptos</Link>
    <a href="#ADA"><img src={Arrow} alt="flecha arriba" width="45" style={{"padding": ".5rem", "margin-bottom": "-2.5rem"}}/></a>
    </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}
